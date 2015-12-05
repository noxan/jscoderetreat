module.exports = {
	alive(x, y) {
		return false;
	},

	neighborCount(neighbors) {
		return Object.keys(neighbors).length;
	},
};
