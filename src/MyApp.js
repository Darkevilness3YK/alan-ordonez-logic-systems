
// React imports //
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Component imports //
import UserCardList from './components/UserCardList.js';
import UserDetails from './components/UserDetails';

// Data imports //
//import usersJson from './public/data/users.json';

// Esta función permite que, siempre que se cambie de página, se empiece a ver desde la parte superior de esta.
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const MyApp = () => {
  // El siguiente código permite obtener el JSON de https://jsonplaceholder.typicode.com/users.
  const [usersJson, setUsersJson] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsersJson(data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Helmet>
        <title>Catálogo - Menú principal</title>
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={usersJson && <UserCardList usersJson={usersJson} />} />
        <Route path="/:userId" element={usersJson && <UserDetails usersJson={usersJson} />} />
      </Routes>
    </div>
  );
}

export default MyApp;
