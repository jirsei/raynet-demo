import type Company from '@/types/company';

export default interface CompanyStoreState {
  companies: Company[];
  loading: boolean;
  loaded: boolean;
  error: string | null;

  fetchCompanies: (force?: boolean, fulltext?: string) => Promise<void>;
}
