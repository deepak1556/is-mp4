# is-mp4 [![Build Status](https://travis-ci.org/deepak1556/is-mp4.svg?branch=master)](https://travis-ci.org/deepak1556/is-mp4)

> Check if a Buffer/Uint8Array is a [MP4](http://en.wikipedia.org/wiki/MPEG-4_Part_14) video


## Install

```sh
$ npm install --save is-mp4
```

```sh
$ bower install --save is-mp4
```

```sh
$ component install deepak1556/is-mp4
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isMP4 = require('is-mp4');
var buffer = readChunk.sync('bigbuckbunny.mp4', 0, 8);

isMP4(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'bigbuckbunny.mp4');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isMP4(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isMP4(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 8 bytes.
