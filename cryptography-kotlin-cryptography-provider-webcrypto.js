(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './cryptography-kotlin-cryptography-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./cryptography-kotlin-cryptography-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['cryptography-kotlin-cryptography-core'] === 'undefined') {
      throw new Error("Error loading module 'cryptography-kotlin-cryptography-provider-webcrypto'. Its dependency 'cryptography-kotlin-cryptography-core' was not found. Please, check whether 'cryptography-kotlin-cryptography-core' is loaded prior to 'cryptography-kotlin-cryptography-provider-webcrypto'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cryptography-kotlin-cryptography-provider-webcrypto'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cryptography-kotlin-cryptography-provider-webcrypto'.");
    }
    globalThis['cryptography-kotlin-cryptography-provider-webcrypto'] = factory(typeof globalThis['cryptography-kotlin-cryptography-provider-webcrypto'] === 'undefined' ? {} : globalThis['cryptography-kotlin-cryptography-provider-webcrypto'], globalThis['cryptography-kotlin-cryptography-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_dev_whyoleg_cryptography_cryptography_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var CryptographyProvider = kotlin_dev_whyoleg_cryptography_cryptography_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.eg;
  var CryptographySystem_getInstance = kotlin_dev_whyoleg_cryptography_cryptography_core.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var defineProp = kotlin_kotlin.$_$.ea;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(WebCryptoCryptographyProvider, 'WebCryptoCryptographyProvider', VOID, CryptographyProvider);
  //endregion
  function get_defaultProvider() {
    _init_properties_WebCryptoCryptographyProvider_kt__i22tls();
    return defaultProvider;
  }
  var defaultProvider;
  var WebCrypto$delegate;
  function WebCryptoCryptographyProvider() {
    WebCryptoCryptographyProvider_instance = this;
    CryptographyProvider.call(this);
  }
  var WebCryptoCryptographyProvider_instance;
  function WebCryptoCryptographyProvider_getInstance() {
    if (WebCryptoCryptographyProvider_instance == null)
      new WebCryptoCryptographyProvider();
    return WebCryptoCryptographyProvider_instance;
  }
  function defaultProvider$lambda() {
    _init_properties_WebCryptoCryptographyProvider_kt__i22tls();
    return WebCryptoCryptographyProvider_getInstance();
  }
  var properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u;
  function _init_properties_WebCryptoCryptographyProvider_kt__i22tls() {
    if (!properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u) {
      properties_initialized_WebCryptoCryptographyProvider_kt_n89q9u = true;
      defaultProvider = lazy(defaultProvider$lambda);
      WebCrypto$delegate = get_defaultProvider();
    }
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function initHook$init$() {
    CryptographySystem_getInstance().a7o(get_defaultProvider(), 100);
    return Unit_instance;
  }
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var dev = _.dev || (_.dev = {});
    var whyoleg = dev.whyoleg || (dev.whyoleg = {});
    var cryptography = whyoleg.cryptography || (whyoleg.cryptography = {});
    var providers = cryptography.providers || (cryptography.providers = {});
    var webcrypto = providers.webcrypto || (providers.webcrypto = {});
    defineProp(webcrypto, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=cryptography-kotlin-cryptography-provider-webcrypto.js.map
