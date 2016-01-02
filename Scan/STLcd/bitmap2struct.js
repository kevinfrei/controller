#!/usr/bin/env node
// To use this, you'll need to type 'npm install'
// to get the jimp & minimist modules downloaded
'use strict';

var error = false;
var jimp = require('jimp');
var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['noscaling', 'square', 'invert'],
  alias: {s:'noscaling', q:'square', b:'background', i:'invert'},
  string: 'background',
  default: {background: '0xFFFFFFFF'},
  unknown: function(a) {error = a[0] === '-';}
});
var maxHeight = 32;
var maxWidth = 128; // Default
if (error) {
  console.log("Usage:");
  console.log(process.argv[1], " {options} file(s)...");
  console.log("-s|--noscaling        Disable image scaling");
  console.log("-q|--square           Spit out a 32x32 image (for use as numbers)");
  console.log("-b|--background 0x... Set the background color of the image (quite necessary for PNG's)");
  console.log("-i|--invert           Invert the pixels");
  process.exit(-1);
}
var scale = !argv.noscaling;
if (argv.square) {
  maxWidth = maxHeight;
}
var background = parseInt(argv.background);
var invert = !!argv.invert;
var files = argv._;
var count;

var graphic = function(inHeight, inWidth) {
  var pageWidth = 8;
  var height = inHeight;
  var width = inWidth;

  var pageCount = Math.floor(height / pageWidth);
  var pageLength = width;

  var i, j;
  var tmp;
  var pageData = [];

  for (i = 0; i < pageCount; i++) {
    tmp = [];
    for (j = 0; j < pageLength; j++) {
      tmp.push(0);
    }
    pageData.push(tmp);
  }

  var setPixel = function(x, y) {
    var page = Math.floor((height - y) / pageWidth);
    if (page >= 4) {
      console.log("Out of Bounds: ", x, ",", y);
    }
    var byte = x;
    var bit = Math.floor((height - y) % pageWidth);
    pageData[page][byte] |= (1 << bit);
  };
  var getPage = function (page) {
    return pageData[page];
  };
  var getArray = function () {
    var struct = '{\n';
    var numLines = 0;
    for (i = 0; i < pageCount; i++) {
      for (j = 0; j < pageData[i].length; j++) {
        struct += '0x' + ('0' + pageData[i][j].toString(16)).substr(-2) + ', ';
        if (++numLines === 16) {
          struct += '\n';
          numLines = 0;
        }
      }
    }
    if (numLines !== 0) {
      struct += '\n';
    }
    struct += '}';
    return struct;
  };
  var preview = function () {
    var byte;
    var txt = '+';
    for (i = 0; i < width; i++) {
      txt += '-';
    }
    txt += '+\n';
    for (i = pageCount - 1; i >= 0; i--) {
      for (j = 7; j >= 0; j--) {
        txt += '|';
        for (byte = 0; byte < width; byte++) {
          if (pageData[i][byte] & (1 << j)) {
            txt += '*';
          } else {
            txt += ' ';
          }
        }
        txt += '|\n';
      }
    }
    txt += '+';
    for (i = 0; i < width; i++) {
      txt += '-';
    }
    txt += '+\n';
    return txt;
  };
  return {
    setPixel: setPixel,
    getPage: getPage,
    getArray: getArray,
    preview: preview
  };
};

for (count = 0; count < files.length; count++) {
  jimp.read(files[count]).then(function (img) {
    if (invert) {
      img.invert();
    }
    var newImage = new jimp(maxWidth, maxHeight, background);
    // Scale the image to fit
    var scaledInput = scale ?
      img.background(background).contain(maxWidth, maxHeight) : img;
    var x = scaledInput.bitmap.width;
    var y = scaledInput.bitmap.height;
    if (x > maxWidth || y > maxHeight) {
      console.log("Your image doesn't fit - try not using --noscaling");
      return;
    }
    // Center the image in the output image
    x = (maxWidth - x) / 2;
    y = (maxHeight - y) / 2;
    var outImage = graphic(maxHeight, maxWidth);
    newImage.blit(scaledInput, x, y).greyscale()
      .scan(0, 0, newImage.bitmap.width, newImage.bitmap.height,
      function (x, y, idx) {
        if (this.bitmap.data[idx] < 0x80) {
          outImage.setPixel(x, y + 1);
        }
      });
    console.log(outImage.preview());
    console.log(outImage.getArray());
  }).catch(function (err) {
    console.log(err);
  });
}
