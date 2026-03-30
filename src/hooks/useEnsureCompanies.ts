import { useEffect } from 'react';
import useCompanyStore from '@/stores/companyStore';
import type CompanyStoreState from '@/types/companyStoreState';

export default function useEnsureCompanies() {
  const companies = useCompanyStore((state: CompanyStoreState) => state.companies);
  const loading = useCompanyStore((state: CompanyStoreState) => state.loading);
  const loaded = useCompanyStore((state: CompanyStoreState) => state.loaded);
  const error = useCompanyStore((state: CompanyStoreState) => state.error);
  const fetchCompanies = useCompanyStore((state: CompanyStoreState) => state.fetchCompanies);

  useEffect(() => {
    if (!loaded && !loading && !error) {
      void fetchCompanies();
    }
  }, [loaded, loading, error, fetchCompanies]);

  return {
    companies,
    loading,
    loaded,
    error,
    refetchCompanies: (fulltext?: string) => fetchCompanies(true, fulltext),
  };
}
