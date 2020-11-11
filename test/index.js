const app = require('../src/');
const request = require('supertest');

describe('Basics', () => {

  it('should do nothing', () => {
    request(app).get('/').expect(200, (err, res) => {

    });
  });

});
