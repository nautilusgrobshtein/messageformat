module.exports = function(value, offset, lcfunc, data, isOrdinal) {
	if ({}.hasOwnProperty.call(data, value)) return data[value];
	if (offset) value -= offset;
	var key = lcfunc(value, isOrdinal);
	if (key in data) return data[key];
	return data.other;
};
