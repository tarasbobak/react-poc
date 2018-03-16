/**
 * Created by spaliichuk on 02/13/18.
 * Promise based HTTP client for the browser and node.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Users.scss';
import withWire from '../../../common/hocs/withWire';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.usersApiService.getPopularRepositories()
      .then((users) => {
        this.setState({ users });
      });
  }

  render() {
    return this.state.users.map(user => (
      <div className={styles.user} key={Number(user.id)}>
        <img
          src={user.avatar_url}
          alt={user.login}
          className={styles.avatar}
        />
        <li key={Number(user.id)} className={styles['users-list']}>
          {user.login}
        </li>
      </div>
    ));
  }
}

Users.propTypes = {
  usersApiService: PropTypes.shape({
    getPopularRepositories: PropTypes.func
  }).isRequired
};

export default withWire(
  Users,
  ['usersApiService'],
  usersApiService => ({ usersApiService })
);
