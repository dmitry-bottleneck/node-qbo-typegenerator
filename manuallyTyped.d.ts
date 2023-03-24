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
    Bank = "Bank",
    CostOfGoodsSold = "Cost of Goods Sold",
    CreditCard = "Credit Card",
    Equity = "Equity",
    Expense = "Expense",
    FixedAsset = "Fixed Asset",
    Income = "Income",
    LongTermLiability = "Long Term Liability",
    OtherCurrentAsset = "Other Current Asset",
    OtherCurrentLiability = "Other Current Liability",
    OtherExpense = "Other Expense",
    OtherIncome = "Other Income"
  }
  
  export enum AccountSubTypeEnum {
    AccountsPayable = "AccountsPayable",
    AccountsReceivable = "AccountsReceivable",
    AccumulatedDepreciation = "AccumulatedDepreciation",
    AdvertisingPromotional = "AdvertisingPromotional",
    Auto = "Auto",
    BankCharges = "BankCharges",
    Checking = "Checking",
    CreditCard = "CreditCard",
    Depreciation = "Depreciation",
    DiscountsRefundsGiven = "DiscountsRefundsGiven",
    DuesSubscriptions = "DuesSubscriptions",
    EntertainmentMeals = "EntertainmentMeals",
    EquipmentRental = "EquipmentRental",
    GlobalTaxPayable = "GlobalTaxPayable",
    Insurance = "Insurance",
    InterestEarned = "InterestEarned",
    Inventory = "Inventory",
    LegalProfessionalFees = "LegalProfessionalFees",
    OfficeGeneralAdministrativeExpenses = "OfficeGeneralAdministrativeExpenses",
    OpeningBalanceEquity = "OpeningBalanceEquity",
    OtherCurrentAssets = "OtherCurrentAssets",
    OtherCurrentLiabilities = "OtherCurrentLiabilities",
    OtherLongTermLiabilities = "OtherLongTermLiabilities",
    OtherMiscellaneousExpense = "OtherMiscellaneousExpense",
    OtherMiscellaneousIncome = "OtherMiscellaneousIncome",
    OtherMiscellaneousServiceCost = "OtherMiscellaneousServiceCost",
    OtherPrimaryIncome = "OtherPrimaryIncome",
    PenaltiesSettlements = "PenaltiesSettlements",
    PrepaidExpenses = "PrepaidExpenses",
    RentOrLeaseOfBuildings = "RentOrLeaseOfBuildings",
    RepairMaintenance = "RepairMaintenance",
    RetainedEarnings = "RetainedEarnings",
    SalesOfProductIncome = "SalesOfProductIncome",
    Savings = "Savings",
    ServiceFeeIncome = "ServiceFeeIncome",
    SuppliesMaterials = "SuppliesMaterials",
    SuppliesMaterialsCogs = "SuppliesMaterialsCogs",
    TaxesPaid = "TaxesPaid",
    Travel = "Travel",
    TravelMeals = "TravelMeals",
    UnappliedCashBillPaymentExpense = "UnappliedCashBillPaymentExpense",
    UnappliedCashPaymentIncome = "UnappliedCashPaymentIncome",
    UndepositedFunds = "UndepositedFunds",
    Utilities = "Utilities",
    Vehicles = "Vehicles"
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
    JournalEntryLineDetail = "JournalEntryLineDetail",
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

  export enum EntityTypeEnum {
    Customer = "Customer",
    Employee = "Employee",
    Vendor = "Vendor",
  }
  export enum TaxApplicableOnEnum {
    Purchase = "Purchase",
    Sales = "Sales",
  }
  export enum PostingTypeEnum {
    Debit = "Debit",
    Credit = "Credit",
  }