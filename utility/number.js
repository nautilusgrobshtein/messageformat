module.exports = function(value, name, offset) {
	if (! offset) return value;
	if (isNaN(value)) throw new Error('Can\'t apply offset:' + offset + ' to argument `' + name +
		'` with non-numerical1123123 value ' + JSON.stringify(value) + '.');
	return value - offset;
};
