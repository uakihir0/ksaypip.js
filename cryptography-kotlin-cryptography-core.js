(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './cryptography-kotlin-cryptography-random.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./cryptography-kotlin-cryptography-random.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cryptography-kotlin-cryptography-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cryptography-kotlin-cryptography-core'.");
    }
    if (typeof globalThis['cryptography-kotlin-cryptography-random'] === 'undefined') {
      throw new Error("Error loading module 'cryptography-kotlin-cryptography-core'. Its dependency 'cryptography-kotlin-cryptography-random' was not found. Please, check whether 'cryptography-kotlin-cryptography-random' is loaded prior to 'cryptography-kotlin-cryptography-core'.");
    }
    globalThis['cryptography-kotlin-cryptography-core'] = factory(typeof globalThis['cryptography-kotlin-cryptography-core'] === 'undefined' ? {} : globalThis['cryptography-kotlin-cryptography-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['cryptography-kotlin-cryptography-random']);
  }
}(function (_, kotlin_kotlin, kotlin_dev_whyoleg_cryptography_cryptography_random) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.c;
  var equals = kotlin_kotlin.$_$.fa;
  var FunctionAdapter = kotlin_kotlin.$_$.s9;
  var isInterface = kotlin_kotlin.$_$.ab;
  var Comparator = kotlin_kotlin.$_$.ue;
  var hashCode = kotlin_kotlin.$_$.ka;
  var compareValues = kotlin_kotlin.$_$.y7;
  var sortedWith = kotlin_kotlin.$_$.l7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var toString = kotlin_kotlin.$_$.nb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var first = kotlin_kotlin.$_$.l6;
  var Default_getInstance = kotlin_dev_whyoleg_cryptography_cryptography_random.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var lazy = kotlin_kotlin.$_$.eg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var KtMap = kotlin_kotlin.$_$.e5;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CryptographyProvider, 'CryptographyProvider');
  initMetadataForObject(CryptographySystem, 'CryptographySystem');
  initMetadataForClass(CompositeProvider, 'CompositeProvider', VOID, CryptographyProvider);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(CryptographySystemImpl, 'CryptographySystemImpl', CryptographySystemImpl);
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function CryptographyProvider() {
  }
  function CryptographySystem() {
    CryptographySystem_instance = this;
    this.z7n_1 = new CryptographySystemImpl();
    loadProviders(this);
  }
  protoOf(CryptographySystem).a7o = function (provider, priority) {
    return this.z7n_1.a7o(provider, priority);
  };
  var CryptographySystem_instance;
  function CryptographySystem_getInstance() {
    if (CryptographySystem_instance == null)
      new CryptographySystem();
    return CryptographySystem_instance;
  }
  function CompositeProvider(providers) {
    CryptographyProvider.call(this);
    this.h7o_1 = providers;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.i7o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kc = function (a, b) {
    return this.i7o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).d3 = function () {
    return this.i7o_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.d3());
  };
  function CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.l1();
    var tmp$ret$2 = b.l1();
    return compareValues(tmp, tmp$ret$2);
  }
  function CryptographySystemImpl$lazyRegisteredProviders$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.sortedBy' call
      var this_0 = this$0.b7o_1.k1();
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = CryptographySystemImpl$lazyRegisteredProviders$lambda$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
      // Inline function 'kotlin.collections.map' call
      var this_1 = sortedWith(this_0, tmp$ret$1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s = this_1.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$4 = item.m1().m1();
        destination.b1(tmp$ret$4);
      }
      return destination;
    };
  }
  function CryptographySystemImpl$lazyDefaultProvider$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.d7o_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.let' call
        var it = this$0.c7o_1.m1();
        var tmp_0;
        switch (it.e1()) {
          case 0:
            // Inline function 'kotlin.error' call

            var message = 'No providers registered. Please provide a dependency or register provider explicitly';
            throw IllegalStateException_init_$Create$(toString(message));
          case 1:
            tmp_0 = first(it);
            break;
          default:
            tmp_0 = new CompositeProvider(it);
            break;
        }
        tmp = tmp_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    };
  }
  function CryptographySystemImpl$lazyDefaultRandom$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.f7o_1;
      return tmp0_elvis_lhs == null ? Default_getInstance() : tmp0_elvis_lhs;
    };
  }
  function CryptographySystemImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b7o_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.c7o_1 = lazy(CryptographySystemImpl$lazyRegisteredProviders$lambda(this));
    this.d7o_1 = null;
    var tmp_1 = this;
    tmp_1.e7o_1 = lazy(CryptographySystemImpl$lazyDefaultProvider$lambda(this));
    this.f7o_1 = null;
    var tmp_2 = this;
    tmp_2.g7o_1 = lazy(CryptographySystemImpl$lazyDefaultRandom$lambda(this));
  }
  protoOf(CryptographySystemImpl).a7o = function (provider, priority) {
    // Inline function 'kotlin.require' call
    if (!(priority >= 0)) {
      var message = 'Priority must be greater or equal to 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.b7o_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(priority)) {
      var message_0 = 'Provider with priority ' + priority + ' already registered. Every registered provider should have unique priority.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!!this.c7o_1.ll()) {
      var message_1 = 'Cannot register provider after `getRegisteredProviders` was called';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.b7o_1.o2(priority, provider);
  };
  function loadProviders(_this__u8e3s4) {
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CryptographyProvider;
  _.$_$.b = CryptographySystem_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=cryptography-kotlin-cryptography-core.js.map
