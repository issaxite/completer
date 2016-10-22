# Completer

[![CDNJS](https://img.shields.io/cdnjs/v/completer.svg)](https://cdnjs.com/libraries/completer)
> A simple jQuery auto complete plugin.

- [Website](https://fengyuanchen.github.io/completer)



# Getting started


## Quick start

Four quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/completer/archive/master.zip).
- Clone the repository: `git clone https://github.com/fengyuanchen/completer.git`.
- Install with [NPM](http://npmjs.org): `npm install completer`.
- Install with [Bower](http://bower.io): `bower install completer`.



## Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<link  href="/path/to/completer.css" rel="stylesheet">
<script src="/path/to/completer.js"></script>
```



## Usage

Initialize with `$.fn.completer` method.

```html
<input class="completer" type="email">
```

```javascript
$('.completer').completer({
  source: [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'aol.com'
  ],
  separator: '@'
});
```



## Options

You may set completer options with `$().completer(options)`.
If you want to change the global default options, You may use `$.fn.completer.setDefaults(options)`.


### complete

- Type: `Function`
- Default: `function() {}`

Will be run when complete.


### itemTag

- Type: `String`
- Default: `'li'`

The element tag of list item.


### filter

- Type: `Function`
- Default: `function(val) { return val }`

The function will be passed the input value and run before show the list.


### position

- Type: `String`
- Options: `'top'`, `'right'`, `'bottom'` and `'left'`
- Default: `'bottom'`

The position of the container.


### source

- Type: `Array`
- Default: `[]`

The source data for complete or suggest.


### selectedClass

- Type: `String`
- Default: `'completer-selected'`

A jQuery selector string, highlight the item when it's selected.


### separator

- Type: `String`
- Default: `''`

This will be added between the value and attachment.


### suggest

- Type: `Boolean`
- Default: `false`

Set it `true` to start the suggestion mode.


### template

- Type: `String`
- Default: `'<ul class="completer-container"></ul>'`

The container of the completer.


### zIndex

- Type: `Number`
- Default: `1`

The css `z-index` property for the container.



## Methods

### destroy()

Destroy the completer instance.



## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.completer.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="completer.js"></script>
<script>
  $.fn.completer.noConflict();
  // Code that uses other plugin's "$().completer" can follow here.
</script>
```



## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 8+

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## Versioning

Maintained under the [Semantic Versioning guidelines](http://semver.org/).



## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)
