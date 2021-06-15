/**
 * skylark-domx-lists - The skylark lists library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,o="function"==typeof n&&n.amd,t=!o&&"undefined"!=typeof exports;if(!o&&!n){var i={};n=e.define=function(r,e,n){"function"==typeof n?(i[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),o=r.split("/");n.pop();for(var t=0;t<o.length;t++)"."!=o[t]&&(".."==o[t]?n.pop():n.push(o[t]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-domx-lists/main",[],function(){}),r("skylark-domx-lists",["skylark-domx-lists/main"],function(r){return r})}(n),!o){var s=require("skylark-langx-ns");t?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-lists.js.map
