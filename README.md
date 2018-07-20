# findFileExtensionIcon
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

