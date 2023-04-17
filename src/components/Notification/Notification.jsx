import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

export const Notification = ({ message }) => (
    <NotificationStyled>{message}</NotificationStyled>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
