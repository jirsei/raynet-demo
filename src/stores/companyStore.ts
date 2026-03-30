import { create } from 'zustand';
import type CompanyStoreState from '@/types/companyStoreState';
import { getCompanies } from '@/api/companyApi';

const useCompanyStore = create<CompanyStoreState>()((set, get) => ({
  companies: [],
  loading: false,
  loaded: false,
  error: null,

  fetchCompanies: async (force = false, fulltext) => {
    const { loading, loaded } = get();
    if (loading || (loaded && !force)) return;

    set({ loading: true, error: null });
    try {
      const response = await getCompanies(fulltext);
      console.log('Companies', response.data);

      set({ companies: response.data, loading: false, loaded: true });
    } catch (err) {
      let errorMessage = 'Failed to fetch companies';
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      set({ error: errorMessage, loading: false });
    }
  },
}));

export default useCompanyStore;
