"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=v(function(y,o){
var n=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/ndarray-base-strides2offset/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r){var e,t,i;if(typeof r!="object"||r===null)throw new TypeError(a('nullDv',r));if(i=r.offset,n(i))return i;if(t=r.shape,!s(t))throw new TypeError(a('nullDv',r));if(e=r.strides,t.length===0||!s(e))return 0;if(i=f(t,e),n(i))return i;throw new TypeError(a('nullDv',r))}o.exports=d
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
