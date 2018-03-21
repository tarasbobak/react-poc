import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const NotifyButtons = (props) => {
  const {
    notify,
    notification,
    level,
    children
  } = props;

  return (
    <button onClick={() => notify(notification, level)}>
      {children}
    </button>
  );
};

NotifyButtons.propTypes = {
  notification: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  level: PropTypes.string.isRequired,
  notify: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  notify: (notification, level) => {
    dispatch(Notifications.show(notification, level));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotifyButtons);
