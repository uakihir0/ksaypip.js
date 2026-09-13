(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var emptyList = kotlin_kotlin.$_$.f6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.u2;
  var lazy = kotlin_kotlin.$_$.dg;
  var KProperty1 = kotlin_kotlin.$_$.jc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ia;
  var toString = kotlin_kotlin.$_$.nb;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var captureStack = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.a4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.c4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.e4;
  var IllegalArgumentException = kotlin_kotlin.$_$.af;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q;
  var THROW_CCE = kotlin_kotlin.$_$.hf;
  var isInterface = kotlin_kotlin.$_$.ab;
  var KClass = kotlin_kotlin.$_$.gc;
  var Triple = kotlin_kotlin.$_$.if;
  var getKClass = kotlin_kotlin.$_$.ec;
  var Pair = kotlin_kotlin.$_$.ef;
  var Entry = kotlin_kotlin.$_$.d5;
  var KtMap = kotlin_kotlin.$_$.e5;
  var KtMutableMap = kotlin_kotlin.$_$.h5;
  var LinkedHashMap = kotlin_kotlin.$_$.a5;
  var HashMap = kotlin_kotlin.$_$.y4;
  var KtSet = kotlin_kotlin.$_$.j5;
  var KtMutableSet = kotlin_kotlin.$_$.i5;
  var LinkedHashSet = kotlin_kotlin.$_$.b5;
  var HashSet = kotlin_kotlin.$_$.z4;
  var Collection = kotlin_kotlin.$_$.x4;
  var KtList = kotlin_kotlin.$_$.c5;
  var KtMutableList = kotlin_kotlin.$_$.f5;
  var ArrayList = kotlin_kotlin.$_$.w4;
  var copyToArray = kotlin_kotlin.$_$.c6;
  var Result = kotlin_kotlin.$_$.ff;
  var ensureNotNull = kotlin_kotlin.$_$.yf;
  var equals = kotlin_kotlin.$_$.fa;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var isBlank = kotlin_kotlin.$_$.bd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d4;
  var toList = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f3;
  var toHashSet = kotlin_kotlin.$_$.o7;
  var toBooleanArray = kotlin_kotlin.$_$.m7;
  var withIndex = kotlin_kotlin.$_$.x7;
  var to = kotlin_kotlin.$_$.jg;
  var toMap = kotlin_kotlin.$_$.t7;
  var lazy_0 = kotlin_kotlin.$_$.eg;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var getKClassFromExpression = kotlin_kotlin.$_$.dc;
  var Long = kotlin_kotlin.$_$.cf;
  var Char = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.g2;
  var Duration = kotlin_kotlin.$_$.me;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.i2;
  var toIntOrNull = kotlin_kotlin.$_$.ae;
  var hashCode = kotlin_kotlin.$_$.ka;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var asList = kotlin_kotlin.$_$.m5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.a3;
  var isArray = kotlin_kotlin.$_$.sa;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.g3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var until = kotlin_kotlin.$_$.yb;
  var step = kotlin_kotlin.$_$.xb;
  var getValue = kotlin_kotlin.$_$.n6;
  var longArray = kotlin_kotlin.$_$.fb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var get_lastIndex = kotlin_kotlin.$_$.s6;
  var shiftLeft = kotlin_kotlin.$_$.o9;
  var bitwiseOr = kotlin_kotlin.$_$.z8;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var invert = kotlin_kotlin.$_$.h9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.wf;
  var joinToString = kotlin_kotlin.$_$.q6;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var KTypeParameter = kotlin_kotlin.$_$.kc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.e3;
  var booleanArray = kotlin_kotlin.$_$.u9;
  var emptyMap = kotlin_kotlin.$_$.g6;
  var contentHashCode = kotlin_kotlin.$_$.r5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var isByteArray = kotlin_kotlin.$_$.ua;
  var coerceAtLeast = kotlin_kotlin.$_$.tb;
  var copyOf = kotlin_kotlin.$_$.x5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.j2;
  var isCharArray = kotlin_kotlin.$_$.va;
  var charArray = kotlin_kotlin.$_$.x9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var isDoubleArray = kotlin_kotlin.$_$.xa;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var isFloatArray = kotlin_kotlin.$_$.ya;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.k2;
  var isLongArray = kotlin_kotlin.$_$.i9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.o2;
  var ULongArray = kotlin_kotlin.$_$.nf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.i1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.b2;
  var isIntArray = kotlin_kotlin.$_$.za;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.n2;
  var UIntArray = kotlin_kotlin.$_$.lf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.c2;
  var isShortArray = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.p2;
  var UShortArray = kotlin_kotlin.$_$.pf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.p1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.n1;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.m2;
  var UByteArray = kotlin_kotlin.$_$.jf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.v;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.s;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.x1;
  var isBooleanArray = kotlin_kotlin.$_$.ta;
  var copyOf_0 = kotlin_kotlin.$_$.w5;
  var copyOf_1 = kotlin_kotlin.$_$.y5;
  var copyOf_2 = kotlin_kotlin.$_$.z5;
  var copyOf_3 = kotlin_kotlin.$_$.u5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.l1;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.m1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.j1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.k1;
  var copyOf_4 = kotlin_kotlin.$_$.b6;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.e1;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.f1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.d1;
  var copyOf_5 = kotlin_kotlin.$_$.t5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.s1;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.t1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.q1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.r1;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.u;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var copyOf_6 = kotlin_kotlin.$_$.v5;
  var trimIndent = kotlin_kotlin.$_$.je;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var lastOrNull = kotlin_kotlin.$_$.u6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.t6;
  var ULong = kotlin_kotlin.$_$.of;
  var UInt = kotlin_kotlin.$_$.mf;
  var UByte = kotlin_kotlin.$_$.kf;
  var UShort = kotlin_kotlin.$_$.qf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.fg;
  var get_js = kotlin_kotlin.$_$.eb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.p6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var get_indices_0 = kotlin_kotlin.$_$.o6;
  var get_longArrayClass = kotlin_kotlin.$_$.j9;
  var Unit = kotlin_kotlin.$_$.rf;
  var Instant = kotlin_kotlin.$_$.ne;
  var Uuid = kotlin_kotlin.$_$.pe;
  var mapOf = kotlin_kotlin.$_$.z6;
  var Companion_instance = kotlin_kotlin.$_$.l2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.xf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.kn(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.uq(descriptor, index, deserializer, previousValue) : $super.uq.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.g13(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ln(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.mn());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vn('type', serializer_0(StringCompanionObject_instance).jn());
      $this$buildSerialDescriptor.vn('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.wn_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.pn_1 = this$0.xn_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.wn_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.jn();
    }, 1, 0, 0);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.wn_1 = baseClass;
    this.xn_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.yn_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).mn = function () {
    return this.wn_1;
  };
  protoOf(PolymorphicSerializer).jn = function () {
    var tmp0 = this.yn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.m1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.wn_1) + ')';
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.zn_1 = missingFields;
    this.ao_1 = serialName;
  }
  protoOf(MissingFieldException).bo = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.zn_1, this.ao_1);
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.do(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.co()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.do(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.eo(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.b1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().fo(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().fo(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().go(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().go(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.jn().ho()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.do(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.jn();
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.mo_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.io_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.lo_1 = original;
    this.mo_1 = kClass;
    this.no_1 = this.lo_1.oo() + '<' + this.mo_1.o() + '>';
  }
  protoOf(ContextDescriptor).oo = function () {
    return this.no_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.lo_1, another.lo_1) && another.mo_1.equals(this.mo_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.mo_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.no_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.mo_1) + ', original: ' + toString(this.lo_1) + ')';
  };
  protoOf(ContextDescriptor).po = function () {
    return this.lo_1.po();
  };
  protoOf(ContextDescriptor).ho = function () {
    return this.lo_1.ho();
  };
  protoOf(ContextDescriptor).qo = function () {
    return this.lo_1.qo();
  };
  protoOf(ContextDescriptor).ro = function () {
    return this.lo_1.ro();
  };
  protoOf(ContextDescriptor).so = function () {
    return this.lo_1.so();
  };
  protoOf(ContextDescriptor).to = function (index) {
    return this.lo_1.to(index);
  };
  protoOf(ContextDescriptor).uo = function (name) {
    return this.lo_1.uo(name);
  };
  protoOf(ContextDescriptor).vo = function (index) {
    return this.lo_1.vo(index);
  };
  protoOf(ContextDescriptor).wo = function (index) {
    return this.lo_1.wo(index);
  };
  protoOf(ContextDescriptor).xo = function (index) {
    return this.lo_1.xo(index);
  };
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.zo_1 = $this_elementNames;
    this.yo_1 = $this_elementNames.ro();
  }
  protoOf(elementNames$1).u = function () {
    return this.yo_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.zo_1.ro();
    var _unary__edvuaz = this.yo_1;
    this.yo_1 = _unary__edvuaz - 1 | 0;
    return this.zo_1.to(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.ap_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.ap_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.cp_1 = $this_elementDescriptors;
    this.bp_1 = $this_elementDescriptors.ro();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.bp_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.cp_1.ro();
    var _unary__edvuaz = this.bp_1;
    this.bp_1 = _unary__edvuaz - 1 | 0;
    return this.cp_1.wo(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.dp_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.dp_1);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.qn_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.nn_1 = serialName;
    this.on_1 = false;
    this.pn_1 = emptyList();
    this.qn_1 = ArrayList_init_$Create$_0();
    this.rn_1 = HashSet_init_$Create$();
    this.sn_1 = ArrayList_init_$Create$_0();
    this.tn_1 = ArrayList_init_$Create$_0();
    this.un_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).ep = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.rn_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.nn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.qn_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.sn_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.tn_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.un_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).vn = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ep(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ep.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.qn_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.qp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.m1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.pp_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 1);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.fp_1 = serialName;
    this.gp_1 = kind;
    this.hp_1 = elementsCount;
    this.ip_1 = builder.pn_1;
    this.jp_1 = toHashSet(builder.qn_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.qn_1;
    tmp.kp_1 = copyToArray(this_0);
    this.lp_1 = compactArray(builder.sn_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.tn_1;
    tmp_0.mp_1 = copyToArray(this_1);
    this.np_1 = toBooleanArray(builder.un_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.kp_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.yd_1, item.xd_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.op_1 = toMap(destination);
    this.pp_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.qp_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).oo = function () {
    return this.fp_1;
  };
  protoOf(SerialDescriptorImpl).po = function () {
    return this.gp_1;
  };
  protoOf(SerialDescriptorImpl).ro = function () {
    return this.hp_1;
  };
  protoOf(SerialDescriptorImpl).so = function () {
    return this.ip_1;
  };
  protoOf(SerialDescriptorImpl).rp = function () {
    return this.jp_1;
  };
  protoOf(SerialDescriptorImpl).to = function (index) {
    return getChecked(this.kp_1, index);
  };
  protoOf(SerialDescriptorImpl).uo = function (name) {
    var tmp0_elvis_lhs = this.op_1.l2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).vo = function (index) {
    return getChecked(this.mp_1, index);
  };
  protoOf(SerialDescriptorImpl).wo = function (index) {
    return getChecked(this.lp_1, index);
  };
  protoOf(SerialDescriptorImpl).xo = function (index) {
    return getChecked_0(this.np_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oo() === other.oo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.pp_1, other.pp_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ro();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wo(index).oo() === other.wo(index).oo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wo(index).po(), other.wo(index).po())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).sp = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).tp = function () {
    return true;
  };
  protoOf(AbstractDecoder).up = function () {
    return null;
  };
  protoOf(AbstractDecoder).vp = function () {
    var tmp = this.sp();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wp = function () {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xp = function () {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yp = function () {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zp = function () {
    var tmp = this.sp();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aq = function () {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bq = function () {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cq = function () {
    var tmp = this.sp();
    return tmp instanceof Char ? tmp.u1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).dq = function () {
    var tmp = this.sp();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).eq = function (enumDescriptor) {
    var tmp = this.sp();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).gq = function (deserializer, previousValue) {
    return this.hq(deserializer);
  };
  protoOf(AbstractDecoder).iq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).jq = function (descriptor) {
  };
  protoOf(AbstractDecoder).kq = function (descriptor, index) {
    return this.vp();
  };
  protoOf(AbstractDecoder).lq = function (descriptor, index) {
    return this.wp();
  };
  protoOf(AbstractDecoder).mq = function (descriptor, index) {
    return this.xp();
  };
  protoOf(AbstractDecoder).nq = function (descriptor, index) {
    return this.yp();
  };
  protoOf(AbstractDecoder).oq = function (descriptor, index) {
    return this.zp();
  };
  protoOf(AbstractDecoder).pq = function (descriptor, index) {
    return this.aq();
  };
  protoOf(AbstractDecoder).qq = function (descriptor, index) {
    return this.bq();
  };
  protoOf(AbstractDecoder).rq = function (descriptor, index) {
    return this.cq();
  };
  protoOf(AbstractDecoder).sq = function (descriptor, index) {
    return this.dq();
  };
  protoOf(AbstractDecoder).tq = function (descriptor, index) {
    return this.fq(descriptor.wo(index));
  };
  protoOf(AbstractDecoder).uq = function (descriptor, index, deserializer, previousValue) {
    return this.gq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).wq = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.jn().ho();
    var tmp;
    if (isNullabilitySupported || this.tp()) {
      tmp = this.gq(deserializer, previousValue);
    } else {
      tmp = this.up();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.sq($this.jn(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.vq($this.jn(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).kn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jn();
    var composite = decoder.iq(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.yq()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.zq(this.jn());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.sq(this.jn(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.vq(this.jn(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.jq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).ln = function (decoder, klassName) {
    return decoder.xq().br(this.mn(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.cr_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).jn = function () {
    return this.cr_1;
  };
  protoOf(NothingSerializer_0).kn = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.dr_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).jn = function () {
    return this.dr_1;
  };
  protoOf(DurationSerializer).er = function (decoder) {
    return Companion_getInstance().yj(decoder.dq());
  };
  protoOf(DurationSerializer).kn = function (decoder) {
    return new Duration(this.er(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.fr_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).jn = function () {
    return this.fr_1;
  };
  protoOf(InstantSerializer).kn = function (decoder) {
    return Companion_getInstance_0().kk(decoder.dq());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.gr_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).jn = function () {
    return this.gr_1;
  };
  protoOf(UuidSerializer).kn = function (decoder) {
    return Companion_getInstance_1().ql(decoder.dq());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).oo = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).oo = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).oo = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).oo = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.jr_1 = elementDescriptor;
    this.kr_1 = 1;
  }
  protoOf(ListLikeDescriptor).po = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ro = function () {
    return this.kr_1;
  };
  protoOf(ListLikeDescriptor).to = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).uo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).xo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).vo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).wo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.jr_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.jr_1, other.jr_1) && this.oo() === other.oo())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.jr_1), 31) + getStringHashCode(this.oo()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.oo() + '(' + toString(this.jr_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.rr_1 = serialName;
    this.sr_1 = keyDescriptor;
    this.tr_1 = valueDescriptor;
    this.ur_1 = 2;
  }
  protoOf(MapLikeDescriptor).oo = function () {
    return this.rr_1;
  };
  protoOf(MapLikeDescriptor).po = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).ro = function () {
    return this.ur_1;
  };
  protoOf(MapLikeDescriptor).to = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).uo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).xo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).vo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).wo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.oo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.sr_1;
        break;
      case 1:
        tmp = this.tr_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.oo() === other.oo()))
      return false;
    if (!equals(this.sr_1, other.sr_1))
      return false;
    if (!equals(this.tr_1, other.tr_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.oo());
    result = imul(31, result) + hashCode(this.sr_1) | 0;
    result = imul(31, result) + hashCode(this.tr_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.oo() + '(' + toString(this.sr_1) + ', ' + toString(this.tr_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.xr_1 = primitive.oo() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).oo = function () {
    return this.xr_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.zr_1 = kClass;
    this.as_1 = new ArrayClassDesc(eSerializer.jn());
  }
  protoOf(ReferenceArraySerializer).jn = function () {
    return this.as_1;
  };
  protoOf(ReferenceArraySerializer).bs = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).cs = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).ds = function (_this__u8e3s4) {
    return this.cs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).es = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.zr_1);
  };
  protoOf(ReferenceArraySerializer).fs = function (_this__u8e3s4) {
    return this.es(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).gs = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).hs = function (_this__u8e3s4) {
    return this.gs((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).is = function (_this__u8e3s4, size) {
    return _this__u8e3s4.b5(size);
  };
  protoOf(ReferenceArraySerializer).js = function (_this__u8e3s4, size) {
    return this.is(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).ks = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.t2(index, element);
  };
  protoOf(ReferenceArraySerializer).ls = function (_this__u8e3s4, index, element) {
    return this.ks(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ss_1 = new ArrayListClassDesc(element.jn());
  }
  protoOf(ArrayListSerializer).jn = function () {
    return this.ss_1;
  };
  protoOf(ArrayListSerializer).bs = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).ts = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).ds = function (_this__u8e3s4) {
    return this.ts(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).us = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).fs = function (_this__u8e3s4) {
    return this.us(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vs = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).hs = function (_this__u8e3s4) {
    return this.vs((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ws = function (_this__u8e3s4, size) {
    return _this__u8e3s4.b5(size);
  };
  protoOf(ArrayListSerializer).js = function (_this__u8e3s4, size) {
    return this.ws(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).xs = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.t2(index, element);
  };
  protoOf(ArrayListSerializer).ls = function (_this__u8e3s4, index, element) {
    return this.xs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.zs_1 = new HashSetClassDesc(eSerializer.jn());
  }
  protoOf(HashSetSerializer).jn = function () {
    return this.zs_1;
  };
  protoOf(HashSetSerializer).bs = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).at = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).ds = function (_this__u8e3s4) {
    return this.at(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).bt = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).fs = function (_this__u8e3s4) {
    return this.bt(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ct = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).hs = function (_this__u8e3s4) {
    return this.ct((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dt = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).js = function (_this__u8e3s4, size) {
    return this.dt(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).et = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).ls = function (_this__u8e3s4, index, element) {
    return this.et(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.gt_1 = new LinkedHashSetClassDesc(eSerializer.jn());
  }
  protoOf(LinkedHashSetSerializer).jn = function () {
    return this.gt_1;
  };
  protoOf(LinkedHashSetSerializer).bs = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).ht = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).ds = function (_this__u8e3s4) {
    return this.ht(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).it = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).fs = function (_this__u8e3s4) {
    return this.it(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ct = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).hs = function (_this__u8e3s4) {
    return this.ct((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).jt = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).js = function (_this__u8e3s4, size) {
    return this.jt(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).kt = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).ls = function (_this__u8e3s4, index, element) {
    return this.kt(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.nt_1 = new HashMapClassDesc(kSerializer.jn(), vSerializer.jn());
  }
  protoOf(HashMapSerializer).jn = function () {
    return this.nt_1;
  };
  protoOf(HashMapSerializer).bs = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).ot = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).ds = function (_this__u8e3s4) {
    return this.ot(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).pt = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).fs = function (_this__u8e3s4) {
    return this.pt(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).qt = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).hs = function (_this__u8e3s4) {
    return this.qt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rt = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).js = function (_this__u8e3s4, size) {
    return this.rt(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.yt_1 = new LinkedHashMapClassDesc(kSerializer.jn(), vSerializer.jn());
  }
  protoOf(LinkedHashMapSerializer).jn = function () {
    return this.yt_1;
  };
  protoOf(LinkedHashMapSerializer).bs = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).zt = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).ds = function (_this__u8e3s4) {
    return this.zt(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).au = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).fs = function (_this__u8e3s4) {
    return this.au(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).qt = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).hs = function (_this__u8e3s4) {
    return this.qt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bu = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).js = function (_this__u8e3s4, size) {
    return this.bu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ms_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ns = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.os(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).os = function (decoder, index, builder, checkIndex) {
    this.ls(builder, index, decoder.vq(this.jn(), index, this.ms_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.st_1 = keySerializer;
    this.tt_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).ut = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p1_1;
    var last = progression.q1_1;
    var step_0 = progression.r1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.vt(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).ns = function (decoder, builder, startIndex, size) {
    return this.ut(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).vt = function (decoder, index, builder, checkIndex) {
    var key = decoder.vq(this.jn(), index, this.st_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.zq(this.jn());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.j2(key)) {
      var tmp_2 = this.tt_1.jn().po();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.uq(this.jn(), vIndex, this.tt_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.vq(this.jn(), vIndex, this.tt_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.o2(key, value);
  };
  protoOf(MapLikeSerializer).os = function (decoder, index, builder, checkIndex) {
    return this.vt(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ar($this.jn());
    $this.js(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).qs = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.hs(previous);
    var builder = tmp1_elvis_lhs == null ? this.bs() : tmp1_elvis_lhs;
    var startIndex = this.ds(builder);
    var compositeDecoder = decoder.iq(this.jn());
    if (compositeDecoder.yq()) {
      this.ns(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.zq(this.jn());
        if (index === -1)
          break $l$loop;
        this.ps(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.jq(this.jn());
    return this.fs(builder);
  };
  protoOf(AbstractCollectionSerializer).kn = function (decoder) {
    return this.qs(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ps = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.os(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.os.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.du_1 = new PrimitiveArrayDescriptor(primitiveSerializer.jn());
  }
  protoOf(PrimitiveArraySerializer).jn = function () {
    return this.du_1;
  };
  protoOf(PrimitiveArraySerializer).eu = function (_this__u8e3s4) {
    return _this__u8e3s4.fu();
  };
  protoOf(PrimitiveArraySerializer).ds = function (_this__u8e3s4) {
    return this.eu(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).gu = function (_this__u8e3s4) {
    return _this__u8e3s4.hu();
  };
  protoOf(PrimitiveArraySerializer).fs = function (_this__u8e3s4) {
    return this.gu(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).iu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ju(size);
  };
  protoOf(PrimitiveArraySerializer).js = function (_this__u8e3s4, size) {
    return this.iu(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).ku = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ls = function (_this__u8e3s4, index, element) {
    return this.ku(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).bs = function () {
    return this.hs(this.lu());
  };
  protoOf(PrimitiveArraySerializer).kn = function (decoder) {
    return this.qs(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).nu = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.fu() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ju(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ju.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.ou_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.su_1[slot] = bitwiseOr($this.su_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.su_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.su_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.qu_1($this.pu_1, index)) {
            $this.su_1[slot] = slotMarks;
            return index;
          }
        }
        $this.su_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.pu_1 = descriptor;
    this.qu_1 = readIfAbsent;
    var elementsCount = this.pu_1.ro();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.ru_1 = tmp_0;
      this.su_1 = Companion_getInstance_8().ou_1;
    } else {
      this.ru_1 = new Long(0, 0);
      this.su_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).tu = function (index) {
    if (index < 64) {
      this.ru_1 = bitwiseOr(this.ru_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).uu = function () {
    var elementsCount = this.pu_1.ro();
    while (!equalsLong(this.ru_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.ru_1));
      this.ru_1 = bitwiseOr(this.ru_1, shiftLeft(new Long(1, 0), index));
      if (this.qu_1(this.pu_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.vu_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.vu_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.kv(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.wu_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.jn();
    }, 1, 0, 2);
  }
  function EnumSerializer(serialName, values) {
    this.vu_1 = values;
    this.wu_1 = null;
    var tmp = this;
    tmp.xu_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).jn = function () {
    var tmp0 = this.xu_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.m1();
  };
  protoOf(EnumSerializer).kn = function (decoder) {
    var index = decoder.eq(this.jn());
    if (!(0 <= index ? index <= (this.vu_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.jn().oo() + ' enum values, ' + ('values size is ' + this.vu_1.length));
    }
    return this.vu_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.jn().oo() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.yv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.m1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.to(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 3);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.xv_1 = ENUM_getInstance();
    var tmp = this;
    tmp.yv_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).po = function () {
    return this.xv_1;
  };
  protoOf(EnumDescriptor).wo = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.po() === ENUM_getInstance()))
      return false;
    if (!(this.oo() === other.oo()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.oo() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.oo());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.nw_1 = true;
  }
  protoOf(InlineClassDescriptor).qo = function () {
    return this.nw_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oo() === other.oo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.nw_1 && contentEquals(this.zv(), other.zv()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ro();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wo(index).oo() === other.wo(index).oo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wo(index).po(), other.wo(index).po())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.ow_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).pw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ow_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).jn = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).kn = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.bo(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.rw_1 = OBJECT_getInstance();
    this.sw_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).po = function () {
    return this.rw_1;
  };
  protoOf(NothingSerialDescriptor).oo = function () {
    return this.sw_1;
  };
  protoOf(NothingSerialDescriptor).ro = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).to = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).uo = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.sw_1) + imul(31, this.rw_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.tw_1 = serializer;
    this.uw_1 = new SerialDescriptorForNullable(this.tw_1.jn());
  }
  protoOf(NullableSerializer).jn = function () {
    return this.uw_1;
  };
  protoOf(NullableSerializer).kn = function (decoder) {
    return decoder.tp() ? decoder.hq(this.tw_1) : decoder.up();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.tw_1, other.tw_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.tw_1);
  };
  function SerialDescriptorForNullable(original) {
    this.io_1 = original;
    this.jo_1 = this.io_1.oo() + '?';
    this.ko_1 = cachedSerialNames(this.io_1);
  }
  protoOf(SerialDescriptorForNullable).oo = function () {
    return this.jo_1;
  };
  protoOf(SerialDescriptorForNullable).rp = function () {
    return this.ko_1;
  };
  protoOf(SerialDescriptorForNullable).ho = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.io_1, other.io_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.io_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.io_1), 31);
  };
  protoOf(SerialDescriptorForNullable).po = function () {
    return this.io_1.po();
  };
  protoOf(SerialDescriptorForNullable).qo = function () {
    return this.io_1.qo();
  };
  protoOf(SerialDescriptorForNullable).ro = function () {
    return this.io_1.ro();
  };
  protoOf(SerialDescriptorForNullable).so = function () {
    return this.io_1.so();
  };
  protoOf(SerialDescriptorForNullable).to = function (index) {
    return this.io_1.to(index);
  };
  protoOf(SerialDescriptorForNullable).uo = function (name) {
    return this.io_1.uo(name);
  };
  protoOf(SerialDescriptorForNullable).vo = function (index) {
    return this.io_1.vo(index);
  };
  protoOf(SerialDescriptorForNullable).wo = function (index) {
    return this.io_1.wo(index);
  };
  protoOf(SerialDescriptorForNullable).xo = function (index) {
    return this.io_1.xo(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.pn_1 = this$0.ww_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.jn();
    }, 1, 0, 4);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.vw_1 = objectInstance;
    this.ww_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.xw_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).jn = function () {
    var tmp0 = this.xw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.m1();
  };
  protoOf(ObjectSerializer).kn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jn();
    var composite = decoder.iq(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.yq()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.zq(this.jn());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.jq(descriptor);
    return this.vw_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.zh_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.zh_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.rp();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.ro());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ro();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.to(i);
        result.b1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.to(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.oo());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.hv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.m1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.jv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.m1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.cv_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.cv_1[i];
        indices.o2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zu_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pw();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 5);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zu_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qw();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.jn();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.zv();
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.zv());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.yu_1 = serialName;
    this.zu_1 = generatedSerializer;
    this.av_1 = elementsCount;
    this.bv_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.av_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.cv_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.av_1;
    tmp_3.dv_1 = Array(size);
    this.ev_1 = null;
    this.fv_1 = booleanArray(this.av_1);
    this.gv_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.hv_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.iv_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.jv_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).oo = function () {
    return this.yu_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ro = function () {
    return this.av_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).po = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).so = function () {
    var tmp0_elvis_lhs = this.ev_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).rp = function () {
    return this.gv_1.m2();
  };
  protoOf(PluginGeneratedSerialDescriptor).zv = function () {
    var tmp0 = this.iv_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).aw = function (name, isOptional) {
    this.bv_1 = this.bv_1 + 1 | 0;
    this.cv_1[this.bv_1] = name;
    this.fv_1[this.bv_1] = isOptional;
    this.dv_1[this.bv_1] = null;
    if (this.bv_1 === (this.av_1 - 1 | 0)) {
      this.gv_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).kv = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.aw(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.aw.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).wo = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).jn();
  };
  protoOf(PluginGeneratedSerialDescriptor).xo = function (index) {
    return getChecked_0(this.fv_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).vo = function (index) {
    var tmp0_elvis_lhs = getChecked(this.dv_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).to = function (index) {
    return getChecked(this.cv_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).uo = function (name) {
    var tmp0_elvis_lhs = this.gv_1.l2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.oo() === other.oo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.zv(), other.zv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ro() === other.ro())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ro();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wo(index).oo() === other.wo(index).oo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wo(index).po(), other.wo(index).po())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.oo());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.oo();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.po();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.ro());
    var tmp_0 = _this__u8e3s4.oo() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.to(i) + ': ' + $this_toStringImpl.wo(i).oo();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).bx = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.bx((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).lu = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).cx = function (decoder, index, builder, checkIndex) {
    builder.fx(decoder.lq(this.du_1, index));
  };
  protoOf(ByteArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.cx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.cx(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.dx_1 = bufferWithData;
    this.ex_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(ByteArrayBuilder).fu = function () {
    return this.ex_1;
  };
  protoOf(ByteArrayBuilder).ju = function (requiredCapacity) {
    if (this.dx_1.length < requiredCapacity)
      this.dx_1 = copyOf(this.dx_1, coerceAtLeast(requiredCapacity, imul(this.dx_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).fx = function (c) {
    this.nu();
    var tmp = this.dx_1;
    var _unary__edvuaz = this.ex_1;
    this.ex_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).hu = function () {
    return copyOf(this.dx_1, this.ex_1);
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).ix = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.ix((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).lu = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).jx = function (decoder, index, builder, checkIndex) {
    builder.mx(decoder.rq(this.du_1, index));
  };
  protoOf(CharArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.jx(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.jx(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).px = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.px((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).lu = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).qx = function (decoder, index, builder, checkIndex) {
    builder.tx(decoder.qq(this.du_1, index));
  };
  protoOf(DoubleArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.qx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.qx(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).wx = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.wx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).lu = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).xx = function (decoder, index, builder, checkIndex) {
    builder.ay(decoder.pq(this.du_1, index));
  };
  protoOf(FloatArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.xx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.xx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).dy = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.dy((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).lu = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).ey = function (decoder, index, builder, checkIndex) {
    builder.hy(decoder.oq(this.du_1, index));
  };
  protoOf(LongArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.ey(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.ey(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).ky = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.ky(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ym_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).ly = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).lu = function () {
    return new ULongArray(this.ly());
  };
  protoOf(ULongArraySerializer_0).my = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.tq(this.du_1, index).zp();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.py(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.my(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.my(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).sy = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.sy((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).lu = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).ty = function (decoder, index, builder, checkIndex) {
    builder.wy(decoder.nq(this.du_1, index));
  };
  protoOf(IntArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.ty(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.ty(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).zy = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.zy(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.om_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).az = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).lu = function () {
    return new UIntArray(this.az());
  };
  protoOf(UIntArraySerializer_0).bz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.tq(this.du_1, index).yp();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.ez(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.bz(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.bz(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).hz = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.hz((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).lu = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).iz = function (decoder, index, builder, checkIndex) {
    builder.lz(decoder.mq(this.du_1, index));
  };
  protoOf(ShortArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).oz = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.oz(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.in_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).pz = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).lu = function () {
    return new UShortArray(this.pz());
  };
  protoOf(UShortArraySerializer_0).qz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.tq(this.du_1, index).xp();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.tz(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.qz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.qz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).wz = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.wz(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.em_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).xz = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).lu = function () {
    return new UByteArray(this.xz());
  };
  protoOf(UByteArraySerializer_0).yz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.tq(this.du_1, index).wp();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.b10(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.yz(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.yz(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).e10 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).hs = function (_this__u8e3s4) {
    return this.e10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).lu = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).f10 = function (decoder, index, builder, checkIndex) {
    builder.i10(decoder.kq(this.du_1, index));
  };
  protoOf(BooleanArraySerializer_0).os = function (decoder, index, builder, checkIndex) {
    return this.f10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).mu = function (decoder, index, builder, checkIndex) {
    return this.f10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kx_1 = bufferWithData;
    this.lx_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(CharArrayBuilder).fu = function () {
    return this.lx_1;
  };
  protoOf(CharArrayBuilder).ju = function (requiredCapacity) {
    if (this.kx_1.length < requiredCapacity)
      this.kx_1 = copyOf_0(this.kx_1, coerceAtLeast(requiredCapacity, imul(this.kx_1.length, 2)));
  };
  protoOf(CharArrayBuilder).mx = function (c) {
    this.nu();
    var tmp = this.kx_1;
    var _unary__edvuaz = this.lx_1;
    this.lx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).hu = function () {
    return copyOf_0(this.kx_1, this.lx_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rx_1 = bufferWithData;
    this.sx_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(DoubleArrayBuilder).fu = function () {
    return this.sx_1;
  };
  protoOf(DoubleArrayBuilder).ju = function (requiredCapacity) {
    if (this.rx_1.length < requiredCapacity)
      this.rx_1 = copyOf_1(this.rx_1, coerceAtLeast(requiredCapacity, imul(this.rx_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).tx = function (c) {
    this.nu();
    var tmp = this.rx_1;
    var _unary__edvuaz = this.sx_1;
    this.sx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).hu = function () {
    return copyOf_1(this.rx_1, this.sx_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yx_1 = bufferWithData;
    this.zx_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(FloatArrayBuilder).fu = function () {
    return this.zx_1;
  };
  protoOf(FloatArrayBuilder).ju = function (requiredCapacity) {
    if (this.yx_1.length < requiredCapacity)
      this.yx_1 = copyOf_2(this.yx_1, coerceAtLeast(requiredCapacity, imul(this.yx_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).ay = function (c) {
    this.nu();
    var tmp = this.yx_1;
    var _unary__edvuaz = this.zx_1;
    this.zx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).hu = function () {
    return copyOf_2(this.yx_1, this.zx_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.fy_1 = bufferWithData;
    this.gy_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(LongArrayBuilder).fu = function () {
    return this.gy_1;
  };
  protoOf(LongArrayBuilder).ju = function (requiredCapacity) {
    if (this.fy_1.length < requiredCapacity)
      this.fy_1 = copyOf_3(this.fy_1, coerceAtLeast(requiredCapacity, imul(this.fy_1.length, 2)));
  };
  protoOf(LongArrayBuilder).hy = function (c) {
    this.nu();
    var tmp = this.fy_1;
    var _unary__edvuaz = this.gy_1;
    this.gy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).hu = function () {
    return copyOf_3(this.fy_1, this.gy_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ny_1 = bufferWithData;
    this.oy_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ju(10);
  }
  protoOf(ULongArrayBuilder).fu = function () {
    return this.oy_1;
  };
  protoOf(ULongArrayBuilder).ju = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.ny_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.ny_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.ny_1), 2));
      tmp.ny_1 = _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).py = function (c) {
    this.nu();
    var tmp = this.ny_1;
    var _unary__edvuaz = this.oy_1;
    this.oy_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).j10 = function () {
    var tmp0 = this.ny_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.oy_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_3(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).hu = function () {
    return new ULongArray(this.j10());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.uy_1 = bufferWithData;
    this.vy_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(IntArrayBuilder).fu = function () {
    return this.vy_1;
  };
  protoOf(IntArrayBuilder).ju = function (requiredCapacity) {
    if (this.uy_1.length < requiredCapacity)
      this.uy_1 = copyOf_4(this.uy_1, coerceAtLeast(requiredCapacity, imul(this.uy_1.length, 2)));
  };
  protoOf(IntArrayBuilder).wy = function (c) {
    this.nu();
    var tmp = this.uy_1;
    var _unary__edvuaz = this.vy_1;
    this.vy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).hu = function () {
    return copyOf_4(this.uy_1, this.vy_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cz_1 = bufferWithData;
    this.dz_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ju(10);
  }
  protoOf(UIntArrayBuilder).fu = function () {
    return this.dz_1;
  };
  protoOf(UIntArrayBuilder).ju = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.cz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.cz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.cz_1), 2));
      tmp.cz_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).ez = function (c) {
    this.nu();
    var tmp = this.cz_1;
    var _unary__edvuaz = this.dz_1;
    this.dz_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).k10 = function () {
    var tmp0 = this.cz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.dz_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_4(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).hu = function () {
    return new UIntArray(this.k10());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jz_1 = bufferWithData;
    this.kz_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(ShortArrayBuilder).fu = function () {
    return this.kz_1;
  };
  protoOf(ShortArrayBuilder).ju = function (requiredCapacity) {
    if (this.jz_1.length < requiredCapacity)
      this.jz_1 = copyOf_5(this.jz_1, coerceAtLeast(requiredCapacity, imul(this.jz_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).lz = function (c) {
    this.nu();
    var tmp = this.jz_1;
    var _unary__edvuaz = this.kz_1;
    this.kz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).hu = function () {
    return copyOf_5(this.jz_1, this.kz_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rz_1 = bufferWithData;
    this.sz_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ju(10);
  }
  protoOf(UShortArrayBuilder).fu = function () {
    return this.sz_1;
  };
  protoOf(UShortArrayBuilder).ju = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.rz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.rz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.rz_1), 2));
      tmp.rz_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).tz = function (c) {
    this.nu();
    var tmp = this.rz_1;
    var _unary__edvuaz = this.sz_1;
    this.sz_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).l10 = function () {
    var tmp0 = this.rz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.sz_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).hu = function () {
    return new UShortArray(this.l10());
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zz_1 = bufferWithData;
    this.a10_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ju(10);
  }
  protoOf(UByteArrayBuilder).fu = function () {
    return this.a10_1;
  };
  protoOf(UByteArrayBuilder).ju = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.zz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.zz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.zz_1), 2));
      tmp.zz_1 = _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).b10 = function (c) {
    this.nu();
    var tmp = this.zz_1;
    var _unary__edvuaz = this.a10_1;
    this.a10_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).m10 = function () {
    var tmp0 = this.zz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a10_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).hu = function () {
    return new UByteArray(this.m10());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g10_1 = bufferWithData;
    this.h10_1 = bufferWithData.length;
    this.ju(10);
  }
  protoOf(BooleanArrayBuilder).fu = function () {
    return this.h10_1;
  };
  protoOf(BooleanArrayBuilder).ju = function (requiredCapacity) {
    if (this.g10_1.length < requiredCapacity)
      this.g10_1 = copyOf_6(this.g10_1, coerceAtLeast(requiredCapacity, imul(this.g10_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).i10 = function (c) {
    this.nu();
    var tmp = this.g10_1;
    var _unary__edvuaz = this.h10_1;
    this.h10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).hu = function () {
    return copyOf_6(this.g10_1, this.h10_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.n10_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).jn = function () {
    return this.n10_1;
  };
  protoOf(StringSerializer).kn = function (decoder) {
    return decoder.dq();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.o10_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).jn = function () {
    return this.o10_1;
  };
  protoOf(IntSerializer).kn = function (decoder) {
    return decoder.yp();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.p10_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).jn = function () {
    return this.p10_1;
  };
  protoOf(BooleanSerializer).kn = function (decoder) {
    return decoder.vp();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.q10_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).jn = function () {
    return this.q10_1;
  };
  protoOf(LongSerializer).kn = function (decoder) {
    return decoder.zp();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().l2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.r10_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.r10_1 = serialName;
    this.s10_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).oo = function () {
    return this.r10_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).po = function () {
    return this.s10_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ro = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).to = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).uo = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.r10_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.r10_1 === other.r10_1 && equals(this.s10_1, other.s10_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.r10_1) + imul(31, this.s10_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().n2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.jn().oo();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.t10_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).jn = function () {
    return this.t10_1;
  };
  protoOf(ByteSerializer).kn = function (decoder) {
    return decoder.wp();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.u10_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).jn = function () {
    return this.u10_1;
  };
  protoOf(ShortSerializer).kn = function (decoder) {
    return decoder.xp();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.v10_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).jn = function () {
    return this.v10_1;
  };
  protoOf(CharSerializer).w10 = function (decoder) {
    return decoder.cq();
  };
  protoOf(CharSerializer).kn = function (decoder) {
    return new Char(this.w10(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.x10_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).jn = function () {
    return this.x10_1;
  };
  protoOf(DoubleSerializer).kn = function (decoder) {
    return decoder.bq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.y10_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).jn = function () {
    return this.y10_1;
  };
  protoOf(FloatSerializer).kn = function (decoder) {
    return decoder.aq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.z10_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).jn = function () {
    return this.z10_1.jn();
  };
  protoOf(UnitSerializer).a11 = function (decoder) {
    this.z10_1.kn(decoder);
  };
  protoOf(UnitSerializer).kn = function (decoder) {
    this.a11(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).d11 = function (_this__u8e3s4, index) {
    return this.f11(this.e11(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).f11 = function (nestedName) {
    var tmp0_elvis_lhs = this.i11();
    return this.j11(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).e11 = function (descriptor, index) {
    return descriptor.to(index);
  };
  protoOf(NamedValueDecoder).j11 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).k11 = function () {
    return this.g11_1.r() ? '$' : joinToString(this.g11_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.y11(tag);
    var r = block();
    if (!$this.h11_1) {
      $this.z11();
    }
    $this.h11_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.gq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.jn().ho();
      var tmp;
      if (isNullabilitySupported || tmp0.tp()) {
        tmp = this$0.gq($deserializer, $previousValue);
      } else {
        tmp = tmp0.up();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.g11_1 = ArrayList_init_$Create$_0();
    this.h11_1 = false;
  }
  protoOf(TaggedDecoder).xq = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).l11 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).m11 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).n11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r11 = function (tag) {
    var tmp = this.l11(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u11 = function (tag) {
    var tmp = this.l11(tag);
    return tmp instanceof Char ? tmp.u1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).v11 = function (tag) {
    var tmp = this.l11(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w11 = function (tag, enumDescriptor) {
    var tmp = this.l11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x11 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.y11(tag);
    return this;
  };
  protoOf(TaggedDecoder).gq = function (deserializer, previousValue) {
    return this.hq(deserializer);
  };
  protoOf(TaggedDecoder).fq = function (descriptor) {
    return this.x11(this.z11(), descriptor);
  };
  protoOf(TaggedDecoder).tp = function () {
    var tmp0_elvis_lhs = this.i11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.m11(currentTag);
  };
  protoOf(TaggedDecoder).up = function () {
    return null;
  };
  protoOf(TaggedDecoder).vp = function () {
    return this.n11(this.z11());
  };
  protoOf(TaggedDecoder).wp = function () {
    return this.o11(this.z11());
  };
  protoOf(TaggedDecoder).xp = function () {
    return this.p11(this.z11());
  };
  protoOf(TaggedDecoder).yp = function () {
    return this.q11(this.z11());
  };
  protoOf(TaggedDecoder).zp = function () {
    return this.r11(this.z11());
  };
  protoOf(TaggedDecoder).aq = function () {
    return this.s11(this.z11());
  };
  protoOf(TaggedDecoder).bq = function () {
    return this.t11(this.z11());
  };
  protoOf(TaggedDecoder).cq = function () {
    return this.u11(this.z11());
  };
  protoOf(TaggedDecoder).dq = function () {
    return this.v11(this.z11());
  };
  protoOf(TaggedDecoder).eq = function (enumDescriptor) {
    return this.w11(this.z11(), enumDescriptor);
  };
  protoOf(TaggedDecoder).iq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).jq = function (descriptor) {
  };
  protoOf(TaggedDecoder).kq = function (descriptor, index) {
    return this.n11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).lq = function (descriptor, index) {
    return this.o11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).mq = function (descriptor, index) {
    return this.p11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).nq = function (descriptor, index) {
    return this.q11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).oq = function (descriptor, index) {
    return this.r11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).pq = function (descriptor, index) {
    return this.s11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).qq = function (descriptor, index) {
    return this.t11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).rq = function (descriptor, index) {
    return this.u11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).sq = function (descriptor, index) {
    return this.v11(this.d11(descriptor, index));
  };
  protoOf(TaggedDecoder).tq = function (descriptor, index) {
    return this.x11(this.d11(descriptor, index), descriptor.wo(index));
  };
  protoOf(TaggedDecoder).uq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.d11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).wq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.d11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).i11 = function () {
    return lastOrNull(this.g11_1);
  };
  protoOf(TaggedDecoder).y11 = function (name) {
    this.g11_1.b1(name);
  };
  protoOf(TaggedDecoder).z11 = function () {
    var r = this.g11_1.u2(get_lastIndex_0(this.g11_1));
    this.h11_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.a12_1 = key;
    this.b12_1 = value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.a12_1;
  };
  protoOf(MapEntry).m1 = function () {
    return this.b12_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.a12_1) + ', value=' + toString_0(this.b12_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.a12_1 == null ? 0 : hashCode(this.a12_1);
    result = imul(result, 31) + (this.b12_1 == null ? 0 : hashCode(this.b12_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.a12_1, other.a12_1))
      return false;
    if (!equals(this.b12_1, other.b12_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vn('key', $keySerializer.jn());
      $this$buildSerialDescriptor.vn('value', $valueSerializer.jn());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.e12_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).jn = function () {
    return this.e12_1;
  };
  protoOf(MapEntrySerializer_0).f12 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vn('first', $keySerializer.jn());
      $this$buildClassSerialDescriptor.vn('second', $valueSerializer.jn());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.k12_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).jn = function () {
    return this.k12_1;
  };
  protoOf(PairSerializer_0).f12 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.vq($this.o12_1, 0, $this.l12_1);
    var b = composite.vq($this.o12_1, 1, $this.m12_1);
    var c = composite.vq($this.o12_1, 2, $this.n12_1);
    composite.jq($this.o12_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.zq($this.o12_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.vq($this.o12_1, 0, $this.l12_1);
          break;
        case 1:
          b = composite.vq($this.o12_1, 1, $this.m12_1);
          break;
        case 2:
          c = composite.vq($this.o12_1, 2, $this.n12_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.jq($this.o12_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.vn('first', this$0.l12_1.jn());
      $this$buildClassSerialDescriptor.vn('second', this$0.m12_1.jn());
      $this$buildClassSerialDescriptor.vn('third', this$0.n12_1.jn());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.l12_1 = aSerializer;
    this.m12_1 = bSerializer;
    this.n12_1 = cSerializer;
    var tmp = this;
    tmp.o12_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).jn = function () {
    return this.o12_1;
  };
  protoOf(TripleSerializer_0).kn = function (decoder) {
    var composite = decoder.iq(this.o12_1);
    if (composite.yq()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.g12_1 = keySerializer;
    this.h12_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).kn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.jn();
    var composite = decoder.iq(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.yq()) {
        var key = composite.vq(this.jn(), 0, this.g12_1);
        var value = composite.vq(this.jn(), 1, this.h12_1);
        tmp$ret$1 = this.f12(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.zq(this.jn());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.vq(this.jn(), 0, this.g12_1);
            break;
          case 1:
            value_0 = composite.vq(this.jn(), 1, this.h12_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.f12(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.jq(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.p12_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).jn = function () {
    return this.p12_1;
  };
  protoOf(ULongSerializer).q12 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.fq(this.p12_1).zp();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).kn = function (decoder) {
    return new ULong(this.q12(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.r12_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).jn = function () {
    return this.r12_1;
  };
  protoOf(UIntSerializer).s12 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.fq(this.r12_1).yp();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).kn = function (decoder) {
    return new UInt(this.s12(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.t12_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_5(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).jn = function () {
    return this.t12_1;
  };
  protoOf(UByteSerializer).u12 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.fq(this.t12_1).wp();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).kn = function (decoder) {
    return new UByte(this.u12(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.v12_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).jn = function () {
    return this.v12_1;
  };
  protoOf(UShortSerializer).w12 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.fq(this.v12_1).xp();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).kn = function (decoder) {
    return new UShort(this.w12(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).do = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.eo(kClass, typeArgumentsSerializers) : $super.eo.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.y12_1 = class2ContextualFactory;
    this.z12_1 = polyBase2Serializers;
    this.a13_1 = polyBase2DefaultSerializerProvider;
    this.b13_1 = polyBase2NamedSerializers;
    this.c13_1 = polyBase2DefaultDeserializerProvider;
    this.d13_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).co = function () {
    return this.d13_1;
  };
  protoOf(SerialModuleImpl).br = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.b13_1.l2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).l2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.c13_1.l2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).eo = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.y12_1.l2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e13(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).x12 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.y12_1.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.m1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.h13_1;
        collector.i13(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.g13(kclass, serial.f13_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.z12_1.k1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.l1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.m1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.k1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.l1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.m1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.j13(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.a13_1.k1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.m1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.k13(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.c13_1.k1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.m1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.l13(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.m13_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.m13_1.equals(tmp0_other_with_cast.m13_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.m13_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.m13_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().cb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().kb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.yw(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().lb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ob(), CharArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ib(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().gb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().rb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().fb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().qb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().eb(), serializer_5(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().pb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().db(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().nb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().cb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().cb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.n13_1 = $factory;
  }
  protoOf(createCache$1).fo = function (key) {
    return this.n13_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.o13_1 = $factory;
  }
  protoOf(createParametrizedCache$1).go = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.o13_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).ho = get_isNullable;
  protoOf(SerialDescriptorImpl).qo = get_isInline;
  protoOf(AbstractDecoder).vq = decodeSerializableElement$default;
  protoOf(AbstractDecoder).hq = decodeSerializableValue;
  protoOf(AbstractDecoder).yq = decodeSequentially;
  protoOf(AbstractDecoder).ar = decodeCollectionSize;
  protoOf(ListLikeDescriptor).ho = get_isNullable;
  protoOf(ListLikeDescriptor).qo = get_isInline;
  protoOf(ListLikeDescriptor).so = get_annotations;
  protoOf(MapLikeDescriptor).ho = get_isNullable;
  protoOf(MapLikeDescriptor).qo = get_isInline;
  protoOf(MapLikeDescriptor).so = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ho = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).qo = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).qw = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ho = get_isNullable;
  protoOf(NothingSerialDescriptor).qo = get_isInline;
  protoOf(NothingSerialDescriptor).so = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ho = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).qo = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).so = get_annotations;
  protoOf(TaggedDecoder).vq = decodeSerializableElement$default;
  protoOf(TaggedDecoder).hq = decodeSerializableValue;
  protoOf(TaggedDecoder).yq = decodeSequentially;
  protoOf(TaggedDecoder).ar = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = BooleanSerializer_getInstance;
  _.$_$.i = IntSerializer_getInstance;
  _.$_$.j = LongSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = SerializationException_init_$Init$_0;
  _.$_$.m = SerializationException_init_$Create$_0;
  _.$_$.n = UnknownFieldException_init_$Create$;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_4;
  _.$_$.t = serializer_2;
  _.$_$.u = serializer_3;
  _.$_$.v = serializer_1;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = buildSerialDescriptor;
  _.$_$.f1 = getContextualDescriptor;
  _.$_$.g1 = AbstractDecoder;
  _.$_$.h1 = CompositeDecoder;
  _.$_$.i1 = Decoder;
  _.$_$.j1 = AbstractPolymorphicSerializer;
  _.$_$.k1 = ElementMarker;
  _.$_$.l1 = typeParametersSerializers;
  _.$_$.m1 = GeneratedSerializer;
  _.$_$.n1 = InlinePrimitiveDescriptor;
  _.$_$.o1 = NamedValueDecoder;
  _.$_$.p1 = PluginGeneratedSerialDescriptor;
  _.$_$.q1 = ReferenceArraySerializer;
  _.$_$.r1 = SerializerFactory;
  _.$_$.s1 = createSimpleEnumSerializer;
  _.$_$.t1 = jsonCachedSerialNames;
  _.$_$.u1 = missingFieldExceptionWithNewMessage;
  _.$_$.v1 = throwMissingFieldException;
  _.$_$.w1 = EmptySerializersModule_0;
  _.$_$.x1 = contextual;
  _.$_$.y1 = SerializersModuleCollector;
  _.$_$.z1 = DeserializationStrategy;
  _.$_$.a2 = KSerializer;
  _.$_$.b2 = MissingFieldException;
  _.$_$.c2 = SerializableWith;
  _.$_$.d2 = SerializationException;
  _.$_$.e2 = findPolymorphicSerializer;
  _.$_$.f2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
