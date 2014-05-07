'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isMP4 = require('./index');

function check(filename) {
	return isMP4(readChunk.sync(filename, 0, 8));
}

it('should detect MP4 from Buffer', function () {
	assert(check('fixture.mp4'));
	assert(!check('fixture.png'));
});
