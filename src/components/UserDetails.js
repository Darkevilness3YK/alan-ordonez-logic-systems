
// React imports //
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Component imports //
import UserNotFound from './UserNotFound.js';
import MainMenuButton from './MainMenuButton.js'

// CSS imports //
import '../static/css/index.css';

const UserDetails = ({ usersJson }) => {
  const { userId } = useParams();
  const user = usersJson.find(user => user.id === parseInt(userId));

  if (!user) {
    return (
      <UserNotFound userId = {userId}/>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Catálogo - {user.name}</title>
      </Helmet>
      <div class="userDetailsPageContainer">
        <div className="userDetailsProfilePhotoContainer">
          <h1><center className="userDetailTitle">Detalles de usuario</center></h1>
        </div>

        <div className="userDetailsProfilePhotoContainer">
          <h1><center className="userDetailTitle">{user.name}</center></h1>
          <div className="userDetailsDetailsContainer">
            <img className="userDetailsProfilePhoto" src={require(`../static/images/userProfilePhotos/${user.name}.jpg`)} alt={user.name} />
          </div>
        </div>

        <div className="userDetailsContainer">
          <h2><center className="userDetailTitle">Datos personales</center></h2>
          <div className="userDetailsDetailsContainer">
            <span className="userDetail"><strong className="userDetailSpan">ID:</strong><span className="userDetailSpan">{user.id}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Nombre:</strong><span className="userDetailSpan">{user.name}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Nombre de usuario:</strong><span className="userDetailSpan">{user.username}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">E-mail:</strong><span className="userDetailSpan">{user.email}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Teléfono:</strong><span className="userDetailSpan">{user.phone}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Sitio web:</strong><span className="userDetailSpan">{user.website}</span></span>
          </div>
        </div>

        <div className="userDetailsContainer">
          <h2><center className="userDetailTitle">Detalles de dirección</center></h2>
          <div className="userDetailsDetailsContainer">
            <span className="userDetail"><strong className="userDetailSpan">Dirección:</strong><span className="userDetailSpan">{user.address.street}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Residencia:</strong><span className="userDetailSpan">{user.address.suite}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Ciudad:</strong><span className="userDetailSpan">{user.address.city}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Código postal:</strong><span className="userDetailSpan">{user.address.zipcode}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Latitud geográfica:</strong><span className="userDetailSpan">{user.address.geo.lat}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Longitud geográfica:</strong><span className="userDetailSpan">{user.address.geo.lng}</span></span>
          </div>
        </div>

        <div className="userDetailsContainer">
          <h2><center className="userDetailTitle">Datos de compañía</center></h2>
          <div className="userDetailsDetailsContainer">
            <span className="userDetail"><strong className="userDetailSpan">Nombre:</strong><span className="userDetailSpan">{user.company.name}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Eslógan:</strong><span className="userDetailSpan">{user.company.catchPhrase}</span></span>
            <span className="userDetail"><strong className="userDetailSpan">Servicios:</strong><span className="userDetailSpan">{user.company.bs}</span></span>
          </div>
        </div>
        <MainMenuButton/>
      </div>
    </div>
  );
};

export default UserDetails;
