'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 8) {
		return false;
	}

	return (buf[0] === 0 &&
		buf[1] === 0 &&
		buf[2] === 0 &&
		buf[3] === 24 &&
		buf[4] === 102 &&
		buf[5] === 116 &&
		buf[6] === 121 &&
		buf[7] === 112) || (
    buf[0] === 51 &&
    buf[1] === 103 &&
    buf[2] === 112 &&
    buf[3] === 53)
};
