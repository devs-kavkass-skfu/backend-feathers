import { Application } from '../declarations';
import users from './users/users.service';
import vacancies from './vacancies/vacancies.service';
import resumes from './resumes/resumes.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(vacancies);
  app.configure(resumes);
}
