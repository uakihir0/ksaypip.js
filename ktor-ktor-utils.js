(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-io.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var arrayOf = kotlin_kotlin.$_$.uf;
  var createKType = kotlin_kotlin.$_$.cc;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var VOID = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.bd;
  var toString = kotlin_kotlin.$_$.nb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var ensureNotNull = kotlin_kotlin.$_$.yf;
  var charCodeAt = kotlin_kotlin.$_$.y9;
  var toString_0 = kotlin_kotlin.$_$.n;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m;
  var equals = kotlin_kotlin.$_$.wc;
  var AbstractMutableSet = kotlin_kotlin.$_$.v4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var AbstractMutableCollection = kotlin_kotlin.$_$.u4;
  var MutableEntry = kotlin_kotlin.$_$.g5;
  var isInterface = kotlin_kotlin.$_$.ab;
  var Entry = kotlin_kotlin.$_$.d5;
  var equals_0 = kotlin_kotlin.$_$.fa;
  var hashCode = kotlin_kotlin.$_$.ka;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var fill = kotlin_kotlin.$_$.j6;
  var fill_0 = kotlin_kotlin.$_$.i6;
  var KtMutableMap = kotlin_kotlin.$_$.h5;
  var charArray = kotlin_kotlin.$_$.x9;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h8;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Element = kotlin_kotlin.$_$.q8;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var Enum = kotlin_kotlin.$_$.xe;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var toList = kotlin_kotlin.$_$.q7;
  var firstOrNull = kotlin_kotlin.$_$.k6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var addAll = kotlin_kotlin.$_$.k5;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var plus = kotlin_kotlin.$_$.d7;
  var isArray = kotlin_kotlin.$_$.sa;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.y2;
  var emptySet = kotlin_kotlin.$_$.h6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var getBooleanHashCode = kotlin_kotlin.$_$.ha;
  var setOf = kotlin_kotlin.$_$.i7;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var charSequenceGet = kotlin_kotlin.$_$.z9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r3;
  var get_lastIndex = kotlin_kotlin.$_$.ed;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.k;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.u2;
  var lazy = kotlin_kotlin.$_$.dg;
  var Long = kotlin_kotlin.$_$.cf;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var Comparable = kotlin_kotlin.$_$.te;
  var enumEntries = kotlin_kotlin.$_$.u8;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var KtMutableList = kotlin_kotlin.$_$.f5;
  var toMutableList = kotlin_kotlin.$_$.u7;
  var ArrayList = kotlin_kotlin.$_$.w4;
  var KMutableProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ia;
  var emptyList = kotlin_kotlin.$_$.f6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.t6;
  var last = kotlin_kotlin.$_$.v6;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var mutableListOf = kotlin_kotlin.$_$.a7;
  var anyToString = kotlin_kotlin.$_$.t9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var extendThrowable = kotlin_kotlin.$_$.ga;
  var captureStack = kotlin_kotlin.$_$.v9;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Companion_instance = kotlin_kotlin.$_$.l2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.xf;
  var Key_instance_0 = kotlin_kotlin.$_$.u1;
  var intercepted = kotlin_kotlin.$_$.d8;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.p;
  var Continuation = kotlin_kotlin.$_$.m8;
  var KProperty1 = kotlin_kotlin.$_$.jc;
  var lazy_0 = kotlin_kotlin.$_$.eg;
  var toNumber = kotlin_kotlin.$_$.r9;
  var isNaN_0 = kotlin_kotlin.$_$.cg;
  var numberToLong = kotlin_kotlin.$_$.n9;
  var IllegalStateException = kotlin_kotlin.$_$.bf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.g4;
  var toHexString = kotlin_kotlin.$_$.zd;
  var substring = kotlin_kotlin.$_$.ud;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.qa;
  //endregion
  //region block: pre-declaration
  function get(key) {
    var tmp0_elvis_lhs = this.s26(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function set(key, value) {
    this.u26(key, value);
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForClass(AttributeKey, 'AttributeKey');
  initMetadataForClass(CaseInsensitiveMap$KeySet$iterator$1);
  initMetadataForClass(CaseInsensitiveMap$ValueCollection$iterator$1);
  initMetadataForClass(CaseInsensitiveMap$EntrySet$iterator$1);
  initMetadataForClass(KeySet, 'KeySet', VOID, AbstractMutableSet);
  initMetadataForClass(ValueCollection, 'ValueCollection', VOID, AbstractMutableCollection);
  initMetadataForClass(EntrySet, 'EntrySet', VOID, AbstractMutableSet);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [MutableEntry]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(SilentSupervisor$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [Element]);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  function get_0(name) {
    var tmp0_safe_receiver = this.z28(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.w28().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.m1();
      body(k, v);
    }
    return Unit_instance;
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl);
  initMetadataForClass(StringValuesEntry, 'StringValuesEntry', VOID, VOID, [Entry]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(StringValuesSingleImpl$entries$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(StringValuesSingleImpl, 'StringValuesSingleImpl', VOID, VOID, [StringValues]);
  initMetadataForClass(ChannelIOException, 'ChannelIOException', VOID, IOException);
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode');
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(Removed, 'Removed');
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForCoroutine($proceedLoopCOROUTINE$, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(PhaseContent, 'PhaseContent');
  initMetadataForClass(Pipeline, 'Pipeline', VOID, VOID, VOID, [2]);
  initMetadataForClass(PipelinePhase, 'PipelinePhase');
  initMetadataForClass(InvalidPhaseException, 'InvalidPhaseException', VOID, Error);
  initMetadataForClass(PipelinePhaseRelation, 'PipelinePhaseRelation');
  initMetadataForClass(After, 'After', VOID, PipelinePhaseRelation);
  initMetadataForClass(Before, 'Before', VOID, PipelinePhaseRelation);
  initMetadataForObject(Last, 'Last', VOID, PipelinePhaseRelation);
  initMetadataForClass(SuspendFunctionGun$continuation$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForClass(SuspendFunctionGun, 'SuspendFunctionGun', VOID, PipelineContext, VOID, [0, 1]);
  initMetadataForClass(TypeInfo, 'TypeInfo');
  initMetadataForClass(InvalidTimestampException, 'InvalidTimestampException', VOID, IllegalStateException);
  initMetadataForClass(AttributesJs, 'AttributesJs', AttributesJs, VOID, [Attributes]);
  initMetadataForClass(KtorSimpleLogger$1);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  initMetadataForLambda(pipelineStartCoroutineUninterceptedOrReturn$slambda, CoroutineImpl, VOID, [0]);
  //endregion
  function Attributes() {
  }
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().ab();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().ab(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$1 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$1);
    } else {
      tmp = type;
    }
    type = tmp;
    this.z26_1 = name;
    this.a27_1 = type;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.z26_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.z26_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.z26_1);
    result = imul(result, 31) + this.a27_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    if (!(this.z26_1 === other.z26_1))
      return false;
    if (!this.a27_1.equals(other.a27_1))
      return false;
    return true;
  };
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = other.y26().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      _this__u8e3s4.u26(element instanceof AttributeKey ? element : THROW_CCE(), other.r26(element));
    }
  }
  function advance($this) {
    $l$loop: while ($this.b27_1 < $this.d27_1.i27_1) {
      var idx = $this.d27_1.h27_1[$this.b27_1];
      if (idx >= 0 && !($this.d27_1.e27_1[idx] == null))
        break $l$loop;
      $this.b27_1 = $this.b27_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$KeySet$iterator$1(this$0) {
    this.d27_1 = this$0;
    this.b27_1 = 0;
    this.c27_1 = null;
    advance(this);
  }
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).u = function () {
    return this.b27_1 < this.d27_1.i27_1;
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.d27_1.h27_1[this.b27_1];
    this.c27_1 = ensureNotNull(this.d27_1.e27_1[idx]);
    this.b27_1 = this.b27_1 + 1 | 0;
    advance(this);
    return ensureNotNull(this.c27_1);
  };
  protoOf(CaseInsensitiveMap$KeySet$iterator$1).v3 = function () {
    var tmp0_elvis_lhs = this.c27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.d27_1.m27(key);
    this.c27_1 = null;
  };
  function advance_0($this) {
    $l$loop: while ($this.n27_1 < $this.p27_1.i27_1) {
      var idx = $this.p27_1.h27_1[$this.n27_1];
      if (idx >= 0 && !($this.p27_1.e27_1[idx] == null))
        break $l$loop;
      $this.n27_1 = $this.n27_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$ValueCollection$iterator$1(this$0) {
    this.p27_1 = this$0;
    this.n27_1 = 0;
    this.o27_1 = null;
    advance_0(this);
  }
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).u = function () {
    return this.n27_1 < this.p27_1.i27_1;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.p27_1.h27_1[this.n27_1];
    this.o27_1 = ensureNotNull(this.p27_1.e27_1[idx]);
    var tmp = this.p27_1.f27_1[idx];
    var result = !(tmp == null) ? tmp : THROW_CCE();
    this.n27_1 = this.n27_1 + 1 | 0;
    advance_0(this);
    return result;
  };
  protoOf(CaseInsensitiveMap$ValueCollection$iterator$1).v3 = function () {
    var tmp0_elvis_lhs = this.o27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.p27_1.m27(key);
    this.o27_1 = null;
  };
  function advance_1($this) {
    $l$loop: while ($this.q27_1 < $this.s27_1.i27_1) {
      var idx = $this.s27_1.h27_1[$this.q27_1];
      if (idx >= 0 && !($this.s27_1.e27_1[idx] == null))
        break $l$loop;
      $this.q27_1 = $this.q27_1 + 1 | 0;
    }
  }
  function CaseInsensitiveMap$EntrySet$iterator$1(this$0) {
    this.s27_1 = this$0;
    this.q27_1 = 0;
    this.r27_1 = null;
    advance_1(this);
  }
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).u = function () {
    return this.q27_1 < this.s27_1.i27_1;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).v = function () {
    if (!this.u())
      throw NoSuchElementException_init_$Create$();
    var idx = this.s27_1.h27_1[this.q27_1];
    this.r27_1 = ensureNotNull(this.s27_1.e27_1[idx]);
    var tmp = ensureNotNull(this.r27_1);
    var tmp_0 = this.s27_1.f27_1[idx];
    var entry = new MapEntry(this.s27_1, tmp, !(tmp_0 == null) ? tmp_0 : THROW_CCE());
    this.q27_1 = this.q27_1 + 1 | 0;
    advance_1(this);
    return entry;
  };
  protoOf(CaseInsensitiveMap$EntrySet$iterator$1).v3 = function () {
    var tmp0_elvis_lhs = this.r27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('next() must be called before remove()');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    this.s27_1.m27(key);
    this.r27_1 = null;
  };
  function caseInsensitiveHashCode($this, s) {
    var h = 0;
    var inductionVariable = 0;
    var last = s.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, h);
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(s, i);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1 = toString_0(this_0).toLowerCase();
        // Inline function 'kotlin.code' call
        var this_1 = charCodeAt(tmp$ret$1, 0);
        h = tmp + Char__toInt_impl_vasixd(this_1) | 0;
      }
       while (inductionVariable < last);
    return h;
  }
  function putWithoutTrackingOrderReturnIndex($this, key, value) {
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & ($this.e27_1.length - 1 | 0);
    while (true) {
      var existingKey = $this.e27_1[index];
      if (existingKey == null) {
        $this.e27_1[index] = key;
        $this.f27_1[index] = value;
        $this.g27_1 = $this.g27_1 + 1 | 0;
        return index;
      }
      if (equals(existingKey, key, true)) {
        $this.f27_1[index] = value;
        return index;
      }
      index = (index + 1 | 0) & ($this.e27_1.length - 1 | 0);
    }
  }
  function findIndex($this, key) {
    if ($this.g27_1 === 0)
      return -1;
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & ($this.e27_1.length - 1 | 0);
    while (true) {
      var existingKey = $this.e27_1[index];
      if (existingKey == null)
        return -1;
      if (equals(existingKey, key, true))
        return index;
      index = (index + 1 | 0) & ($this.e27_1.length - 1 | 0);
    }
  }
  function ensureCapacity($this) {
    if (imul($this.g27_1, 4) >= imul($this.e27_1.length, 3)) {
      resize($this, imul($this.e27_1.length, 2));
    }
  }
  function resize($this, newCapacity) {
    var oldKeys = $this.e27_1;
    var oldValues = $this.f27_1;
    var oldInsertionOrder = $this.h27_1;
    var oldInsertionCount = $this.i27_1;
    var tmp = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e27_1 = Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.f27_1 = Array(newCapacity);
    var tmp_1 = $this;
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(newCapacity);
    while (tmp_2 < newCapacity) {
      tmp_3[tmp_2] = -1;
      tmp_2 = tmp_2 + 1 | 0;
    }
    tmp_1.h27_1 = tmp_3;
    $this.g27_1 = 0;
    $this.i27_1 = 0;
    var inductionVariable = 0;
    if (inductionVariable < oldInsertionCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var oldIndex = oldInsertionOrder[i];
        if (oldIndex >= 0 && !(oldKeys[oldIndex] == null)) {
          var tmp_4 = ensureNotNull(oldKeys[oldIndex]);
          var tmp_5 = oldValues[oldIndex];
          $this.t27(tmp_4, !(tmp_5 == null) ? tmp_5 : THROW_CCE());
        }
      }
       while (inductionVariable < oldInsertionCount);
  }
  function compactInsertionOrder($this) {
    if ($this.i27_1 === 0)
      return Unit_instance;
    var writeIndex = 0;
    var inductionVariable = 0;
    var last = $this.i27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var idx = $this.h27_1[i];
        if (idx >= 0 && !($this.e27_1[idx] == null)) {
          var tmp = $this.h27_1;
          var _unary__edvuaz = writeIndex;
          writeIndex = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = idx;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = writeIndex;
    var last_0 = $this.h27_1.length;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        $this.h27_1[i_0] = -1;
      }
       while (inductionVariable_0 < last_0);
    $this.i27_1 = writeIndex;
  }
  function KeySet($outer) {
    this.u27_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(KeySet).e1 = function () {
    return this.u27_1.g27_1;
  };
  protoOf(KeySet).v27 = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.keys does not support add');
  };
  protoOf(KeySet).b1 = function (element) {
    return this.v27((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).w27 = function (element) {
    return this.u27_1.x27(element);
  };
  protoOf(KeySet).g2 = function (element) {
    if (!(!(element == null) ? typeof element === 'string' : false))
      return false;
    return this.w27((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
  };
  protoOf(KeySet).t = function () {
    return new CaseInsensitiveMap$KeySet$iterator$1(this.u27_1);
  };
  function ValueCollection($outer) {
    this.y27_1 = $outer;
    AbstractMutableCollection.call(this);
  }
  protoOf(ValueCollection).e1 = function () {
    return this.y27_1.g27_1;
  };
  protoOf(ValueCollection).z27 = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.values does not support add');
  };
  protoOf(ValueCollection).b1 = function (element) {
    return this.z27(!(element == null) ? element : THROW_CCE());
  };
  protoOf(ValueCollection).t = function () {
    return new CaseInsensitiveMap$ValueCollection$iterator$1(this.y27_1);
  };
  function EntrySet($outer) {
    this.a28_1 = $outer;
    AbstractMutableSet.call(this);
  }
  protoOf(EntrySet).e1 = function () {
    return this.a28_1.g27_1;
  };
  protoOf(EntrySet).b28 = function (element) {
    throw UnsupportedOperationException_init_$Create$('CaseInsensitiveMap.entries does not support add');
  };
  protoOf(EntrySet).b1 = function (element) {
    return this.b28((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet).t = function () {
    return new CaseInsensitiveMap$EntrySet$iterator$1(this.a28_1);
  };
  function MapEntry($outer, key, _value) {
    this.e28_1 = $outer;
    this.c28_1 = key;
    this.d28_1 = _value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.c28_1;
  };
  protoOf(MapEntry).m1 = function () {
    return this.d28_1;
  };
  protoOf(MapEntry).equals = function (other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals_0(this.c28_1, other.l1()) && equals_0(this.m1(), other.m1());
  };
  protoOf(MapEntry).hashCode = function () {
    return getStringHashCode(this.c28_1) ^ hashCode(this.m1());
  };
  protoOf(MapEntry).toString = function () {
    return this.c28_1 + '=' + toString(this.m1());
  };
  function Companion() {
    Companion_instance_0 = this;
    this.f28_1 = 8;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.g28_1 = [];
    var tmp_0 = this;
    // Inline function 'kotlin.emptyArray' call
    tmp_0.h28_1 = [];
    this.i28_1 = new Int32Array(0);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function CaseInsensitiveMap() {
    Companion_getInstance();
    this.e27_1 = Companion_getInstance().g28_1;
    this.f27_1 = Companion_getInstance().h28_1;
    this.g27_1 = 0;
    this.h27_1 = Companion_getInstance().i28_1;
    this.i27_1 = 0;
    this.j27_1 = null;
    this.k27_1 = null;
    this.l27_1 = null;
  }
  protoOf(CaseInsensitiveMap).e1 = function () {
    return this.g27_1;
  };
  protoOf(CaseInsensitiveMap).x27 = function (key) {
    return findIndex(this, key) >= 0;
  };
  protoOf(CaseInsensitiveMap).j2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.x27((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).j28 = function (key) {
    var index = findIndex(this, key);
    return index >= 0 ? this.f27_1[index] : null;
  };
  protoOf(CaseInsensitiveMap).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.j28((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r = function () {
    return this.g27_1 === 0;
  };
  protoOf(CaseInsensitiveMap).r2 = function () {
    if (this.g27_1 > 0) {
      fill(this.e27_1, null);
      fill(this.f27_1, null);
      fill_0(this.h27_1, -1);
      this.g27_1 = 0;
      this.i27_1 = 0;
    }
  };
  protoOf(CaseInsensitiveMap).t27 = function (key, value) {
    if (this.e27_1 === Companion_getInstance().g28_1) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.e27_1 = Array(8);
      var tmp_0 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0.f27_1 = Array(8);
      var tmp_1 = this;
      var tmp_2 = 0;
      var tmp_3 = new Int32Array(8);
      while (tmp_2 < 8) {
        tmp_3[tmp_2] = -1;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_1.h27_1 = tmp_3;
    }
    var hash = caseInsensitiveHashCode(Companion_getInstance(), key);
    var index = hash & (this.e27_1.length - 1 | 0);
    while (true) {
      var existingKey = this.e27_1[index];
      if (existingKey == null) {
        ensureCapacity(this);
        index = hash & (this.e27_1.length - 1 | 0);
        while (!(this.e27_1[index] == null)) {
          index = (index + 1 | 0) & (this.e27_1.length - 1 | 0);
        }
        if (this.i27_1 === this.h27_1.length) {
          compactInsertionOrder(this);
        }
        this.e27_1[index] = key;
        this.f27_1[index] = value;
        var tmp_4 = this.h27_1;
        var _unary__edvuaz = this.i27_1;
        this.i27_1 = _unary__edvuaz + 1 | 0;
        tmp_4[_unary__edvuaz] = index;
        this.g27_1 = this.g27_1 + 1 | 0;
        return null;
      }
      if (equals(existingKey, key, true)) {
        var oldValue = this.f27_1[index];
        this.f27_1[index] = value;
        return oldValue;
      }
      index = (index + 1 | 0) & (this.e27_1.length - 1 | 0);
    }
  };
  protoOf(CaseInsensitiveMap).o2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.t27(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).k28 = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.m1();
      this.t27(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).q2 = function (from) {
    return this.k28(from);
  };
  protoOf(CaseInsensitiveMap).m27 = function (key) {
    var index = findIndex(this, key);
    if (index < 0)
      return null;
    var oldValue = this.f27_1[index];
    var inductionVariable = 0;
    var last = this.i27_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.h27_1[i] === index) {
          this.h27_1[i] = -1;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    this.e27_1[index] = null;
    this.f27_1[index] = null;
    this.g27_1 = this.g27_1 - 1 | 0;
    var nextIndex = (index + 1 | 0) & (this.e27_1.length - 1 | 0);
    while (!(this.e27_1[nextIndex] == null)) {
      var rehashKey = ensureNotNull(this.e27_1[nextIndex]);
      var rehashValue = this.f27_1[nextIndex];
      var oldRehashIndex = nextIndex;
      this.e27_1[nextIndex] = null;
      this.f27_1[nextIndex] = null;
      this.g27_1 = this.g27_1 - 1 | 0;
      var newIndex = putWithoutTrackingOrderReturnIndex(this, rehashKey, !(rehashValue == null) ? rehashValue : THROW_CCE());
      var inductionVariable_0 = 0;
      var last_0 = this.i27_1;
      if (inductionVariable_0 < last_0)
        $l$loop_0: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (this.h27_1[i_0] === oldRehashIndex) {
            this.h27_1[i_0] = newIndex;
            break $l$loop_0;
          }
        }
         while (inductionVariable_0 < last_0);
      nextIndex = (nextIndex + 1 | 0) & (this.e27_1.length - 1 | 0);
    }
    return oldValue;
  };
  protoOf(CaseInsensitiveMap).p2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.m27((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).m2 = function () {
    var tmp0_elvis_lhs = this.j27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new KeySet(this);
      this.j27_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).k1 = function () {
    var tmp0_elvis_lhs = this.k27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new EntrySet(this);
      this.k27_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).n2 = function () {
    var tmp0_elvis_lhs = this.l27_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ValueCollection(this);
      this.l27_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CaseInsensitiveMap))
      return false;
    if (!(other.e1() === this.g27_1))
      return false;
    var inductionVariable = 0;
    var last = this.e27_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.e27_1[i];
        if (!(k == null)) {
          var v = this.f27_1[i];
          if (!equals_0(other.j28(k), v))
            return false;
        }
      }
       while (inductionVariable <= last);
    return true;
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    var result = 0;
    var inductionVariable = 0;
    var last = this.e27_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = this.e27_1[i];
        if (!(k == null)) {
          var tmp = result;
          var tmp_0 = caseInsensitiveHashCode(Companion_getInstance(), k);
          var tmp0_safe_receiver = this.f27_1[i];
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
          result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
        }
      }
       while (inductionVariable <= last);
    return result;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charCodeAt(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1 = toString_0(_this__u8e3s4).toLowerCase();
    return charCodeAt(tmp$ret$1, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new SilentSupervisor$$inlined$CoroutineExceptionHandler$1();
    return tmp.cf(tmp$ret$0);
  }
  function SilentSupervisor$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(SilentSupervisor$$inlined$CoroutineExceptionHandler$1).l1f = function (context, exception) {
    return Unit_instance;
  };
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    while (get_size(builder) < size) {
      writeText(builder, generateNonceBlocking());
    }
    return readByteArray(builder, size);
  }
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (!properties_initialized_Crypto_kt_8g5vqb) {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.n28_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.m28_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.o28_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.n28_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.m28_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.p28_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.q28_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.r28_1 = tmp_6 instanceof WasmJs;
    this.s28_1 = equals_0(get_platform(this), Jvm_getInstance());
    this.t28_1 = equals_0(get_platform(this), Native_getInstance());
    this.u28_1 = get_isDevelopmentMode(this);
    this.v28_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
  var JsPlatform_entriesInitialized;
  function JsPlatform_initEntries() {
    if (JsPlatform_entriesInitialized)
      return Unit_instance;
    JsPlatform_entriesInitialized = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  function Jvm() {
    Jvm_instance = this;
    Platform.call(this);
  }
  protoOf(Jvm).toString = function () {
    return 'Jvm';
  };
  protoOf(Jvm).hashCode = function () {
    return 1051825272;
  };
  protoOf(Jvm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Jvm))
      return false;
    return true;
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function Native() {
    Native_instance = this;
    Platform.call(this);
  }
  protoOf(Native).toString = function () {
    return 'Native';
  };
  protoOf(Native).hashCode = function () {
    return -1059277600;
  };
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Native))
      return false;
    return true;
  };
  var Native_instance;
  function Native_getInstance() {
    if (Native_instance == null)
      new Native();
    return Native_instance;
  }
  function Js(jsPlatform) {
    Platform.call(this);
    this.n28_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.n28_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.n28_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    if (!this.n28_1.equals(other.n28_1))
      return false;
    return true;
  };
  function WasmJs() {
  }
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function toMap(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.w28();
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp = element.l1();
      var tmp$ret$2 = toList(element.m1());
      destination.o2(tmp, tmp$ret$2);
    }
    return destination;
  }
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = builder.w28().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var name = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.m1();
      _this__u8e3s4.x28(name, values);
    }
    return _this__u8e3s4;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.d29_1.l2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      $this.e29(name);
      // Inline function 'kotlin.collections.set' call
      $this.d29_1.o2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.x28(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.c29_1 = caseInsensitiveName;
    this.d29_1 = this.c29_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).y28 = function () {
    return this.c29_1;
  };
  protoOf(StringValuesBuilderImpl).z28 = function (name) {
    return this.d29_1.l2(name);
  };
  protoOf(StringValuesBuilderImpl).a29 = function () {
    return this.d29_1.m2();
  };
  protoOf(StringValuesBuilderImpl).r = function () {
    return this.d29_1.r();
  };
  protoOf(StringValuesBuilderImpl).w28 = function () {
    return unmodifiable(this.d29_1.k1());
  };
  protoOf(StringValuesBuilderImpl).f29 = function (name, value) {
    this.g29(value);
    var list = ensureListForKey(this, name);
    list.r2();
    list.b1(value);
  };
  protoOf(StringValuesBuilderImpl).j28 = function (name) {
    var tmp0_safe_receiver = this.z28(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).h29 = function (name, value) {
    this.g29(value);
    ensureListForKey(this, name).b1(value);
  };
  protoOf(StringValuesBuilderImpl).i29 = function (stringValues) {
    stringValues.b29(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).x28 = function (name, values) {
    // Inline function 'kotlin.let' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.g29(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).j29 = function (name) {
    this.d29_1.p2(name);
  };
  protoOf(StringValuesBuilderImpl).r2 = function () {
    this.d29_1.r2();
  };
  protoOf(StringValuesBuilderImpl).e29 = function (name) {
  };
  protoOf(StringValuesBuilderImpl).g29 = function (value) {
  };
  function tableSizeFor($this, size) {
    var n = size - 1 | 0;
    n = n | (n >>> 1 | 0);
    n = n | (n >>> 2 | 0);
    n = n | (n >>> 4 | 0);
    n = n | (n >>> 8 | 0);
    n = n | (n >>> 16 | 0);
    return n < 4 ? 4 : n + 1 | 0;
  }
  function caseInsensitiveHashCode_0($this, s) {
    var h = 0;
    var inductionVariable = 0;
    var last = s.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, h);
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(s, i);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1 = toString_0(this_0).toLowerCase();
        // Inline function 'kotlin.code' call
        var this_1 = charCodeAt(tmp$ret$1, 0);
        h = tmp + Char__toInt_impl_vasixd(this_1) | 0;
      }
       while (inductionVariable < last);
    return h;
  }
  function listForKey($this, name) {
    if ($this.n29_1 === 0)
      return null;
    var hash = computeHash($this, name);
    var idx = $this.o29_1[hash & ($this.o29_1.length - 1 | 0)];
    while (idx >= 0) {
      if (equals($this.l29_1[idx], name, $this.k29_1)) {
        return $this.m29_1[idx];
      }
      idx = $this.p29_1[idx];
    }
    return null;
  }
  function computeHash($this, key) {
    var tmp;
    if ($this.k29_1) {
      tmp = caseInsensitiveHashCode_0(Companion_instance_1, key);
    } else {
      tmp = getStringHashCode(key);
    }
    return tmp;
  }
  function StringValuesEntry(key, value) {
    this.q29_1 = key;
    this.r29_1 = value;
  }
  protoOf(StringValuesEntry).l1 = function () {
    return this.q29_1;
  };
  protoOf(StringValuesEntry).m1 = function () {
    return this.r29_1;
  };
  protoOf(StringValuesEntry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.l1(), this.q29_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.m1(), this.r29_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesEntry).hashCode = function () {
    return getStringHashCode(this.q29_1) ^ hashCode(this.r29_1);
  };
  protoOf(StringValuesEntry).toString = function () {
    return this.q29_1 + '=' + toString(this.r29_1);
  };
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.k29_1 = caseInsensitiveName;
    if (values.r()) {
      this.n29_1 = 0;
      var tmp = this;
      // Inline function 'kotlin.emptyArray' call
      tmp.l29_1 = [];
      var tmp_0 = this;
      // Inline function 'kotlin.emptyArray' call
      tmp_0.m29_1 = [];
      this.o29_1 = new Int32Array(0);
      this.p29_1 = new Int32Array(0);
    } else if (!this.k29_1) {
      this.n29_1 = values.e1();
      var tmp_1 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.n29_1;
      var tmp_2 = Array(size);
      tmp_1.l29_1 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
      var tmp_3 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = this.n29_1;
      var tmp_4 = Array(size_0);
      tmp_3.m29_1 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
      var tableSize = tableSizeFor(Companion_instance_1, this.n29_1);
      var tmp_5 = this;
      var tmp_6 = 0;
      var tmp_7 = new Int32Array(tableSize);
      while (tmp_6 < tableSize) {
        tmp_7[tmp_6] = -1;
        tmp_6 = tmp_6 + 1 | 0;
      }
      tmp_5.o29_1 = tmp_7;
      var tmp_8 = this;
      var tmp_9 = 0;
      var tmp_10 = this.n29_1;
      var tmp_11 = new Int32Array(tmp_10);
      while (tmp_9 < tmp_10) {
        tmp_11[tmp_9] = -1;
        tmp_9 = tmp_9 + 1 | 0;
      }
      tmp_8.p29_1 = tmp_11;
      var i = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = values.k1().t();
      while (_iterator__ex2g4s.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.l1();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.m1();
        this.l29_1[i] = key;
        var tmp_12 = i;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_1 = value.e1();
        var list = ArrayList_init_$Create$_0(size_1);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size_1)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$13 = value.d1(index);
            list.b1(tmp$ret$13);
          }
           while (inductionVariable < size_1);
        this.m29_1[tmp_12] = list;
        var hash = computeHash(this, key);
        var bucket = hash & (tableSize - 1 | 0);
        this.p29_1[i] = this.o29_1[bucket];
        this.o29_1[bucket] = i;
        i = i + 1 | 0;
      }
    } else {
      var deduped = caseInsensitiveMap();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = values.k1().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = _destruct__k2r9zo_0.l1();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = _destruct__k2r9zo_0.m1();
        var existing = deduped.l2(key_0);
        if (!(existing == null)) {
          // Inline function 'kotlin.collections.set' call
          var value_1 = plus(existing, value_0);
          deduped.o2(key_0, value_1);
        } else {
          // Inline function 'kotlin.collections.set' call
          deduped.o2(key_0, value_0);
        }
      }
      this.n29_1 = deduped.e1();
      var tmp_13 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_2 = this.n29_1;
      var tmp_14 = Array(size_2);
      tmp_13.l29_1 = isArray(tmp_14) ? tmp_14 : THROW_CCE();
      var tmp_15 = this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size_3 = this.n29_1;
      var tmp_16 = Array(size_3);
      tmp_15.m29_1 = isArray(tmp_16) ? tmp_16 : THROW_CCE();
      var tableSize_0 = tableSizeFor(Companion_instance_1, this.n29_1);
      var tmp_17 = this;
      var tmp_18 = 0;
      var tmp_19 = new Int32Array(tableSize_0);
      while (tmp_18 < tableSize_0) {
        tmp_19[tmp_18] = -1;
        tmp_18 = tmp_18 + 1 | 0;
      }
      tmp_17.o29_1 = tmp_19;
      var tmp_20 = this;
      var tmp_21 = 0;
      var tmp_22 = this.n29_1;
      var tmp_23 = new Int32Array(tmp_22);
      while (tmp_21 < tmp_22) {
        tmp_23[tmp_21] = -1;
        tmp_21 = tmp_21 + 1 | 0;
      }
      tmp_20.p29_1 = tmp_23;
      var i_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = deduped.k1().t();
      while (_iterator__ex2g4s_1.u()) {
        var _destruct__k2r9zo_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var key_1 = _destruct__k2r9zo_1.l1();
        // Inline function 'kotlin.collections.component2' call
        var value_2 = _destruct__k2r9zo_1.m1();
        this.l29_1[i_0] = key_1;
        var tmp_24 = i_0;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_4 = value_2.e1();
        var list_0 = ArrayList_init_$Create$_0(size_4);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size_4)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$30 = value_2.d1(index_0);
            list_0.b1(tmp$ret$30);
          }
           while (inductionVariable_0 < size_4);
        this.m29_1[tmp_24] = list_0;
        var hash_0 = computeHash(this, key_1);
        var bucket_0 = hash_0 & (tableSize_0 - 1 | 0);
        this.p29_1[i_0] = this.o29_1[bucket_0];
        this.o29_1[bucket_0] = i_0;
        i_0 = i_0 + 1 | 0;
      }
    }
  }
  protoOf(StringValuesImpl).y28 = function () {
    return this.k29_1;
  };
  protoOf(StringValuesImpl).j28 = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).z28 = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).a29 = function () {
    if (this.n29_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.n29_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.b1(this.l29_1[i]);
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).r = function () {
    return this.n29_1 === 0;
  };
  protoOf(StringValuesImpl).w28 = function () {
    if (this.n29_1 === 0)
      return emptySet();
    // Inline function 'kotlin.collections.linkedSetOf' call
    var result = LinkedHashSet_init_$Create$();
    var inductionVariable = 0;
    var last = this.n29_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result.b1(new StringValuesEntry(this.l29_1[i], this.m29_1[i]));
      }
       while (inductionVariable < last);
    return result;
  };
  protoOf(StringValuesImpl).b29 = function (body) {
    var inductionVariable = 0;
    var last = this.n29_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        body(this.l29_1[i], this.m29_1[i]);
      }
       while (inductionVariable < last);
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.k29_1 + ') ' + toString(this.w28());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.k29_1 === other.y28()))
      return false;
    return entriesEquals(this.w28(), other.w28());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.w28(), imul(31, getBooleanHashCode(this.k29_1)));
  };
  function StringValuesSingleImpl$entries$1(this$0) {
    this.s29_1 = this$0.v29_1;
    this.t29_1 = this$0.w29_1;
  }
  protoOf(StringValuesSingleImpl$entries$1).l1 = function () {
    return this.s29_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).m1 = function () {
    return this.t29_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).toString = function () {
    return this.s29_1 + '=' + toString(this.t29_1);
  };
  protoOf(StringValuesSingleImpl$entries$1).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals_0(other.l1(), this.s29_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.m1(), this.t29_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesSingleImpl$entries$1).hashCode = function () {
    return getStringHashCode(this.s29_1) ^ hashCode(this.t29_1);
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.u29_1 = caseInsensitiveName;
    this.v29_1 = name;
    this.w29_1 = values;
  }
  protoOf(StringValuesSingleImpl).y28 = function () {
    return this.u29_1;
  };
  protoOf(StringValuesSingleImpl).z28 = function (name) {
    return equals(this.v29_1, name, this.y28()) ? this.w29_1 : null;
  };
  protoOf(StringValuesSingleImpl).w28 = function () {
    return setOf(new StringValuesSingleImpl$entries$1(this));
  };
  protoOf(StringValuesSingleImpl).r = function () {
    return false;
  };
  protoOf(StringValuesSingleImpl).a29 = function () {
    return setOf(this.v29_1);
  };
  protoOf(StringValuesSingleImpl).toString = function () {
    return 'StringValues(case=' + !this.y28() + ') ' + toString(this.w28());
  };
  protoOf(StringValuesSingleImpl).hashCode = function () {
    return entriesHashCode(this.w28(), imul(31, getBooleanHashCode(this.y28())));
  };
  protoOf(StringValuesSingleImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.y28() === other.y28()))
      return false;
    return entriesEquals(this.w28(), other.w28());
  };
  protoOf(StringValuesSingleImpl).b29 = function (body) {
    return body(this.v29_1, this.w29_1);
  };
  protoOf(StringValuesSingleImpl).j28 = function (name) {
    return equals(name, this.v29_1, this.y28()) ? firstOrNull(this.w29_1) : null;
  };
  function entriesEquals(a, b) {
    return equals_0(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$0 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
    var firstIndex = tmp$ret$0;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    this_0.vb(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.s(toLowerCasePreservingASCII(charCodeAt(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1 = toString_0(ch).toLowerCase();
      tmp = charCodeAt(tmp$ret$1, 0);
    }
    return tmp;
  }
  function ChannelIOException() {
  }
  function CopyOnWriteHashMap() {
    this.x29_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).y29 = function (key) {
    return this.x29_1.kotlinx$atomicfu$value.l2(key);
  };
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy() {
    return createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values());
  }
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0() {
    return createSimpleEnumSerializer('io.ktor.util.date.Month', values_0());
  }
  function Companion_1() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GMTDate$Companion$$childSerializers$_anonymous__gyfycy);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z29_1 = [null, null, null, tmp_1, null, null, lazy(tmp_2, GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0), null, null];
    this.a2a_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.aw('seconds', false);
    tmp0_serialDesc.aw('minutes', false);
    tmp0_serialDesc.aw('hours', false);
    tmp0_serialDesc.aw('dayOfWeek', false);
    tmp0_serialDesc.aw('dayOfMonth', false);
    tmp0_serialDesc.aw('dayOfYear', false);
    tmp0_serialDesc.aw('month', false);
    tmp0_serialDesc.aw('year', false);
    tmp0_serialDesc.aw('timestamp', false);
    this.b2a_1 = tmp0_serialDesc;
  }
  protoOf($serializer).kn = function (decoder) {
    var tmp0_desc = this.b2a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = new Long(0, 0);
    var tmp13_input = decoder.iq(tmp0_desc);
    var tmp14_cached = Companion_getInstance_1().z29_1;
    if (tmp13_input.yq()) {
      tmp4_local0 = tmp13_input.nq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.nq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.nq(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.uq(tmp0_desc, 3, tmp14_cached[3].m1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.nq(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.nq(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.uq(tmp0_desc, 6, tmp14_cached[6].m1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.nq(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.oq(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.zq(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.nq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.nq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.nq(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.uq(tmp0_desc, 3, tmp14_cached[3].m1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.nq(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.nq(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.uq(tmp0_desc, 6, tmp14_cached[6].m1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.nq(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.oq(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.jq(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).jn = function () {
    return this.b2a_1;
  };
  protoOf($serializer).pw = function () {
    var tmp0_cached = Companion_getInstance_1().z29_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].m1(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6].m1(), IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().b2a_1);
    }
    $this.c2a_1 = seconds;
    $this.d2a_1 = minutes;
    $this.e2a_1 = hours;
    $this.f2a_1 = dayOfWeek;
    $this.g2a_1 = dayOfMonth;
    $this.h2a_1 = dayOfYear;
    $this.i2a_1 = month;
    $this.j2a_1 = year;
    $this.k2a_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.c2a_1 = seconds;
    this.d2a_1 = minutes;
    this.e2a_1 = hours;
    this.f2a_1 = dayOfWeek;
    this.g2a_1 = dayOfMonth;
    this.h2a_1 = dayOfYear;
    this.i2a_1 = month;
    this.j2a_1 = year;
    this.k2a_1 = timestamp;
  }
  protoOf(GMTDate).l2a = function (other) {
    return this.k2a_1.c3(other.k2a_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.l2a(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.c2a_1 + ', minutes=' + this.d2a_1 + ', hours=' + this.e2a_1 + ', dayOfWeek=' + this.f2a_1.toString() + ', dayOfMonth=' + this.g2a_1 + ', dayOfYear=' + this.h2a_1 + ', month=' + this.i2a_1.toString() + ', year=' + this.j2a_1 + ', timestamp=' + this.k2a_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.c2a_1;
    result = imul(result, 31) + this.d2a_1 | 0;
    result = imul(result, 31) + this.e2a_1 | 0;
    result = imul(result, 31) + this.f2a_1.hashCode() | 0;
    result = imul(result, 31) + this.g2a_1 | 0;
    result = imul(result, 31) + this.h2a_1 | 0;
    result = imul(result, 31) + this.i2a_1.hashCode() | 0;
    result = imul(result, 31) + this.j2a_1 | 0;
    result = imul(result, 31) + this.k2a_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    if (!(this.c2a_1 === other.c2a_1))
      return false;
    if (!(this.d2a_1 === other.d2a_1))
      return false;
    if (!(this.e2a_1 === other.e2a_1))
      return false;
    if (!this.f2a_1.equals(other.f2a_1))
      return false;
    if (!(this.g2a_1 === other.g2a_1))
      return false;
    if (!(this.h2a_1 === other.h2a_1))
      return false;
    if (!this.i2a_1.equals(other.i2a_1))
      return false;
    if (!(this.j2a_1 === other.j2a_1))
      return false;
    if (!equalsLong(this.k2a_1, other.k2a_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_2() {
  }
  protoOf(Companion_2).m2a = function (ordinal) {
    return get_entries().d1(ordinal);
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  var $ENTRIES;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.p2a_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_3() {
  }
  protoOf(Companion_3).m2a = function (ordinal) {
    return get_entries_0().d1(ordinal);
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  var $ENTRIES_0;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.s2a_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  var NO_DECISION;
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).t1l = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.t2a_1;
    while (true) {
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.u2a(this);
    }
  };
  protoOf(LockFreeLinkedListNode).v2a = function () {
    return unwrap(this.t1l());
  };
  function Symbol(symbol) {
    this.w2a_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.w2a_1;
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2a_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = _this__u8e3s4 instanceof LockFreeLinkedListNode ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (!properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$($this, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  }
  function $proceedLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2b_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 6;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.h2b_1 = this.g2b_1.n2b_1;
            if (this.h2b_1 === -1) {
              this.e8_1 = 5;
              continue $sm;
            } else {
              this.e8_1 = 2;
              continue $sm;
            }

          case 2:
            this.i2b_1 = this.g2b_1.k2b_1;
            if (this.h2b_1 >= this.i2b_1.e1()) {
              this.g2b_1.o2b();
              this.e8_1 = 5;
              continue $sm;
            } else {
              this.e8_1 = 3;
              continue $sm;
            }

          case 3:
            var executeInterceptor = this.i2b_1.d1(this.h2b_1);
            this.g2b_1.n2b_1 = this.h2b_1 + 1 | 0;
            this.e8_1 = 4;
            suspendResult = executeInterceptor(this.g2b_1, this.g2b_1.m2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.e8_1 = 1;
            continue $sm;
          case 5:
            return this.g2b_1.m2b_1;
          case 6:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 6) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.k2b_1 = interceptors;
    this.l2b_1 = coroutineContext;
    this.m2b_1 = subject;
    this.n2b_1 = 0;
  }
  protoOf(DebugPipelineContext).n18 = function () {
    return this.l2b_1;
  };
  protoOf(DebugPipelineContext).p2b = function () {
    return this.m2b_1;
  };
  protoOf(DebugPipelineContext).o2b = function () {
    this.n2b_1 = -1;
  };
  protoOf(DebugPipelineContext).q2b = function (subject, $completion) {
    this.m2b_1 = subject;
    return this.r2b($completion);
  };
  protoOf(DebugPipelineContext).r2b = function ($completion) {
    var index = this.n2b_1;
    if (index < 0)
      return this.m2b_1;
    if (index >= this.k2b_1.e1()) {
      this.o2b();
      return this.m2b_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).s2b = function (initial, $completion) {
    this.n2b_1 = 0;
    this.m2b_1 = initial;
    return this.r2b($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().t2b_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    if (!Companion_getInstance_4().t2b_1.r()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.w2b_1);
  }
  function copyInterceptors($this) {
    $this.w2b_1 = copiedInterceptors($this);
    $this.x2b_1 = false;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2b_1 = ArrayList_init_$Create$();
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.u2b_1 = phase;
    this.v2b_1 = relation;
    this.w2b_1 = interceptors;
    this.x2b_1 = true;
  }
  protoOf(PhaseContent).y2b = function () {
    return this.w2b_1.r();
  };
  protoOf(PhaseContent).e1 = function () {
    return this.w2b_1.e1();
  };
  protoOf(PhaseContent).z2b = function (interceptor) {
    if (this.x2b_1) {
      copyInterceptors(this);
    }
    this.w2b_1.b1(interceptor);
  };
  protoOf(PhaseContent).a2c = function (destination) {
    var interceptors = this.w2b_1;
    if (destination instanceof ArrayList) {
      destination.b5(destination.e1() + interceptors.e1() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.b1(interceptors.d1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).b2c = function () {
    this.x2b_1 = true;
    return this.w2b_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.u2b_1.c2c_1 + '`, ' + this.e1() + ' handlers';
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    var tmp0 = $this.h2c_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.setValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    tmp0.kotlinx$atomicfu$value = _set____db54di;
    return Unit_instance;
  }
  function _get_interceptors__h4min7($this) {
    var tmp0 = $this.h2c_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    return tmp0.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.k2c());
  }
  function findPhase($this, phase) {
    var phasesList = $this.f2c_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.s2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.u2b_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.f2c_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.u2b_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.f2c_1;
    var inductionVariable = 0;
    var last = phasesList.e1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.d1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.u2b_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.g2c_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.f2c_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.d1(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.y2b())
            continue $l$loop_0;
          var interceptors = phaseContent.b2c();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.d1(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.a2c(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.i2c_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.i2c_1 = false;
    $this.j2c_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.i2c_1 = false;
    $this.j2c_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.b2c());
    $this.i2c_1 = false;
    $this.j2c_1 = phaseContent.u2b_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.f2c_1.r() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.i2c_1) {
      tmp = true;
    } else {
      tmp = !isInterface(currentInterceptors, KtMutableList);
    }
    if (tmp) {
      return false;
    }
    if (equals_0($this.j2c_1, phase)) {
      currentInterceptors.b1(block);
      return true;
    }
    if (equals_0(phase, last($this.f2c_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.f2c_1)) {
      ensureNotNull(findPhase($this, phase)).z2b(block);
      currentInterceptors.b1(block);
      return true;
    }
    return false;
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e() {
    return constructCallableReference(function (p0) {
      return _get_interceptors__h4min7(p0);
    }, 1, 0, 14);
  }
  function Pipeline$_set_interceptors_$ref_13vc1m() {
    return constructCallableReference(function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    }, 2, 0, 15);
  }
  function Pipeline(phases) {
    this.d2c_1 = AttributesJsFn(true);
    this.e2c_1 = false;
    this.f2c_1 = mutableListOf(phases.slice());
    this.g2c_1 = 0;
    this.h2c_1 = atomic$ref$1(null);
    this.i2c_1 = false;
    this.j2c_1 = null;
  }
  protoOf(Pipeline).k2c = function () {
    return this.e2c_1;
  };
  protoOf(Pipeline).l2c = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.k8();
    return createContext(this, context, subject, tmp$ret$0).s2b(subject, $completion);
  };
  protoOf(Pipeline).n2c = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.f2c_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.f2c_1.d1(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v2b_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.o2c_1;
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals_0(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.f2c_1.t2(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).p2c = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.f2c_1.t2(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).q2c = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.g2c_1 = this.g2c_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.z2b(block);
    this.g2c_1 = this.g2c_1 + 1 | 0;
    resetInterceptorsList(this);
    this.r2c();
  };
  protoOf(Pipeline).r2c = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.m2c_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() || debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.c2c_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.c2c_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.o2c_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.s2c_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  protoOf(Last).toString = function () {
    return 'Last';
  };
  protoOf(Last).hashCode = function () {
    return 967869129;
  };
  protoOf(Last).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Last))
      return false;
    return true;
  };
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.z2c_1;
      if (currentIndex === $this.u2c_1.e1()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.w2c_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.z2c_1 = currentIndex + 1 | 0;
      var next = $this.u2c_1.d1(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.w2c_1, $this.v2c_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    // Inline function 'kotlin.check' call
    if (!($this.y2c_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.x2c_1[$this.y2c_1]);
    var _unary__edvuaz = $this.y2c_1;
    $this.y2c_1 = _unary__edvuaz - 1 | 0;
    $this.x2c_1[_unary__edvuaz] = null;
    var interceptor = next.k8().r8(Key_instance_0);
    var tmp;
    if (interceptor instanceof CoroutineDispatcher) {
      tmp = interceptor.h1f(next.k8()) ? intercepted(next) : next;
    } else {
      tmp = intercepted(next);
    }
    var toResume = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(result);
    if (exception == null) {
      toResume.p8(result);
    } else {
      var recoveredException = recoverStackTraceBridge(exception, next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(recoveredException));
      toResume.p8(tmp$ret$3);
    }
  }
  function discardLastRootContinuation($this) {
    // Inline function 'kotlin.check' call
    if (!($this.y2c_1 >= 0)) {
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var _unary__edvuaz = $this.y2c_1;
    $this.y2c_1 = _unary__edvuaz - 1 | 0;
    $this.x2c_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.b2d_1 = this$0;
    this.a2d_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).k8 = function () {
    var inductionVariable = this.b2d_1.y2c_1;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var cont = this.b2d_1.x2c_1[index];
        if (!(cont === this) && !(cont == null))
          return cont.k8();
      }
       while (0 <= inductionVariable);
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).se = function (result) {
    // Inline function 'kotlin.onFailure' call
    var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(result);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(tmp0_safe_receiver));
      resumeRootWith(this.b2d_1, tmp$ret$4);
      return Unit_instance;
    }
    loop(this.b2d_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).p8 = function (result) {
    return this.se(result);
  };
  function SuspendFunctionGun(initial, context, interceptors) {
    PipelineContext.call(this, context);
    this.u2c_1 = interceptors;
    var tmp = this;
    tmp.v2c_1 = new SuspendFunctionGun$continuation$1(this);
    this.w2c_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.u2c_1.e1();
    tmp_0.x2c_1 = Array(size);
    this.y2c_1 = -1;
    this.z2c_1 = 0;
  }
  protoOf(SuspendFunctionGun).n18 = function () {
    return this.v2c_1.k8();
  };
  protoOf(SuspendFunctionGun).p2b = function () {
    return this.w2c_1;
  };
  protoOf(SuspendFunctionGun).r2b = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      if (this.z2c_1 === this.u2c_1.e1()) {
        tmp$ret$0 = this.w2c_1;
        break $l$block_0;
      }
      this.c2d($completion);
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.w2c_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).q2b = function (subject, $completion) {
    this.w2c_1 = subject;
    return this.r2b($completion);
  };
  protoOf(SuspendFunctionGun).s2b = function (initial, $completion) {
    this.z2c_1 = 0;
    if (this.z2c_1 === this.u2c_1.e1())
      return initial;
    this.w2c_1 = initial;
    // Inline function 'kotlin.check' call
    if (!(this.y2c_1 < 0)) {
      var message = 'Already started';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.r2b($completion);
  };
  protoOf(SuspendFunctionGun).c2d = function (continuation) {
    this.y2c_1 = this.y2c_1 + 1 | 0;
    this.x2c_1[this.y2c_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.d2d_1 = type;
    this.e2d_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.e2d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.d2d_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.e2d_1 == null) || !(other.e2d_1 == null)) {
      tmp = equals_0(this.e2d_1, other.e2d_1);
    } else {
      tmp = this.d2d_1.equals(other.d2d_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.e2d_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.d2d_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    var tmp0 = platform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('platform', 1, tmp, _get_platform_$ref_41w7mv(), null);
    return tmp0.m1();
  }
  var platform$delegate;
  function platform$delegate$lambda() {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    return new Js(hasNodeApi() ? JsPlatform_Node_getInstance() : JsPlatform_Browser_getInstance());
  }
  function _get_platform_$ref_41w7mv() {
    return constructCallableReference(function (p0) {
      return get_platform(p0);
    }, 1, 0, 16);
  }
  var properties_initialized_PlatformUtils_js_kt_8g036j;
  function _init_properties_PlatformUtils_js_kt__7rxm8p() {
    if (!properties_initialized_PlatformUtils_js_kt_8g036j) {
      properties_initialized_PlatformUtils_js_kt_8g036j = true;
      platform$delegate = lazy_0(platform$delegate$lambda);
    }
  }
  function toJsArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : toNumber(timestamp);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    var dayOfWeek = Companion_instance_3.m2a((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_4.m2a(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f2d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).s26 = function (key) {
    return this.f2d_1.l2(key);
  };
  protoOf(AttributesJs).t26 = function (key) {
    return this.f2d_1.j2(key);
  };
  protoOf(AttributesJs).u26 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.f2d_1.o2(key, value);
  };
  protoOf(AttributesJs).w26 = function (key) {
    this.f2d_1.p2(key);
  };
  protoOf(AttributesJs).x26 = function (key, block) {
    var tmp0_safe_receiver = this.f2d_1.l2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.collections.set' call
    this.f2d_1.o2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).y26 = function () {
    return toList(this.f2d_1.m2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_Crypto_web_kt__nxveo7();
    return _crypto;
  }
  var _crypto;
  var md5Shifts;
  var md5T;
  function generateNonceBlocking(length) {
    length = length === VOID ? 32 : length;
    _init_properties_Crypto_web_kt__nxveo7();
    var buffer = toJsArray(new Int8Array((length / 2 | 0) + 1 | 0));
    get__crypto().getRandomValues(buffer);
    return substring(toHexString(toByteArray(buffer)), 0, length);
  }
  var properties_initialized_Crypto_web_kt_8s9a0n;
  function _init_properties_Crypto_web_kt__nxveo7() {
    if (!properties_initialized_Crypto_web_kt_8s9a0n) {
      properties_initialized_Crypto_web_kt_8s9a0n = true;
      _crypto = globalThis ? globalThis.crypto : window.crypto || window.msCrypto;
      // Inline function 'kotlin.intArrayOf' call
      md5Shifts = new Int32Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
      // Inline function 'kotlin.intArrayOf' call
      md5T = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);
    }
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process ? process.env.KTOR_LOG_LEVEL : null;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().p28_1 || PlatformUtils_getInstance().o28_1) {
      case true:
        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          var value = getKtorLogLevel();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }

        // Inline function 'kotlin.Result.getOrNull' call

        var this_0 = tmp_1;
        var tmp1_safe_receiver = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
        var tmp_3;
        if (tmp1_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp0 = get_entries_1();
          var tmp$ret$7;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (element.z_1 === tmp1_safe_receiver) {
                tmp$ret$7 = element;
                break $l$block;
              }
            }
            tmp$ret$7 = null;
          }
          tmp_3 = tmp$ret$7;
        }

        var tmp2_elvis_lhs = tmp_3;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.g2d_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).h2d = function () {
    return this.g2d_1;
  };
  protoOf(KtorSimpleLogger$1).i2d = function (message) {
    if (this.g2d_1.v2(LogLevel_WARN_getInstance()) > 0)
      return Unit_instance;
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).j2d = function (message, cause) {
    if (this.g2d_1.v2(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_instance;
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).k2d = function (message) {
    if (this.g2d_1.v2(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  function get_isTraceEnabled(_this__u8e3s4) {
    return _this__u8e3s4.h2d().v2(LogLevel_TRACE_getInstance()) <= 0;
  }
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var $ENTRIES_1;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    var coroutine = pipelineStartCoroutineUninterceptedOrReturn$slambda_0(interceptor, context, subject, null);
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    return startCoroutineUninterceptedOrReturnNonGeneratorVersion(coroutine, continuation);
  }
  function pipelineStartCoroutineUninterceptedOrReturn$slambda($interceptor, $context, $subject, resultContinuation) {
    this.t2d_1 = $interceptor;
    this.u2d_1 = $context;
    this.v2d_1 = $subject;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).k23 = function ($completion) {
    var tmp = this.w2d($completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).y8 = function ($completion) {
    return this.k23($completion);
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.t2d_1(this.u2d_1, this.v2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pipelineStartCoroutineUninterceptedOrReturn$slambda).w2d = function (completion) {
    return new pipelineStartCoroutineUninterceptedOrReturn$slambda(this.t2d_1, this.u2d_1, this.v2d_1, completion);
  };
  function pipelineStartCoroutineUninterceptedOrReturn$slambda_0($interceptor, $context, $subject, resultContinuation) {
    var i = new pipelineStartCoroutineUninterceptedOrReturn$slambda($interceptor, $context, $subject, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.k23($completion);
    }, 0);
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.ia(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf($serializer).qw = typeParametersSerializers;
  protoOf(AttributesJs).r26 = get;
  protoOf(AttributesJs).v26 = set;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = ChannelIOException;
  _.$_$.c = CopyOnWriteHashMap;
  _.$_$.d = GMTDate_0;
  _.$_$.e = getTimeMillis;
  _.$_$.f = LockFreeLinkedListNode;
  _.$_$.g = KtorSimpleLogger;
  _.$_$.h = get_isTraceEnabled;
  _.$_$.i = PipelineContext;
  _.$_$.j = PipelinePhase;
  _.$_$.k = Pipeline;
  _.$_$.l = TypeInfo;
  _.$_$.m = instanceOf;
  _.$_$.n = AttributeKey;
  _.$_$.o = AttributesJsFn;
  _.$_$.p = Attributes;
  _.$_$.q = SilentSupervisor;
  _.$_$.r = forEach;
  _.$_$.s = get_0;
  _.$_$.t = StringValuesBuilderImpl;
  _.$_$.u = StringValuesImpl;
  _.$_$.v = StringValuesSingleImpl;
  _.$_$.w = StringValues;
  _.$_$.x = appendAll;
  _.$_$.y = generateNonce;
  _.$_$.z = isLowerCase;
  _.$_$.a1 = putAll;
  _.$_$.b1 = toCharArray;
  _.$_$.c1 = toLowerCasePreservingASCIIRules;
  _.$_$.d1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
