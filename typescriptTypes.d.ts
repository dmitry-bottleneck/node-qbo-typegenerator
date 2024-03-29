// Types generated by script
// Id field is required for main types only to avoid multiple definitions for Line, Address, and other non-main types.
export type AccountBasedExpenseLine = {
  readonly Id?: string;
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
export type AccountObject = {
  readonly Id: string;
  readonly Classification?: string;
  readonly CurrentBalance?: number;
  readonly CurrentBalanceWithSubAccounts?: number;
  readonly FullyQualifiedName?: string;
  readonly SubAccount?: boolean;
  readonly SyncToken: string;
  AccountAlias?: string;
  AccountSubType?: string;
  AccountType?: AccountTypeEnum;
  AcctNum?: string;
  Active?: boolean;
  CurrencyRef?: CurrencyRef;
  Description?: string;
  MetaData?: ModificationMetaData;
  Name: string;
  ParentRef?: ReferenceType;
  TaxCodeRef?: ReferenceType;
  TxnLocationType?: string;
};
export type AccountingInfoPrefs = {
  readonly BookCloseDate?: Date;
  readonly FirstMonthOfFiscalYear?: MonthEnum;
  readonly TaxForm?: string;
  readonly TaxYearMonth?: string;
  readonly UseAccountNumbers?: boolean;
  ClassTrackingPerTxn?: boolean;
  ClassTrackingPerTxnLine?: boolean;
  CustomerTerminology?: string;
  DepartmentTerminology?: string;
  TrackDepartments?: boolean;
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
export type CreateAccountObject = Omit<
  AccountObject,
  | "Id"
  | "Classification"
  | "CurrentBalance"
  | "CurrentBalanceWithSubAccounts"
  | "FullyQualifiedName"
  | "SubAccount"
  | "SyncToken"
>;
export type CreateBillObject = Omit<
  BillObject,
  "Id" | "Balance" | "HomeBalance" | "RecurDataRef" | "SyncToken" | "TotalAmt"
>;
export type CreateBillPaymentObject = Omit<
  BillPaymentObject,
  "Id" | "SyncToken"
>;
export type CreateCustomerObject = Omit<
  CustomerObject,
  | "Id"
  | "CurrencyRef"
  | "FullyQualifiedName"
  | "IsProject"
  | "Level"
  | "SyncToken"
>;
export type CreateEstimateObject = Omit<
  EstimateObject,
  | "Id"
  | "HomeTotalAmt"
  | "RecurDataRef"
  | "SyncToken"
  | "TaxExemptionRef"
  | "TotalAmt"
>;
export type CreateInvoiceObject = Omit<
  InvoiceObject,
  | "Id"
  | "Balance"
  | "DeliveryInfo"
  | "HomeBalance"
  | "HomeTotalAmt"
  | "InvoiceLink"
  | "RecurDataRef"
  | "SyncToken"
  | "TaxExemptionRef"
  | "TotalAmt"
>;
export type CreateItemObject = Omit<
  ItemObject,
  "Id" | "FullyQualifiedName" | "Level" | "SyncToken"
>;
export type CreateJournalEntryObject = Omit<
  JournalEntryObject,
  "Id" | "HomeTotalAmt" | "RecurDataRef" | "SyncToken" | "TotalAmt"
>;
export type CreatePaymentObject = Omit<
  PaymentObject,
  "Id" | "SyncToken" | "TaxExemptionRef" | "UnappliedAmt"
>;
export type CreatePurchaseOrderObject = Omit<
  PurchaseOrderObject,
  "Id" | "RecurDataRef" | "SyncToken" | "TotalAmt"
>;
export type CreateVendorObject = Omit<
  VendorObject,
  "Id" | "Balance" | "CurrencyRef" | "SyncToken"
>;
export type CreditCardPayment = {
  CreditChargeInfo?: CreditChargeInfo;
  CreditChargeResponse?: CreditChargeResponse;
};
export type CreditChargeInfo = {
  Amount?: number;
  BillAddrStreet?: string;
  CcExpiryMonth?: number;
  CcExpiryYear?: number;
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
export type CurrencyPrefs = {
  readonly HomeCurrency?: ReferenceType;
  readonly MultiCurrencyEnabled?: boolean;
};
export type CurrencyRef = {
  name?: string;
  value: string;
};
export type CustomField = {
  readonly DefinitionId: string;
  readonly Name?: string;
  readonly Type?: string;
  StringValue?: string;
};
export type CustomerObject = {
  readonly Id: string;
  readonly CurrencyRef?: CurrencyRef;
  readonly FullyQualifiedName?: string;
  readonly IsProject?: boolean;
  readonly Level?: number;
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
  GSTRegistrationType?: GSTRegistrationTypeEnum;
  GivenName?: string;
  Job?: boolean;
  MetaData?: ModificationMetaData;
  MiddleName?: string;
  Mobile?: TelephoneNumber;
  Notes?: string;
  OpenBalanceDate?: Date;
  ParentRef?: ReferenceType;
  PaymentMethodRef?: ReferenceType;
  PreferredDeliveryMethod?: DeliveryMethodEnum;
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
  WebAddr?: WebsiteAddress;
};
export type CustomerTypeRef = {
  value: string;
};
export type DeleteBillObject = {
  Id: string;
  SyncToken: string;
};
export type DeleteInvoiceObject = {
  Id: string;
  SyncToken: string;
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
  readonly Id?: string;
  readonly Amount?: number;
  Description?: string;
  DescriptionLineDetail: DescriptionLineDetail;
  DetailType: LineDetailTypeEnum.DescriptionOnly;
  LineNum?: number;
};
export type DiscountLine = {
  readonly Id?: string;
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
export type EmailMessageType = {
  Message?: string;
  Subject?: string;
};
export type EmailMessagesPrefs = {
  EstimateMessage?: EmailMessageType;
  InvoiceMessage?: EmailMessageType;
  SalesReceiptMessage?: EmailMessageType;
  StatementMessage?: EmailMessageType;
};
export type Entity = {
  EntityRef: ReferenceType;
  Type?: EntityTypeEnum;
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
  EmailStatus?: EmailStatusEnum;
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
  readonly Id?: string;
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
  EmailStatus?: EmailStatusEnum;
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
  readonly Id?: string;
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
export type ItemObject = {
  readonly Id: string;
  readonly FullyQualifiedName?: string;
  readonly Level?: number;
  readonly SyncToken: string;
  AbatementRate?: number;
  Active?: boolean;
  AssetAccountRef?: ReferenceType;
  ClassRef?: ReferenceType;
  Description?: string;
  ExpenseAccountRef?: ReferenceType;
  IncomeAccountRef?: ReferenceType;
  InvStartDate?: Date;
  ItemCategoryType: string;
  MetaData?: ModificationMetaData;
  Name: string;
  ParentRef?: ReferenceType;
  PrefVendorRef?: ReferenceType;
  PurchaseCost?: number;
  PurchaseDesc?: string;
  PurchaseTaxCodeRef?: ReferenceType;
  PurchaseTaxIncluded?: boolean;
  QtyOnHand?: number;
  ReorderPoint?: number;
  ReverseChargeRate?: number;
  SalesTaxCodeRef?: ReferenceType;
  SalesTaxIncluded?: boolean;
  ServiceType?: string;
  Sku?: string;
  Source?: string;
  SubItem?: boolean;
  TaxClassificationRef?: ReferenceType;
  Taxable?: boolean;
  TrackQtyOnHand?: boolean;
  Type?: string;
  UQCDisplayText?: string;
  UQCId?: string;
  UnitPrice?: number;
};
export type JournalEntryLine = {
  readonly Id?: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.JournalEntryLineDetail;
  JournalEntryLineDetail: JournalEntryLineDetail;
  LineNum?: number;
};
export type JournalEntryLineDetail = {
  AccountRef: ReferenceType;
  BillableStatus?: BillableStatusEnum;
  ClassRef?: ReferenceType;
  DepartmentRef?: ReferenceType;
  Entity?: Entity;
  JournalCodeRef: ReferenceType;
  PostingType: PostingTypeEnum;
  TaxAmount?: number;
  TaxApplicableOn?: TaxApplicableOnEnum;
  TaxCodeRef?: ReferenceType;
  TaxInclusiveAmt?: number;
};
export type JournalEntryObject = {
  readonly Id: string;
  readonly HomeTotalAmt?: number;
  readonly RecurDataRef?: ReferenceType;
  readonly SyncToken: string;
  readonly TotalAmt?: number;
  Adjustment?: boolean;
  CurrencyRef?: CurrencyRef;
  DocNumber?: string;
  ExchangeRate?: number;
  GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  Line: (JournalEntryLine | DescriptionOnlyLine)[];
  MetaData?: ModificationMetaData;
  PrivateNote?: string;
  TaxRateRef?: ReferenceType;
  TransactionLocationType?: string;
  TxnDate?: Date;
  TxnTaxDetail?: TxnTaxDetail;
};
export type LineLinkedTxn = {
  Amount: number;
  LinkedTxn: LinkedTxn[];
};
export type LinkedTxn = {
  TxnId: string;
  TxnLineId?: string;
  TxnType: TxnTypeEnum;
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
  readonly Id?: string;
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
export type PreferencesObject = {
  readonly Id: string;
  readonly SyncToken: string;
  AccountingInfoPrefs?: AccountingInfoPrefs;
  CurrencyPrefs?: CurrencyPrefs;
  EmailMessagesPrefs?: EmailMessagesPrefs;
  MetaData?: ModificationMetaData;
  OtherPrefs?: undefined;
  ProductAndServicesPrefs?: ProductAndServicesPrefs;
  ReportPrefs?: ReportPrefs;
  SalesFormsPrefs?: SalesFormsPref;
  TaxPrefs?: TaxPrefs;
  TimeTrackingPrefs?: TimeTrackingPrefs;
  VendorAndPurchasesPrefs?: VendorAndPurchasePrefs;
};
export type ProductAndServicesPrefs = {
  ForPurchase?: boolean;
  ForSales?: boolean;
  QuantityOnHand?: boolean;
  QuantityWithPriceAndRate?: boolean;
  RecognitionFrequencyType?: string;
  RevenueRecognitionEnabled?: boolean;
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
  EmailStatus?: EmailStatusEnum;
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
export type ReportPrefs = {
  readonly CalcAgingReportFromTxnDate?: boolean;
  ReportBasis?: ReportBasisEnum;
};
export type SalesFormsPref = {
  readonly AutoApplyCredit?: boolean;
  readonly CustomField?: CustomField;
  readonly ETransactionEnabledStatus?: ETYransactionEnabledStatusEnum;
  readonly EstimateMessage?: string;
  readonly IPNSupportEnabled?: boolean;
  readonly UsingPriceLevels?: boolean;
  readonly UsingProgressInvoicing?: boolean;
  AllowDeposit?: boolean;
  AllowDiscount?: boolean;
  AllowEstimates?: boolean;
  AllowServiceDate?: boolean;
  AllowShipping?: boolean;
  CustomTxnNumbers?: boolean;
  DefaultCustomerMessage?: string;
  DefaultDiscountAccount?: boolean;
  DefaultShippingAccount?: boolean;
  DefaultTerms?: ReferenceType;
  ETransactionAttachPDF?: boolean;
  ETransactionPaymentEnabled?: boolean;
  EmailCopyToCompany?: boolean;
  SalesEmailBcc?: EmailAddress;
  SalesEmailCc?: EmailAddress;
};
export type SalesItemLine = {
  readonly Id?: string;
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
  readonly Id?: string;
  Amount: number;
  Description?: string;
  DetailType: LineDetailTypeEnum.SubtotalLineDetail;
  LineNum?: number;
  SubtotalLineDetail: SubTotalLineDetail;
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
export type TaxPrefs = {
  readonly PartnerTaxEnabled?: boolean;
  readonly TaxGroupCodeRef?: string;
  readonly UsingSalesTax?: boolean;
};
export type TelephoneNumber = {
  FreeFormNumber?: string;
};
export type TimeTrackingPrefs = {
  readonly MarkTimeEntriesBillable?: boolean;
  readonly WorkWeekStartDate?: WeekEnum;
  BillCustomers?: boolean;
  ShowBillRateToAll?: boolean;
  UsingSalesTax?: boolean;
};
export type TxnTaxDetail = {
  TaxLine?: TaxLine[];
  TotalTax?: number;
  TxnTaxCodeRef?: ReferenceType;
};
export type UpdateAccountObject = Omit<
  AccountObject,
  | "Classification"
  | "CurrentBalance"
  | "CurrentBalanceWithSubAccounts"
  | "FullyQualifiedName"
  | "SubAccount"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateBillObject = Omit<
  BillObject,
  "Balance" | "HomeBalance" | "RecurDataRef" | "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateBillPaymentObject = {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateCustomerObject = Omit<
  CustomerObject,
  "CurrencyRef" | "FullyQualifiedName" | "IsProject" | "Level"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateEstimateObject = Omit<
  EstimateObject,
  "HomeTotalAmt" | "RecurDataRef" | "TaxExemptionRef" | "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateInvoiceObject = Omit<
  InvoiceObject,
  | "Balance"
  | "DeliveryInfo"
  | "HomeBalance"
  | "HomeTotalAmt"
  | "InvoiceLink"
  | "RecurDataRef"
  | "TaxExemptionRef"
  | "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateItemObject = Omit<
  ItemObject,
  "FullyQualifiedName" | "Level"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateJournalEntryObject = Omit<
  JournalEntryObject,
  "HomeTotalAmt" | "RecurDataRef" | "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdatePaymentObject = Omit<
  PaymentObject,
  "TaxExemptionRef" | "UnappliedAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdatePreferencesObject = {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdatePurchaseOrderObject = Omit<
  PurchaseOrderObject,
  "RecurDataRef" | "TotalAmt"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type UpdateVendorObject = Omit<
  VendorObject,
  "Balance" | "CurrencyRef"
> & {
  Id: string;
  SyncToken: string;
  sparse?: boolean;
};
export type VendorAndPurchasePrefs = {
  readonly POCustomField?: CustomField;
  readonly TPAREnabled?: boolean;
  BillableExpenseTracking?: boolean;
  DefaultMarkup?: number;
  DefaultMarkupAccount?: ReferenceType;
  DefaultTerms?: ReferenceType;
  TrackingByCustomer?: boolean;
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
  GSTRegistrationType?: GSTRegistrationTypeEnum;
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
  TaxReportingBasis?: TaxReportingBasisEnum;
  TermRef?: ReferenceType;
  Title?: string;
  Vendor1099?: boolean;
  VendorPaymentBankDetail?: VendorPaymentBankDetail;
  WebAddr?: WebsiteAddress;
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

// Account batch types
export interface BatchAccountItemRequest extends BatchItemRequestBase {
  Account: AccountObject;
  operation: BatchOperation.QUERY;
}
export interface BatchAccountCreateItemRequest extends BatchItemRequestBase {
  Account: CreateAccountObject;
  operation: BatchOperation.CREATE;
}
export interface BatchAccountUpdateItemRequest extends BatchItemRequestBase {
  Account: UpdateAccountObject;
  operation: BatchOperation.UPDATE;
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
// Item batch types
export interface BatchItemItemRequest extends BatchItemRequestBase {
  Item: ItemObject;
  operation: BatchOperation.QUERY;
}
export interface BatchItemCreateItemRequest extends BatchItemRequestBase {
  Item: CreateItemObject;
  operation: BatchOperation.CREATE;
}
export interface BatchItemUpdateItemRequest extends BatchItemRequestBase {
  Item: UpdateItemObject;
  operation: BatchOperation.UPDATE;
}
// JournalEntry batch types
export interface BatchJournalEntryItemRequest extends BatchItemRequestBase {
  JournalEntry: JournalEntryObject;
  operation: BatchOperation.QUERY;
}
export interface BatchJournalEntryCreateItemRequest
  extends BatchItemRequestBase {
  JournalEntry: CreateJournalEntryObject;
  operation: BatchOperation.CREATE;
}
export interface BatchJournalEntryUpdateItemRequest
  extends BatchItemRequestBase {
  JournalEntry: UpdateJournalEntryObject;
  operation: BatchOperation.UPDATE;
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
export type BatchItemRequest =
  | BatchAccountItemRequest
  | BatchAccountCreateItemRequest
  | BatchAccountUpdateItemRequest
  | BatchBillItemRequest
  | BatchBillCreateItemRequest
  | BatchBillUpdateItemRequest
  | BatchBillDeleteItemRequest
  | BatchBillPaymentItemRequest
  | BatchBillPaymentCreateItemRequest
  | BatchBillPaymentUpdateItemRequest
  | BatchCustomerItemRequest
  | BatchCustomerCreateItemRequest
  | BatchCustomerUpdateItemRequest
  | BatchEstimateItemRequest
  | BatchEstimateCreateItemRequest
  | BatchEstimateUpdateItemRequest
  | BatchInvoiceItemRequest
  | BatchInvoiceCreateItemRequest
  | BatchInvoiceUpdateItemRequest
  | BatchInvoiceDeleteItemRequest
  | BatchItemItemRequest
  | BatchItemCreateItemRequest
  | BatchItemUpdateItemRequest
  | BatchJournalEntryItemRequest
  | BatchJournalEntryCreateItemRequest
  | BatchJournalEntryUpdateItemRequest
  | BatchPaymentItemRequest
  | BatchPaymentCreateItemRequest
  | BatchPaymentUpdateItemRequest
  | BatchPurchaseOrderItemRequest
  | BatchPurchaseOrderCreateItemRequest
  | BatchPurchaseOrderUpdateItemRequest
  | BatchVendorItemRequest
  | BatchVendorCreateItemRequest
  | BatchVendorUpdateItemRequest;

export type BatchItemResponse = {
  bId: `bId${number}`;
  Fault?: Record<string, unknown>;
  Account?: AccountObject;
  Bill?: BillObject;
  BillPayment?: BillPaymentObject;
  Customer?: CustomerObject;
  Estimate?: EstimateObject;
  Invoice?: InvoiceObject;
  Item?: ItemObject;
  JournalEntry?: JournalEntryObject;
  Payment?: PaymentObject;
  PurchaseOrder?: PurchaseOrderObject;
  Vendor?: VendorObject;
};

export type AccountQuery = {
  QueryResponse: {
    Account: AccountObject[];
  };
  time: Date;
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

export type ItemQuery = {
  QueryResponse: {
    Item: ItemObject[];
  };
  time: Date;
};

export type JournalEntryQuery = {
  QueryResponse: {
    JournalEntry: JournalEntryObject[];
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
export interface BatchItemRequestBase {
  bId: `bId${number}`;
  operation: BatchOperation;
}

export interface BatchItemResponseObj {
  BatchItemResponse: BatchItemResponse[];
}

export type QueryCriteriaObject =
  | {
      limit?: number;
      offset?: number;
      fetchAll?: boolean;
      desc?: boolean;
      asc?: boolean;
    }
  | Record<string, string>;

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
  OtherIncome = "Other Income",
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
  Vehicles = "Vehicles",
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
  EMAIL = "Email",
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
  ACCURAL = "Accrual",
}

// Transaction types
export enum TxnTypeEnum { // TODO: add more types
  BILL = "Bill",
  BILL_PAYMENT = "BillPayment",
  BILL_PAYMENT_CHECK = "BillPaymentCheck",
  ESTIMATE = "Estimate",
  INVOICE = "Invoice",
  PAYMENT = "Payment",
  PURCHASE_ORDER = "PurchaseOrder",
}

export enum GSTRegistrationTypeEnum {
  CONSUMER = "CONSUMER",
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

export enum ReportBasisEnum {
  Accrual = "Accrual",
  Cash = "Cash",
}

export enum MonthEnum {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export enum WeekEnum {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum ETYransactionEnabledStatusEnum {
  Enabled = "Enabled",
  Disabled = "Disabled",
}
// End of script generated types
