export interface IdValuePair {
  id: number;
  value: string;
}

export interface Owner {
  id: number;
  fullName: string;
}

export interface Address {
  id: number;
  city: string;
  country: string;
  name: string;
  province: string;
  street: string;
  zipCode: string;
  lat: number | null;
  lng: number | null;
}

export interface ContactInfo {
  email: string;
  email2: string | null;
  primary: boolean;
  tel1: string;
  tel1Type: string;
  tel2: string;
  tel2Type: string;
  www: string | null;
  otherContact: string | null;
}

export interface AddressWrapper {
  id: number;
  primary: boolean;
  contactAddress: boolean;
  address: Address;
  territory: IdValuePair;
  contactInfo: ContactInfo;
  extIds: string[] | number[] | null;
}

export interface SecurityLevel {
  id: number;
  name: string;
}

export interface InlineGdpr {
  id: number;
  validFrom: string;
  validTill: string;
  legalTitle: string;
  templateName: string;
  gdprTemplate: number;
}

export interface RowInfo {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  rowAccess: string | null;
  rowState: string | null;
}

export default interface Client {
  id: number;
  name: string;
  titleBefore: string | null;
  firstName: string | null;
  lastName: string | null;
  titleAfter: string | null;
  person: boolean;
  role: string;
  state: string;
  rating: string;
  owner: Owner;
  regNumber: string;
  taxNumber: string;
  taxNumber2: string | null;
  taxPayer: string;
  bankAccount: string | null;
  databox: string | null;
  court: string | null;
  primaryAddress: AddressWrapper;
  contactAddress: AddressWrapper;
  category: IdValuePair;
  turnover: IdValuePair;
  economyActivity: IdValuePair;
  companyClassification1: IdValuePair;
  companyClassification2: IdValuePair;
  companyClassification3: IdValuePair;
  paymentTerm: IdValuePair;
  contactSource: IdValuePair;
  birthday: string | null;
  notice: string;
  tags: string[];
  customFields: [] | null;
  rowInfo: RowInfo;
  securityLevel: SecurityLevel;
  inlineGdpr: InlineGdpr[];
  _version: number;
}
