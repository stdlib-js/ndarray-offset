"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var u=v(function(y,o){
var n=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/ndarray-base-strides2offset/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r){var e,i,t;if(typeof r!="object"||r===null)throw new TypeError(a('1k9Dv',r));if(t=r.offset,n(t))return t;if(i=r.shape,!s(i))throw new TypeError(a('1k9Dv',r));if(e=r.strides,i.length===0||!s(e))return 0;if(t=f(i,e),n(t))return t;throw new TypeError(a('1k9Dv',r))}o.exports=d
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
