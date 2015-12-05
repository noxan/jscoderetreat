var expect = require('unexpected');

var gol = require('../gol');

describe('gameoflife', () => {
  describe('single neighbor', () => {
    it('should die', () => {
      expect(gol.alive(5, 2), 'to be falsy');
    });
  });
});
