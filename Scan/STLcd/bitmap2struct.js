#!/usr/bin/env node

'use strict';

var jimp = require('jimp');
var maxHeight = 32;
var maxWidth = 128;
var file = process.argv[2];
var scale = process.argv[3] !== '--no-scale';

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

jimp.read(file).then(function (img) {
  var newImage = new jimp(maxWidth, maxHeight, 0xFFFFFFFF);
  // Scale the image to fit
  var scaledInput = scale ?
    img.background(0xFFFFFFFF).contain(maxWidth, maxHeight) : img;
  var x = scaledInput.bitmap.width;
  var y = scaledInput.bitmap.height;
  if (x > maxWidth || y > maxHeight) {
    console.log("Your image doesn't fit - try not using --no-scale");
    return;
  }
  // Center the image in the output image
  x = (maxWidth - x) / 2;
  y = (maxHeight - y) / 2;
  var outImage = graphic(maxHeight, maxWidth);
  newImage.blit(scaledInput, x, y).greyscale()
    .scan(0, 0, newImage.bitmap.width, newImage.bitmap.height, 
    function (x, y, idx) {
      var r = this.bitmap.data[idx];
      if (r < 0x80) {
        outImage.setPixel(x, y + 1);
      }
    });
  console.log(outImage.preview());
  console.log(outImage.getArray());
}).catch(function (err) {
  console.log(err);
});