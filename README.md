# maxstache-variable-injection [![stability][0]][1] is fork from [maxstache](https://github.com/yoshuawuyts/maxstache)

## Why?

The template `{{ var }}` has been made customizable

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Minimalist mustache template replacement. Works extremely fast on one-off
replacements and doesn't escape any values.

## Installation

```sh
$ npm install maxstache-variable-injection
```

## Usage

```js
const maxstache = require("maxstache-variable-injection");

const str = "My name is {{name}}";
const ctx = { name: "jjjohnny" };
const pattern = "{{\\s*([^{}\\s]+)\\s*}}";
maxstache(str, ctx, pattern);
// => 'My name is jjjohnny'
```

## API

### nwStr = maxstache(str, ctx, pattern)

Replace `{{<var>}}` style variables in a string with values from a context.
Variable replacement doesn't escape values.

## FAQ

### Why not use {mus,min}stache?

`minstache` was built as a minimalist replacement for `mustache`, but is
unfortunately no longer maintained. This package is built as a smaller, faster
alternative to `minstache` that makes no assumptions about the file types (e.g.
no HTML-style escaping by default).

### Why doesn't maxstache escape values?

Template string escaping is useful for more than HTML. When building templates
for a variety of languages, escaping assumptions merely get in the way. If you
want to escape values, it's easy to pass the string result through an escape
function or escape the variable values before passing them into this function.
Hurray for composition!

## License

[MIT](https://tldrlegal.com/license/mit-license)
