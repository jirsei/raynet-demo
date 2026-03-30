import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CompanyDetail from '@/components/companyDetail';
import CompanyList from '@/components/companyList';
import SearchBar from '@/components/searchBar';
import useEnsureCompanies from '@/hooks/useEnsureCompanies';
import { useState } from 'react';
import type Client from '@/types/company';

export default function Klienti() {
  const { companies, loading, error, refetchCompanies } = useEnsureCompanies();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Client | null>(null);

  const displayedCompany = selectedCompany || (companies.length > 0 ? companies[0] : null);

  const handleSearchBlur = () => {
    void refetchCompanies(searchQuery);
  };

  const handleSearchClear = () => {
    void refetchCompanies();
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100dvh - 48px)',
        boxSizing: 'border-box',
        bgcolor: 'background.default',
        p: 5,
        pb: 0,
        mt: 6,
        overflowX: 'hidden',
      }}
    >
      <Toolbar disableGutters sx={{ flexDirection: 'row', alignItems: 'flex-start', gap: 2 }}>
        <Typography variant="h5">Klienti</Typography>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onBlur={handleSearchBlur}
          onClear={handleSearchClear}
          ariaLabel="search clients"
        />
      </Toolbar>

      {loading && <CircularProgress size={28} />}

      {!loading && error && (
        <Box>
          <Typography color="error" sx={{ marginBottom: 1 }}>
            {error}
          </Typography>
        </Box>
      )}

      {!loading && !error && (
        <Box sx={{ flex: 1, minHeight: 0, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1, minHeight: 0, minWidth: 0, alignSelf: 'stretch' }}>
            <CompanyList companies={companies} onSelectCompany={setSelectedCompany} />
          </Box>
          <Box
            sx={{
              flex: '0 0 40%',
              minWidth: 300,
              maxWidth: 350,
              p: 1.5,
              bgcolor: '#ffffff',
              borderRadius: 1.5,
              mb: 5,
              mt: 4,
            }}
          >
            {displayedCompany ? (
              <CompanyDetail company={displayedCompany} />
            ) : (
              <Typography color="text.secondary">Vyberte společnost</Typography>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
