  // Manually typed definitions from typegeneration script
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
    fetchAll?: boolean;
    desc?: boolean;
    asc?: boolean;
  } | Record<string, string>;

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

  // Enums:
  export enum AccountTypeEnum {
    AccountsPayable = "Accounts Payable",
    AccountsReceivable = "Accounts Receivable",
    Expense = "Expense",
    OtherCurrentLiability = "Other Current Liability",
    Income = "Income",
    Bank = "Bank",
    CostOfGoodsSold = "Cost of Goods Sold",
    OtherExpense = "Other Expense",
    OtherIncome = "Other Income",
    OtherCurrentAsset = "Other Current Asset",
    CreditCard = "Credit Card",
    LongTermLiability = "Long Term Liability",
    Equity = "Equity",
    FixedAsset = "Fixed Asset"
  }
  export enum BatchOperation {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete",
    QUERY = "query",
  }

  export enum BillableStatusEnum {
    NOT_BILLABLE = "NotBillable",
    BILLABLE = "Billable",
    HAS_BEEN_BILLED = "HasBeenBilled",
  }

  export enum BillPaymentTypeEnum {
    CHECK = "Check",
    CREDIT_CARD = "CreditCard",
  }

  export enum CCPaymentStatusEnum {
    COMPLETED = "Completed",
    UNKNOWN = "Unknown",
  }
  
  // use in DeliveryInfo.DeliveryType
  export enum DeliveryTypeEnum { 
    EMAIL = "Email" 
  }

  // used in Customer.PreferredDeliveryMethod 
  export enum DeliveryMethodEnum {
    PRINT = "Print",
    EMAIL = "Email",
    NONE = "None",
  }
  export enum EmailStatusEnum { 
    EMAIL_SENT = "EmailSent",
    NEED_TO_SEND = "NeedToSend",
    NOT_SET = "NotSet",
  }
  export enum GlobalTaxCalculationEnum {
    NOT_APPLICABLE = "NotApplicable",
    TAX_EXCLUDED = "TaxExcluded",
    TAX_INCLUSIVE = "TaxInclusive",
  }
  
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

  export enum PrintStatusEnum {
    NEED_TO_PRINT = "NeedToPrint",
    NOT_SET = "NotSet",
    PRINT_COMPLETE = "PrintComplete",
  }

  export enum TaxReportingBasisEnum {
    CASH = "Cash",
    ACCURAL = "Accrual"
  }
  
  // Transaction types
  export enum TxnTypeEnum { // TODO: add more types
    BILL = "Bill",
    BILL_PAYMENT = "BillPayment",
    BILL_PAYMENT_CHECK = "BillPaymentCheck",
    INVOICE = "Invoice",
    PAYMENT = "Payment",
    PURCHASE_ORDER = "PurchaseOrder",
  }

  export enum GSTRegistrationTypeEnum {
    CONSUMER= "CONSUMER",
    DEEMED = "DEEMED",
    GST_REG_REG = "GST_REG_REG",
    GST_REG_COMP = "GST_REG_COMP",
    GST_UNREG = "GST_UNREG",
    OVERSEAS = "OVERSEAS",
    SEZ = "SEZ",
  }
