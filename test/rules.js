var expect = require('unexpected');

var gol = require('../gol');


describe('gameoflife', function () {
  describe('single neighbor', function () {
    it('should die', function () {
      expect(gol.alive(5, 2), 'to be falsy');
    });
  });
});

module.exports = {};
