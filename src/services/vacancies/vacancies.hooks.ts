import { setField } from 'feathers-authentication-hooks';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setField({ from: 'params.user.id', as: 'params.query.id' })],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
