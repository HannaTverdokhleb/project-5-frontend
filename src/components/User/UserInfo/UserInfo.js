import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className={css.userInfoWrapper}>
      <p className={css.userName}>{user.name}</p>
      {user.avatarURL ? (
        <img
          src={`${user.avatarURL}`}
          alt="User"
          className={css.userAvatarImg}
        />
      ) : (
        <p className={css.userAvatar}>{user.name.slice(0, 1)}</p>
      )}
    </div>
  );
};

export default UserInfo;
