var expect = require('unexpected');

var gol = require('../gol');


describe('gameoflife', () => {
  describe('number of neighbors', () => {
    expect(gol.neighborCount({
      n: true,
      w: true,
    }), 'to be', 2);
  });
  describe('single neighbor', () => {
    it('should die', () => {
      expect(gol.alive(5, 2), 'to be falsy');
    });
  });
});
