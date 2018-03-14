import DumbService from '../../utils/dumbService';
import DataService from '../../utils/dataService';

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
  dependencies.register('dataService', new DataService());
}

export default dependencies;
