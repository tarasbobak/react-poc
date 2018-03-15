import DumbService from '../utils/dumbService';
import UsersApiService from '../utils/usersApiService';
import GreetingService from '../utils/greetingService';

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
  dependencies.register('usersApiService', new UsersApiService());
  dependencies.register('greetingService', new GreetingService());
}

export default dependencies;
