```

                                                                             ─────┬─ ───┼─────┬   ── ─
╭────┬───┬──╮╭──────╮╭──────╮╭──────╮╭────┬─╮╭───┬──╮╭───╮╭─╮      ╭────╮        ─┼─────┴ ────┼──
│           │├────  ││  ────┤│   ╭╮ ││      ││      ││   ││ │   ╭──╯    ╰──╮     
│   ╭╮  ╭╮  ││ ╭╮   ││      ││   ││ ││   ╭╮ ││    ╭─╯│   ╰╯ │   │    ─┼─   │   ─┬─────┬─         ┼──
│   ││  ││  ││ ╰╯   │├────  ││   ╰╯ ││   ││ ││    │  ├────  │   ╰──╮    ╭──╯    ┼─ ───┼─── ─   
╰───╯╰──╯╰──╯╰───┴──╯╰──────╯╰──────╯╰───╯╰─╯╰────╯  ╰──────╯      ╰────╯                     ┼─────┼──
                                                                           ───┴─            ──┴─── ─┴ ─
 ```
> Extends the [masonry](http://masonry.desandro.com) plugin by David DeSandro to filter and shuffle items.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/websemantics/masonry-plus/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/websemantics/masonry-plus.svg)](https://github.com/websemantics/masonry-plus/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/masonry-plus.svg)](https://github.com/websemantics/masonry-plus/stargazers)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/websemantics/masonry-plus.svg)](http://isitmaintained.com/project/websemantics/masonry-plus "Percentage of issues still open") [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

#### See it in action @ [PyroCMS Cheatsheet](http://websemantics.github.io/pyrocms-cheatsheet)

## Install

Bower

```bash
Bower install masonry-plus
```

Node

```bash
npm install masonry-plus
```

## Usage

Vanilla JavaScript

```js
var masonry = new Masonry( '.grid', {'itemSelector': '.column'});

// layout a filtered list of items with 'data-filter' attribute is set to 'books'
masonry.layout({filter:'books'});

// shuffle the list of items
masonry.layout({shuffle:true});

// show all items
masonry.layout({filter:'*'});
```

jQuery

```js
// layout a filtered list of items with 'data-filter' attribute is set to 'books'
$('.grid').masonry('layout', {filter:'books'})

// combine filter and shuffle
$('.grid').masonry('layout', {filter:'books', shuffle:true})
```

## Support

Need help or have a question? post at [StackOverflow](https://stackoverflow.com/questions/tagged/masonry-plus+websemantics).

*Please don't use the issue trackers for support/questions.*

*Star if you find this project useful, to show support or simply for being awesome :)*

## Contribution

Contributions to this project are accepted in the form of feedback, bugs reports and even better - pull requests.

## License

[MIT license](http://opensource.org/licenses/mit-license.php) Copyright (c) Web Semantics, Inc.