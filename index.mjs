/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-frechet@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var f=e,g=t,c=n,b=s,v=i,x=r,y=o.isPrimitive,w=m,P=d.isPrimitive,L=l,G=a.isPrimitive,N=u,R=p,T=h.factory,E=j;var V=function e(t,n,s,i){var r,o,m,d,l;if(!y(t))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+t+"`.");if(!y(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(!P(s)||L(s))throw new TypeError("invalid argument. Third argument must be a number primitive. Value: `"+s+"`.");if(arguments.length>3){if(!w(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(r=x(i,1),N(r,"iter")){if(!G(r.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+r.iter+"`.")}else r.iter=R;m=T(t,n,s,r),void 0===r.prng&&!1!==r.copy&&(r.state=m.state)}else m=T(t,n,s),r={iter:R,state:m.state};return l=0,f(o={},"next",a),f(o,"return",u),r&&r.prng?(f(o,"seed",null),f(o,"seedLength",null),c(o,"state",b(null),v),f(o,"stateLength",null),f(o,"byteLength",null)):(g(o,"seed",h),g(o,"seedLength",j),c(o,"state",F,S),g(o,"stateLength",V),g(o,"byteLength",O)),f(o,"PRNG",m.PRNG),E&&f(o,E,p),o;function a(){return l+=1,d||l>r.iter?{done:!0}:{value:m(),done:!1}}function u(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return e(t,n,s,r)}function h(){return m.PRNG.seed}function j(){return m.PRNG.seedLength}function V(){return m.PRNG.stateLength}function O(){return m.PRNG.byteLength}function F(){return m.PRNG.state}function S(e){m.PRNG.state=e}},O=V;export{O as default};
//# sourceMappingURL=index.mjs.map
