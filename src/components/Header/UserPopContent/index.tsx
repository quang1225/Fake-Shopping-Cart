import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import CommonButton from '../../elements/CommonButton';
import { useAppDispatch, useAppSelector } from 'src/state/store';
import { Wrapper } from './styles';
import { loginUser, logoutUser } from 'src/state/slices/userSlice';
import { CircularProgress } from '@mui/material';

const UserPopContent = () => {
  const { detail, isLoadingUser } = useAppSelector(appState => appState.user);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <>
        {!detail.id && (
          <CommonButton
            content={
              isLoadingUser ? <CircularProgress size="2.3rem" /> : 'Log in'
            }
            size="wide"
            color="dark"
            animation="color"
            onClick={() => dispatch(loginUser())}
          />
        )}

        {detail.id && (
          <>
            <div className="user_info">
              <div className="fullname">
                {detail.name.firstname} {detail.name.lastname}
              </div>
              <div className="email">
                <HiOutlineMail />
                {detail.email}
              </div>
              <hr />
              <div className="username">
                <FaRegUser />
                {detail.username}
              </div>
              <div className="password">
                <RiLockPasswordLine /> {detail.password}
              </div>
              <hr />
              <div className="address">
                <HiOutlineLocationMarker /> {detail.address.street},{' '}
                {detail.address.city}
              </div>
              <div className="phone">
                <BsTelephone />
                {detail.phone}
              </div>
            </div>

            <CommonButton
              content="Log out"
              size="wide"
              color="dark"
              animation="color"
              onClick={() => dispatch(logoutUser())}
            />
          </>
        )}
      </>
    </Wrapper>
  );
};

export default UserPopContent;
