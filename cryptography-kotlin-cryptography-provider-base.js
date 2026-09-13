(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['cryptography-kotlin-cryptography-provider-base'] = factory(typeof globalThis['cryptography-kotlin-cryptography-provider-base'] === 'undefined' ? {} : globalThis['cryptography-kotlin-cryptography-provider-base']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=cryptography-kotlin-cryptography-provider-base.js.map
