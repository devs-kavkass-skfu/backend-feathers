import app from '../../src/app';

describe('\'vacancies\' service', () => {
  it('registered the service', () => {
    const service = app.service('vacancies');
    expect(service).toBeTruthy();
  });
});
