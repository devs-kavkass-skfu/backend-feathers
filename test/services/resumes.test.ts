import app from '../../src/app';

describe('\'resumes\' service', () => {
  it('registered the service', () => {
    const service = app.service('resumes');
    expect(service).toBeTruthy();
  });
});
