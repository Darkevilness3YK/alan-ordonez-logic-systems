
// Component imports //
import UserCard from './UserCard.js';

const UserCardList = ({ usersJson }) => {
  console.log(usersJson);
  return (
    <div className="cardPageContainer">
      {usersJson.map(user => (
        <span className="cardContainer" key={user.id}>
          <UserCard user={user} />
        </span>
      ))}
    </div>
  );
}

export default UserCardList;
