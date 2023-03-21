import fs from "fs";
import TYPES from "./qboTypes.js";

//special treatment
const LineDetailTypeEnum = {};
const SYSTEM_DEFINED_FIELDS = [
  [
    "sparse",
    {
      type: "Boolean",
    },
  ],
];

const MAIN_TYPES = [
  {
    name: "DescriptionLineDetail",
    key: "descriptiononly",
  },
  {
    name: "AccountObject",
    key: "accountresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "CustomerObject",
    key: "customerresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "VendorObject",
    key: "vendorresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "PurchaseOrderObject",
    key: "purchaseorderresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "InvoiceObject",
    key: "invoiceresponse",
    createType: true,
    updateType: true,
    deleteType: true,
    batchType: true,
  },
  {
    name: "EstimateObject",
    key: "estimateresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "BillObject",
    key: "billresponse",
    createType: true,
    deleteType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "BillPaymentObject",
    key: "billpaymentresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "PaymentObject",
    key: "paymentresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
  {
    name: "ItemObject",
    key: "itemresponse",
    createType: true,
    updateType: true,
    batchType: true,
  },
];

let typescriptTypesDic = {}; // types dictionary with key as type name and value as type definition string
let typescriptTypesDicWith = ""; // typescript types string

function formatType(value, isListItem, key) {
  // cleanup overrides:
  if (key === "TxnType") {
    return "TxnTypeEnum";
  }

  if (key === "TaxReportingBasis") {
    return "TaxReportingBasisEnum";
  }

  if (key === "PreferredDeliveryMethod") {
    return "DeliveryMethodEnum";
  }

  if (key === "GSTRegistrationType") {
    return "GSTRegistrationTypeEnum";
  }
  if (key === "EmailStatus") {
    return "EmailStatusEnum";
  }

  if (isListItem) {
    return formatTypeWithRef(value);
  }
  switch (value.type) {
    case "Numeric Id":
    case "BigDecimal":
    case "Decimal":
    case "Integer":
      return "number";
    case "Boolean":
      return "boolean";
    case "date":
    case "DateTime":
      return "Date";
    case "Invoice line object":
    case "Estimate line object":
    case "Line":
      return formatTypeWithRef(value);
    case "LineDetailTypeEnum":
      const key = value.description
        .replace('Set to <span class="literal">', "")
        .replace('Set to\n<span class="literal">', "")
        .replace("</span>for this type of line.", "")
        .replace("</span> for this type of line.", "");
      LineDetailTypeEnum[key] = key;
      return `LineDetailTypeEnum.${key}`;
    case "String":
      return "string";
    default:
      return value.type;
  }
}

function formatTypeWithRef(value) {
  let types = [];
  value["$ref"].forEach((refEl) => {
    for (const [key, value] of Object.entries(refEl)) {
      types.push(value);
    }
  });

  if (types.length === 1) {
    return types[0];
  }

  return `(${types.join(" | ")})`;
}

// this is to fix inconsistencies in documentation
function stantardizeTypeName(name) {
  switch (name) {
    case "ModificationMetaData":
    case "ModificationMetadata":
    case "modificationmetadata":
      return "ModificationMetaData";
    case "AccountBasedExpense":
    case "AccountBasedExpenseLineDetail":
      return "AccountBasedExpenseLineDetail";
    case "CurrencyRefType":
    case "CurrencyRef":
      return "CurrencyRef";
    case "WebSiteAddress":
      return "WebsiteAddress";
    case "TelephoneNumber30":
      return "TelephoneNumber";
    // ambiguous, just use string
    case "IdType":
    case "CustomFieldTypeEnum":
      return "string";
    // LineDetail is not defined anywhere
    case "LineDetail":
    case "SubtotalLineDetail":
      return "SubTotalLineDetail";
    default:
      return name;
  }
}

function defineType(k, n, f) {
  if (typescriptTypesDic[n] || n === "Date" || n === "DateTime") {
    return;
  }

  let stdOut = "export type " + stantardizeTypeName(n) + " = {\n";
  const parsedJsonTypes = TYPES.models.qbo[k];
  let entries = Object.entries(parsedJsonTypes.properties).sort((a, b) =>
    a[0] === "Id" || a[0] < b[0] ? -1 : 1
  ); // sort required to top
  entries = [
    ...entries.filter((e) => e[1].readOnly),
    ...entries.filter((e) => !e[1].readOnly),
  ]; // sort readonly first

  if (f) {
    entries = entries.filter(f);
  }

  for (const [key, value] of entries) {
    const isReq =
      value.requiredFlag === "Required" ||
      key === "SyncToken" ||
      // Id is required for main types only to avoid CRUD definitions for Line items, address, etc types
      (key === "Id" && MAIN_TYPES.some((t) => t.name === n));
    const isListItemPrefix = key.includes(" [0..n]") ? "[]" : "";
    const typescriptType = formatType(value, isListItemPrefix, key);
    const typescriptKey = key.replace(" [0..n]", "");
    const readonlyPrefix = value.readOnly ? "readonly " : "";
    stdOut += `    ${readonlyPrefix}${typescriptKey}${
      isReq ? "" : "?"
    }: ${stantardizeTypeName(typescriptType)}${isListItemPrefix};\n`;

    if (value.type === "LineDetailTypeEnum") {
    }

    if (value["$ref"]) {
      value["$ref"].forEach((refEl) => {
        for (const [key, value] of Object.entries(refEl)) {
          defineType(key, value);
        }
      });
    }
  }
  stdOut += `}`;
  typescriptTypesDic[stantardizeTypeName(n)] = stdOut;
}

function generateCreateType(k, n) {
  const createTypeName = `Create${stantardizeTypeName(n)}`;
  if (typescriptTypesDic[createTypeName]) {
    return;
  }

  const parsedJsonTypes = TYPES.models.qbo[k];
  const entriesReadOnly = Object.entries(parsedJsonTypes.properties)
    .sort((a, b) => (a[0] === "Id" || a[0] < b[0] ? -1 : 1))
    .filter((e) => e[1].readOnly);

  let omitFields = [];
  for (const [key, value] of entriesReadOnly) {
    const typescriptKey = key.replace(" [0..n]", "");
    omitFields.push(typescriptKey);
  }
  let OmitString = `Omit<${stantardizeTypeName(n)},${omitFields
    .map((field) => `"${field}"`)
    .join("| ")}>`;
  let stdOut = `export type Create${stantardizeTypeName(n)} = ${OmitString} `;
  typescriptTypesDic[createTypeName] = stdOut;
}

function generateUpdateType(k, n) {
  const updateTypeName = `Update${stantardizeTypeName(n)}`;
  if (typescriptTypesDic[updateTypeName]) {
    return;
  }

  const parsedJsonTypes = TYPES.models.qbo[k];
  const entriesReadOnly = Object.entries(parsedJsonTypes.properties)
    .sort((a, b) => (a[0] === "Id" || a[0] < b[0] ? -1 : 1))
    .filter((e) => e[1].readOnly && e[0] !== "Id" && e[0] !== "SyncToken");

  let omitFields = [];
  for (const [key, value] of entriesReadOnly) {
    const typescriptKey = key.replace(" [0..n]", "");
    omitFields.push(typescriptKey);
  }
  let OmitString =
    omitFields.length > 0
      ? `Omit<${stantardizeTypeName(n)},${omitFields
          .map((field) => `"${field}"`)
          .join("| ")}> & `
      : "";

  let stdOut = `export type Update${stantardizeTypeName(n)} = ${OmitString}{\n`;
  stdOut += `    Id: string;\n`;
  stdOut += `    SyncToken: string;\n`;
  stdOut += `    sparse?: boolean;\n`;
  stdOut += `}`;
  typescriptTypesDic[updateTypeName] = stdOut;
}

function generateDeleteType(k, n) {
  const deleteTypeName = `Delete${stantardizeTypeName(n)}`;
  if (typescriptTypesDic[deleteTypeName]) {
    return;
  }

  let stdOut = `export type Delete${stantardizeTypeName(n)} = {\n`;
  stdOut += `    Id: string;\n`;
  stdOut += `    SyncToken: string;\n`;
  stdOut += `}`;
  typescriptTypesDic[deleteTypeName] = stdOut;
}

function formatEnumType(enumObj) {
  let stdOut = "export enum LineDetailTypeEnum {\n";
  for (const [key, value] of Object.entries(enumObj).sort((a, b) =>
    a[0] < b[0] ? -1 : 1
  )) {
    stdOut += `    ${value} = "${value}",\n`;
  }
  stdOut += `}`;
  return stdOut;
}

function generateGetBatchType(type) {
  const typeClean = type.name.replace("Object", "");
  let stdOut = `
// ${typeClean} batch types
export interface Batch${typeClean}ItemRequest extends BatchItemRequestBase {
    ${typeClean}: ${typeClean}Object;
    operation: BatchOperation.QUERY;
}
`;
  if (type.createType) {
    stdOut += `export interface Batch${typeClean}CreateItemRequest extends BatchItemRequestBase {
    ${typeClean}: Create${typeClean}Object;
    operation: BatchOperation.CREATE;
}
`;
  }
  if (type.updateType) {
    stdOut += `export interface Batch${typeClean}UpdateItemRequest extends BatchItemRequestBase {
    ${typeClean}: Update${typeClean}Object;
    operation: BatchOperation.UPDATE;
}`;
  }
  if (type.deleteType) {
    stdOut += `export interface Batch${typeClean}DeleteItemRequest extends BatchItemRequestBase {
    ${typeClean}: Delete${typeClean}Object;
    operation: BatchOperation.DELETE;
}`;
  }
  stdOut += `;`;

  return stdOut;
}

function generateQueryTypes(batchTypes) {
  let stdOut = "";
  for (const type of batchTypes) {
    const typeClean = type.name.replace("Object", "");
    stdOut += `
export type ${typeClean}Query = {
    QueryResponse: {
        ${typeClean}: ${typeClean}Object[];
    };
    time: Date;
};
`;
  }
  return stdOut;
}

function generateBatchItemResponse(batchTypes) {
  let stdOut = `
export type BatchItemResponse = {
    bId: ${"`"}bId${"${number}"}${"`"};
    Fault?: Record<string, unknown>;
`;
  for (const type of batchTypes) {
    const typeClean = type.name.replace("Object", "");
    stdOut += `    ${typeClean}?: ${typeClean}Object;\n`;
  }
  stdOut += `};`;
  return stdOut;
}
function generateBatchItemRequest(batchTypes) {
  const CRUD = ["", "Create", "Update", "Delete"];
  const outputBathTypes = [];
  for (const type of batchTypes) {
    const typeClean = type.name.replace("Object", ""); // TODO remove object word all together?
    // get
    outputBathTypes.push(`Batch${typeClean}ItemRequest`);
    // create
    if (type.createType) {
      outputBathTypes.push(`Batch${typeClean}CreateItemRequest`);
    }
    // update
    if (type.updateType) {
      outputBathTypes.push(`Batch${typeClean}UpdateItemRequest`);
    }
    // delete
    if (type.deleteType) {
      outputBathTypes.push(`Batch${typeClean}DeleteItemRequest`);
    }
  }

  return `export type BatchItemRequest = \n ${outputBathTypes.join("\n | ")};`;
}

function writeToDisk(content) {
  fs.writeFile("./typescriptTypes.d.ts", content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

async function main() {
  // generate types disctionary
  for (const type of MAIN_TYPES) {
    if (typescriptTypesDic[type.key]) {
      continue;
    }

    defineType(type.key, type.name, type.filter);

    if (type.createType) {
      generateCreateType(type.key, type.name);
    }
    if (type.updateType) {
      generateUpdateType(type.key, type.name);
    }

    if (type.deleteType) {
      generateDeleteType(type.key, type.name);
    }
  }

  // one off
  // typescriptTypesDic["linedetailtypeenum"] = formatEnumType(LineDetailTypeEnum);

  // produce output
  let content =
    "// Types generated by script\n // Id field is required for main types only to avoid multiple definitions for Line, Address, and other non-main types. \n";
  // regular types
  for (const [key, value] of Object.entries(typescriptTypesDic).sort((a, b) =>
    a[0] < b[0] ? -1 : 1
  )) {
    content += value + "\n";
  }

  // batch types
  const batchTypes = MAIN_TYPES.filter((type) => type.batchType).sort((a, b) =>
    a.name < b.name ? -1 : 1
  );

  for (const baseType of batchTypes) {
    content += generateGetBatchType(baseType);
  }

  content += generateBatchItemRequest(batchTypes);
  content += "\n";
  content += generateBatchItemResponse(batchTypes);
  content += "\n";
  content += generateQueryTypes(batchTypes);

  // add manually typed
  fs.readFile("./manuallyTyped.d.ts", "utf8", (err, manuallyTyped) => {
    if (err) {
      console.error(err);
    }
    content += "\n\n" + manuallyTyped;
    content += "\n// End of script generated types";

    // write everything
    writeToDisk(content);
  });
}

main();
