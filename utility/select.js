module.exports = function(value, data) {
	if ({}.hasOwnProperty.call(data, value)) return data[value];
	return data.other;
}
