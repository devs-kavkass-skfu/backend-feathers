import { Hook, HookContext } from '@feathersjs/feathers';
import { alterItems } from 'feathers-hooks-common';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
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

// function setScores(): Hook {
//   return async (context: HookContext) => {
//     const { data} = context

//     return context
//   };
// }
