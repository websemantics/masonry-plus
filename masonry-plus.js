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
        define(['Masonry'],
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

        // check for filter settins
        if (args.filter && this.items.length > 0) {
            for (var i in this.items) {
                var shown = args.filter == '*' || args.filter == this.items[i].element.getAttribute('data-filter')

                if (shown && this.items[i].isHidden) {
                    this.items[i].reveal()
                    delete this.items[i].isIgnored
                }

                if (!shown && !this.items[i].isHidden) {
                    this.items[i].hide()
                    this.items[i].isIgnored = true
                }
            }
        }

        // check for shuffling business (credits, https://css-tricks.com/snippets/javascript/shuffle-array/)
        if (args.shuffle) {
            for (var j, x, i = this.items.length; i; j = parseInt(Math.random() * i), x = this.items[--i], this.items[i] = this.items[j], this.items[j] = x) {}
        }

        this._layout()
    }

    return Masonry
}))
