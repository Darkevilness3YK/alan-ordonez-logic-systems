
// React imports //
import { Link } from 'react-router-dom';

// Component imports //
import { Button, Typography } from '@mui/material';

// CSS imports //
import '../static/css/index.css';

const MainMenuButton = () => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '1rem'}}>
      <Link to="/" style={{
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none'
      }}>
        <Button size="small" color="primary" style={{
          backgroundColor: 'whitesmoke',
          borderRadius: '1rem',
          height: '4rem',
          width: '85%'
        }}>
          <Typography fontSize='1rem' fontWeight="bold">Volver al menú principal</Typography>
        </Button>
      </Link>
    </div>
  );
};

export default MainMenuButton;
