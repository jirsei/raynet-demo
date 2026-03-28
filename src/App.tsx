import './App.css';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Container className="app-container d-flex flex-column min-vh-100">
      <Typography variant="h1" sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>
        Welcome to Raynet Demo
      </Typography>
    </Container>
  );
}

export default App;
