# findFileExtensionIcon

[![Support Node of LTS](https://img.shields.io/badge/node-LTS-brightgreen.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/filetypeicons.svg)](https://www.npmjs.com/package/filetypeicons)
[![Travis (.org)](https://img.shields.io/travis/amjad489/findFileExtensionIcon.svg)](https://travis-ci.org/amjad489/findFileExtensionIcon)
[![npm](https://img.shields.io/npm/dt/filetypeicons.svg)](https://www.npmjs.com/package/filetypeicons)



NodeJs Package to find [font-awesome icons](https://fontawesome.com/icons) icons by file extensions. It returns  `html` depending upon the file extension passed.

## Installation

    $ npm install filetypeicons --save

## Usage

```js
var findFileExtIcon = require('filetypeicons');

console.log(findFileExtIcon("/path/to/media.wav"));
```

## output

    $ <i class="far fa-file-audio"></i>

