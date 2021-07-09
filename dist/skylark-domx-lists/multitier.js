/**
 * skylark-domx-lists - The skylark lists library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-query","./lists"],function(s,l,e){"use strict";return e.multitier=function(e,t){var i=(t=s.mixin({classes:{active:"active",collapse:"collapse",in:"in"},selectors:{item:"li",sublist:"ul",hasSublist:":has(ul)",toggler:" > a"},mode:"",levels:2,togglable:!1,multiExpand:!1},t,!0)).selectors.item,a=l(i,e),c=t.classes.active,n="."+c,o=(t.mode,t.selectors.sublist),r=t.togglable,u=t.multiExpand,d=t.selectors.toggler,m=t.classes.collapse,g=t.classes.in,h=t.show||function(s){s.addClass(g)},f=t.hide||function(s){s.addClass(m).removeClass(g)};t.toggle,a.find(d).on("click.multitier",function(s){s.preventDefault();let e,a=l(this).closest(i);u||(e=a.siblings().removeClass(c).children(o))&&f(e);let n=a.hasClass(c);n&&!r||(e=a.children(t.selectors.sublist),n?(a.removeClass(c),f(e)):(a.addClass(c),h(e)))}),f(a.has(o).children(o)),h(a.filter(n).has(o).children(o))}});
//# sourceMappingURL=sourcemaps/multitier.js.map
