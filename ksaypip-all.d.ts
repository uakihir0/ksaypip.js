type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace work.socialhub.ksaypip.auth.api.entity.oauth {
    class BuildAuthorizationUrlRequest {
        constructor();
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get scopes(): Nullable<Array<string>>;
        set scopes(value: Nullable<Array<string>>);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
    }
    namespace BuildAuthorizationUrlRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BuildAuthorizationUrlRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.auth.api.entity.oauth {
    class OAuthAuthorizationCodeTokenRequest {
        constructor();
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
    }
    namespace OAuthAuthorizationCodeTokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAuthorizationCodeTokenRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.auth.api.entity.oauth {
    class OAuthRefreshTokenRequest {
        constructor();
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
    }
    namespace OAuthRefreshTokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthRefreshTokenRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.auth.api.entity.oauth {
    class OAuthRevokeRequest {
        constructor();
        get token(): Nullable<string>;
        set token(value: Nullable<string>);
        get tokenTypeHint(): Nullable<string>;
        set tokenTypeHint(value: Nullable<string>);
    }
    namespace OAuthRevokeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthRevokeRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.auth.api.entity.oauth {
    class OAuthTokenResponse {
        constructor();
        get accessToken(): string;
        set accessToken(value: string);
        get tokenType(): string;
        set tokenType(value: string);
        get expiresIn(): number;
        set expiresIn(value: number);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
    }
    namespace OAuthTokenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthTokenResponse;
        }
    }
}
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.ksaypip {
    interface Saypip {
        feed(): work.socialhub.ksaypip.api.FeedResource;
        posts(): work.socialhub.ksaypip.api.PostsResource;
        conversations(): work.socialhub.ksaypip.api.ConversationsResource;
        users(): work.socialhub.ksaypip.api.UsersResource;
        relationships(): work.socialhub.ksaypip.api.RelationshipsResource;
        friendRequests(): work.socialhub.ksaypip.api.FriendRequestsResource;
        notifications(): work.socialhub.ksaypip.api.NotificationsResource;
        mutes(): work.socialhub.ksaypip.api.MutesResource;
        wordMutes(): work.socialhub.ksaypip.api.WordMutesResource;
        media(): work.socialhub.ksaypip.api.MediaResource;
        links(): work.socialhub.ksaypip.api.LinksResource;
        blocks(): work.socialhub.ksaypip.api.BlocksResource;
        reports(): work.socialhub.ksaypip.api.ReportsResource;
        feedback(): work.socialhub.ksaypip.api.FeedbackResource;
        me(): work.socialhub.ksaypip.api.MeResource;
        apps(): work.socialhub.ksaypip.api.AppsResource;
        uri(): string;
        accessToken(): string;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.Saypip": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip {
    abstract class SaypipFactory extends KtSingleton<SaypipFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace SaypipFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(uri: string, accessToken?: string): work.socialhub.ksaypip.Saypip;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface AppsResource {
        list(request: work.socialhub.ksaypip.api.request.apps.AppsListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.AuthorizedAppList>>;
        revoke(request: work.socialhub.ksaypip.api.request.apps.AppsRevokeRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.AppsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface BlocksResource {
        block(request: work.socialhub.ksaypip.api.request.blocks.BlocksBlockRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.BlocksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface ConversationsResource {
        list(request: work.socialhub.ksaypip.api.request.conversations.ConversationsListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.ConversationDigestList>>;
        conversation(request: work.socialhub.ksaypip.api.request.conversations.ConversationsConversationRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Conversation>>;
        reply(request: work.socialhub.ksaypip.api.request.conversations.ConversationsReplyRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Reply>>;
        read(request: work.socialhub.ksaypip.api.request.conversations.ConversationsReadRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        leave(request: work.socialhub.ksaypip.api.request.conversations.ConversationsLeaveRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.ConversationsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface FeedResource {
        feed(request: work.socialhub.ksaypip.api.request.feed.FeedFeedRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        talk(request: work.socialhub.ksaypip.api.request.feed.FeedTalkRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        friends(request: work.socialhub.ksaypip.api.request.feed.FeedFriendsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        search(request: work.socialhub.ksaypip.api.request.feed.FeedSearchRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        tag(request: work.socialhub.ksaypip.api.request.feed.FeedTagRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        trends(request: work.socialhub.ksaypip.api.request.feed.FeedTrendsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.TrendList>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.FeedResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface FeedbackResource {
        send(request: work.socialhub.ksaypip.api.request.feedback.FeedbackSendRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.FeedbackResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface FriendRequestsResource {
        list(request: work.socialhub.ksaypip.api.request.friendrequests.FriendRequestsListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.FriendRequestList>>;
        request(request: work.socialhub.ksaypip.api.request.friendrequests.FriendRequestsRequestRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.FriendRequest>>;
        accept(request: work.socialhub.ksaypip.api.request.friendrequests.FriendRequestsAcceptRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.AcceptedFriendship>>;
        decline(request: work.socialhub.ksaypip.api.request.friendrequests.FriendRequestsDeclineRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.FriendRequestsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface LinksResource {
        preview(request: work.socialhub.ksaypip.api.request.links.LinksPreviewRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.LinkPreview>>;
        image(request: work.socialhub.ksaypip.api.request.links.LinksImageRequest): Promise<work.socialhub.ksaypip.api.response.Response<Int8Array>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.LinksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface MeResource {
        me(request: work.socialhub.ksaypip.api.request.me.MeMeRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Me>>;
        posts(request: work.socialhub.ksaypip.api.request.me.MePostsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Feed>>;
        updateProfile(request: work.socialhub.ksaypip.api.request.me.MeUpdateProfileRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Profile>>;
        pinSubject(request: work.socialhub.ksaypip.api.request.me.MePinSubjectRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PinnedSubjects>>;
        unpinSubject(request: work.socialhub.ksaypip.api.request.me.MeUnpinSubjectRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PinnedSubjects>>;
        reorderPinnedSubjects(request: work.socialhub.ksaypip.api.request.me.MeReorderPinnedSubjectsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PinnedSubjects>>;
        arrangeAsideWidgets(request: work.socialhub.ksaypip.api.request.me.MeArrangeAsideWidgetsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.AsideWidgets>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.MeResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface MediaResource {
        upload(request: work.socialhub.ksaypip.api.request.media.MediaUploadRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Media>>;
        setAlt(request: work.socialhub.ksaypip.api.request.media.MediaSetAltRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.MediaAlt>>;
        bytes(request: work.socialhub.ksaypip.api.request.media.MediaBytesRequest): Promise<work.socialhub.ksaypip.api.response.Response<Int8Array>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.MediaResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface MutesResource {
        list(request: work.socialhub.ksaypip.api.request.mutes.MutesListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.MuteList>>;
        mute(request: work.socialhub.ksaypip.api.request.mutes.MutesMuteRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        unmute(request: work.socialhub.ksaypip.api.request.mutes.MutesUnmuteRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.MutesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface NotificationsResource {
        list(request: work.socialhub.ksaypip.api.request.notifications.NotificationsListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.NotificationList>>;
        read(request: work.socialhub.ksaypip.api.request.notifications.NotificationsReadRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.NotificationsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface PostsResource {
        post(request: work.socialhub.ksaypip.api.request.posts.PostsPostRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Post>>;
        reactions(request: work.socialhub.ksaypip.api.request.posts.PostsReactionsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PostReactors>>;
        conversations(request: work.socialhub.ksaypip.api.request.posts.PostsConversationsRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.ConversationList>>;
        create(request: work.socialhub.ksaypip.api.request.posts.PostsCreateRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Post>>;
        delete(request: work.socialhub.ksaypip.api.request.posts.PostsDeleteRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        removeWantsTalk(request: work.socialhub.ksaypip.api.request.posts.PostsRemoveWantsTalkRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        react(request: work.socialhub.ksaypip.api.request.posts.PostsReactRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PostReactions>>;
        unreact(request: work.socialhub.ksaypip.api.request.posts.PostsUnreactRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.PostReactions>>;
        startConversation(request: work.socialhub.ksaypip.api.request.posts.PostsStartConversationRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Conversation>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.PostsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface RelationshipsResource {
        list(request: work.socialhub.ksaypip.api.request.relationships.RelationshipsListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.RelationshipList>>;
        relationship(request: work.socialhub.ksaypip.api.request.relationships.RelationshipsRelationshipRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Relationship>>;
        setLabel(request: work.socialhub.ksaypip.api.request.relationships.RelationshipsSetLabelRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.Label>>;
        terminate(request: work.socialhub.ksaypip.api.request.relationships.RelationshipsTerminateRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.RelationshipsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface ReportsResource {
        report(request: work.socialhub.ksaypip.api.request.reports.ReportsReportRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.CreatedReport>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.ReportsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface UsersResource {
        user(request: work.socialhub.ksaypip.api.request.users.UsersUserRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.UserPage>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.UsersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api {
    interface WordMutesResource {
        list(request: work.socialhub.ksaypip.api.request.wordmutes.WordMutesListRequest): Promise<work.socialhub.ksaypip.api.response.Response<work.socialhub.ksaypip.entity.WordMuteList>>;
        mute(request: work.socialhub.ksaypip.api.request.wordmutes.WordMutesMuteRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        setWindow(request: work.socialhub.ksaypip.api.request.wordmutes.WordMutesWindowRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        forget(request: work.socialhub.ksaypip.api.request.wordmutes.WordMutesForgetRequest): Promise<work.socialhub.ksaypip.api.response.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.ksaypip.api.WordMutesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.ksaypip.api.request.apps {
    class AppsListRequest {
        constructor();
    }
    namespace AppsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.apps {
    class AppsRevokeRequest {
        constructor();
        get consentId(): Nullable<string>;
        set consentId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace AppsRevokeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsRevokeRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.blocks {
    class BlocksBlockRequest {
        constructor();
        get identity(): Nullable<string>;
        set identity(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace BlocksBlockRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlocksBlockRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.conversations {
    class ConversationsConversationRequest {
        constructor();
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace ConversationsConversationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsConversationRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.conversations {
    class ConversationsLeaveRequest {
        constructor();
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace ConversationsLeaveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsLeaveRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.conversations {
    class ConversationsListRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace ConversationsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.conversations {
    class ConversationsReadRequest {
        constructor();
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
    }
    namespace ConversationsReadRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsReadRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.conversations {
    class ConversationsReplyRequest {
        constructor();
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace ConversationsReplyRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsReplyRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedFeedRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace FeedFeedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedFeedRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedFriendsRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace FeedFriendsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedFriendsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedSearchRequest {
        constructor();
        get q(): Nullable<string>;
        set q(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace FeedSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedSearchRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedTagRequest {
        constructor();
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace FeedTagRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedTagRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedTalkRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace FeedTalkRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedTalkRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feed {
    class FeedTrendsRequest {
        constructor();
    }
    namespace FeedTrendsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedTrendsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.feedback {
    class FeedbackSendRequest {
        constructor();
        get message(): Nullable<string>;
        set message(value: Nullable<string>);
        get contact(): Nullable<string>;
        set contact(value: Nullable<string>);
        get route(): Nullable<string>;
        set route(value: Nullable<string>);
        get image(): Nullable<Int8Array>;
        set image(value: Nullable<Int8Array>);
    }
    namespace FeedbackSendRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FeedbackSendRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.friendrequests {
    class FriendRequestsAcceptRequest {
        constructor();
        get friendRequestId(): Nullable<string>;
        set friendRequestId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace FriendRequestsAcceptRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestsAcceptRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.friendrequests {
    class FriendRequestsDeclineRequest {
        constructor();
        get friendRequestId(): Nullable<string>;
        set friendRequestId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace FriendRequestsDeclineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestsDeclineRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.friendrequests {
    class FriendRequestsListRequest {
        constructor();
    }
    namespace FriendRequestsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestsListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.friendrequests {
    class FriendRequestsRequestRequest {
        constructor();
        get identity(): Nullable<string>;
        set identity(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace FriendRequestsRequestRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestsRequestRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.links {
    class LinksImageRequest {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace LinksImageRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LinksImageRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.links {
    class LinksPreviewRequest {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace LinksPreviewRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LinksPreviewRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MeArrangeAsideWidgetsRequest {
        constructor();
        get items(): Nullable<Array<work.socialhub.ksaypip.entity.AsideWidgetItem>>;
        set items(value: Nullable<Array<work.socialhub.ksaypip.entity.AsideWidgetItem>>);
    }
    namespace MeArrangeAsideWidgetsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeArrangeAsideWidgetsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MeMeRequest {
        constructor();
    }
    namespace MeMeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeMeRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MePinSubjectRequest {
        constructor();
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
    }
    namespace MePinSubjectRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MePinSubjectRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MePostsRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace MePostsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MePostsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MeReorderPinnedSubjectsRequest {
        constructor();
        get items(): Nullable<Array<string>>;
        set items(value: Nullable<Array<string>>);
    }
    namespace MeReorderPinnedSubjectsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeReorderPinnedSubjectsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MeUnpinSubjectRequest {
        constructor();
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
    }
    namespace MeUnpinSubjectRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeUnpinSubjectRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.me {
    class MeUpdateProfileRequest {
        constructor();
        get displayName(): Nullable<string>;
        set displayName(value: Nullable<string>);
        get bio(): Nullable<string>;
        set bio(value: Nullable<string>);
        get avatarMediaId(): Nullable<string>;
        set avatarMediaId(value: Nullable<string>);
        get bannerMediaId(): Nullable<string>;
        set bannerMediaId(value: Nullable<string>);
        get clearDisplayName(): boolean;
        set clearDisplayName(value: boolean);
        get clearBio(): boolean;
        set clearBio(value: boolean);
        get clearAvatarMediaId(): boolean;
        set clearAvatarMediaId(value: boolean);
        get clearBannerMediaId(): boolean;
        set clearBannerMediaId(value: boolean);
    }
    namespace MeUpdateProfileRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeUpdateProfileRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.media {
    class MediaBytesRequest {
        constructor();
        get mediaId(): Nullable<string>;
        set mediaId(value: Nullable<string>);
        get variant(): Nullable<string>;
        set variant(value: Nullable<string>);
    }
    namespace MediaBytesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaBytesRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.media {
    class MediaSetAltRequest {
        constructor();
        get mediaId(): Nullable<string>;
        set mediaId(value: Nullable<string>);
        get alt(): Nullable<string>;
        set alt(value: Nullable<string>);
    }
    namespace MediaSetAltRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaSetAltRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.media {
    class MediaUploadRequest {
        constructor();
        get data(): Nullable<Int8Array>;
        set data(value: Nullable<Int8Array>);
        get contentType(): Nullable<string>;
        set contentType(value: Nullable<string>);
    }
    namespace MediaUploadRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaUploadRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.mutes {
    class MutesListRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace MutesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.mutes {
    class MutesMuteRequest {
        constructor();
        get identity(): Nullable<string>;
        set identity(value: Nullable<string>);
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get duration(): Nullable<string>;
        set duration(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace MutesMuteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesMuteRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.mutes {
    class MutesUnmuteRequest {
        constructor();
        get identityToken(): Nullable<string>;
        set identityToken(value: Nullable<string>);
    }
    namespace MutesUnmuteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesUnmuteRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.notifications {
    class NotificationsListRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace NotificationsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.notifications {
    class NotificationsReadRequest {
        constructor();
    }
    namespace NotificationsReadRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationsReadRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsConversationsRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    namespace PostsConversationsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsConversationsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsCreateRequest {
        constructor();
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get mediaIds(): Nullable<Array<string>>;
        set mediaIds(value: Nullable<Array<string>>);
        get wantsTalk(): Nullable<boolean>;
        set wantsTalk(value: Nullable<boolean>);
        get replyToPostId(): Nullable<string>;
        set replyToPostId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace PostsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsDeleteRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace PostsDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsPostRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    namespace PostsPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsPostRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsReactRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
    }
    namespace PostsReactRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsReactRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsReactionsRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    namespace PostsReactionsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsReactionsRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsRemoveWantsTalkRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    namespace PostsRemoveWantsTalkRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsRemoveWantsTalkRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsStartConversationRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace PostsStartConversationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsStartConversationRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.posts {
    class PostsUnreactRequest {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
    }
    namespace PostsUnreactRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostsUnreactRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.relationships {
    class RelationshipsListRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace RelationshipsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipsListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.relationships {
    class RelationshipsRelationshipRequest {
        constructor();
        get relationshipId(): Nullable<string>;
        set relationshipId(value: Nullable<string>);
    }
    namespace RelationshipsRelationshipRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipsRelationshipRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.relationships {
    class RelationshipsSetLabelRequest {
        constructor();
        get relationshipId(): Nullable<string>;
        set relationshipId(value: Nullable<string>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get note(): Nullable<string>;
        set note(value: Nullable<string>);
        get markEmoji(): Nullable<string>;
        set markEmoji(value: Nullable<string>);
        get markColor(): Nullable<string>;
        set markColor(value: Nullable<string>);
    }
    namespace RelationshipsSetLabelRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipsSetLabelRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.relationships {
    class RelationshipsTerminateRequest {
        constructor();
        get relationshipId(): Nullable<string>;
        set relationshipId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace RelationshipsTerminateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipsTerminateRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.reports {
    class ReportsReportRequest {
        constructor();
        get targetType(): Nullable<string>;
        set targetType(value: Nullable<string>);
        get targetId(): Nullable<string>;
        set targetId(value: Nullable<string>);
        get reason(): Nullable<string>;
        set reason(value: Nullable<string>);
        get alsoBlock(): Nullable<boolean>;
        set alsoBlock(value: Nullable<boolean>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace ReportsReportRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReportsReportRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.users {
    class UsersUserRequest {
        constructor();
        get identityToken(): Nullable<string>;
        set identityToken(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace UsersUserRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersUserRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.wordmutes {
    class WordMutesForgetRequest {
        constructor();
        get wordMuteId(): Nullable<string>;
        set wordMuteId(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace WordMutesForgetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMutesForgetRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.wordmutes {
    class WordMutesListRequest {
        constructor();
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace WordMutesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMutesListRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.wordmutes {
    class WordMutesMuteRequest {
        constructor();
        get word(): Nullable<string>;
        set word(value: Nullable<string>);
        get duration(): Nullable<string>;
        set duration(value: Nullable<string>);
        get idempotencyKey(): Nullable<string>;
        set idempotencyKey(value: Nullable<string>);
    }
    namespace WordMutesMuteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMutesMuteRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.request.wordmutes {
    class WordMutesWindowRequest {
        constructor();
        get wordMuteId(): Nullable<string>;
        set wordMuteId(value: Nullable<string>);
        get duration(): Nullable<string>;
        set duration(value: Nullable<string>);
    }
    namespace WordMutesWindowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMutesWindowRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.response {
    class Response<T> {
        constructor(data: T);
        get data(): T;
        set data(value: T);
        get json(): Nullable<string>;
        set json(value: Nullable<string>);
        get status(): number;
        set status(value: number);
    }
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
    }
}
export declare namespace work.socialhub.ksaypip.api.response {
    class ResponseUnit {
        constructor();
        get json(): Nullable<string>;
        set json(value: Nullable<string>);
        get status(): number;
        set status(value: number);
    }
    namespace ResponseUnit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseUnit;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class AcceptedFriendship {
        constructor();
        get relationshipId(): string;
        set relationshipId(value: string);
        get friendSince(): string;
        set friendSince(value: string);
    }
    namespace AcceptedFriendship {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AcceptedFriendship;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class AsideWidgetItem {
        constructor();
        get widget(): string;
        set widget(value: string);
        get visible(): boolean;
        set visible(value: boolean);
    }
    namespace AsideWidgetItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AsideWidgetItem;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class AsideWidgets {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.AsideWidgetItem>;
        set items(value: Array<work.socialhub.ksaypip.entity.AsideWidgetItem>);
    }
    namespace AsideWidgets {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AsideWidgets;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class AuthorizedApp {
        constructor();
        get id(): string;
        set id(value: string);
        get clientId(): string;
        set clientId(value: string);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
        get scopes(): Array<string>;
        set scopes(value: Array<string>);
        get grantedAt(): string;
        set grantedAt(value: string);
        get updatedAt(): string;
        set updatedAt(value: string);
    }
    namespace AuthorizedApp {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthorizedApp;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class AuthorizedAppList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.AuthorizedApp>;
        set items(value: Array<work.socialhub.ksaypip.entity.AuthorizedApp>);
    }
    namespace AuthorizedAppList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthorizedAppList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Conversation {
        constructor();
        get id(): string;
        set id(value: string);
        get postId(): string;
        set postId(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get lastReplyAt(): string;
        set lastReplyAt(value: string);
        get participants(): Array<work.socialhub.ksaypip.entity.Participant>;
        set participants(value: Array<work.socialhub.ksaypip.entity.Participant>);
        get isMine(): boolean;
        set isMine(value: boolean);
        get replies(): Array<work.socialhub.ksaypip.entity.Reply>;
        set replies(value: Array<work.socialhub.ksaypip.entity.Reply>);
        get canReply(): boolean;
        set canReply(value: boolean);
        get olderRepliesCursor(): Nullable<string>;
        set olderRepliesCursor(value: Nullable<string>);
        get originPost(): Nullable<work.socialhub.ksaypip.entity.Post>;
        set originPost(value: Nullable<work.socialhub.ksaypip.entity.Post>);
    }
    namespace Conversation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Conversation;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class ConversationDigest {
        constructor();
        get id(): string;
        set id(value: string);
        get postId(): string;
        set postId(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get lastReplyAt(): string;
        set lastReplyAt(value: string);
        get participants(): Array<work.socialhub.ksaypip.entity.Participant>;
        set participants(value: Array<work.socialhub.ksaypip.entity.Participant>);
        get isMine(): boolean;
        set isMine(value: boolean);
        get lastReply(): Nullable<work.socialhub.ksaypip.entity.PostLastReply>;
        set lastReply(value: Nullable<work.socialhub.ksaypip.entity.PostLastReply>);
        get unread(): boolean;
        set unread(value: boolean);
    }
    namespace ConversationDigest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationDigest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class ConversationDigestList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.ConversationDigest>;
        set items(value: Array<work.socialhub.ksaypip.entity.ConversationDigest>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace ConversationDigestList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationDigestList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class ConversationList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.ConversationDigest>;
        set items(value: Array<work.socialhub.ksaypip.entity.ConversationDigest>);
    }
    namespace ConversationList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class CreatedReport {
        constructor();
        get id(): string;
        set id(value: string);
    }
    namespace CreatedReport {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreatedReport;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Feed {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.Post>;
        set items(value: Array<work.socialhub.ksaypip.entity.Post>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace Feed {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Feed;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class FriendRequest {
        constructor();
        get id(): string;
        set id(value: string);
        get direction(): string;
        set direction(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get relationshipId(): string;
        set relationshipId(value: string);
        get counterpart(): work.socialhub.ksaypip.entity.Person;
        set counterpart(value: work.socialhub.ksaypip.entity.Person);
        get firstInteractionAt(): string;
        set firstInteractionAt(value: string);
    }
    namespace FriendRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequest;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class FriendRequestList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.FriendRequest>;
        set items(value: Array<work.socialhub.ksaypip.entity.FriendRequest>);
    }
    namespace FriendRequestList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class FriendRequestState {
        constructor();
        get id(): string;
        set id(value: string);
        get direction(): string;
        set direction(value: string);
        get createdAt(): string;
        set createdAt(value: string);
    }
    namespace FriendRequestState {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FriendRequestState;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Label {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get note(): Nullable<string>;
        set note(value: Nullable<string>);
        get mark(): work.socialhub.ksaypip.entity.Mark;
        set mark(value: work.socialhub.ksaypip.entity.Mark);
    }
    namespace Label {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Label;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class LinkPreview {
        constructor();
        get url(): string;
        set url(value: string);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get imageUrl(): Nullable<string>;
        set imageUrl(value: Nullable<string>);
    }
    namespace LinkPreview {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LinkPreview;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Mark {
        constructor();
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
        get color(): Nullable<string>;
        set color(value: Nullable<string>);
    }
    namespace Mark {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Mark;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Me {
        constructor();
        get createdAt(): string;
        set createdAt(value: string);
        get profile(): Nullable<work.socialhub.ksaypip.entity.Profile>;
        set profile(value: Nullable<work.socialhub.ksaypip.entity.Profile>);
        get unreadNotifications(): number;
        set unreadNotifications(value: number);
        get unreadConversations(): number;
        set unreadConversations(value: number);
        get incomingFriendRequests(): number;
        set incomingFriendRequests(value: number);
        get hasFriends(): boolean;
        set hasFriends(value: boolean);
        get wantsTalkPostId(): Nullable<string>;
        set wantsTalkPostId(value: Nullable<string>);
        get pinnedSubjects(): Array<string>;
        set pinnedSubjects(value: Array<string>);
        get asideWidgets(): Array<work.socialhub.ksaypip.entity.AsideWidgetItem>;
        set asideWidgets(value: Array<work.socialhub.ksaypip.entity.AsideWidgetItem>);
        get isAdmin(): boolean;
        set isAdmin(value: boolean);
        get canSendFeedback(): boolean;
        set canSendFeedback(value: boolean);
    }
    namespace Me {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Me;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Media {
        constructor();
        get id(): string;
        set id(value: string);
        get url(): string;
        set url(value: string);
        get thumbnailUrl(): string;
        set thumbnailUrl(value: string);
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        get alt(): Nullable<string>;
        set alt(value: Nullable<string>);
    }
    namespace Media {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Media;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class MediaAlt {
        constructor();
        get alt(): Nullable<string>;
        set alt(value: Nullable<string>);
    }
    namespace MediaAlt {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaAlt;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Mute {
        constructor();
        get person(): work.socialhub.ksaypip.entity.Person;
        set person(value: work.socialhub.ksaypip.entity.Person);
        get endsAt(): Nullable<string>;
        set endsAt(value: Nullable<string>);
        get createdAt(): string;
        set createdAt(value: string);
    }
    namespace Mute {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Mute;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class MuteList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.Mute>;
        set items(value: Array<work.socialhub.ksaypip.entity.Mute>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace MuteList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MuteList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Notification {
        constructor();
        get kind(): string;
        set kind(value: string);
        get arrivedAt(): string;
        set arrivedAt(value: string);
        get readAt(): Nullable<string>;
        set readAt(value: Nullable<string>);
        get person(): Nullable<work.socialhub.ksaypip.entity.Person>;
        set person(value: Nullable<work.socialhub.ksaypip.entity.Person>);
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
        get postBody(): Nullable<string>;
        set postBody(value: Nullable<string>);
        get postImage(): Nullable<work.socialhub.ksaypip.entity.Media>;
        set postImage(value: Nullable<work.socialhub.ksaypip.entity.Media>);
        get reactions(): Nullable<Array<work.socialhub.ksaypip.entity.NotificationReaction>>;
        set reactions(value: Nullable<Array<work.socialhub.ksaypip.entity.NotificationReaction>>);
        get peopleCount(): Nullable<number>;
        set peopleCount(value: Nullable<number>);
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
    }
    namespace Notification {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Notification;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class NotificationList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.Notification>;
        set items(value: Array<work.socialhub.ksaypip.entity.Notification>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace NotificationList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class NotificationReaction {
        constructor();
        get emoji(): string;
        set emoji(value: string);
        get count(): number;
        set count(value: number);
    }
    namespace NotificationReaction {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotificationReaction;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class OwnSignIn {
        constructor();
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get providers(): Array<string>;
        set providers(value: Array<string>);
    }
    namespace OwnSignIn {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OwnSignIn;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Participant {
        constructor();
        get side(): string;
        set side(value: string);
        get person(): Nullable<work.socialhub.ksaypip.entity.Person>;
        set person(value: Nullable<work.socialhub.ksaypip.entity.Person>);
        get isMe(): boolean;
        set isMe(value: boolean);
    }
    namespace Participant {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Participant;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Person {
        constructor();
        get identity(): string;
        set identity(value: string);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get mark(): work.socialhub.ksaypip.entity.Mark;
        set mark(value: work.socialhub.ksaypip.entity.Mark);
        get profile(): Nullable<work.socialhub.ksaypip.entity.Profile>;
        set profile(value: Nullable<work.socialhub.ksaypip.entity.Profile>);
    }
    namespace Person {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Person;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PinnedSubjects {
        constructor();
        get items(): Array<string>;
        set items(value: Array<string>);
    }
    namespace PinnedSubjects {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinnedSubjects;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Post {
        constructor();
        get id(): string;
        set id(value: string);
        get body(): string;
        set body(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get media(): Array<work.socialhub.ksaypip.entity.Media>;
        set media(value: Array<work.socialhub.ksaypip.entity.Media>);
        get reactions(): Array<work.socialhub.ksaypip.entity.PostReaction>;
        set reactions(value: Array<work.socialhub.ksaypip.entity.PostReaction>);
        get conversations(): work.socialhub.ksaypip.entity.PostConversations;
        set conversations(value: work.socialhub.ksaypip.entity.PostConversations);
        get wantsTalk(): boolean;
        set wantsTalk(value: boolean);
        get author(): Nullable<work.socialhub.ksaypip.entity.Person>;
        set author(value: Nullable<work.socialhub.ksaypip.entity.Person>);
        get authorColor(): Nullable<string>;
        set authorColor(value: Nullable<string>);
        get isMine(): boolean;
        set isMine(value: boolean);
        get readableUntil(): Nullable<string>;
        set readableUntil(value: Nullable<string>);
        get replyTo(): Nullable<work.socialhub.ksaypip.entity.QuotedPost>;
        set replyTo(value: Nullable<work.socialhub.ksaypip.entity.QuotedPost>);
    }
    namespace Post {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Post;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PostConversations {
        constructor();
        get count(): number;
        set count(value: number);
        get mine(): boolean;
        set mine(value: boolean);
        get lastReply(): Nullable<work.socialhub.ksaypip.entity.PostLastReply>;
        set lastReply(value: Nullable<work.socialhub.ksaypip.entity.PostLastReply>);
    }
    namespace PostConversations {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostConversations;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PostLastReply {
        constructor();
        get body(): string;
        set body(value: string);
        get side(): string;
        set side(value: string);
    }
    namespace PostLastReply {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostLastReply;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PostReaction {
        constructor();
        get emoji(): string;
        set emoji(value: string);
        get count(): number;
        set count(value: number);
        get mine(): boolean;
        set mine(value: boolean);
    }
    namespace PostReaction {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostReaction;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PostReactions {
        constructor();
        get reactions(): Array<work.socialhub.ksaypip.entity.PostReaction>;
        set reactions(value: Array<work.socialhub.ksaypip.entity.PostReaction>);
    }
    namespace PostReactions {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostReactions;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class PostReactors {
        constructor();
        get reactions(): Array<work.socialhub.ksaypip.entity.ReactionWithPeople>;
        set reactions(value: Array<work.socialhub.ksaypip.entity.ReactionWithPeople>);
    }
    namespace PostReactors {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PostReactors;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Profile {
        constructor();
        get displayName(): Nullable<string>;
        set displayName(value: Nullable<string>);
        get bio(): Nullable<string>;
        set bio(value: Nullable<string>);
        get avatarUrl(): Nullable<string>;
        set avatarUrl(value: Nullable<string>);
        get bannerUrl(): Nullable<string>;
        set bannerUrl(value: Nullable<string>);
    }
    namespace Profile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Profile;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class QuotedPost {
        constructor();
        get id(): string;
        set id(value: string);
        get body(): string;
        set body(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get media(): Array<work.socialhub.ksaypip.entity.Media>;
        set media(value: Array<work.socialhub.ksaypip.entity.Media>);
        get readableUntil(): Nullable<string>;
        set readableUntil(value: Nullable<string>);
    }
    namespace QuotedPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => QuotedPost;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class ReactionWithPeople {
        constructor();
        get emoji(): string;
        set emoji(value: string);
        get count(): number;
        set count(value: number);
        get mine(): boolean;
        set mine(value: boolean);
        get people(): Array<work.socialhub.ksaypip.entity.Person>;
        set people(value: Array<work.socialhub.ksaypip.entity.Person>);
    }
    namespace ReactionWithPeople {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionWithPeople;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class RealtimeEvent {
        constructor();
        get type(): string;
        set type(value: string);
        get postId(): string;
        set postId(value: string);
    }
    namespace RealtimeEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RealtimeEvent;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Relationship {
        constructor();
        get id(): string;
        set id(value: string);
        get counterpart(): work.socialhub.ksaypip.entity.Person;
        set counterpart(value: work.socialhub.ksaypip.entity.Person);
        get note(): Nullable<string>;
        set note(value: Nullable<string>);
        get firstInteractionAt(): string;
        set firstInteractionAt(value: string);
        get friendSince(): Nullable<string>;
        set friendSince(value: Nullable<string>);
        get conversations(): Array<work.socialhub.ksaypip.entity.ConversationDigest>;
        set conversations(value: Array<work.socialhub.ksaypip.entity.ConversationDigest>);
        get friendRequest(): Nullable<work.socialhub.ksaypip.entity.FriendRequestState>;
        set friendRequest(value: Nullable<work.socialhub.ksaypip.entity.FriendRequestState>);
        get canSendFriendRequest(): boolean;
        set canSendFriendRequest(value: boolean);
    }
    namespace Relationship {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Relationship;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class RelationshipList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.RelationshipSummary>;
        set items(value: Array<work.socialhub.ksaypip.entity.RelationshipSummary>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace RelationshipList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class RelationshipSummary {
        constructor();
        get id(): string;
        set id(value: string);
        get counterpart(): work.socialhub.ksaypip.entity.Person;
        set counterpart(value: work.socialhub.ksaypip.entity.Person);
        get firstInteractionAt(): string;
        set firstInteractionAt(value: string);
        get friendSince(): Nullable<string>;
        set friendSince(value: Nullable<string>);
        get lastActivityAt(): string;
        set lastActivityAt(value: string);
    }
    namespace RelationshipSummary {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationshipSummary;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Reply {
        constructor();
        get id(): string;
        set id(value: string);
        get body(): string;
        set body(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get side(): string;
        set side(value: string);
        get isMine(): boolean;
        set isMine(value: boolean);
    }
    namespace Reply {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Reply;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class Trend {
        constructor();
        get tag(): string;
        set tag(value: string);
        get writers(): number;
        set writers(value: number);
    }
    namespace Trend {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trend;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class TrendList {
        constructor();
        get measuredAt(): Nullable<string>;
        set measuredAt(value: Nullable<string>);
        get items(): Array<work.socialhub.ksaypip.entity.Trend>;
        set items(value: Array<work.socialhub.ksaypip.entity.Trend>);
    }
    namespace TrendList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TrendList;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class UserPage {
        constructor();
        get person(): work.socialhub.ksaypip.entity.Person;
        set person(value: work.socialhub.ksaypip.entity.Person);
        get posts(): Array<work.socialhub.ksaypip.entity.Post>;
        set posts(value: Array<work.socialhub.ksaypip.entity.Post>);
        get postsNextCursor(): Nullable<string>;
        set postsNextCursor(value: Nullable<string>);
        get relationship(): Nullable<work.socialhub.ksaypip.entity.Relationship>;
        set relationship(value: Nullable<work.socialhub.ksaypip.entity.Relationship>);
    }
    namespace UserPage {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserPage;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class WordMute {
        constructor();
        get id(): string;
        set id(value: string);
        get word(): string;
        set word(value: string);
        get endsAt(): Nullable<string>;
        set endsAt(value: Nullable<string>);
        get active(): boolean;
        set active(value: boolean);
        get createdAt(): string;
        set createdAt(value: string);
    }
    namespace WordMute {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMute;
        }
    }
}
export declare namespace work.socialhub.ksaypip.entity {
    class WordMuteList {
        constructor();
        get items(): Array<work.socialhub.ksaypip.entity.WordMute>;
        set items(value: Array<work.socialhub.ksaypip.entity.WordMute>);
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
    }
    namespace WordMuteList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WordMuteList;
        }
    }
}
export declare namespace dev.whyoleg.cryptography.providers.webcrypto {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.ksaypip {
    abstract class KsaypipFactory extends KtSingleton<KsaypipFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KsaypipFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(uri: string, accessToken?: string): work.socialhub.ksaypip.Saypip;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_ksaypip_all;