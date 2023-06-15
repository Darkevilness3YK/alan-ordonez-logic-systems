
// React imports //
import { Helmet } from 'react-helmet';

// Component imports //
import MainMenuButton from './MainMenuButton.js';
import logo from '../static/images/logo.svg';

// CSS imports //
import '../static/css/index.css';
import { Typography } from '@mui/material';

const UserNotFound = ({ userId }) => {
  return (
    <div>
      <Helmet>
        <title>Catálogo - Usuario no encontrado</title>
      </Helmet>
      <div className='userDetailsUserNotFoundPageContainer'>
        <div style={{ paddingTop: '2rem'}}>
          <Typography
            fontSize='150%'
            fontWeight="strong"
            fontFamily='Segoe UI Black'
            color='whitesmoke'
            style={{ webkitTextStroke: '2px black', textStroke: '2px black' }}>
            <h1><center>¡Vaya! ¿Cómo llegaste hasta aquí?</center></h1>
          </Typography>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" width="300px" height="auto"/>
        </div>
        <div style={{ paddingBottom: '2rem'}}>
          <Typography
            fontSize='120%'
            fontWeight="strong"
            fontFamily='Segoe UI Black'
            color='whitesmoke'
            style={{ webkitTextStroke: '2px black', textStroke: '2px black' }}>
            <h1><center>El usuario con la ID {userId} no existe... aún</center></h1>
          </Typography>
        </div>
        <MainMenuButton />
      </div>
    </div>
  );
};

export default UserNotFound;