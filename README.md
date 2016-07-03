```
    __  ______   ________  _  _______  __  __
   /  |/  / _ | / __/ __ \/ |/ / _ \ \/ /_/ /_
  / /|_/ / __ |_\ \/ /_/ /    / , _/\  /_  __/
 /_/  /_/_/ |_/___/\____/_/|_/_/|_| /_/ /_/
 ```
> Extends the [masonry](http://masonry.desandro.com) plugin by David DeSandro to filter and shuffle items.

Check out a demo project, [PyroCMS Cheatsheet](http://websemantics.github.io/pyrocms-cheatsheet)

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
```

jQuery

```js
// layout a filtered list of items with 'data-filter' attribute is set to 'books'
$grid.masonry('layout', {filter:'books'})

// shuffle the list of items
$grid.masonry('layout', {shuffle:true})
```
