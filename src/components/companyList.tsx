import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type Client from '@/types/company';

interface CompanyListProps {
  companies: Client[];
  onSelectCompany?: (company: Client) => void;
}

const columns = [
  { key: 'name', label: 'NÁZEV/JMÉNO', width: 280 },
  { key: 'state', label: 'STAV', width: 120 },
  { key: 'relation', label: 'VZTAH', width: 120 },
  { key: 'rating', label: 'RATING', width: 100 },
  { key: 'owner', label: 'VLASTNÍK', width: 180 },
  { key: 'regNumber', label: 'IČ', width: 120 },
  { key: 'city', label: 'MĚSTO', width: 140 },
  { key: 'category', label: 'KATEGORIE', width: 180 },
] as const;

const gridTemplateColumns = columns.map((column) => `${column.width}px`).join(' ');
const gridMinWidth = columns.reduce((sum, column) => sum + column.width, 0) + 136;

const getDisplayName = (company: Client) => {
  if (company.person) {
    const personName = [
      company.titleBefore,
      company.firstName,
      company.lastName,
      company.titleAfter,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    return personName || company.name || '-';
  }

  return company.name || '-';
};

const getDisplayCity = (company: Client) => {
  return company.primaryAddress?.address?.city || company.contactAddress?.address?.city || '-';
};

const getValueOrFallback = (value: string | null | undefined) => {
  return value && value.trim() ? value : '-';
};

const cellTextSx = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default function CompanyList({ companies, onSelectCompany }: CompanyListProps) {
  return (
    <Stack
      spacing={0.6}
      sx={{
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns,
          minWidth: gridMinWidth,
          width: 'max-content',
          gap: 2,
          px: 1.5,
          py: 0.75,
        }}
      >
        {columns.map((column) => (
          <Typography
            key={column.key}
            variant="caption"
            sx={{
              ...cellTextSx,
              fontWeight: 700,
              color: 'text.secondary',
              textTransform: 'uppercase',
            }}
          >
            {column.label}
          </Typography>
        ))}
      </Box>

      {companies.map((company) => (
        <Box
          key={company.id}
          onClick={() => onSelectCompany?.(company)}
          sx={{
            display: 'grid',
            gridTemplateColumns,
            minWidth: gridMinWidth,
            width: 'max-content',
            gap: 2,
            alignItems: 'center',
            height: 32,
            maxHeight: 32,
            boxSizing: 'border-box',
            px: 1.5,
            py: 0,
            borderRadius: 1.5,
            bgcolor: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            '&:hover': {
              bgcolor: '#eaf4ff',
            },
          }}
        >
          <Typography variant="body2" sx={cellTextSx}>
            {getDisplayName(company)}
          </Typography>
          <Typography variant="body2" sx={cellTextSx}>
            {getValueOrFallback(company.state)}
          </Typography>
          <Typography variant="body2" sx={cellTextSx}>
            {getValueOrFallback(company.role)}
          </Typography>
          <Typography variant="body2" sx={cellTextSx}>
            {getValueOrFallback(company.rating)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 0 }}>
            <AccountCircleOutlinedIcon
              sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }}
            />
            <Typography variant="body2" sx={{ ...cellTextSx, flex: 1 }}>
              {getValueOrFallback(company.owner?.fullName)}
            </Typography>
          </Box>
          <Typography variant="body2" sx={cellTextSx}>
            {getValueOrFallback(company.regNumber)}
          </Typography>
          <Typography variant="body2" sx={cellTextSx}>
            {getDisplayCity(company)}
          </Typography>
          <Typography variant="body2" sx={cellTextSx}>
            {getValueOrFallback(company.category?.value)}
          </Typography>
        </Box>
      ))}

      <Box
        sx={{
          minWidth: gridMinWidth,
          width: 'max-content',
          flexGrow: 1,
        }}
      />
    </Stack>
  );
}
