import DumbService from '../../utils/dumbService';

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
}

export default dependencies;
