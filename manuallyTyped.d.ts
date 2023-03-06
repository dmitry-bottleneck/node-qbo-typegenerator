  // Manually typed definitions from typegeneration script
  export enum BatchOperation {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete",
    QUERY = "query",
  }

  export interface BatchItemRequestBase {
    bId: `bId${number}`;
    operation: BatchOperation;
  }

  export interface BatchItemResponseObj {
    BatchItemResponse: BatchItemResponse[];
  }

  export type QueryCriteriaObject = {
    limit?: number;
    offset?: number;
    fetchall?: boolean;
    desc?: boolean;
    asc?: boolean;
    [key: string]: string;
  };

  export type DeliveryMethod = "Print" | "Email" | "None";

  export type TaxReportingBasis = "Cash" | "Accrual";

  export type GlobalTaxCalculationEnum =
    | "TaxExcluded"
    | "TaxInclusive"
    | "NotApplicable";

  export type EmailStatus = "NotSet" | "NeedToSend" | "EmailSent";

  export type DeliveryTypeEnum = "Email";

  // not used atm
  export type GSTRegistrationType =
    | "GST_REG_REG"
    | "GST_REG_COMP"
    | "GST_UNREG"
    | "CONSUMER"
    | "OVERSEAS"
    | "SEZ"
    | "DEEMED";

  export type PrintStatusEnum = "NotSet" | "NeedToPrint" | "PrintComplete";
  export enum BillableStatusEnum {
    NOT_BILLABLE = "NotBillable",
    BILLABLE = "Billable",
    HAS_BEEN_BILLED = "HasBeenBilled",
  }

  export interface ErrorResponse {
    Fault: {
      Error: {
        Message: string;
        Detail: string;
        code: string;
        element: string;
      }[];
      type: string;
    };
    time: Date;
  }