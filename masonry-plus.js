/*
 |    __  ______   ________  _  _______  __  __
 |   /  |/  / _ | / __/ __ \/ |/ / _ \ \/ /_/ /_
 |  / /|_/ / __ |_\ \/ /_/ /    / , _/\  /_  __/
 | /_/  /_/_/ |_/___/\____/_/|_/_/|_| /_/ /_/
 |
 | This project was released under MIT license.
 |
 | @link      http://websemantics.ca
 | @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 | @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['masonry-layout'],
            function(Masonry) {
                return (root.Masonry = factory(Masonry))
            })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('masonry-layout'))
    } else {
        root.Masonry = factory(root.Masonry)
    }
}(this, function(Masonry) {

    // keep the old layout in a save place
    Masonry.prototype._layout = Masonry.prototype.layout

    /**
     * New layout items
     *
     * @param string {filter}, set to '*' to show all or to 'data-filter' value
     * @return {void}
     */
    Masonry.prototype.layout = function(args) {
        args = args || {}

        /* apply filters */
        if (args.filter && this.items.length > 0) {
          for (var i in this.items) {
            if(args.filter == '*' || args.filter == this.items[i].element.getAttribute('data-filter')){
              if (this.items[i].isHidden) {
                  delete this.items[i].isIgnored
                  this.items[i].reveal()
              }
            } else {
              if (!this.items[i].isHidden) {
                  this.items[i].isIgnored = true
                  this.items[i].hide()
              }
            }
          }
        }

        /* apply shuffling, credits: https://css-tricks.com/snippets/javascript/shuffle-array */
        if (args.shuffle) {
            for (var j, x, i = this.items.length; i; j = parseInt(Math.random() * i), x = this.items[--i],
            this.items[i] = this.items[j], this.items[j] = x) {}
        }

        this._layout()
    }

    Masonry.prototype.measureColumns = function() {
      this.getContainerWidth()
      // if columnWidth is 0, default to outerWidth of first item
      if ( !this.columnWidth ) {
        /* var firstItem = this.items[0] old code */
        var firstItem = this.items.find(function(item) {return !item.isIgnored})
        var firstItemElem = firstItem && firstItem.element
        // columnWidth fall back to item of first element
        this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
          // if first elem has no width, default to size of container
          this.containerWidth
      }

      var columnWidth = this.columnWidth += this.gutter

      // calculate columns
      var containerWidth = this.containerWidth + this.gutter
      var cols = containerWidth / columnWidth
      // fix rounding errors, typically with gutters
      var excess = columnWidth - containerWidth % columnWidth
      // if overshoot is less than a pixel, round up, otherwise floor it
      var mathMethod = excess && excess < 1 ? 'round' : 'floor'
      cols = Math[ mathMethod ]( cols )
      this.cols = Math.max( cols, 1 )
    }

    return Masonry
}))
