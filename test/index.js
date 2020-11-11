const app = require('../src/');
const request = require('supertest');

describe('Basics', () => {

  request(app).get('/').expect(200, (err, res) => {
    done();
  });

});
