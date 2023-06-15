
// React imports //
import { Link } from 'react-router-dom';

// CSS imports //
import '../static/css/index.css';

// Component imports //
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ height: '31rem' }}>
        <div className='cardImageContainer'>
          <CardMedia
            component="img"
            height="230"
            style={{
              width: 'auto',
              margin: 'auto',
              position: 'relative',
              top: '-3.5rem',
            }}
            image={require(`../static/images/userProfileBanners/${user.name}.jpg`)}
            alt={`${user.name} Banner`}
          />
          <CardMedia
            component="img"
            height="140"
            style={{
              width: 'auto',
              margin: 'auto',
              borderRadius: '100%',
              position: 'absolute',
              top: '65%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0px 10px 16px rgba(0, 0, 0, 0.4)'
            }}
            image={require(`../static/images/userProfilePhotos/${user.name}.jpg`)}
            alt={user.name}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h4" fontWeight="bold" component="div">
            {user.name}
          </Typography>
          <Typography fontSize='1rem' color="text.secondary">
            <Typography variant="body" component="strong">Email:</Typography> {user.email} <br /><br />
            <Typography variant="body" component="strong">Ciudad:</Typography> {user.address.city} <br /><br />
            <Typography variant="body" component="strong">Nombre de la compañía:</Typography> {user.company.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/${user.id}`} style={{ margin: 'auto', height: '3rem', width: '100%' }} >
        <Button size="small" color="primary" style={{ height: '3rem', width: '100%' }} >
          <Typography fontSize='1rem' fontWeight='bold'>Ver más</Typography>
        </Button>
      </Link>
    </Card>
  );
}

export default UserCard;
