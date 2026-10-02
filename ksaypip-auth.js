(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ksaypip-auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ksaypip-auth'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ksaypip-auth'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ksaypip-auth'.");
    }
    globalThis['ksaypip-auth'] = factory(typeof globalThis['ksaypip-auth'] === 'undefined' ? {} : globalThis['ksaypip-auth'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Unit_instance = kotlin_kotlin.$_$.q2;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BuildAuthorizationUrlRequest, 'BuildAuthorizationUrlRequest', BuildAuthorizationUrlRequest);
  initMetadataForClass(OAuthAuthorizationCodeTokenRequest, 'OAuthAuthorizationCodeTokenRequest', OAuthAuthorizationCodeTokenRequest);
  initMetadataForClass(OAuthRefreshTokenRequest, 'OAuthRefreshTokenRequest', OAuthRefreshTokenRequest);
  initMetadataForClass(OAuthRevokeRequest, 'OAuthRevokeRequest', OAuthRevokeRequest);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(OAuthTokenResponse, 'OAuthTokenResponse', OAuthTokenResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  //endregion
  function BuildAuthorizationUrlRequest() {
    this.clientId = null;
    this.redirectUri = null;
    this.scopes = null;
    this.state = null;
  }
  protoOf(BuildAuthorizationUrlRequest).p13 = function (_set____db54di) {
    this.clientId = _set____db54di;
  };
  protoOf(BuildAuthorizationUrlRequest).q13 = function () {
    return this.clientId;
  };
  protoOf(BuildAuthorizationUrlRequest).r13 = function (_set____db54di) {
    this.redirectUri = _set____db54di;
  };
  protoOf(BuildAuthorizationUrlRequest).s13 = function () {
    return this.redirectUri;
  };
  protoOf(BuildAuthorizationUrlRequest).t13 = function (_set____db54di) {
    this.scopes = _set____db54di;
  };
  protoOf(BuildAuthorizationUrlRequest).u13 = function () {
    return this.scopes;
  };
  protoOf(BuildAuthorizationUrlRequest).v13 = function (_set____db54di) {
    this.state = _set____db54di;
  };
  protoOf(BuildAuthorizationUrlRequest).w13 = function () {
    return this.state;
  };
  function OAuthAuthorizationCodeTokenRequest() {
    this.code = null;
  }
  protoOf(OAuthAuthorizationCodeTokenRequest).x13 = function (_set____db54di) {
    this.code = _set____db54di;
  };
  protoOf(OAuthAuthorizationCodeTokenRequest).y13 = function () {
    return this.code;
  };
  function OAuthRefreshTokenRequest() {
    this.refreshToken = null;
  }
  protoOf(OAuthRefreshTokenRequest).z13 = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(OAuthRefreshTokenRequest).a14 = function () {
    return this.refreshToken;
  };
  function OAuthRevokeRequest() {
    this.token = null;
    this.tokenTypeHint = null;
  }
  protoOf(OAuthRevokeRequest).b14 = function (_set____db54di) {
    this.token = _set____db54di;
  };
  protoOf(OAuthRevokeRequest).c14 = function () {
    return this.token;
  };
  protoOf(OAuthRevokeRequest).d14 = function (_set____db54di) {
    this.tokenTypeHint = _set____db54di;
  };
  protoOf(OAuthRevokeRequest).e14 = function () {
    return this.tokenTypeHint;
  };
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.ksaypip.auth.api.entity.oauth.OAuthTokenResponse', this, 5);
    tmp0_serialDesc.aw('access_token', true);
    tmp0_serialDesc.aw('token_type', true);
    tmp0_serialDesc.aw('expires_in', true);
    tmp0_serialDesc.aw('refresh_token', true);
    tmp0_serialDesc.aw('scope', true);
    this.f14_1 = tmp0_serialDesc;
  }
  protoOf($serializer).kn = function (decoder) {
    var tmp0_desc = this.f14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.iq(tmp0_desc);
    if (tmp9_input.yq()) {
      tmp4_local0 = tmp9_input.sq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.sq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.nq(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.wq(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.wq(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.zq(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.sq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.sq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.nq(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.wq(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.wq(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.jq(tmp0_desc);
    return OAuthTokenResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer).jn = function () {
    return this.f14_1;
  };
  protoOf($serializer).pw = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function OAuthTokenResponse_init_$Init$(seen0, accessToken, tokenType, expiresIn, refreshToken, scope, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().f14_1);
    }
    if (0 === (seen0 & 1))
      $this.accessToken = '';
    else
      $this.accessToken = accessToken;
    if (0 === (seen0 & 2))
      $this.tokenType = '';
    else
      $this.tokenType = tokenType;
    if (0 === (seen0 & 4))
      $this.expiresIn = -1;
    else
      $this.expiresIn = expiresIn;
    if (0 === (seen0 & 8))
      $this.refreshToken = null;
    else
      $this.refreshToken = refreshToken;
    if (0 === (seen0 & 16))
      $this.scope = null;
    else
      $this.scope = scope;
    return $this;
  }
  function OAuthTokenResponse_init_$Create$(seen0, accessToken, tokenType, expiresIn, refreshToken, scope, serializationConstructorMarker) {
    return OAuthTokenResponse_init_$Init$(seen0, accessToken, tokenType, expiresIn, refreshToken, scope, serializationConstructorMarker, objectCreate(protoOf(OAuthTokenResponse)));
  }
  function OAuthTokenResponse() {
    this.accessToken = '';
    this.tokenType = '';
    this.expiresIn = -1;
    this.refreshToken = null;
    this.scope = null;
  }
  protoOf(OAuthTokenResponse).g14 = function (_set____db54di) {
    this.accessToken = _set____db54di;
  };
  protoOf(OAuthTokenResponse).h14 = function () {
    return this.accessToken;
  };
  protoOf(OAuthTokenResponse).i14 = function (_set____db54di) {
    this.tokenType = _set____db54di;
  };
  protoOf(OAuthTokenResponse).j14 = function () {
    return this.tokenType;
  };
  protoOf(OAuthTokenResponse).k14 = function (_set____db54di) {
    this.expiresIn = _set____db54di;
  };
  protoOf(OAuthTokenResponse).l14 = function () {
    return this.expiresIn;
  };
  protoOf(OAuthTokenResponse).z13 = function (_set____db54di) {
    this.refreshToken = _set____db54di;
  };
  protoOf(OAuthTokenResponse).a14 = function () {
    return this.refreshToken;
  };
  protoOf(OAuthTokenResponse).m14 = function (_set____db54di) {
    this.scope = _set____db54di;
  };
  protoOf(OAuthTokenResponse).n14 = function () {
    return this.scope;
  };
  //region block: post-declaration
  protoOf($serializer).qw = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var ksaypip = socialhub.ksaypip || (socialhub.ksaypip = {});
    var auth = ksaypip.auth || (ksaypip.auth = {});
    var api = auth.api || (auth.api = {});
    var entity = api.entity || (api.entity = {});
    var oauth = entity.oauth || (entity.oauth = {});
    oauth.BuildAuthorizationUrlRequest = BuildAuthorizationUrlRequest;
    var work_0 = _.work || (_.work = {});
    var socialhub_0 = work_0.socialhub || (work_0.socialhub = {});
    var ksaypip_0 = socialhub_0.ksaypip || (socialhub_0.ksaypip = {});
    var auth_0 = ksaypip_0.auth || (ksaypip_0.auth = {});
    var api_0 = auth_0.api || (auth_0.api = {});
    var entity_0 = api_0.entity || (api_0.entity = {});
    var oauth_0 = entity_0.oauth || (entity_0.oauth = {});
    oauth_0.OAuthAuthorizationCodeTokenRequest = OAuthAuthorizationCodeTokenRequest;
    var work_1 = _.work || (_.work = {});
    var socialhub_1 = work_1.socialhub || (work_1.socialhub = {});
    var ksaypip_1 = socialhub_1.ksaypip || (socialhub_1.ksaypip = {});
    var auth_1 = ksaypip_1.auth || (ksaypip_1.auth = {});
    var api_1 = auth_1.api || (auth_1.api = {});
    var entity_1 = api_1.entity || (api_1.entity = {});
    var oauth_1 = entity_1.oauth || (entity_1.oauth = {});
    oauth_1.OAuthRefreshTokenRequest = OAuthRefreshTokenRequest;
    var work_2 = _.work || (_.work = {});
    var socialhub_2 = work_2.socialhub || (work_2.socialhub = {});
    var ksaypip_2 = socialhub_2.ksaypip || (socialhub_2.ksaypip = {});
    var auth_2 = ksaypip_2.auth || (ksaypip_2.auth = {});
    var api_2 = auth_2.api || (auth_2.api = {});
    var entity_2 = api_2.entity || (api_2.entity = {});
    var oauth_2 = entity_2.oauth || (entity_2.oauth = {});
    oauth_2.OAuthRevokeRequest = OAuthRevokeRequest;
    var work_3 = _.work || (_.work = {});
    var socialhub_3 = work_3.socialhub || (work_3.socialhub = {});
    var ksaypip_3 = socialhub_3.ksaypip || (socialhub_3.ksaypip = {});
    var auth_3 = ksaypip_3.auth || (ksaypip_3.auth = {});
    var api_3 = auth_3.api || (auth_3.api = {});
    var entity_3 = api_3.entity || (api_3.entity = {});
    var oauth_3 = entity_3.oauth || (entity_3.oauth = {});
    oauth_3.OAuthTokenResponse = OAuthTokenResponse;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=ksaypip-auth.js.map
