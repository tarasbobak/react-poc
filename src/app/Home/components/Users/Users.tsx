import React, { Component } from 'react';
import styles from './Users.module.scss';
import usersApiService from '../../../../services/api/userApiService';

interface UsersState {
  users: any[];
}

class Users extends Component<{}, UsersState> {
  public state = {
    users: []
  };

  public componentDidMount() {
    usersApiService.getPopularRepositories().then((users: any) => {
      this.setState({ users });
    });
  }

  public render() {
    return this.state.users.map((user: any) => (
      <div className={styles.user} key={Number(user.id)}>
        <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
        <li key={Number(user.id)} className={styles['users-list']}>
          {user.login}
        </li>
      </div>
    ));
  }
}

export default Users;
