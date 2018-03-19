import DumbService from '../utils/dumbService';
import UsersApiService from '../utils/usersApiService';
import LoggerService from '../utils/logService';

const dependencies = {
  data: {},
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    this.data[key] = value;
  }
};

export function registerDependencies() {
  dependencies.register('dumbService', new DumbService());
  dependencies.register('loggerService', new LoggerService());
  dependencies.register('usersApiService', new UsersApiService());
}

export default dependencies;
