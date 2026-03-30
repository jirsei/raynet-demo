import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type Client from '@/types/company';

interface CompanyDetailProps {
  company: Client;
}

const getValueOrFallback = (value: string | null | undefined) => {
  return value && value.trim() ? value : '-';
};

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

const getAddress = (company: Client) => {
  const address = company.primaryAddress?.address ?? company.contactAddress?.address;
  if (!address) return '-';

  const parts = [address.street, address.zipCode, address.city].filter((part): part is string =>
    Boolean(part?.trim()),
  );

  return parts.length ? parts.join(', ') : '-';
};

const getMapLink = (company: Client) => {
  const address = company.primaryAddress?.address ?? company.contactAddress?.address;
  const lat = address?.lat;
  const lng = address?.lng;

  if (typeof lat !== 'number' || typeof lng !== 'number') {
    return null;
  }

  return `https://www.google.com/maps?q=${lat},${lng}`;
};

const getAvatarLabel = (company: Client) => {
  const source = company.person
    ? [company.firstName, company.lastName].filter(Boolean).join(' ')
    : company.name;

  const initials =
    source
      ?.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase() ?? '';

  return initials || '?';
};

export default function CompanyDetail({ company }: CompanyDetailProps) {
  const mapLink = getMapLink(company);

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        borderRadius: 1.5,
        p: 1.5,
        transition: 'background-color 0.2s ease',
      }}
    >
      <Stack spacing={1.2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
          >
            {getValueOrFallback(company.category?.value)}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
          >
            {getValueOrFallback(company.state)}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
          {getDisplayName(company)}
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: 72,
                height: 72,
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
              }}
            >
              {getAvatarLabel(company)}
            </Avatar>
          </Box>

          <Stack spacing={0.5}>
            <Typography variant="body2">IČ {getValueOrFallback(company.regNumber)}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {getAddress(company)}
            </Typography>
            <Link
              href={mapLink ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color={mapLink ? 'primary' : 'text.disabled'}
              sx={{ pointerEvents: mapLink ? 'auto' : 'none' }}
            >
              Zobrazit na mapě
            </Link>
          </Stack>
        </Box>

        <Typography variant="body2">
          Vlastník: {getValueOrFallback(company.owner?.fullName)}
        </Typography>
      </Stack>
    </Box>
  );
}
