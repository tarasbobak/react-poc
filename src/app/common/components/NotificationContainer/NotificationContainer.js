import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const NotificationContainer = (props) => {
  const { notifications } = props;
  const style = {
    NotificationItem: {
      DefaultStyle: {
        margin: '10px'
      },
      success: {
        color: 'green'
      }
    }
  };

  return (
    <Notifications
      notifications={notifications}
      style={style}
    />
  );
};

NotificationContainer.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(NotificationContainer);
