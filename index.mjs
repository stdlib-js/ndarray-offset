// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function n(n){var i,o,d;if("object"!=typeof n||null===n)throw new TypeError(s("nullKy",n));if(d=n.offset,e(d))return d;if(o=n.shape,!r(o))throw new TypeError(s("nullKy",n));if(i=n.strides,0===o.length||!r(i))return 0;if(d=t(o,i),e(d))return d;throw new TypeError(s("nullKy",n))}export{n as default};
//# sourceMappingURL=index.mjs.map
