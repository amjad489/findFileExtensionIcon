# findFileExtensionIcon

[![Support Node of LTS](https://img.shields.io/badge/node-LTS-brightgreen.svg)](https://nodejs.org/)
[![npm version](https://badge.fury.io/js/filetypeicons.svg)](https://badge.fury.io/js/filetypeicons)
[![Build Status](https://travis-ci.org/amjad489/findFileExtensionIcon.png)](https://travis-ci.org/amjad489/findFileExtensionIcon#)


NodeJs Package which returns [font-awesome icons](https://fontawesome.com/icons) `html` depending upon the file extension.

## Installation

    $ npm install filetypeicons --save

## Usage

```js
var findFileExtIcon = require('filetypeicons');

console.log(findFileExtIcon("/path/to/media.wav"));
```

## output

    $ <i class="far fa-file-audio"></i>

