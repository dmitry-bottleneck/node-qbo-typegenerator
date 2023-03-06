// Types generated by script
export type AccountBasedExpenseLine = {
  readonly Id: string;
  AccountBasedExpenseLineDetail: AccountBasedExpenseLineDetail;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.AccountBasedExpenseLineDetail;
  LineNum?: number;
};
export type AccountBasedExpenseLineDetail = {
  AccountRef: ReferenceType;
  BillableStatus?: BillableStatusEnum;
  ClassRef?: ReferenceType;
  CustomerRef?: ReferenceType;
  MarkupInfo?: MarkupInfo;
  TaxAmount?: number;
  TaxCodeRef?: ReferenceType;
  TaxInclusiveAmt?: number;
};
export type BillObject = {
  readonly Id: string;
  readonly Balance?: number;
  readonly HomeBalance?: number;
  readonly RecurDataRef?: ReferenceType;
  readonly SyncToken: string;
  readonly TotalAmt?: number;
  APAccountRef?: ReferenceType;
  CurrencyRef?: CurrencyRef;
  DepartmentRef?: ReferenceType;
  DocNumber?: string;
  DueDate?: Date;
  ExchangeRate?: number;
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  IncludeInAnnualTPAR?: boolean;
  Line: (ItemBasedExpenseLine | AccountBasedExpenseLine)[];
  LinkedTxn?: LinkedTxn[];
  MetaData?: ModificationMetaData;
  PrivateNote?: string;
  SalesTermRef?: ReferenceType;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnTaxDetail?: TxnTaxDetail;
  VendorRef: ReferenceType;
};
export type BillPaymentCheck = {
  BankAccountRef: ReferenceType;
  PrintStatus?: PrintStatusEnum;
};
export type BillPaymentCreditCard = {
  CCAccountRef: ReferenceType;
};
export type BillPaymentObject = {
  readonly Id: string;
  readonly SyncToken: string;
  APAccountRef?: ReferenceType;
  CheckPayment?: BillPaymentCheck;
  CreditCardPayment?: BillPaymentCreditCard;
  CurrencyRef?: CurrencyRef;
  DepartmentRef?: ReferenceType;
  DocNumber?: string;
  ExchangeRate?: number;
  Line: LineLinkedTxn[];
  MetaData?: ModificationMetaData;
  PayType: BillPaymentTypeEnum;
  PrivateNote?: string;
  ProcessBillPayment?: boolean;
  TotalAmt: number;
  TransactionLocationType?: string;
  TxnDate?: Date;
  VendorRef: ReferenceType;
};
export type ContactInfo = {
  Telephone?: TelephoneNumber;
  Type?: string;
};
export type CreateBillObject = Omit<
  "BillObject",
  "Id",
  "Balance",
  "HomeBalance",
  "RecurDataRef",
  "SyncToken",
  "TotalAmt"
>;
export type CreateBillPaymentObject = Omit<
  "BillPaymentObject",
  "Id",
  "SyncToken"
>;
export type CreateCustomerObject = Omit<
  "CustomerObject",
  "Id",
  "CurrencyRef",
  "FullyQualifiedName",
  "IsProject",
  "Level",
  "SyncToken"
>;
export type CreateEstimateObject = Omit<
  "EstimateObject",
  "Id",
  "HomeTotalAmt",
  "RecurDataRef",
  "SyncToken",
  "TaxExemptionRef",
  "TotalAmt"
>;
export type CreateInvoiceObject = Omit<
  "InvoiceObject",
  "Id",
  "Balance",
  "DeliveryInfo",
  "HomeBalance",
  "HomeTotalAmt",
  "InvoiceLink",
  "RecurDataRef",
  "SyncToken",
  "TaxExemptionRef",
  "TotalAmt"
>;
export type CreatePaymentObject = Omit<
  "PaymentObject",
  "Id",
  "SyncToken",
  "TaxExemptionRef",
  "UnappliedAmt"
>;
export type CreatePurchaseOrderObject = Omit<
  "PurchaseOrderObject",
  "Id",
  "RecurDataRef",
  "SyncToken",
  "TotalAmt"
>;
export type CreateVendorObject = Omit<
  "VendorObject",
  "Id",
  "Balance",
  "CurrencyRef",
  "SyncToken"
>;
export type CreditCardPayment = {
  CreditChargeInfo?: CreditChargeInfo;
  CreditChargeResponse?: CreditChargeResponse;
};
export type CreditChargeInfo = {
  Amount?: number;
  BillAddrStreet?: string;
  CcExpiryMonth?: Integer;
  CcExpiryYear?: Integer;
  NameOnAcct?: string;
  PostalCode?: string;
  ProcessPayment?: boolean;
  Type?: string;
};
export type CreditChargeResponse = {
  AuthCode?: string;
  CCTransId?: string;
  Status?: CCPaymentStatusEnum;
  TxnAuthorizationTime?: Date;
};
export type CurrencyRef = {
  name?: string;
  value: string;
};
export type CustomField = {
  readonly DefinitionId: string;
  readonly Name?: string;
  readonly Type?: CustomFieldTypeEnum;
  StringValue?: string;
};
export type CustomerObject = {
  readonly Id: string;
  readonly CurrencyRef?: CurrencyRef;
  readonly FullyQualifiedName?: string;
  readonly IsProject?: boolean;
  readonly Level?: Integer;
  readonly SyncToken: string;
  ARAccountRef?: ReferenceType;
  Active?: boolean;
  AlternatePhone?: TelephoneNumber;
  Balance?: number;
  BalanceWithJobs?: number;
  BillAddr?: PhysicalAddress;
  BillWithParent?: boolean;
  BusinessNumber?: string;
  CompanyName?: string;
  CustomerTypeRef?: string;
  DefaultTaxCodeRef?: ReferenceType;
  DisplayName?: string;
  FamilyName?: string;
  Fax?: TelephoneNumber;
  GSTIN?: string;
  GSTRegistrationType?: string;
  GivenName?: string;
  Job?: boolean;
  MetaData?: ModificationMetaData;
  MiddleName?: string;
  Mobile?: TelephoneNumber;
  Notes?: string;
  OpenBalanceDate?: Date;
  ParentRef?: ReferenceType;
  PaymentMethodRef?: ReferenceType;
  PreferredDeliveryMethod?: string;
  PrimaryEmailAddr?: EmailAddress;
  PrimaryPhone?: TelephoneNumber;
  PrimaryTaxIdentifier?: string;
  PrintOnCheckName?: string;
  ResaleNum?: string;
  SalesTermRef?: ReferenceType;
  SecondaryTaxIdentifier?: string;
  ShipAddr?: PhysicalAddress;
  Source?: string;
  Suffix?: string;
  TaxExemptionReasonId?: number;
  Taxable?: boolean;
  Title?: string;
  WebAddr?: WebSiteAddress;
};
export type CustomerTypeRef = {
  value: string;
};
export type Date = {
  date?: string;
};
export type DateTime = {
  dateTime?: string;
};
export type DeliveryInfo = {
  readonly DeliveryTime?: Date;
  readonly DeliveryType?: DeliveryTypeEnum;
};
export type DescriptionLineDetail = {
  ServiceDate?: Date;
  TaxCodeRef?: ReferenceType;
};
export type DescriptionOnly = {
  ServiceDate?: Date;
  TaxCodeRef?: ReferenceType;
};
export type DescriptionOnlyLine = {
  readonly Id: string;
  readonly Amount?: number;
  Description?: string;
  DescriptionLineDetail: DescriptionLineDetail;
  DetailType: LineDetailTypeEnum.DescriptionOnly;
  LineNum?: number;
};
export type DiscountLine = {
  readonly Id: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.DiscountLineDetail;
  DiscountLineDetail: DiscountLineDetail;
  LineNum?: number;
};
export type DiscountLineDetail = {
  ClassRef?: ReferenceType;
  DiscountAccountRef?: ReferenceType;
  DiscountPercent?: number;
  PercentBased?: boolean;
  TaxCodeRef?: ReferenceType;
};
export type EmailAddress = {
  Address?: string;
};
export type EstimateObject = {
  readonly Id: string;
  readonly HomeTotalAmt?: number;
  readonly RecurDataRef?: ReferenceType;
  readonly SyncToken: string;
  readonly TaxExemptionRef?: ReferenceType;
  readonly TotalAmt?: number;
  AcceptedBy?: string;
  AcceptedDate?: Date;
  ApplyTaxAfterDiscount?: boolean;
  BillAddr?: PhysicalAddress;
  BillEmail?: EmailAddress;
  ClassRef?: ReferenceType;
  CurrencyRef?: CurrencyRef;
  CustomField?: CustomField;
  CustomerMemo?: MemoRef;
  CustomerRef: ReferenceType;
  DepartmentRef?: ReferenceType;
  DocNumber?: string;
  DueDate?: Date;
  EmailStatus?: string;
  ExchangeRate?: number;
  ExpirationDate?: Date;
  FreeFormAddress?: boolean;
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  Line?: (
    | SalesItemLine
    | GroupLine
    | DescriptionOnlyLine
    | DiscountLine
    | SubTotalLine
  )[];
  LinkedTxn?: LinkedTxn[];
  MetaData?: ModificationMetaData;
  PrintStatus?: string;
  PrivateNote?: string;
  SalesTermRef?: ReferenceType;
  ShipAddr?: PhysicalAddress;
  ShipDate?: Date;
  ShipFromAddr?: PhysicalAddress;
  ShipMethodRef?: ReferenceType;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnStatus?: string;
  TxnTaxDetail?: TxnTaxDetail;
};
export type GroupLine = {
  readonly Id: string;
  Description?: string;
  DetailType: LineDetailTypeEnum.GroupLineDetail;
  GroupLineDetail: GroupLineDetail;
  LineNum?: number;
};
export type GroupLineDetail = {
  GroupItemRef?: ReferenceType;
  Line?: SalesItemLine[];
  Quantity?: number;
};
export type InvoiceObject = {
  readonly Id: string;
  readonly Balance?: number;
  readonly DeliveryInfo?: DeliveryInfo;
  readonly HomeBalance?: number;
  readonly HomeTotalAmt?: number;
  readonly InvoiceLink?: string;
  readonly RecurDataRef?: ReferenceType;
  readonly SyncToken: string;
  readonly TaxExemptionRef?: ReferenceType;
  readonly TotalAmt?: number;
  AllowIPNPayment?: boolean;
  AllowOnlineACHPayment?: boolean;
  AllowOnlineCreditCardPayment?: boolean;
  AllowOnlinePayment?: boolean;
  ApplyTaxAfterDiscount?: boolean;
  BillAddr?: PhysicalAddress;
  BillEmail?: EmailAddress;
  BillEmailBcc?: EmailAddress;
  BillEmailCc?: EmailAddress;
  ClassRef?: ReferenceType;
  CurrencyRef?: CurrencyRef;
  CustomField?: CustomField;
  CustomerMemo?: MemoRef;
  CustomerRef: ReferenceType;
  DepartmentRef?: ReferenceType;
  Deposit?: number;
  DepositToAccountRef?: ReferenceType;
  DocNumber?: string;
  DueDate?: Date;
  EmailStatus?: string;
  ExchangeRate?: number;
  FreeFormAddress?: boolean;
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  Line: (
    | SalesItemLine
    | GroupLine
    | DescriptionOnlyLine
    | DiscountLine
    | SubTotalLine
  )[];
  LinkedTxn?: LinkedTxn[];
  MetaData?: ModificationMetaData;
  PrintStatus?: string;
  PrivateNote?: string;
  SalesTermRef?: ReferenceType;
  ShipAddr?: PhysicalAddress;
  ShipDate?: Date;
  ShipFromAddr?: PhysicalAddress;
  ShipMethodRef?: ReferenceType;
  TrackingNum?: string;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnSource?: string;
  TxnTaxDetail?: TxnTaxDetail;
};
export type ItemBasedExpenseLine = {
  readonly Id: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.ItemBasedExpenseLineDetail;
  ItemBasedExpenseLineDetail: ItemBasedExpenseLineDetail;
  LineNum?: number;
  LinkedTxn?: LinkedTxn[];
};
export type ItemBasedExpenseLineDetail = {
  BillableStatus?: BillableStatusEnum;
  ClassRef?: ReferenceType;
  CustomerRef?: ReferenceType;
  ItemRef?: ReferenceType;
  MarkupInfo?: MarkupInfo;
  PriceLevelRef?: ReferenceType;
  Qty?: number;
  TaxCodeRef?: ReferenceType;
  TaxInclusiveAmt?: number;
  UnitPrice?: number;
};
export type LineLinkedTxn = {
  Amount: number;
  LinkedTxn: LinkedTxn[];
};
export type LinkedTxn = {
  TxnId: string;
  TxnLineId?: string;
  TxnType: string;
};
export type MarkupInfo = {
  readonly MarkUpIncomeAccountRef?: ReferenceType;
  Percent?: number;
  PriceLevelRef?: ReferenceType;
};
export type MemoRef = {
  value: string;
};
export type ModificationMetaData = {
  readonly CreateTime?: Date;
  readonly LastUpdatedTime?: Date;
};
export type PaymentObject = {
  readonly Id: string;
  readonly SyncToken: string;
  readonly TaxExemptionRef?: ReferenceType;
  readonly UnappliedAmt?: number;
  ARAccountRef?: ReferenceType;
  CreditCardPayment?: CreditCardPayment;
  CurrencyRef?: CurrencyRef;
  CustomerRef: ReferenceType;
  DepositToAccountRef?: ReferenceType;
  ExchangeRate?: number;
  Line?: LineLinkedTxn[];
  MetaData?: ModificationMetaData;
  PaymentMethodRef?: ReferenceType;
  PaymentRefNum?: string;
  PrivateNote?: string;
  TotalAmt: number;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnSource?: string;
};
export type PhysicalAddress = {
  readonly Id: string;
  readonly Lat?: string;
  readonly Long?: string;
  City?: string;
  Country?: string;
  CountrySubDivisionCode?: string;
  Line1?: string;
  Line2?: string;
  Line3?: string;
  Line4?: string;
  Line5?: string;
  PostalCode?: string;
};
export type PurchaseOrderObject = {
  readonly Id: string;
  readonly RecurDataRef?: ReferenceType;
  readonly SyncToken: string;
  readonly TotalAmt?: number;
  APAccountRef: ReferenceType;
  ClassRef?: ReferenceType;
  CurrencyRef?: CurrencyRef;
  CustomField?: CustomField;
  DocNumber?: string;
  DueDate?: Date;
  EmailStatus?: string;
  ExchangeRate?: number;
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  Line: (ItemBasedExpenseLine | AccountBasedExpenseLine)[];
  LinkedTxn?: LinkedTxn[];
  Memo?: string;
  MetaData?: ModificationMetaData;
  POEmail?: EmailAddress;
  POStatus?: string;
  PrivateNote?: string;
  SalesTermRef?: ReferenceType;
  ShipAddr?: PhysicalAddress;
  ShipMethodRef?: ReferenceType;
  ShipTo?: ReferenceType;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnTaxDetail?: TxnTaxDetail;
  VendorAddr?: PhysicalAddress;
  VendorRef: ReferenceType;
};
export type ReferenceType = {
  name?: string;
  value: string;
};
export type SalesItemLine = {
  readonly Id: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.SalesItemLineDetail;
  LineNum?: number;
  SalesItemLineDetail: SalesItemLineDetail;
};
export type SalesItemLineDetail = {
  readonly TaxClassificationRef?: ReferenceType;
  ClassRef?: ReferenceType;
  DiscountAmt?: number;
  DiscountRate?: number;
  ItemAccountRef?: ReferenceType;
  ItemRef?: ReferenceType;
  MarkupInfo?: MarkupInfo;
  Qty?: number;
  ServiceDate?: Date;
  TaxCodeRef?: ReferenceType;
  TaxInclusiveAmt?: number;
  UnitPrice?: number;
};
export type SubTotalLine = {
  readonly Id: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.SubtotalLineDetail;
  LineNum?: number;
  SubtotalLineDetail: LineDetail;
};
export type SubTotalLineDetail = {
  ItemRef?: ReferenceType;
};
export type TaxLine = {
  Amount?: number;
  DetailType: LineDetailTypeEnum.TaxLineDetail;
  TaxLineDetail: TaxLineDetail;
};
export type TaxLineDetail = {
  NetAmountTaxable?: number;
  OverrideDeltaAmount?: number;
  PercentBased?: boolean;
  TaxInclusiveAmount?: number;
  TaxPercent?: number;
  TaxRateRef: ReferenceType;
};
export type TelephoneNumber30 = {
  FreeFormNumber?: string;
};
export type TxnTaxDetail = {
  TaxLine?: TaxLine[];
  TotalTax?: number;
  TxnTaxCodeRef?: ReferenceType;
};
export type UpdateBillObject = Omit<
  "BillObject",
  "Balance",
  "HomeBalance",
  "RecurDataRef",
  "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateBillPaymentObject = Omit<"BillPaymentObject"> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateCustomerObject = Omit<
  "CustomerObject",
  "CurrencyRef",
  "FullyQualifiedName",
  "IsProject",
  "Level"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateEstimateObject = Omit<
  "EstimateObject",
  "HomeTotalAmt",
  "RecurDataRef",
  "TaxExemptionRef",
  "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateInvoiceObject = Omit<
  "InvoiceObject",
  "Balance",
  "DeliveryInfo",
  "HomeBalance",
  "HomeTotalAmt",
  "InvoiceLink",
  "RecurDataRef",
  "TaxExemptionRef",
  "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdatePaymentObject = Omit<
  "PaymentObject",
  "TaxExemptionRef",
  "UnappliedAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdatePurchaseOrderObject = Omit<
  "PurchaseOrderObject",
  "RecurDataRef",
  "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateVendorObject = Omit<
  "VendorObject",
  "Balance",
  "CurrencyRef"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type VendorObject = {
  readonly Id: string;
  readonly Balance?: number;
  readonly CurrencyRef?: CurrencyRef;
  readonly SyncToken: string;
  APAccountRef?: ReferenceType;
  AcctNum?: string;
  Active?: boolean;
  AlternatePhone?: TelephoneNumber;
  BillAddr?: PhysicalAddress;
  BillRate?: number;
  BusinessNumber?: string;
  CompanyName?: string;
  CostRate?: number;
  DisplayName?: string;
  FamilyName?: string;
  Fax?: TelephoneNumber;
  GSTIN?: string;
  GSTRegistrationType?: string;
  GivenName?: string;
  HasTPAR?: boolean;
  MetaData?: ModificationMetaData;
  MiddleName?: string;
  Mobile?: TelephoneNumber;
  OtherContactInfo?: ContactInfo;
  PrimaryEmailAddr?: EmailAddress;
  PrimaryPhone?: TelephoneNumber;
  PrintOnCheckName?: string;
  Source?: string;
  Suffix?: string;
  T4AEligible?: boolean;
  T5018Eligible?: boolean;
  TaxIdentifier?: string;
  TaxReportingBasis?: string;
  TermRef?: ReferenceType;
  Title?: string;
  Vendor1099?: boolean;
  VendorPaymentBankDetail?: VendorPaymentBankDetail;
  WebAddr?: WebSiteAddress;
};
export type VendorPaymentBankDetail = {
  BankAccountName?: string;
  BankAccountNumber?: string;
  BankBranchIdentifier?: string;
  StatementText?: string;
};
export type WebsiteAddress = {
  URI?: string;
};
export enum LineDetailTypeEnum {
  AccountBasedExpenseLineDetail = "AccountBasedExpenseLineDetail",
  DescriptionOnly = "DescriptionOnly",
  DiscountLineDetail = "DiscountLineDetail",
  GroupLineDetail = "GroupLineDetail",
  ItemBasedExpenseLineDetail = "ItemBasedExpenseLineDetail",
  SalesItemLineDetail = "SalesItemLineDetail",
  SubtotalLineDetail = "SubtotalLineDetail",
  TaxLineDetail = "TaxLineDetail",
}

// Bill batch types
export interface BatchBillItemRequest extends BatchItemRequestBase {
  Bill: BillObject;
  operation: BatchOperation.QUERY;
}

export interface BatchBillCreateItemRequest extends BatchItemRequestBase {
  Bill: CreateBillObject;
  operation: BatchOperation.CREATE;
}

export interface BatchBillUpdateItemRequest extends BatchItemRequestBase {
  Bill: UpdateBillObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchBillDeleteItemRequest extends BatchItemRequestBase {
  Bill: DeleteBillObject;
  operation: BatchOperation.DELETE;
}

// BillPayment batch types
export interface BatchBillPaymentItemRequest extends BatchItemRequestBase {
  BillPayment: BillPaymentObject;
  operation: BatchOperation.QUERY;
}

export interface BatchBillPaymentCreateItemRequest
  extends BatchItemRequestBase {
  BillPayment: CreateBillPaymentObject;
  operation: BatchOperation.CREATE;
}

export interface BatchBillPaymentUpdateItemRequest
  extends BatchItemRequestBase {
  BillPayment: UpdateBillPaymentObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchBillPaymentDeleteItemRequest
  extends BatchItemRequestBase {
  BillPayment: DeleteBillPaymentObject;
  operation: BatchOperation.DELETE;
}

// Customer batch types
export interface BatchCustomerItemRequest extends BatchItemRequestBase {
  Customer: CustomerObject;
  operation: BatchOperation.QUERY;
}

export interface BatchCustomerCreateItemRequest extends BatchItemRequestBase {
  Customer: CreateCustomerObject;
  operation: BatchOperation.CREATE;
}

export interface BatchCustomerUpdateItemRequest extends BatchItemRequestBase {
  Customer: UpdateCustomerObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchCustomerDeleteItemRequest extends BatchItemRequestBase {
  Customer: DeleteCustomerObject;
  operation: BatchOperation.DELETE;
}

// Estimate batch types
export interface BatchEstimateItemRequest extends BatchItemRequestBase {
  Estimate: EstimateObject;
  operation: BatchOperation.QUERY;
}

export interface BatchEstimateCreateItemRequest extends BatchItemRequestBase {
  Estimate: CreateEstimateObject;
  operation: BatchOperation.CREATE;
}

export interface BatchEstimateUpdateItemRequest extends BatchItemRequestBase {
  Estimate: UpdateEstimateObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchEstimateDeleteItemRequest extends BatchItemRequestBase {
  Estimate: DeleteEstimateObject;
  operation: BatchOperation.DELETE;
}

// Invoice batch types
export interface BatchInvoiceItemRequest extends BatchItemRequestBase {
  Invoice: InvoiceObject;
  operation: BatchOperation.QUERY;
}

export interface BatchInvoiceCreateItemRequest extends BatchItemRequestBase {
  Invoice: CreateInvoiceObject;
  operation: BatchOperation.CREATE;
}

export interface BatchInvoiceUpdateItemRequest extends BatchItemRequestBase {
  Invoice: UpdateInvoiceObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchInvoiceDeleteItemRequest extends BatchItemRequestBase {
  Invoice: DeleteInvoiceObject;
  operation: BatchOperation.DELETE;
}

// Payment batch types
export interface BatchPaymentItemRequest extends BatchItemRequestBase {
  Payment: PaymentObject;
  operation: BatchOperation.QUERY;
}

export interface BatchPaymentCreateItemRequest extends BatchItemRequestBase {
  Payment: CreatePaymentObject;
  operation: BatchOperation.CREATE;
}

export interface BatchPaymentUpdateItemRequest extends BatchItemRequestBase {
  Payment: UpdatePaymentObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchPaymentDeleteItemRequest extends BatchItemRequestBase {
  Payment: DeletePaymentObject;
  operation: BatchOperation.DELETE;
}

// PurchaseOrder batch types
export interface BatchPurchaseOrderItemRequest extends BatchItemRequestBase {
  PurchaseOrder: PurchaseOrderObject;
  operation: BatchOperation.QUERY;
}

export interface BatchPurchaseOrderCreateItemRequest
  extends BatchItemRequestBase {
  PurchaseOrder: CreatePurchaseOrderObject;
  operation: BatchOperation.CREATE;
}

export interface BatchPurchaseOrderUpdateItemRequest
  extends BatchItemRequestBase {
  PurchaseOrder: UpdatePurchaseOrderObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchPurchaseOrderDeleteItemRequest
  extends BatchItemRequestBase {
  PurchaseOrder: DeletePurchaseOrderObject;
  operation: BatchOperation.DELETE;
}

// Vendor batch types
export interface BatchVendorItemRequest extends BatchItemRequestBase {
  Vendor: VendorObject;
  operation: BatchOperation.QUERY;
}

export interface BatchVendorCreateItemRequest extends BatchItemRequestBase {
  Vendor: CreateVendorObject;
  operation: BatchOperation.CREATE;
}

export interface BatchVendorUpdateItemRequest extends BatchItemRequestBase {
  Vendor: UpdateVendorObject;
  operation: BatchOperation.UPDATE;
}
export interface BatchVendorDeleteItemRequest extends BatchItemRequestBase {
  Vendor: DeleteVendorObject;
  operation: BatchOperation.DELETE;
}
export type BatchItemRequest =
  | BatchBillItemRequest
  | BatchBillCreateItemRequest
  | BatchBillUpdateItemRequest
  | BatchBillDeleteItemRequest
  | BatchBillPaymentItemRequest
  | BatchBillPaymentCreateItemRequest
  | BatchBillPaymentUpdateItemRequest
  | BatchBillPaymentDeleteItemRequest
  | BatchCustomerItemRequest
  | BatchCustomerCreateItemRequest
  | BatchCustomerUpdateItemRequest
  | BatchCustomerDeleteItemRequest
  | BatchEstimateItemRequest
  | BatchEstimateCreateItemRequest
  | BatchEstimateUpdateItemRequest
  | BatchEstimateDeleteItemRequest
  | BatchInvoiceItemRequest
  | BatchInvoiceCreateItemRequest
  | BatchInvoiceUpdateItemRequest
  | BatchInvoiceDeleteItemRequest
  | BatchPaymentItemRequest
  | BatchPaymentCreateItemRequest
  | BatchPaymentUpdateItemRequest
  | BatchPaymentDeleteItemRequest
  | BatchPurchaseOrderItemRequest
  | BatchPurchaseOrderCreateItemRequest
  | BatchPurchaseOrderUpdateItemRequest
  | BatchPurchaseOrderDeleteItemRequest
  | BatchVendorItemRequest
  | BatchVendorCreateItemRequest
  | BatchVendorUpdateItemRequest
  | BatchVendorDeleteItemRequest;

export type BatchItemResponse = {
  bId: `bId${number}`;
  Fault?: Record<string, unknown>;
  Bill?: BillObject;
  BillPayment?: BillPaymentObject;
  Customer?: CustomerObject;
  Estimate?: EstimateObject;
  Invoice?: InvoiceObject;
  Payment?: PaymentObject;
  PurchaseOrder?: PurchaseOrderObject;
  Vendor?: VendorObject;
};

export type BillQuery = {
  QueryResponse: {
    Bill: BillObject[];
  };
  time: Date;
};

export type BillPaymentQuery = {
  QueryResponse: {
    BillPayment: BillPaymentObject[];
  };
  time: Date;
};

export type CustomerQuery = {
  QueryResponse: {
    Customer: CustomerObject[];
  };
  time: Date;
};

export type EstimateQuery = {
  QueryResponse: {
    Estimate: EstimateObject[];
  };
  time: Date;
};

export type InvoiceQuery = {
  QueryResponse: {
    Invoice: InvoiceObject[];
  };
  time: Date;
};

export type PaymentQuery = {
  QueryResponse: {
    Payment: PaymentObject[];
  };
  time: Date;
};

export type PurchaseOrderQuery = {
  QueryResponse: {
    PurchaseOrder: PurchaseOrderObject[];
  };
  time: Date;
};

export type VendorQuery = {
  QueryResponse: {
    Vendor: VendorObject[];
  };
  time: Date;
};

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
// End of script generated types
