// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.0-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-frechet@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function g(f,c,b,x){var y,w,P,L,G;if(!o(f))throw new TypeError(v("invalid argument. First argument must be a positive number. Value: `%s`.",f));if(!o(c))throw new TypeError(v("invalid argument. Second argument must be a positive number. Value: `%s`.",c));if(!d(b)||l(b))throw new TypeError(v("invalid argument. Third argument must be a number. Value: `%s`.",b));if(arguments.length>3){if(!m(x))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",x));if(y=i({},x),u(y,"iter")){if(!a(y.iter))throw new TypeError(v("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",y.iter))}else y.iter=p;P=h(f,c,b,y),void 0===y.prng&&!1!==y.copy&&(y.state=P.state)}else P=h(f,c,b),y={iter:p,state:P.state};return G=0,e(w={},"next",N),e(w,"return",R),y&&y.prng?(e(w,"seed",null),e(w,"seedLength",null),s(w,"state",n(null),r),e(w,"stateLength",null),e(w,"byteLength",null)):(t(w,"seed",E),t(w,"seedLength",V),s(w,"state",S,k),t(w,"stateLength",O),t(w,"byteLength",F)),e(w,"PRNG",P.PRNG),j&&e(w,j,T),w;function N(){return G+=1,L||G>y.iter?{done:!0}:{value:P(),done:!1}}function R(e){return L=!0,arguments.length?{value:e,done:!0}:{done:!0}}function T(){return g(f,c,b,y)}function E(){return P.PRNG.seed}function V(){return P.PRNG.seedLength}function O(){return P.PRNG.stateLength}function F(){return P.PRNG.byteLength}function S(){return P.PRNG.state}function k(e){P.PRNG.state=e}}export{g as default};
//# sourceMappingURL=index.mjs.map
