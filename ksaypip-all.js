(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ksaypip-core.js', './kotlin-kotlin-stdlib.js', './ksaypip-auth.js', './ktor-ktor-client-core.js', './cryptography-kotlin-cryptography-provider-webcrypto.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ksaypip-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./ksaypip-auth.js'), require('./ktor-ktor-client-core.js'), require('./cryptography-kotlin-cryptography-provider-webcrypto.js'));
  else {
    if (typeof globalThis['ksaypip-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ksaypip:all'. Its dependency 'ksaypip-core' was not found. Please, check whether 'ksaypip-core' is loaded prior to 'work.socialhub.ksaypip:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ksaypip:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.ksaypip:all'.");
    }
    if (typeof globalThis['ksaypip-auth'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ksaypip:all'. Its dependency 'ksaypip-auth' was not found. Please, check whether 'ksaypip-auth' is loaded prior to 'work.socialhub.ksaypip:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ksaypip:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.ksaypip:all'.");
    }
    if (typeof globalThis['cryptography-kotlin-cryptography-provider-webcrypto'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.ksaypip:all'. Its dependency 'cryptography-kotlin-cryptography-provider-webcrypto' was not found. Please, check whether 'cryptography-kotlin-cryptography-provider-webcrypto' is loaded prior to 'work.socialhub.ksaypip:all'.");
    }
    globalThis['work.socialhub.ksaypip:all'] = factory(typeof globalThis['work.socialhub.ksaypip:all'] === 'undefined' ? {} : globalThis['work.socialhub.ksaypip:all'], globalThis['ksaypip-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ksaypip-auth'], globalThis['ktor-ktor-client-core'], globalThis['cryptography-kotlin-cryptography-provider-webcrypto']);
  }
}(function (_, kotlin_work_socialhub_ksaypip_core, kotlin_kotlin, kotlin_work_socialhub_ksaypip_auth, kotlin_io_ktor_ktor_client_core, kotlin_dev_whyoleg_cryptography_cryptography_provider_webcrypto) {
  'use strict';
  //region block: imports
  var SaypipFactory_instance = kotlin_work_socialhub_ksaypip_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.kb;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var defineProp = kotlin_kotlin.$_$.ea;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KsaypipFactory, 'KsaypipFactory');
  //endregion
  function KsaypipFactory() {
  }
  protoOf(KsaypipFactory).d4v = function (uri, accessToken) {
    return SaypipFactory_instance.instance(uri, accessToken);
  };
  protoOf(KsaypipFactory).instance = function (uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.d4v(uri, accessToken) : $super.d4v.call(this, uri, accessToken);
  };
  var KsaypipFactory_instance;
  function KsaypipFactory_getInstance() {
    return KsaypipFactory_instance;
  }
  //region block: init
  KsaypipFactory_instance = new KsaypipFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var ksaypip = socialhub.ksaypip || (socialhub.ksaypip = {});
    defineProp(ksaypip, 'KsaypipFactory', KsaypipFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_work_socialhub_ksaypip_auth.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_ksaypip_core.$jsExportAll$(_);
  kotlin_dev_whyoleg_cryptography_cryptography_provider_webcrypto.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=ksaypip-all.js.map
