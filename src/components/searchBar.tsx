import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { type FocusEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  onClear?: () => void;
  placeholder?: string;
  ariaLabel?: string;
};

export default function SearchBar({
  value,
  onChange,
  onBlur,
  onClear,
  placeholder = 'Hledat...',
  ariaLabel = 'search',
}: SearchBarProps) {
  const showMinCharsHint = value.length > 0 && value.length < 3;
  const handleContainerBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onBlur?.();
    }
  };

  return (
    <Box
      onBlur={handleContainerBlur}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid #e0e2e8',
        borderRadius: 16,
        px: 1,
        width: '100%',
        maxWidth: { xs: '100%', sm: 160 },
        height: { xs: 32, sm: 32 },
        '&:hover .search-clear-button': {
          opacity: 1,
          pointerEvents: 'auto',
        },
      }}
    >
      <SearchIcon sx={{ color: '#9ca3af', mr: 0.5, fontSize: 20 }} />
      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        sx={{
          flex: 1,
          '& input': {
            padding: '0',
          },
        }}
        inputProps={{ 'aria-label': ariaLabel }}
      />
      {showMinCharsHint && (
        <Typography
          variant="caption"
          sx={{
            ml: 0.5,
            color: 'text.secondary',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          min. 3 znaky
        </Typography>
      )}
      {value.length > 0 && (
        <IconButton
          className="search-clear-button"
          aria-label="clear search"
          size="small"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          sx={{
            ml: 0.25,
            p: 0.25,
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.15s ease-in-out',
          }}
        >
          <CancelIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    </Box>
  );
}
