// Initializes the `resumes` service on path `/resumes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Resumes } from './resumes.class';
import createModel from '../../models/resumes.model';
import hooks from './resumes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'resumes': Resumes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/resumes', new Resumes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('resumes');

  service.hooks(hooks);
}
