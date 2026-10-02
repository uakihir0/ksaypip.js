(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ksaypip-stream'] = factory(typeof globalThis['ksaypip-stream'] === 'undefined' ? {} : globalThis['ksaypip-stream']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var presentsHandshakeHeader;
  //region block: init
  presentsHandshakeHeader = false;
  //endregion
  return _;
}));

//# sourceMappingURL=ksaypip-stream.js.map
