(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-websockets'.");
    }
    globalThis['ktor-ktor-websockets'] = factory(typeof globalThis['ktor-ktor-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-websockets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var mapCapacity = kotlin_kotlin.$_$.y6;
  var coerceAtLeast = kotlin_kotlin.$_$.tb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.h3;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var enumEntries = kotlin_kotlin.$_$.u8;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var Enum = kotlin_kotlin.$_$.xe;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.nb;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var Long = kotlin_kotlin.$_$.cf;
  var isInterface = kotlin_kotlin.$_$.ab;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var compare = kotlin_kotlin.$_$.a9;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var initMetadataForLambda = kotlin_kotlin.$_$.qa;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.yf;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.p3;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.z7;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.g9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var joinToString = kotlin_kotlin.$_$.q6;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var Exception = kotlin_kotlin.$_$.ze;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.v3;
  var captureStack = kotlin_kotlin.$_$.v9;
  var defineProp = kotlin_kotlin.$_$.ea;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var compareTo = kotlin_kotlin.$_$.ca;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.sc;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.qb;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toHexString = kotlin_kotlin.$_$.zd;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.v8;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var RuntimeException = kotlin_kotlin.$_$.gf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.y2;
  var split = kotlin_kotlin.$_$.md;
  var first = kotlin_kotlin.$_$.l6;
  var isCharSequence = kotlin_kotlin.$_$.wa;
  var trim = kotlin_kotlin.$_$.le;
  var drop = kotlin_kotlin.$_$.e6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.d30().l1p(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_0);
  initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($outgoingProcessorLoopCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendCloseSequenceCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkMaxFrameSizeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [CopyableThrowable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException', VOID, RuntimeException);
  initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
  initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
  initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
  initMetadataForCoroutine($closeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Frame, 'Frame');
  initMetadataForClass(Binary, 'Binary', VOID, Frame);
  initMetadataForClass(Text, 'Text', VOID, Frame);
  initMetadataForClass(Close, 'Close', Close_init_$Create$_0, Frame);
  initMetadataForClass(Ping, 'Ping', VOID, Frame);
  initMetadataForClass(Pong, 'Pong', VOID, Frame);
  initMetadataForCompanion(Companion_5);
  //endregion
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.s2z_1;
      destination.o2(tmp$ret$2, element);
    }
    tmp.t2z_1 = destination;
    this.u2z_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).v2z = function (code) {
    return this.t2z_1.l2(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_instance;
    Codes_entriesInitialized = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    Companion_getInstance();
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.s2z_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.s2z_1 = code;
  }
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.w2z_1 = code;
    this.x2z_1 = message;
  }
  protoOf(CloseReason).y2z = function () {
    return Companion_getInstance().v2z(this.w2z_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.y2z();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.w2z_1 : tmp0_elvis_lhs) + ', message=' + this.x2z_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.w2z_1;
    result = imul(result, 31) + getStringHashCode(this.x2z_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.w2z_1 === other.w2z_1))
      return false;
    if (!(this.x2z_1 === other.x2z_1))
      return false;
    return true;
  };
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  var OUTGOING_CHANNEL_CONFIG;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
    pingIntervalMillis = pingIntervalMillis === VOID ? new Long(0, 0) : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().f30_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.g30_1, channelsConfig.h30_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().cf(Dispatchers_getInstance().d1j_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().cf(Dispatchers_getInstance().d1j_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    exception = exception === VOID ? null : exception;
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  }
  function tryClose($this) {
    return $this.m31_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.p31_1;
    var tmp;
    if ($this.m31_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (compare(interval, new Long(0, 0)) > 0) {
      var tmp_0 = $this.f31_1.d30();
      var tmp_1 = $this.q31_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.g31_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.s1p();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.m1p(Companion_getInstance_0().s31_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.w1n_1);
    if ($this.m31_1.kotlinx$atomicfu$value && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.f32().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.g32(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.f32().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.h32(current);
    }
    return accumulator;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.s31_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.q32_1 = $incomingJob;
    this.r32_1 = $outgoingJob;
    this.s32_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).p24 = function ($this$launch, $completion) {
    var tmp = this.q24($this$launch, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 3;
            this.e8_1 = 1;
            suspendResult = this.q32_1.t19(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e8_1 = 2;
            suspendResult = this.r32_1.t19(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s32_1.i31_1.x19();
            return Unit_instance;
          case 3:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 3) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).q24 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.q32_1, this.r32_1, this.s32_1, completion);
    i.t32_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p24($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.c33_1 = this$0;
    this.d33_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).p24 = function ($this$launch, $completion) {
    var tmp = this.q24($this$launch, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 39;
            this.o33_1 = null;
            this.h33_1 = null;
            this.g33_1 = false;
            this.i33_1 = Unit_instance;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.e8_1 = 2;
            continue $sm;
          case 2:
            this.f8_1 = 33;
            this.f8_1 = 32;
            this.s33_1 = this.c33_1.f31_1.c30();
            this.e8_1 = 3;
            continue $sm;
          case 3:
            this.l33_1 = this.s33_1;
            this.k33_1 = null;
            this.e8_1 = 4;
            continue $sm;
          case 4:
            this.e8_1 = 5;
            continue $sm;
          case 5:
            this.e8_1 = 6;
            continue $sm;
          case 6:
            this.f8_1 = 29;
            this.f8_1 = 28;
            this.r33_1 = this.l33_1.t();
            this.e8_1 = 7;
            continue $sm;
          case 7:
            this.e8_1 = 8;
            suspendResult = this.r33_1.o1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.e8_1 = 26;
              continue $sm;
            }

            var e = this.r33_1.v();
            this.q33_1 = e;
            this.e8_1 = 9;
            continue $sm;
          case 9:
            this.p33_1 = this.q33_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.k2d('WebSocketSession(' + toString(this.e33_1) + ') receiving frame ' + this.p33_1.toString());
            }

            var tmp0_subject = this.p33_1;
            if (tmp0_subject instanceof Close) {
              if (!this.c33_1.d30().q1n()) {
                this.e8_1 = 18;
                var tmp_0 = this.c33_1.d30();
                var tmp1_elvis_lhs = readReason(this.p33_1);
                suspendResult = tmp_0.l1p(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.e8_1 = 19;
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.c33_1.g31_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.n33_1 = null;
                  this.e8_1 = 17;
                  continue $sm;
                } else {
                  this.e8_1 = 16;
                  suspendResult = tmp2_safe_receiver.l1p(this.p33_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.e8_1 = 15;
                  suspendResult = this.d33_1.l1p(this.p33_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.e8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.c33_1, this.h33_1, this.p33_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.p33_1.t33_1) {
              if (this.o33_1 == null) {
                this.o33_1 = this.p33_1;
              }
              if (this.h33_1 == null) {
                this.h33_1 = BytePacketBuilder();
              }
              writeFully(this.h33_1, this.p33_1.v33_1);
              this.e8_1 = 21;
              continue $sm;
            } else {
              this.e8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.o33_1 == null) {
              this.e8_1 = 14;
              suspendResult = this.c33_1.k31_1.l1p(processIncomingExtensions(this.c33_1, this.p33_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.h33_1), this.p33_1.v33_1);
            var defragmented = Companion_getInstance_5().b34(true, this.o33_1.u33_1, readByteArray(build(this.h33_1)), this.o33_1.x33_1, this.o33_1.y33_1, this.o33_1.z33_1);
            this.o33_1 = null;
            this.e8_1 = 13;
            suspendResult = this.c33_1.k31_1.l1p(processIncomingExtensions(this.c33_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.m33_1 = Unit_instance;
            this.e8_1 = 20;
            continue $sm;
          case 14:
            this.e8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.m33_1 = Unit_instance;
            this.e8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.n33_1 = Unit_instance;
            this.e8_1 = 17;
            continue $sm;
          case 17:
            this.m33_1 = this.n33_1;
            this.e8_1 = 20;
            continue $sm;
          case 18:
            this.e8_1 = 19;
            continue $sm;
          case 19:
            this.g33_1 = true;
            this.e8_1 = 22;
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.e8_1 = 9;
              continue $sm;
            }

            this.e8_1 = 21;
            continue $sm;
          case 21:
            this.e8_1 = 7;
            continue $sm;
          case 22:
            this.f8_1 = 32;
            cancelConsumed(this.l33_1, this.k33_1);
            this.f8_1 = 39;
            this.e8_1 = 23;
            continue $sm;
          case 23:
            this.f8_1 = 39;
            this.d33_1.s1p();
            var tmp0_safe_receiver = this.h33_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.t3();
            }

            this.c33_1.k31_1.s1p();
            if (!this.g33_1) {
              this.e8_1 = 24;
              suspendResult = close(this.c33_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 25;
              continue $sm;
            }

          case 24:
            this.e8_1 = 25;
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_instance;
          case 26:
            this.e8_1 = 27;
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.f8_1 = 32;
            cancelConsumed(this.l33_1, this.k33_1);
            this.e8_1 = 31;
            continue $sm;
          case 28:
            this.f8_1 = 29;
            var tmp_7 = this.h8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.h8_1;
              var tmp_8 = this;
              this.k33_1 = e_0;
              throw e_0;
            } else {
              throw this.h8_1;
            }

          case 29:
            this.f8_1 = 32;
            var t = this.h8_1;
            cancelConsumed(this.l33_1, this.k33_1);
            throw t;
          case 30:
            this.f8_1 = 32;
            cancelConsumed(this.l33_1, this.k33_1);
            if (false) {
              this.e8_1 = 3;
              continue $sm;
            }

            this.e8_1 = 31;
            continue $sm;
          case 31:
            this.i33_1 = Unit_instance;
            this.f8_1 = 39;
            this.e8_1 = 36;
            continue $sm;
          case 32:
            this.f8_1 = 33;
            var tmp_9 = this.h8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.h8_1;
              var tmp_10 = this;
              tmp_10.i33_1 = Unit_instance;
              this.f8_1 = 39;
              this.e8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.h8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.h8_1;
                var tmp_12 = this;
                this.d33_1.s1p();
                tmp_12.i33_1 = this.c33_1.k31_1.q1p(cause);
                this.f8_1 = 39;
                this.e8_1 = 36;
                continue $sm;
              } else {
                throw this.h8_1;
              }
            }

          case 33:
            this.f8_1 = 39;
            this.j33_1 = this.h8_1;
            this.d33_1.s1p();
            var tmp0_safe_receiver_0 = this.h33_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.t3();
            }

            this.c33_1.k31_1.s1p();
            if (!this.g33_1) {
              this.e8_1 = 34;
              suspendResult = close(this.c33_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 35;
              continue $sm;
            }

          case 34:
            this.e8_1 = 35;
            continue $sm;
          case 35:
            throw this.j33_1;
          case 36:
            this.f33_1 = this.i33_1;
            this.f8_1 = 39;
            this.d33_1.s1p();
            var tmp0_safe_receiver_1 = this.h33_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.t3();
            }

            this.c33_1.k31_1.s1p();
            if (!this.g33_1) {
              this.e8_1 = 37;
              suspendResult = close(this.c33_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 38;
              continue $sm;
            }

          case 37:
            this.e8_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.h8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.f8_1 === 39) {
          throw e_1;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).q24 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.c33_1, this.d33_1, completion);
    i.e33_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p24($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.k34_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).p24 = function ($this$launch, $completion) {
    var tmp = this.q24($this$launch, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 13;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.e8_1 = 2;
            continue $sm;
          case 2:
            this.f8_1 = 9;
            this.f8_1 = 4;
            this.e8_1 = 3;
            suspendResult = outgoingProcessorLoop(this.k34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f8_1 = 13;
            this.e8_1 = 11;
            continue $sm;
          case 4:
            this.f8_1 = 9;
            var tmp_0 = this.h8_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.h8_1;
              this.f8_1 = 13;
              this.e8_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this.h8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.h8_1;
                this.f8_1 = 13;
                this.e8_1 = 11;
                continue $sm;
              } else {
                var tmp_2 = this.h8_1;
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.h8_1;
                  this.e8_1 = 5;
                  suspendResult = sendCloseSequence(this.k34_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.h8_1;
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.h8_1;
                    this.f8_1 = 13;
                    this.e8_1 = 11;
                    continue $sm;
                  } else {
                    var tmp_4 = this.h8_1;
                    if (tmp_4 instanceof Error) {
                      var cause = this.h8_1;
                      this.k34_1.l31_1.w19(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.e8_1 = 6;
                      suspendResult = closeExceptionally(this.k34_1.f31_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.h8_1;
                    }
                  }
                }
              }
            }

          case 5:
            this.f8_1 = 13;
            this.e8_1 = 11;
            continue $sm;
          case 6:
            this.f8_1 = 13;
            this.e8_1 = 7;
            continue $sm;
          case 7:
            this.f8_1 = 13;
            this.k34_1.l31_1.u1p();
            this.e8_1 = 8;
            suspendResult = close(this.k34_1.f31_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.f8_1 = 13;
            this.m34_1 = this.h8_1;
            this.k34_1.l31_1.u1p();
            this.e8_1 = 10;
            suspendResult = close(this.k34_1.f31_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.m34_1;
          case 11:
            this.f8_1 = 13;
            this.k34_1.l31_1.u1p();
            this.e8_1 = 12;
            suspendResult = close(this.k34_1.f31_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_instance;
          case 13:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 13) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).q24 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.k34_1, completion);
    i.l34_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p24($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.v34_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).x34 = function (it, $completion) {
    var tmp = this.y34(it, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).z8 = function (p1, $completion) {
    return this.x34(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = sendCloseSequence(this.v34_1, this.w34_1, IOException_init_$Create$('Ping timeout'), this);
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
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).y34 = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.v34_1, completion);
    i.w34_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.x34(it, $completion);
    }, 1);
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q30_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 7;
            this.s30_1 = this.q30_1.l31_1.t();
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.e8_1 = 2;
            suspendResult = this.s30_1.o1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.e8_1 = 6;
              continue $sm;
            }

            var frame = this.s30_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.k2d('Sending ' + frame.toString() + ' from session ' + toString(this.q30_1));
            }

            if (frame instanceof Close) {
              this.e8_1 = 3;
              suspendResult = sendCloseSequence(this.q30_1, readReason(frame), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0;
              if (frame instanceof Text) {
                tmp_0 = true;
              } else {
                tmp_0 = frame instanceof Binary;
              }
              if (tmp_0) {
                this.r30_1 = processOutgoingExtensions(this.q30_1, frame);
                this.e8_1 = 4;
                continue $sm;
              } else {
                this.r30_1 = frame;
                this.e8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.e8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.r30_1;
            this.e8_1 = 5;
            suspendResult = this.q30_1.f31_1.d30().l1p(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.e8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 7) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b31_1 = _this__u8e3s4;
    this.c31_1 = reason;
    this.d31_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 6;
            if (!tryClose(this.b31_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.k2d('Sending Close Sequence for session ' + toString(this.b31_1) + ' with reason ' + toString_0(this.c31_1) + ' and exception ' + toString_0(this.d31_1));
            }

            this.b31_1.i31_1.f1f();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.c31_1;
            tmp_0.e31_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.f8_1 = 5;
            runOrCancelPinger(this.b31_1);
            if (!(this.e31_1.w2z_1 === Codes_CLOSED_ABNORMALLY_getInstance().s2z_1)) {
              this.e8_1 = 2;
              suspendResult = this.b31_1.f31_1.d30().l1p(Close_init_$Create$(this.e31_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 3;
              continue $sm;
            }

          case 2:
            this.e8_1 = 3;
            continue $sm;
          case 3:
            this.f8_1 = 6;
            this.e8_1 = 4;
            continue $sm;
          case 4:
            this.f8_1 = 6;
            this.b31_1.h31_1.d1f(this.e31_1);
            if (!(this.d31_1 == null)) {
              this.b31_1.l31_1.q1p(this.d31_1);
              this.b31_1.k31_1.q1p(this.d31_1);
            }

            return Unit_instance;
          case 5:
            this.f8_1 = 6;
            var t = this.h8_1;
            this.b31_1.h31_1.d1f(this.e31_1);
            if (!(this.d31_1 == null)) {
              this.b31_1.l31_1.q1p(this.d31_1);
              this.b31_1.k31_1.q1p(this.d31_1);
            }

            throw t;
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
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b32_1 = _this__u8e3s4;
    this.c32_1 = packet;
    this.d32_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.d32_1.v33_1.length;
            var tmp0_safe_receiver = this.c32_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.e32_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (compare(fromInt(this.e32_1), this.b32_1.b30()) > 0) {
              var tmp2_safe_receiver = this.c32_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.t3();
              }
              this.e8_1 = 2;
              suspendResult = close(this.b32_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.e32_1 + '. Max size is ' + this.b32_1.b30().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(fromInt(this.e32_1));
          case 3:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 3) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_0();
    this.f31_1 = raw;
    this.g31_1 = atomic$ref$1(null);
    this.h31_1 = CompletableDeferred();
    this.i31_1 = Job();
    this.j31_1 = this.f31_1.n18().af(Key_instance).cf(this.i31_1).cf(new CoroutineName('ws-default'));
    this.k31_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.l31_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.m31_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n31_1 = ArrayList_init_$Create$();
    this.o31_1 = atomic$boolean$1(false);
    this.p31_1 = pingIntervalMillis;
    this.q31_1 = timeoutMillis;
    this.r31_1 = this.h31_1;
  }
  protoOf(DefaultWebSocketSessionImpl).n18 = function () {
    return this.j31_1;
  };
  protoOf(DefaultWebSocketSessionImpl).c30 = function () {
    return this.k31_1;
  };
  protoOf(DefaultWebSocketSessionImpl).d30 = function () {
    return this.l31_1;
  };
  protoOf(DefaultWebSocketSessionImpl).f32 = function () {
    return this.n31_1;
  };
  protoOf(DefaultWebSocketSessionImpl).a30 = function (value) {
    this.f31_1.a30(value);
  };
  protoOf(DefaultWebSocketSessionImpl).b30 = function () {
    return this.f31_1.b30();
  };
  protoOf(DefaultWebSocketSessionImpl).z2z = function (negotiatedExtensions) {
    if (!this.o31_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.k2d(tmp$ret$2);
    }
    this.n31_1.i1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.d30()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).i1v = function ($completion) {
    return this.f31_1.i1v($completion);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
      var tmp0_safe_receiver = get_OUTGOING_CHANNEL_CAPACITY();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = new ChannelConfig(tmp0_safe_receiver, ChannelOverflow_SUSPEND_getInstance());
      }
      OUTGOING_CHANNEL_CONFIG = tmp;
    }
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.v33_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.v33_1);
    var packet = builder;
    var code = packet.p15();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).y1b = function () {
    return Unit_instance;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  protoOf(NonDisposableHandle).hashCode = function () {
    return 207988788;
  };
  protoOf(NonDisposableHandle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(cause, this);
    captureStack(this, FrameTooBigException);
    this.z34_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    var sizeSuffix = compare(this.z34_1, new Long(0, 0)) >= 0 ? ': ' + this.z34_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  };
  protoOf(FrameTooBigException).o1f = function () {
    return new FrameTooBigException(this.z34_1, this);
  };
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.t();
      if (!iterator.u()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.d35_1;
      do {
        var e = iterator.v();
        var v = e.d35_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.e35_1 = ensureNotNull(tmp$ret$0).d35_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.e35_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.d35_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.f35_1 = tmp_3;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_instance;
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.c35_1 = controlFrame;
    this.d35_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    var channel = Channel(2147483647);
    var tmp = actorJob.cf(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.n18().r8(Key_instance));
    tmp_0.p19(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.o35_1 = $channel;
    this.p35_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).p24 = function ($this$launch, $completion) {
    var tmp = this.q24($this$launch, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(ponger$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 14;
            this.f8_1 = 13;
            this.u35_1 = this.o35_1;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            this.s35_1 = this.u35_1;
            this.r35_1 = null;
            this.e8_1 = 2;
            continue $sm;
          case 2:
            this.e8_1 = 3;
            continue $sm;
          case 3:
            this.f8_1 = 10;
            this.f8_1 = 9;
            this.t35_1 = this.s35_1.t();
            this.e8_1 = 4;
            continue $sm;
          case 4:
            this.e8_1 = 5;
            suspendResult = this.t35_1.o1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.e8_1 = 7;
              continue $sm;
            }

            var e = this.t35_1.v();
            get_LOGGER().k2d('Received ping message, sending pong message');
            this.e8_1 = 6;
            suspendResult = this.p35_1.l1p(new Pong(e.v33_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.e8_1 = 4;
            continue $sm;
          case 7:
            this.e8_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.f8_1 = 13;
            cancelConsumed(this.s35_1, this.r35_1);
            this.e8_1 = 12;
            continue $sm;
          case 9:
            this.f8_1 = 10;
            var tmp_1 = this.h8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.h8_1;
              var tmp_2 = this;
              this.r35_1 = e_0;
              throw e_0;
            } else {
              throw this.h8_1;
            }

          case 10:
            this.f8_1 = 13;
            var t = this.h8_1;
            cancelConsumed(this.s35_1, this.r35_1);
            throw t;
          case 11:
            this.f8_1 = 13;
            cancelConsumed(this.s35_1, this.r35_1);
            if (false) {
              this.e8_1 = 1;
              continue $sm;
            }

            this.e8_1 = 12;
            continue $sm;
          case 12:
            this.f8_1 = 14;
            this.e8_1 = 15;
            continue $sm;
          case 13:
            this.f8_1 = 14;
            var tmp_3 = this.h8_1;
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.h8_1;
              this.e8_1 = 15;
              continue $sm;
            } else {
              throw this.h8_1;
            }

          case 14:
            throw this.h8_1;
          case 15:
            this.f8_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.f8_1 === 14) {
          throw e_1;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).q24 = function ($this$launch, completion) {
    var i = new ponger$slambda(this.o35_1, this.p35_1, completion);
    i.q35_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p24($this$launch, $completion);
    }, 1);
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.d36_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).p24 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.q24($this$withTimeoutOrNull, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(pinger$slambda$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 3;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.e8_1 = 4;
              continue $sm;
            }

            this.e8_1 = 2;
            suspendResult = this.d36_1.o1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e8_1 = 1;
            continue $sm;
          case 3:
            throw this.h8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 3) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).q24 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.d36_1, completion);
    i.e36_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.p24($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.n36_1 = $outgoing;
    this.o36_1 = $pingMessage;
    this.p36_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).p24 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.q24($this$withTimeoutOrNull, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(pinger$slambda$slambda_1).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 6;
            get_LOGGER().k2d('WebSocket Pinger: sending ping frame');
            this.e8_1 = 1;
            suspendResult = this.n36_1.l1p(new Ping(toByteArray(this.o36_1, Charsets_getInstance().q25_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.e8_1 = 5;
              continue $sm;
            }

            this.e8_1 = 3;
            suspendResult = this.p36_1.o1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r36_1 = suspendResult;
            if (decodeToString(this.r36_1.v33_1, 0, 0 + this.r36_1.v33_1.length | 0) === this.o36_1) {
              get_LOGGER().k2d('WebSocket Pinger: received valid pong frame ' + this.r36_1.toString());
              this.e8_1 = 5;
              continue $sm;
            } else {
              this.e8_1 = 4;
              continue $sm;
            }

          case 4:
            get_LOGGER().k2d('WebSocket Pinger: received invalid pong frame ' + this.r36_1.toString() + ', continue waiting');
            this.e8_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
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
  protoOf(pinger$slambda$slambda_1).q24 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.n36_1, this.o36_1, this.p36_1, completion);
    i.q36_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.p24($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.a37_1 = $periodMillis;
    this.b37_1 = $timeoutMillis;
    this.c37_1 = $onTimeout;
    this.d37_1 = $channel;
    this.e37_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).p24 = function ($this$launch, $completion) {
    var tmp = this.q24($this$launch, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  };
  protoOf(pinger$slambda).z8 = function (p1, $completion) {
    return this.p24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 9;
            get_LOGGER().k2d('Starting WebSocket pinger coroutine with period ' + this.a37_1.toString() + ' ms and timeout ' + this.b37_1.toString() + ' ms');
            this.h37_1 = Random(getTimeMillis());
            this.g37_1 = new Int8Array(32);
            this.f8_1 = 7;
            this.e8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.e8_1 = 6;
              continue $sm;
            }

            this.e8_1 = 2;
            suspendResult = withTimeoutOrNull(this.a37_1, pinger$slambda$slambda_0(this.d37_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h37_1.qg(this.g37_1);
            var pingMessage = '[ping ' + toHexString(this.g37_1) + ' ping]';
            this.e8_1 = 3;
            suspendResult = withTimeoutOrNull(this.b37_1, pinger$slambda$slambda_2(this.e37_1, pingMessage, this.d37_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().k2d('WebSocket pinger has timed out');
              this.e8_1 = 5;
              suspendResult = this.c37_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.e8_1 = 4;
              continue $sm;
            }

          case 4:
            this.e8_1 = 1;
            continue $sm;
          case 5:
            this.e8_1 = 6;
            continue $sm;
          case 6:
            this.f8_1 = 9;
            this.e8_1 = 8;
            continue $sm;
          case 7:
            this.f8_1 = 9;
            var tmp_0 = this.h8_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.h8_1;
              this.e8_1 = 8;
              continue $sm;
            } else {
              var tmp_1 = this.h8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.h8_1;
                this.e8_1 = 8;
                continue $sm;
              } else {
                var tmp_2 = this.h8_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.h8_1;
                  this.e8_1 = 8;
                  continue $sm;
                } else {
                  var tmp_3 = this.h8_1;
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.h8_1;
                    this.e8_1 = 8;
                    continue $sm;
                  } else {
                    throw this.h8_1;
                  }
                }
              }
            }

          case 8:
            this.f8_1 = 9;
            return Unit_instance;
          case 9:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 9) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).q24 = function ($this$launch, completion) {
    var i = new pinger$slambda(this.a37_1, this.b37_1, this.c37_1, this.d37_1, this.e37_1, completion);
    i.f37_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p24($this$launch, $completion);
    }, 1);
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.x19();
      return Unit_instance;
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (!properties_initialized_PingPong_kt_fbfhmc) {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.g30_1 = this_0.i37();
    this_0.h30_1 = this_0.i37();
    tmp.f30_1 = this_0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.g30_1 = Companion_getInstance_3().j37_1;
    this.h30_1 = Companion_getInstance_3().j37_1;
  }
  protoOf(WebSocketChannelsConfig).i37 = function () {
    return Companion_getInstance_3().j37_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.k37_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.l37_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.k37_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.l37_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.k37_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.j37_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.k37_1 = capacity;
    this.l37_1 = onOverflow;
  }
  protoOf(ChannelConfig).m37 = function () {
    return this.l37_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.k37_1 === 2147483647);
  };
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  var ChannelOverflow_entriesInitialized;
  function ChannelOverflow_initEntries() {
    if (ChannelOverflow_entriesInitialized)
      return Unit_instance;
    ChannelOverflow_entriesInitialized = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
  function ChannelOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BoundedChannel$Companion$createDelegate$lambda($channel) {
    return function (it) {
      var tmp;
      var tmp_0;
      if ($channel._v == null) {
        throwUninitializedPropertyAccessException('channel');
      } else {
        tmp_0 = $channel._v;
      }
      if (!tmp_0.q1n()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.q1p(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_4() {
  }
  protoOf(Companion_4).n37 = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function BoundedChannel(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_4.n37(capacity) : delegate;
    this.o37_1 = delegate;
  }
  protoOf(BoundedChannel).p37 = function (element) {
    var result = this.o37_1.m1p(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.q1p(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).m1p = function (element) {
    return this.p37(element);
  };
  protoOf(BoundedChannel).q37 = function (element, $completion) {
    return this.o37_1.l1p(element, $completion);
  };
  protoOf(BoundedChannel).l1p = function (element, $completion) {
    return this.q37(element, $completion);
  };
  protoOf(BoundedChannel).q1p = function (cause) {
    return this.o37_1.q1p(cause);
  };
  protoOf(BoundedChannel).q1n = function () {
    return this.o37_1.q1n();
  };
  protoOf(BoundedChannel).r37 = function ($completion) {
    return this.o37_1.o1p($completion);
  };
  protoOf(BoundedChannel).o1p = function ($completion) {
    return this.r37($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.o37_1.t();
  };
  protoOf(BoundedChannel).w19 = function (cause) {
    this.o37_1.w19(cause);
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u37_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.v37_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).k2h = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.u37_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = item();
      destination.b1(tmp$ret$2);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.x37_1.r() ? '' : '; ' + joinToString($this.x37_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.w37_1 = name;
    this.x37_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.w37_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$6 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.b1(tmp$ret$6);
      }
      var parameters = destination_0;
      var tmp$ret$2 = new WebSocketExtensionHeader(name, parameters);
      destination.b1(tmp$ret$2);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$(_this__u8e3s4, reason, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.m8();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g38_1 = _this__u8e3s4;
    this.h38_1 = reason;
  }
  protoOf($closeCOROUTINE$).m8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 4;
            this.f8_1 = 3;
            this.e8_1 = 1;
            suspendResult = this.g38_1.e30(Close_init_$Create$(this.h38_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e8_1 = 2;
            suspendResult = this.g38_1.i1v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f8_1 = 4;
            this.e8_1 = 5;
            continue $sm;
          case 3:
            this.f8_1 = 4;
            var tmp_0 = this.h8_1;
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.h8_1;
              this.e8_1 = 5;
              continue $sm;
            } else {
              throw this.h8_1;
            }

          case 4:
            throw this.h8_1;
          case 5:
            this.f8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 4) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    Text_init_$Init$(true, toByteArray(text), $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.x16(reason.w2z_1);
    writeText(builder, reason.x2z_1);
    Close_init_$Init$_0(builder, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readByteArray(packet));
    return $this;
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_5().a34_1);
    return $this;
  }
  function Close_init_$Create$_0() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.a34_1 = new Int8Array(0);
  }
  protoOf(Companion_5).b34 = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.a1_1) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.t33_1 = fin;
    this.u33_1 = frameType;
    this.v33_1 = data;
    this.w33_1 = disposableHandle;
    this.x33_1 = rsv1;
    this.y33_1 = rsv2;
    this.z33_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.u33_1.toString() + ' (fin=' + this.t33_1 + ', buffer len = ' + this.v33_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).e30 = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).s1p = close$default;
  protoOf(BoundedChannel).u1p = cancel$default;
  //endregion
  //region block: init
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_4 = new Companion_4();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.d = Codes_NORMAL_getInstance;
  _.$_$.e = send;
  _.$_$.f = Binary_init_$Create$;
  _.$_$.g = Close_init_$Create$;
  _.$_$.h = Text_init_$Create$;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = WebSocketChannelsConfig;
  _.$_$.m = WebSocketExtensionsConfig;
  _.$_$.n = WebSocketExtension;
  _.$_$.o = WebSocketSession;
  _.$_$.p = from;
  _.$_$.q = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
