module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/ProductImages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImages",
    ()=>ProductImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ProductImages({ images }) {
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: images[selectedImage],
                alt: "Product",
                className: "w-full h-96 object-contain mb-4 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/components/ProductImages.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto",
                children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: img,
                        alt: `Product view ${idx + 1}`,
                        onClick: ()=>setSelectedImage(idx),
                        className: `w-20 h-20 object-cover rounded cursor-pointer border-2 transition ${selectedImage === idx ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'}`
                    }, idx, false, {
                        fileName: "[project]/components/ProductImages.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProductImages.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductImages.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductReviews.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductReviews",
    ()=>ProductReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ProductReviews({ reviews, rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm p-6 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold",
                        children: "Customer Reviews"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-gray-900",
                                children: rating
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "out of 5"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductReviews.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b pb-6 last:border-b-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900",
                                                    children: review.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this),
                                                review.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",
                                                    children: "Verified Purchase"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductReviews.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-400",
                                                    children: [
                                                        '★'.repeat(review.rating),
                                                        '☆'.repeat(5 - review.rating)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500",
                                                    children: review.date
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductReviews.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductReviews.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium mt-2 text-gray-900",
                                children: review.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mt-1 leading-relaxed",
                                children: review.comment
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, review.id, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProductReviews.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductReviews.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/hooks/useAgora.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAgora",
    ()=>useAgora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useAgora({ appId, channel, token, uid }) {
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Microphone enabled by default (not muted)
    const [localAudioTrack, setLocalAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteAudioTrack, setRemoteAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Don't initialize if we don't have valid config or if we're on the server
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !appId || !channel || !token || uid === 0 || !appId.trim() || !channel.trim() || !token.trim()) {
            return;
        }
        //TURBOPACK unreachable
        ;
        let isMounted;
        let audioTrack;
        let client;
        const init = undefined;
    }, [
        appId,
        channel,
        token,
        uid
    ]);
    const toggleMute = async ()=>{
        if (localAudioTrack) {
            await localAudioTrack.setMuted(!isMuted);
            setIsMuted(!isMuted);
        }
    };
    const leave = async ()=>{
        if (localAudioTrack) {
            localAudioTrack.close();
            setLocalAudioTrack(null);
        }
        if (clientRef.current) {
            await clientRef.current.leave();
            setIsConnected(false);
        }
    };
    return {
        isConnected,
        isMuted,
        toggleMute,
        leave,
        localAudioTrack,
        remoteAudioTrack,
        client: clientRef.current
    };
}
}),
"[project]/lib/conversational-ai-api/type.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EAgentState",
    ()=>EAgentState,
    "EChatMessagePriority",
    ()=>EChatMessagePriority,
    "EChatMessageType",
    ()=>EChatMessageType,
    "EConversationalAIAPIEvents",
    ()=>EConversationalAIAPIEvents,
    "ELocalTranscriptStatus",
    ()=>ELocalTranscriptStatus,
    "EMessageSalStatus",
    ()=>EMessageSalStatus,
    "EMessageType",
    ()=>EMessageType,
    "EModuleType",
    ()=>EModuleType,
    "ERTCCustomEvents",
    ()=>ERTCCustomEvents,
    "ERTCEvents",
    ()=>ERTCEvents,
    "ERTMEvents",
    ()=>ERTMEvents,
    "ETranscriptHelperMode",
    ()=>ETranscriptHelperMode,
    "ETurnStatus",
    ()=>ETurnStatus,
    "NotFoundError",
    ()=>NotFoundError
]);
var ETranscriptHelperMode = /*#__PURE__*/ function(ETranscriptHelperMode) {
    ETranscriptHelperMode["TEXT"] = "text";
    ETranscriptHelperMode["WORD"] = "word";
    ETranscriptHelperMode["CHUNK"] = "chunk";
    ETranscriptHelperMode["UNKNOWN"] = "unknown";
    return ETranscriptHelperMode;
}({});
var EMessageType = /*#__PURE__*/ function(EMessageType) {
    EMessageType["USER_TRANSCRIPTION"] = "user.transcription";
    EMessageType["AGENT_TRANSCRIPTION"] = "assistant.transcription";
    EMessageType["MSG_INTERRUPTED"] = "message.interrupt";
    EMessageType["MSG_METRICS"] = "message.metrics";
    EMessageType["MSG_ERROR"] = "message.error";
    /** @deprecated */ EMessageType["MSG_STATE"] = "message.state";
    EMessageType["IMAGE_UPLOAD"] = "image.upload";
    EMessageType["MESSAGE_INFO"] = "message.info";
    EMessageType["MESSAGE_SAL_STATUS"] = "message.sal_status";
    return EMessageType;
}({});
var ERTMEvents = /*#__PURE__*/ function(ERTMEvents) {
    ERTMEvents["MESSAGE"] = "message";
    ERTMEvents["PRESENCE"] = "presence";
    // TOPIC = 'topic',
    // STORAGE = 'storage',
    // LOCK = 'lock',
    ERTMEvents["STATUS"] = "status";
    return ERTMEvents;
}({});
var ERTCEvents = /*#__PURE__*/ function(ERTCEvents) {
    ERTCEvents["NETWORK_QUALITY"] = "network-quality";
    ERTCEvents["USER_PUBLISHED"] = "user-published";
    ERTCEvents["USER_UNPUBLISHED"] = "user-unpublished";
    ERTCEvents["STREAM_MESSAGE"] = "stream-message";
    ERTCEvents["USER_JOINED"] = "user-joined";
    ERTCEvents["USER_LEFT"] = "user-left";
    ERTCEvents["CONNECTION_STATE_CHANGE"] = "connection-state-change";
    // AUDIO_METADATA = 'audio-metadata',
    ERTCEvents["AUDIO_PTS"] = "audio-pts";
    return ERTCEvents;
}({});
var ERTCCustomEvents = /*#__PURE__*/ function(ERTCCustomEvents) {
    ERTCCustomEvents["MICROPHONE_CHANGED"] = "microphone-changed";
    ERTCCustomEvents["REMOTE_USER_CHANGED"] = "remote-user-changed";
    ERTCCustomEvents["REMOTE_USER_JOINED"] = "remote-user-joined";
    ERTCCustomEvents["REMOTE_USER_LEFT"] = "remote-user-left";
    ERTCCustomEvents["LOCAL_TRACKS_CHANGED"] = "local-tracks-changed";
    return ERTCCustomEvents;
}({});
var EConversationalAIAPIEvents = /*#__PURE__*/ function(EConversationalAIAPIEvents) {
    EConversationalAIAPIEvents["AGENT_STATE_CHANGED"] = "agent-state-changed";
    EConversationalAIAPIEvents["AGENT_INTERRUPTED"] = "agent-interrupted";
    EConversationalAIAPIEvents["AGENT_METRICS"] = "agent-metrics";
    EConversationalAIAPIEvents["AGENT_ERROR"] = "agent-error";
    EConversationalAIAPIEvents["TRANSCRIPT_UPDATED"] = "transcript-updated";
    EConversationalAIAPIEvents["DEBUG_LOG"] = "debug-log";
    EConversationalAIAPIEvents["MESSAGE_RECEIPT_UPDATED"] = "message-receipt-updated";
    EConversationalAIAPIEvents["MESSAGE_ERROR"] = "message-error";
    EConversationalAIAPIEvents["MESSAGE_SAL_STATUS"] = "message-sal-status";
    return EConversationalAIAPIEvents;
}({});
var EModuleType = /*#__PURE__*/ function(EModuleType) {
    EModuleType["LLM"] = "llm";
    EModuleType["MLLM"] = "mllm";
    EModuleType["TTS"] = "tts";
    EModuleType["CONTEXT"] = "context";
    EModuleType["UNKNOWN"] = "unknown";
    return EModuleType;
}({});
class NotFoundError extends Error {
    constructor(message){
        super(message);
        this.name = 'NotFoundError';
    }
}
var ETurnStatus = /*#__PURE__*/ function(ETurnStatus) {
    ETurnStatus[ETurnStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    ETurnStatus[ETurnStatus["END"] = 1] = "END";
    ETurnStatus[ETurnStatus["INTERRUPTED"] = 2] = "INTERRUPTED";
    return ETurnStatus;
}({});
var EAgentState = /*#__PURE__*/ function(EAgentState) {
    EAgentState["IDLE"] = "idle";
    EAgentState["LISTENING"] = "listening";
    EAgentState["THINKING"] = "thinking";
    EAgentState["SPEAKING"] = "speaking";
    EAgentState["SILENT"] = "silent";
    return EAgentState;
}({});
var EChatMessagePriority = /*#__PURE__*/ function(EChatMessagePriority) {
    EChatMessagePriority["INTERRUPTED"] = "interrupted";
    EChatMessagePriority["APPEND"] = "append";
    EChatMessagePriority["IGNORE"] = "ignore";
    return EChatMessagePriority;
}({});
var EChatMessageType = /*#__PURE__*/ function(EChatMessageType) {
    EChatMessageType["TEXT"] = "text";
    EChatMessageType["IMAGE"] = "image";
    EChatMessageType["UNKNOWN"] = "unknown";
    return EChatMessageType;
}({});
var ELocalTranscriptStatus = /*#__PURE__*/ function(ELocalTranscriptStatus) {
    ELocalTranscriptStatus["PENDING"] = "pending";
    ELocalTranscriptStatus["SENT"] = "sent";
    ELocalTranscriptStatus["FAILED"] = "failed";
    return ELocalTranscriptStatus;
}({});
var EMessageSalStatus = /*#__PURE__*/ function(EMessageSalStatus) {
    EMessageSalStatus["VP_DISABLED"] = "VP_DISABLED";
    EMessageSalStatus["VP_UNREGISTER"] = "VP_UNREGISTER";
    EMessageSalStatus["VP_REGISTERING"] = "VP_REGISTERING";
    EMessageSalStatus["VP_REGISTER_SUCCESS"] = "VP_REGISTER_SUCCESS";
    EMessageSalStatus["VP_REGISTER_FAIL"] = "VP_REGISTER_FAIL";
    EMessageSalStatus["VP_REGISTER_DUPLICATE"] = "VP_REGISTER_DUPLICATE";
    return EMessageSalStatus;
}({});
}),
"[project]/lib/conversational-ai-api/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const factoryFormatLog =
//   (options: { tag: string }) => (message: unknown) => {
//     return `[${options.tag}] ${JSON.stringify(message)}`
//   }
__turbopack_context__.s([
    "ELoggerType",
    ()=>ELoggerType,
    "factoryFormatLog",
    ()=>factoryFormatLog
]);
const factoryFormatLog = (options)=>(...args)=>{
        return `[${options.tag}] ${args.map((arg)=>JSON.stringify(arg)).join(' ')}`;
    };
var ELoggerType = /*#__PURE__*/ function(ELoggerType) {
    ELoggerType["debug"] = "debug";
    ELoggerType["info"] = "info";
    ELoggerType["warn"] = "warn";
    ELoggerType["error"] = "error";
    return ELoggerType;
}({});
}),
"[project]/lib/conversational-ai-api/utils/event.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "EventHelper",
    ()=>EventHelper
]);
class EventHelper {
    _eventMap = new Map();
    once(evt, cb) {
        const wrapper = (...args)=>{
            this.off(evt, wrapper);
            cb(...args);
        };
        this.on(evt, wrapper);
        return this;
    }
    on(evt, cb) {
        const cbs = this._eventMap.get(evt) ?? [];
        cbs.push(cb);
        this._eventMap.set(evt, cbs);
        console.debug(`Subscribed to event: ${String(evt)}`);
        return this;
    }
    off(evt, cb) {
        const cbs = this._eventMap.get(evt);
        if (cbs) {
            this._eventMap.set(evt, cbs.filter((it)=>it !== cb));
            console.debug(`Unsubscribed from event: ${String(evt)}`);
        }
        return this;
    }
    removeAllEventListeners() {
        this._eventMap.clear();
        console.debug('Removed all event listeners');
    }
    emit(evt, ...args) {
        const cbs = this._eventMap.get(evt) ?? [];
        for (const cb of cbs){
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                cb && cb(...args);
            } catch (e) {
                // cb exception should not affect other callbacks
                const error = e;
                const details = error.stack || error.message;
                console.error(`Error handling event ${String(evt)}: ${details}`);
            }
        }
        console.debug({
            args
        }, `Emitted event: ${String(evt)}`);
        return this;
    }
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/conversational-ai-api/utils/sub-render.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CovSubRenderController",
    ()=>CovSubRenderController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$agora$2d$js$2f$report$2f$AgoraRTC_N$2d$report$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@agora-js/report/AgoraRTC_N-report.esm.mjs [app-ssr] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module 'lodash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/conversational-ai-api/type'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/conversational-ai-api/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/logger'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const TAG = 'CovSubRenderController';
const CONSOLE_LOG_PREFIX = `[${TAG}]`;
const SELF_USER_ID = 0;
const VERSION = '1.8.0';
const DEFAULT_INTERVAL = 200 // milliseconds
;
const DEFAULT_CHUNK_INTERVAL = 100 // milliseconds, 10 char/s
;
const formatLog = factoryFormatLog({
    tag: TAG
});
class CovSubRenderController {
    static NAME = TAG;
    static VERSION = VERSION;
    callMessagePrint;
    static self_uid = SELF_USER_ID;
    _mode = ETranscriptHelperMode.UNKNOWN;
    _queue = [];
    _interval;
    _intervalRef = null;
    _pts = 0 // current pts
    ;
    _lastPoppedQueueItem = null;
    _isRunning = false;
    _agentMessageState = null;
    _transcriptChunk = null;
    chatHistory = [];
    onChatHistoryUpdated = null;
    onAgentStateChanged;
    onAgentInterrupted = null;
    onDebugLog = null;
    onAgentMetrics = null;
    onAgentError = null;
    onMessageReceipt = null;
    onMessageError = null;
    onMessageSalStatus = null;
    constructor(options = {}){
        this.callMessagePrint = (type = ELoggerType.debug, ...args)=>{
            logger[type](formatLog(...args));
            this.onDebugLog?.(`[${type}] ${formatLog(...args)}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$agora$2d$js$2f$report$2f$AgoraRTC_N$2d$report$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logger"][type](...args);
        };
        this.callMessagePrint(ELoggerType.debug, `${CovSubRenderController.NAME} initialized, version: ${CovSubRenderController.VERSION}`);
        this._interval = options.interval ?? DEFAULT_INTERVAL;
        this.onChatHistoryUpdated = options.onChatHistoryUpdated ?? null;
        this.onAgentStateChanged = options.onAgentStateChanged ?? null;
        this.onAgentInterrupted = options.onAgentInterrupted ?? null;
        this.onDebugLog = options.onDebugLog ?? null;
        this.onAgentMetrics = options.onAgentMetrics ?? null;
        this.onAgentError = options.onAgentError ?? null;
        this.onMessageReceipt = options.onMessageReceipt ?? null;
        this.onMessageError = options.onMessageError ?? null;
        this.onMessageSalStatus = options.onMessageSalStatus ?? null;
    }
    _preSetupInterval() {
        if (!this._isRunning) {
            console.error(CONSOLE_LOG_PREFIX, 'Message service is not running');
            this.callMessagePrint(ELoggerType.error, '_preSetupInterval', 'Message service is not running');
            return;
        }
    }
    _setupIntervalForWords(options) {
        this._preSetupInterval();
        // if force: clean older and reset interval
        if (options?.isForce) {
            if (this._intervalRef) {
                clearInterval(this._intervalRef);
                this._intervalRef = null;
            }
            this._intervalRef = setInterval(this._handleQueue.bind(this), this._interval);
            return;
        }
        // else(if not forced): skip if interval is already set, otherwise set an interval
        if (this._intervalRef) {
            return;
        }
        this._intervalRef = setInterval(this._handleQueue.bind(this), this._interval);
    }
    _handleQueue() {
        const queueLength = this._queue.length;
        // empty queue, skip
        if (queueLength === 0) {
            // console.debug(CONSOLE_LOG_PREFIX, 'Queue is empty, skip')
            return;
        }
        const curPTS = this._pts;
        // only one item, update chatHistory with queueItem
        if (queueLength === 1) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'Queue has only one item, update chatHistory',
            //   JSON.stringify(this._queue[0])
            // )
            const queueItem = this._queue[0];
            this._handleTurnObj(queueItem, curPTS);
            this._mutateChatHistory();
            return;
        }
        if (queueLength > 2) {
            // console.error(
            //   CONSOLE_LOG_PREFIX,
            //   'Queue length is greater than 2, but it should not happen'
            // )
            this.callMessagePrint(ELoggerType.error, 'Queue length is greater than 2, but it should not happen');
        }
        // assume the queueLength is 2
        if (queueLength > 1) {
            this._queue = this._queue.sort((a, b)=>a.turn_id - b.turn_id);
            const nextItem = this._queue[this._queue.length - 1];
            const lastItem = this._queue[this._queue.length - 2];
            // check if nextItem is started
            const firstWordOfNextItem = nextItem.words[0];
            // if firstWordOfNextItem.start_ms > curPTS, work on lastItem
            if (firstWordOfNextItem.start_ms > curPTS) {
                this._handleTurnObj(lastItem, curPTS);
                this._mutateChatHistory();
                return;
            }
            // if firstWordOfNextItem.start_ms <= curPTS, work on nextItem, assume lastItem is interrupted(and drop it)
            const lastItemCorrespondingChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === lastItem.turn_id && item.stream_id === lastItem.stream_id);
            if (!lastItemCorrespondingChatHistoryItem) {
                this.callMessagePrint(ELoggerType.warn, 'No corresponding chatHistory item found', lastItem);
                return;
            }
            lastItemCorrespondingChatHistoryItem.status = ETurnStatus.INTERRUPTED;
            this._lastPoppedQueueItem = this._queue.shift();
            // handle nextItem
            this._handleTurnObj(nextItem, curPTS);
            this._mutateChatHistory();
            return;
        }
    }
    _handleTurnObj(queueItem, curPTS) {
        let correspondingChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === queueItem.turn_id && item.stream_id === queueItem.stream_id);
        this.callMessagePrint(ELoggerType.debug, 'handleTurnObj', queueItem, 'correspondingChatHistoryItem', correspondingChatHistoryItem);
        if (!correspondingChatHistoryItem) {
            this.callMessagePrint(ELoggerType.debug, 'handleTurnObj', 'No corresponding chatHistory item found', 'push to chatHistory');
            correspondingChatHistoryItem = {
                turn_id: queueItem.turn_id,
                uid: queueItem.uid,
                stream_id: queueItem.stream_id,
                _time: new Date().getTime(),
                text: '',
                status: queueItem.status,
                metadata: queueItem
            };
            this._appendChatHistory(correspondingChatHistoryItem);
        }
        // update correspondingChatHistoryItem._time for chatHistory auto-scroll
        correspondingChatHistoryItem._time = new Date().getTime();
        // update correspondingChatHistoryItem.metadata
        correspondingChatHistoryItem.metadata = queueItem;
        // update correspondingChatHistoryItem.status if queueItem.status is interrupted(from message.interrupt event)
        if (queueItem.status === ETurnStatus.INTERRUPTED) {
            correspondingChatHistoryItem.status = ETurnStatus.INTERRUPTED;
        }
        // pop all valid word items(those word.start_ms <= curPTS) in queueItem
        const validWords = [];
        const restWords = [];
        for (const word of queueItem.words){
            if (word.start_ms <= curPTS) {
                validWords.push(word);
            } else {
                restWords.push(word);
            }
        }
        // check if restWords is empty
        const isRestWordsEmpty = restWords.length === 0;
        // check if validWords last word is final
        const isLastWordFinal = validWords[validWords.length - 1]?.word_status !== ETurnStatus.IN_PROGRESS;
        // if restWords is empty and validWords last word is final, this turn is ended
        if (isRestWordsEmpty && isLastWordFinal) {
            // update chatHistory with queueItem
            correspondingChatHistoryItem.text = queueItem.text;
            correspondingChatHistoryItem.status = queueItem.status;
            // pop queueItem
            this._lastPoppedQueueItem = this._queue.shift();
            return;
        }
        // if restWords is not empty, update correspondingChatHistoryItem.text
        const validWordsText = validWords.filter((word)=>word.start_ms <= this._pts).map((word)=>word.word).join('');
        correspondingChatHistoryItem.text = validWordsText;
        // if validWords last word is interrupted, this turn is ended
        const isLastWordInterrupted = validWords[validWords.length - 1]?.word_status === ETurnStatus.INTERRUPTED;
        if (isLastWordInterrupted) {
            // pop queueItem
            this._lastPoppedQueueItem = this._queue.shift();
            return;
        }
        return;
    }
    _mutateChatHistory() {
        // console.debug(CONSOLE_LOG_PREFIX, 'Mutate chatHistory', this.chatHistory)
        this.callMessagePrint(ELoggerType.debug, '>>> onChatHistoryUpdated', `pts: ${this._pts}, chatHistory length: ${this.chatHistory.length}`, this.chatHistory.map((item)=>`${item.uid}:${item.text}[status: ${item.status}]`).join('\n'));
        this.onChatHistoryUpdated?.(this.chatHistory);
    }
    _appendChatHistory(item) {
        // if item.turn_id is 0, append to the front of chatHistory(greeting message)
        if (item.turn_id === 0) {
            this.chatHistory = [
                item,
                ...this.chatHistory
            ];
        } else {
            this.chatHistory.push(item);
        }
    }
    _interruptQueue(options) {
        const turn_id = options.turn_id;
        const start_ms = options.start_ms;
        const correspondingQueueItem = this._queue.find((item)=>item.turn_id === turn_id);
        this.callMessagePrint(ELoggerType.debug, 'interruptQueue', `turn_id: ${turn_id}, start_ms: ${start_ms}, correspondingQueueItem: ${correspondingQueueItem}`);
        if (!correspondingQueueItem) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'No corresponding queue item found',
            //   options
            // )
            return;
        }
        // if correspondingQueueItem exists, update its status to interrupted
        correspondingQueueItem.status = ETurnStatus.INTERRUPTED;
        // split words into two parts, set left one word and all right words to interrupted
        const leftWords = correspondingQueueItem.words.filter((word)=>word.start_ms <= start_ms);
        const rightWords = correspondingQueueItem.words.filter((word)=>word.start_ms > start_ms);
        // check if leftWords is empty
        const isLeftWordsEmpty = leftWords.length === 0;
        if (isLeftWordsEmpty) {
            // if leftWords is empty, set all words to interrupted
            correspondingQueueItem.words.forEach((word)=>{
                word.word_status = ETurnStatus.INTERRUPTED;
            });
        } else {
            // if leftWords is not empty, set leftWords[leftWords.length - 1].word_status to interrupted
            leftWords[leftWords.length - 1].word_status = ETurnStatus.INTERRUPTED;
            // workaround: pts < interrupt.start_ms, and interrupt will be ignored
            if (leftWords?.[leftWords.length - 2]) {
                leftWords[leftWords.length - 2].word_status = ETurnStatus.INTERRUPTED;
            }
            // and all right words to interrupted
            rightWords.forEach((word)=>{
                word.word_status = ETurnStatus.INTERRUPTED;
            });
            // update words
            correspondingQueueItem.words = [
                ...leftWords,
                ...rightWords
            ];
        }
    }
    _pushToQueue(data) {
        const targetQueueItem = this._queue.find((item)=>item.turn_id === data.turn_id);
        const latestTurnId = this._queue.reduce((max, item)=>{
            return Math.max(max, item.turn_id);
        }, 0);
        // if not found, push to queue or drop if turn_id is less than latestTurnId
        if (!targetQueueItem) {
            // drop if turn_id is less than latestTurnId
            if (data.turn_id < latestTurnId) {
                this.callMessagePrint(ELoggerType.debug, `[Word Mode]`, `[${data.uid}]`, 'Drop message with turn_id less than latestTurnId', `turn_id: ${data.turn_id}, latest turn_id: ${latestTurnId}`, data);
                return;
            }
            const newQueueItem = {
                turn_id: data.turn_id,
                text: data.text,
                words: this.sortWordsWithStatus(data.words, data.status),
                status: data.status,
                stream_id: data.stream_id,
                uid: data.uid
            };
            this.callMessagePrint(ELoggerType.debug, `[Word Mode]`, `[${data.uid}]`, 'push to queue', newQueueItem);
            // push to queue
            this._queue.push(newQueueItem);
            return;
        }
        // if found, update text, words(sorted with status) and turn_status
        this.callMessagePrint(ELoggerType.debug, `[Word Mode]`, `[${data.uid}]`, 'update queue item', targetQueueItem, data);
        targetQueueItem.text = data.text;
        targetQueueItem.words = this.sortWordsWithStatus([
            ...targetQueueItem.words,
            ...data.words
        ], data.status);
        // if targetQueueItem.status is end, and data.status is in_progress, skip status update (unexpected case)
        if (targetQueueItem.status !== ETurnStatus.IN_PROGRESS && data.status === ETurnStatus.IN_PROGRESS) {
            return;
        }
        targetQueueItem.status = data.status;
    }
    _teardownInterval() {
        if (this._intervalRef) {
            clearInterval(this._intervalRef);
            this._intervalRef = null;
        }
    }
    sortWordsWithStatus(words, turn_status) {
        if (words.length === 0) {
            return words;
        }
        const sortedWords = words.map((word)=>({
                ...word,
                word_status: ETurnStatus.IN_PROGRESS
            })).sort((a, b)=>a.start_ms - b.start_ms).reduce((acc, curr)=>{
            // Only add if start_ms is unique
            if (!acc.find((word)=>word.start_ms === curr.start_ms)) {
                acc.push(curr);
            }
            return acc;
        }, []);
        const isMessageFinal = turn_status !== ETurnStatus.IN_PROGRESS;
        if (isMessageFinal) {
            sortedWords[sortedWords.length - 1].word_status = turn_status;
        }
        return sortedWords;
    }
    handleTextMessage(uid, message) {
        const turn_id = message.turn_id;
        const text = message.text || '';
        const stream_id = message.stream_id;
        const turn_status = ETurnStatus.END;
        const targetChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === turn_id && item.stream_id === stream_id);
        // if not found, push to chatHistory
        if (!targetChatHistoryItem) {
            this.callMessagePrint(ELoggerType.debug, `[Text Mode]`, `[${uid}]`, 'new item', message);
            this._appendChatHistory({
                turn_id,
                uid: message.stream_id ? `${CovSubRenderController.self_uid}` : `${uid}`,
                stream_id,
                _time: new Date().getTime(),
                text,
                status: turn_status,
                metadata: message
            });
        } else {
            // if found, update text and status
            targetChatHistoryItem.text = text;
            targetChatHistoryItem.status = turn_status;
            targetChatHistoryItem.metadata = message;
            targetChatHistoryItem._time = new Date().getTime();
            this.callMessagePrint(ELoggerType.debug, `[Text Mode]`, `[${uid}]`, targetChatHistoryItem);
        }
        this._mutateChatHistory();
    }
    _handleTranscriptChunk() {
        if (!this._transcriptChunk) {
            this.callMessagePrint(ELoggerType.warn, `[${ETranscriptHelperMode.CHUNK} Mode]`, '_handleTranscriptChunk', 'missing _transcriptChunk');
            return;
        }
        const currentIdx = this._transcriptChunk.index;
        const currentTranscript = this._transcriptChunk.data;
        const currentMaxLength = currentTranscript.text.length;
        const uid = this._transcriptChunk.uid;
        const nextIdx = currentIdx + 1 >= currentMaxLength ? currentMaxLength : currentIdx + 1;
        this._transcriptChunk.index = nextIdx;
        const validTranscriptString = currentTranscript.text.substring(0, nextIdx);
        const isValidTranscriptStringEnded = validTranscriptString.length > 0 && currentTranscript.turn_status !== ETurnStatus.IN_PROGRESS && validTranscriptString.length === currentTranscript.text.length;
        const targetChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === currentTranscript.turn_id && item.stream_id === currentTranscript.stream_id);
        // if not found, push to chatHistory
        if (!targetChatHistoryItem) {
            this.callMessagePrint(ELoggerType.debug, `[${ETranscriptHelperMode.CHUNK} Mode]`, `[${uid}]`, 'new transcriptChunk', this._transcriptChunk);
            this._appendChatHistory({
                turn_id: currentTranscript.turn_id,
                uid: currentTranscript.stream_id ? `${CovSubRenderController.self_uid}` : `${uid}`,
                stream_id: currentTranscript.stream_id,
                _time: Date.now(),
                text: validTranscriptString,
                status: currentTranscript.turn_status,
                metadata: currentTranscript
            });
        } else {
            // if found, update text and status
            targetChatHistoryItem.text = validTranscriptString;
            targetChatHistoryItem.status = isValidTranscriptStringEnded ? currentTranscript.turn_status : targetChatHistoryItem.status;
            targetChatHistoryItem.metadata = currentTranscript;
            targetChatHistoryItem._time = Date.now();
            this.callMessagePrint(ELoggerType.debug, `[${ETranscriptHelperMode.CHUNK} Mode]`, `[${uid}]`, 'update transcriptChunk', targetChatHistoryItem);
        }
        this._mutateChatHistory();
    }
    handleChunkTextMessage(uid, message) {
        this.callMessagePrint(ELoggerType.debug, `[${ETranscriptHelperMode.CHUNK} Mode]`, `[${uid}]`, 'new item', message);
        // 0. check turn_id, teardown interval if new turn
        if (this._transcriptChunk && this._transcriptChunk.data.turn_id < message.turn_id) {
            this._teardownInterval();
            // set chathistory items turn_status to ended
            const lastChatHistory = this.chatHistory.find((item)=>item.turn_id === this._transcriptChunk?.data.turn_id && item.uid === uid);
            if (lastChatHistory) {
                lastChatHistory.status = ETurnStatus.END;
            }
            // set _transcriptChunk to null
            this._transcriptChunk = null;
        }
        // 1. update _transcriptChunk
        this._transcriptChunk = {
            index: this._transcriptChunk?.index ?? 0,
            data: message,
            uid
        };
        // 2. check if interval is set, if not, set it
        if (!this._intervalRef) {
            this._intervalRef = setInterval(this._handleTranscriptChunk.bind(this), this._interval);
        }
    }
    handleMessageInterrupt(uid, message) {
        this.callMessagePrint(ELoggerType.debug, '<<< [onInterrupted]', `pts: ${this._pts}, uid: ${uid}`, message);
        const turn_id = message.turn_id;
        // workaround: pts < interrupt.start_ms, and interrupt will be ignored
        const start_ms = _.min([
            message.start_ms,
            this._pts
        ]) || message.start_ms;
        this._interruptQueue({
            turn_id,
            start_ms
        });
        // interrupt chunk
        if (this._transcriptChunk) {
            this._teardownInterval();
            // set chathistory items turn_status to ended
            const lastChatHistory = this.chatHistory.find((item)=>item.turn_id === this._transcriptChunk?.data.turn_id && item.uid === uid);
            if (lastChatHistory) {
                lastChatHistory.status = ETurnStatus.INTERRUPTED;
            }
            // set _transcriptChunk to null
            this._transcriptChunk = null;
        }
        this._mutateChatHistory();
        this.onAgentInterrupted?.(`${uid}`, {
            turnID: turn_id,
            timestamp: start_ms
        });
    }
    handleMessageMetrics(uid, message) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   '<<< [onMetrics]',
        //   `pts: ${this._pts}, uid: ${uid}`,
        //   message
        // )
        const latency_ms = message.latency_ms;
        const messageModule = message.module;
        const metric_name = message.metric_name;
        if (!Object.values(EModuleType).includes(messageModule)) {
            this.callMessagePrint(ELoggerType.warn, 'Unknown metric module:', message);
            return;
        }
        this.onAgentMetrics?.(`${uid}`, {
            type: messageModule,
            name: metric_name,
            value: latency_ms,
            timestamp: message.send_ts
        });
    }
    handleMessageSalStatus(uid, message) {
        this.callMessagePrint(ELoggerType.debug, 'handleMessageSalStatus', message);
        this.onMessageSalStatus?.(`${uid}`, message);
    }
    handleMessageError(uid, message) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   '<<< [onError]',
        //   `pts: ${this._pts}, uid: ${uid}`,
        //   message
        // )
        const errorCode = message.code || -1;
        const errorMessage = message.message;
        const messageModule = message.module;
        if (!Object.values(EModuleType).includes(messageModule)) {
            this.callMessagePrint(ELoggerType.warn, 'Unknown error module:', message);
            return;
        }
        if (messageModule === EModuleType.CONTEXT) {
            try {
                const messageData = JSON.parse(errorMessage);
                const errorPayload = {
                    type: messageData?.module === 'picture' ? EChatMessageType.IMAGE : EChatMessageType.UNKNOWN,
                    code: errorCode,
                    message: errorMessage,
                    timestamp: message?.send_ts || Date.now()
                };
                this.onMessageError?.(`${uid}`, errorPayload);
            } catch (error) {
                this.callMessagePrint(ELoggerType.error, 'Failed to parse context error message', error, message);
            }
        }
        this.onAgentError?.(`${uid}`, {
            type: messageModule,
            code: errorCode,
            message: errorMessage,
            timestamp: message?.send_ts || Date.now()
        });
    }
    // current only used for image messages
    handleMessageInfo(uid, message) {
        try {
            const messageStr = message?.message || '';
            const messageObj = JSON.parse(messageStr);
            const moduleType = message?.module;
            const turnId = message?.turn_id;
            if (!messageStr || !messageObj || !moduleType || !turnId) {
                this.callMessagePrint(ELoggerType.error, 'handleMessageInfo', 'Invalid message object', message);
                return;
            }
            const messageType = message?.resource_type === 'picture' ? EChatMessageType.IMAGE : EChatMessageType.UNKNOWN;
            this.onMessageReceipt?.(uid, {
                moduleType,
                messageType,
                message: messageStr,
                turnId
            });
        } catch (error) {
            this.callMessagePrint(ELoggerType.debug, 'handleMessageInfo', 'Failed to parse message string from image info message', error, message);
        }
    }
    handleAgentStatus(metadata) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   'handleAgentStatus',
        //   `pts: ${this._pts}, uid: ${metadata.publisher}`,
        //   `prev-state: ${this._agentMessageState}, state: ${metadata.stateChanged.state}, turn_id: ${metadata.stateChanged.turn_id}, timestamp: ${metadata.stateChanged.timestamp}`
        // )
        const message = metadata.stateChanged;
        const currentTurnId = _.toNumber(message.turn_id) || 0;
        if (_.toNumber(this._agentMessageState?.turn_id || 0) > currentTurnId) {
            this.callMessagePrint(ELoggerType.debug, 'handleAgentStatus', 'ignore older message(turn_id)');
            return;
        }
        // check if message is older(by timestamp) than previous one, if so, skip
        const currentMsgTs = metadata.timestamp;
        if (_.toNumber(this._agentMessageState?.timestamp || 0) >= currentMsgTs) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'handleAgentStatus',
            //   'ignore older message(timestamp)',
            //   message?.timestamp,
            //   currentMsgTs
            // )
            this.callMessagePrint(ELoggerType.debug, 'handleAgentStatus', 'ignore older message(timestamp)');
            return;
        }
        this.callMessagePrint(ELoggerType.debug, '>>> handleAgentStatus', `pts: ${this._pts}, uid: ${metadata.publisher}`, `prev-state: ${this._agentMessageState?.state}, prev-turn_id: ${this._agentMessageState?.turn_id}, prev-timestamp: ${this._agentMessageState?.timestamp}`, `current-state: ${metadata.stateChanged.state}, turn_id: ${metadata.stateChanged.turn_id}, timestamp: ${metadata.timestamp}`);
        // set current message state
        this._agentMessageState = {
            state: message.state,
            turn_id: message.turn_id,
            timestamp: currentMsgTs
        };
        this.onAgentStateChanged?.(metadata.publisher, {
            state: message.state,
            turnID: _.toNumber(message.turn_id),
            timestamp: currentMsgTs,
            reason: ''
        });
    }
    handleWordAgentMessage(uid, message) {
        // drop message if turn_status is undefined
        if (typeof message.turn_status === 'undefined') {
            this.callMessagePrint(ELoggerType.debug, `[Word Mode]`, `[${uid}]`, 'Drop message with undefined turn_status', message.turn_id);
            return;
        }
        const turn_id = message.turn_id;
        const text = message.text || '';
        const words = message.words || [];
        const stream_id = message.stream_id;
        const lastPoppedQueueItemTurnId = this._lastPoppedQueueItem?.turn_id;
        // drop message if turn_id is less than last popped queue item
        // except for the first turn(greeting message, turn_id is 0)
        if (lastPoppedQueueItemTurnId && turn_id !== 0 && turn_id <= lastPoppedQueueItemTurnId) {
            this.callMessagePrint(ELoggerType.debug, `[Word Mode]`, `[${uid}]`, 'Drop message with turn_id less than last popped queue item', `turn_id: ${turn_id}, last popped queue item turn_id: ${lastPoppedQueueItemTurnId}`);
            return;
        }
        this._pushToQueue({
            uid: message.stream_id ? `${CovSubRenderController.self_uid}` : `${uid}`,
            turn_id,
            words,
            text,
            status: message.turn_status,
            stream_id
        });
    }
    setMode(mode) {
        if (this._mode !== ETranscriptHelperMode.UNKNOWN) {
            this.callMessagePrint(ELoggerType.warn, `Mode should only be set once, but it is set[${mode}] again`, 'current mode:', this._mode);
            return;
        }
        if (mode === ETranscriptHelperMode.UNKNOWN) {
            this.callMessagePrint(ELoggerType.warn, 'Unknown mode should not be set');
            return;
        }
        if (mode === ETranscriptHelperMode.CHUNK) {
            // set interval to chunk interval
            this._interval = DEFAULT_CHUNK_INTERVAL;
        } else {
            // set interval to default interval
            this._interval = DEFAULT_INTERVAL;
        }
        this.callMessagePrint(ELoggerType.debug, `setMode`, ETranscriptHelperMode.TEXT);
        this._mode = mode;
    }
    handleMessage(message, options) {
        const messageObject = message?.object;
        if (!Object.values(EMessageType).includes(messageObject)) {
            this.callMessagePrint(ELoggerType.info, `<<< [unknown message]`, options, message);
            return;
        }
        const isAgentMessage = message.object === EMessageType.AGENT_TRANSCRIPTION;
        const isUserMessage = message.object === EMessageType.USER_TRANSCRIPTION;
        const isMessageInterrupt = message.object === EMessageType.MSG_INTERRUPTED;
        const isMessageMetrics = message.object === EMessageType.MSG_METRICS;
        const isMessageError = message.object === EMessageType.MSG_ERROR;
        // const isMessageState = message.object === EMessageType.MSG_STATE
        const isMessageInfo = message.object === EMessageType.MESSAGE_INFO;
        const isMessageSalStatus = message.object === EMessageType.MESSAGE_SAL_STATUS;
        // set mode (only once)
        if (isAgentMessage && this._mode === ETranscriptHelperMode.UNKNOWN) {
            // 2025-09-28 check if words array is empty or not undefined, and set mode
            if (!message.words || Array.isArray(message.words) && message.words.length === 0) {
                this.setMode(ETranscriptHelperMode.TEXT);
            } else {
                this._setupIntervalForWords({
                    isForce: true
                });
                this.setMode(ETranscriptHelperMode.WORD);
            }
        }
        // handle Agent Message
        if (isAgentMessage && this._mode === ETranscriptHelperMode.WORD) {
            this._setupIntervalForWords({
                isForce: false
            });
            this.handleWordAgentMessage(options.publisher, message);
            return;
        }
        if (isAgentMessage && this._mode === ETranscriptHelperMode.TEXT) {
            this.handleTextMessage(options.publisher, message);
            return;
        }
        if (isAgentMessage && this._mode === ETranscriptHelperMode.CHUNK) {
            this.handleChunkTextMessage(options.publisher, message);
            return;
        }
        // handle User Message
        if (isUserMessage) {
            this.handleTextMessage(options.publisher, message);
            return;
        }
        // handle Message Interrupt
        if (isMessageInterrupt) {
            this.handleMessageInterrupt(options.publisher, message);
            return;
        }
        // if (isMessageState) {
        //   this.handleAgentStatus(message as unknown as IMessageState)
        //   return
        // }
        if (isMessageInfo) {
            this.handleMessageInfo(options.publisher, message);
            return;
        }
        if (isMessageMetrics) {
            this.handleMessageMetrics(options.publisher, message);
            return;
        }
        if (isMessageError) {
            this.handleMessageError(options.publisher, message);
            return;
        }
        if (isMessageSalStatus) {
            this.handleMessageSalStatus(options.publisher, message);
            return;
        }
    }
    run() {
        this._isRunning = true;
    }
    setPts(pts) {
        if (this._pts < pts && pts !== 0) {
            this._pts = pts;
        }
    }
    cleanup() {
        // console.debug(CONSOLE_LOG_PREFIX, 'Cleanup message service')
        this.callMessagePrint(ELoggerType.debug, 'cleanup');
        this._isRunning = false;
        this._teardownInterval();
        // cleanup queue
        this._queue = [];
        this._lastPoppedQueueItem = null;
        this._pts = 0;
        // cleanup chatHistory
        this.chatHistory = [];
        // cleanup mode
        this._mode = ETranscriptHelperMode.UNKNOWN;
        this._agentMessageState = null;
        this._transcriptChunk = null;
    }
}
}),
"[project]/lib/conversational-ai-api/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationalAIAPI",
    ()=>ConversationalAIAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/type.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$sub$2d$render$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/sub-render.ts [app-ssr] (ecmascript)");
;
;
;
;
// Simple logger replacement
const logger = {
    debug: (...args)=>console.debug(...args),
    info: (...args)=>console.info(...args),
    warn: (...args)=>console.warn(...args),
    error: (...args)=>console.error(...args)
};
// Simple ID generator
const genTranceID = ()=>Math.random().toString(36).substring(2, 15);
const TAG = 'ConversationalAIAPI';
// const CONSOLE_LOG_PREFIX = `[${TAG}]`
const VERSION = '1.8.0';
const formatLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factoryFormatLog"])({
    tag: TAG
});
class ConversationalAIAPI extends __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventHelper"] {
    static NAME = TAG;
    static VERSION = VERSION;
    static _instance = null;
    callMessagePrint;
    rtcEngine = null;
    rtmEngine = null;
    renderMode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
    channel = null;
    covSubRenderController;
    enableLog = false;
    constructor(){
        super();
        this.callMessagePrint = (type = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, ...args)=>{
            if (!this.enableLog) {
                return;
            }
            logger[type](formatLog(...args));
            this.onDebugLog?.(`[${type}] ${formatLog(...args)}`);
        };
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `${ConversationalAIAPI.NAME} initialized, version: ${ConversationalAIAPI.VERSION}`);
        this.covSubRenderController = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$sub$2d$render$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CovSubRenderController"]({
            onChatHistoryUpdated: this.onChatHistoryUpdated.bind(this),
            onAgentStateChanged: this.onAgentStateChanged.bind(this),
            onAgentInterrupted: this.onAgentInterrupted.bind(this),
            onDebugLog: this.onDebugLog.bind(this),
            onAgentMetrics: this.onAgentMetrics.bind(this),
            onAgentError: this.onAgentError.bind(this),
            onMessageReceipt: this.onMessageReceiptUpdated.bind(this),
            onMessageError: this.onMessageError.bind(this),
            onMessageSalStatus: this.onMessageSalStatus.bind(this)
        });
    }
    /**
   * Gets the singleton instance of ConversationalAIAPI.
   *
   * Retrieves the singleton instance of the ConversationalAIAPI class. This method
   * ensures that only one instance of ConversationalAIAPI exists throughout the
   * application lifecycle.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if instance is not initialized
   *
   * @returns The singleton instance of ConversationalAIAPI
   * @throws {@link NotFoundError} When ConversationalAIAPI is not initialized
   * @since 1.6.0
   */ static getInstance() {
        if (!ConversationalAIAPI._instance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"]('ConversationalAIAPI is not initialized');
        }
        return ConversationalAIAPI._instance;
    }
    getCfg() {
        if (!this.rtcEngine || !this.rtmEngine) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"]('ConversationalAIAPI is not initialized');
        }
        return {
            rtcEngine: this.rtcEngine,
            rtmEngine: this.rtmEngine,
            renderMode: this.renderMode,
            channel: this.channel,
            enableLog: this.enableLog
        };
    }
    /**
   * Initializes the ConversationalAIAPI singleton instance.
   *
   * This method sets up the RTC and RTM engines, render mode, and logging options.
   * It must be called before any other methods of ConversationalAIAPI can be used.
   *
   * @remarks
   * - Only one instance can be initialized at a time
   * - Throws error if already initialized
   *
   * @param cfg - Configuration object for initializing the API
   * @returns The initialized instance of ConversationalAIAPI
   * @throws {@link Error} If ConversationalAIAPI is already initialized
   * @since 1.6.0
   */ static init(cfg) {
        if (!ConversationalAIAPI._instance) {
            ConversationalAIAPI._instance = new ConversationalAIAPI();
        }
        ConversationalAIAPI._instance.rtcEngine = cfg.rtcEngine;
        ConversationalAIAPI._instance.rtmEngine = cfg.rtmEngine;
        ConversationalAIAPI._instance.renderMode = cfg.renderMode ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
        ConversationalAIAPI._instance.enableLog = cfg.enableLog ?? false;
        return ConversationalAIAPI._instance;
    }
    /**
   * Subscribes to a message channel for real-time updates.
   *
   * This method binds the necessary RTC and RTM events, sets the channel,
   * and starts the CovSubRenderController to handle incoming messages.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if not initialized
   *
   * @param channel - The channel to subscribe to for messages
   * @since 1.6.0
   */ subscribeMessage(channel) {
        this.bindRtcEvents();
        this.bindRtmEvents();
        this.channel = channel;
        this.covSubRenderController.setMode(this.renderMode);
        this.covSubRenderController.run();
    }
    /**
   * Unsubscribes from the message channel and cleans up resources.
   *
   * This method unbinds the RTC and RTM events, clears the channel,
   * and cleans up the CovSubRenderController.
   *
   * @remarks
   * - Must call {@link subscribeMessage} before using this method
   * - Throws error if not initialized
   *
   * @since 1.6.0
   */ unsubscribe() {
        this.unbindRtcEvents();
        this.unbindRtmEvents();
        this.channel = null;
        this.covSubRenderController.cleanup();
    }
    /**
   * Destroys the ConversationalAIAPI instance and cleans up resources.
   *
   * This method unbinds all RTC and RTM events, clears the channel,
   * and cleans up the CovSubRenderController.
   *
   * @remarks
   * - Must call {@link unsubscribe} before using this method
   * - Throws error if not initialized
   *
   * @since 1.6.0
   */ destroy() {
        const instance = ConversationalAIAPI.getInstance();
        if (instance) {
            instance?.rtcEngine?.removeAllListeners();
            instance.rtcEngine = null;
            instance?.rtmEngine?.removeAllListeners();
            instance.rtmEngine = null;
            instance.renderMode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
            instance.channel = null;
            instance.removeAllEventListeners();
            ConversationalAIAPI._instance = null;
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `${ConversationalAIAPI.NAME} destroyed`);
    }
    /**
   * Sends a chat message to the conversational AI agent.
   *
   * @param agentUserId - The unique identifier of the agent user
   * @param message - The chat message to send, can be either text or image type
   * @returns A promise that resolves with the result of sending the message
   * @throws {Error} When an unsupported chat message type is provided
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * // Send a text message
   * const textMessage: IChatMessageText = {
   *   messageType: EChatMessageType.TEXT,
   *   priority: EChatMessagePriority.HIGH,
   *   responseInterruptable: true,
   *   text: "Hello, how are you?"
   * };
   * await api.chat("user123", textMessage);
   *
   * // Send an image message
   * const imageMessage: IChatMessageImage = {
   *   messageType: EChatMessageType.IMAGE,
   *   uuid: "msg-456",
   *   url: "https://example.com/image.jpg"
   * };
   * await api.chat("user123", imageMessage);
   * ```
   */ async chat(agentUserId, message) {
        switch(message.messageType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EChatMessageType"].TEXT:
                return this.sendText(agentUserId, message);
            case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EChatMessageType"].IMAGE:
                return this.sendImage(agentUserId, message);
            default:
                throw new Error('Unsupported chat message type');
        }
    }
    /**
   * Sends a text message to the specified agent user through RTM engine.
   *
   * @param agentUserId - The unique identifier of the agent user to send the message to
   * @param message - The chat message object containing text content and optional settings
   * @param message.priority - Optional priority level for the message (defaults to INTERRUPTED)
   * @param message.responseInterruptable - Optional flag indicating if the response can be interrupted (defaults to true)
   * @param message.text - The actual text content of the message
   *
   * @returns Promise that resolves when the message is successfully sent
   *
   * @throws {Error} Throws an error with message "failed to send chat message" if the RTM publish operation fails
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * await api.sendText('user123', {
   *   text: 'Hello, how can I help you?',
   *   priority: EChatMessagePriority.HIGH,
   *   responseInterruptable: false
   * });
   * ```
   */ async sendText(agentUserId, message) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat] ${agentUserId}`, message);
        const { rtmEngine } = this.getCfg();
        const payload = {
            priority: message.priority ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EChatMessagePriority"].INTERRUPTED,
            interruptable: message.responseInterruptable ?? true,
            message: message.text ?? ''
        };
        try {
            const payloadStr = JSON.stringify(payload);
            const options = {
                channelType: 'USER',
                customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMessageType"].USER_TRANSCRIPTION
            };
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `msg: [traceID: ${traceId}] rtm publish`, payloadStr);
            const result = await rtmEngine.publish(agentUserId, payloadStr, options);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat]`, 'sucessfully sent chat message', result);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [chat]`, 'failed to send chat message', error);
            throw new Error('failed to send chat message');
        }
    }
    /**
   * Sends an image message to a specific agent user through RTM (Real-Time Messaging).
   *
   * @param agentUserId - The unique identifier of the agent user to send the image to
   * @param message - The image message object containing UUID and either URL or base64 data
   * @param message.uuid - Unique identifier for the message
   * @param message.url - Optional URL of the image to send
   * @param message.base64 - Optional base64 encoded image data
   *
   * @throws {Error} Throws an error with message "failed to send chat message" if the RTM publish operation fails
   *
   * @returns Promise that resolves when the image message is successfully sent
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * await sendImage('user123', {
   *   uuid: 'msg-456',
   *   url: 'https://example.com/image.jpg'
   * });
   * ```
   */ async sendImage(agentUserId, message) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat] ${agentUserId}`, message);
        const { rtmEngine } = this.getCfg();
        const payload = {
            uuid: message.uuid,
            image_url: message?.url || '',
            image_base64: message?.base64 || ''
        };
        try {
            const payloadStr = JSON.stringify(payload);
            const options = {
                channelType: 'USER',
                customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMessageType"].IMAGE_UPLOAD
            };
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `msg: [traceID: ${traceId}] rtm publish`, payloadStr);
            const result = await rtmEngine.publish(agentUserId, payloadStr, options);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat]`, 'sucessfully sent chat message', result);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [chat]`, 'failed to send chat message', error);
            throw new Error('failed to send chat message');
        }
    }
    /**
   * Sends an interrupt message to the specified agent user.
   *
   * This method publishes an interrupt message to the RTM channel of the specified agent user.
   * It is used to signal that the current interaction should be interrupted.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if not initialized or if sending fails
   *
   * @param agentUserId - The user ID of the agent to interrupt
   * @since 1.6.0
   */ async interrupt(agentUserId) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [interrupt]`, agentUserId);
        const { rtmEngine } = this.getCfg();
        const options = {
            channelType: 'USER',
            customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMessageType"].MSG_INTERRUPTED
        };
        const messageStr = JSON.stringify({
            customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMessageType"].MSG_INTERRUPTED
        });
        try {
            const result = await rtmEngine.publish(agentUserId, messageStr, options);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [interrupt]`, 'sucessfully sent interrupt message', result);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [interrupt]`, 'failed to send interrupt message', error);
            throw new Error('failed to send interrupt message');
        }
    }
    onChatHistoryUpdated(chatHistory) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].TRANSCRIPT_UPDATED}`, chatHistory);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].TRANSCRIPT_UPDATED, chatHistory);
    }
    onAgentStateChanged(agentUserId, event) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_STATE_CHANGED}`, agentUserId, event);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_STATE_CHANGED, agentUserId, event);
    }
    onAgentInterrupted(agentUserId, event) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_INTERRUPTED}`, agentUserId, event);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_INTERRUPTED, agentUserId, event);
    }
    onDebugLog(message) {
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].DEBUG_LOG, message);
    }
    onAgentMetrics(agentUserId, metrics) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_METRICS}`, agentUserId, metrics);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_METRICS, agentUserId, metrics);
    }
    onAgentError(agentUserId, error) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_ERROR}`, agentUserId, error);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_ERROR, agentUserId, error);
    }
    onMessageReceiptUpdated(agentUserId, messageReceipt) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_RECEIPT_UPDATED}`, agentUserId, messageReceipt);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_RECEIPT_UPDATED, agentUserId, messageReceipt);
    }
    onMessageError(agentUserId, error) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_ERROR}`, agentUserId, error);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_ERROR, agentUserId, error);
    }
    onMessageSalStatus(agentUserId, message) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_SAL_STATUS}`, agentUserId, message);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_SAL_STATUS, agentUserId, message);
    }
    bindRtcEvents() {
        // this.getCfg().rtcEngine.on(
        //   ERTCEvents.AUDIO_METADATA,
        //   this._handleRtcAudioMetadata.bind(this)
        // )
        this.getCfg().rtcEngine.on(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS, this._handleRtcAudioPTS.bind(this));
    }
    unbindRtcEvents() {
        // this.getCfg().rtcEngine.off(
        //   ERTCEvents.AUDIO_METADATA,
        //   this._handleRtcAudioMetadata.bind(this)
        // )
        this.getCfg().rtcEngine.off(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS, this._handleRtcAudioPTS.bind(this));
    }
    bindRtmEvents() {
        // - message
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE, this._handleRtmMessage.bind(this));
        // - presence
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE, this._handleRtmPresence.bind(this));
        // - status
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS, this._handleRtmStatus.bind(this));
    }
    unbindRtmEvents() {
        // - message
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE, this._handleRtmMessage.bind(this));
        // - presence
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE, this._handleRtmPresence.bind(this));
        // - status
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS, this._handleRtmStatus.bind(this));
    }
    // private _handleRtcAudioMetadata(metadata: Uint8Array) {
    //   try {
    //     const pts64 = Number(new DataView(metadata.buffer).getBigUint64(0, true))
    //     this.callMessagePrint(
    //       ELoggerType.debug,
    //       `<<< ${ERTCEvents.AUDIO_METADATA}`,
    //       pts64
    //     )
    //     this.covSubRenderController.setPts(pts64)
    //   } catch (error) {
    //     this.callMessagePrint(
    //       ELoggerType.error,
    //       `<<< ${ERTCEvents.AUDIO_METADATA}`,
    //       metadata,
    //       error
    //     )
    //   }
    // }
    _handleRtcAudioPTS(pts) {
        try {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `<<< ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS}`, pts);
            this.covSubRenderController.setPts(pts);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `<<< ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS}`, pts, error);
        }
    }
    _handleRtmMessage(message) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, `Publisher: ${message.publisher}, type: ${message.messageType}`);
        // Handle the message
        try {
            const messageData = message.message;
            // if string, parse it
            if (typeof messageData === 'string') {
                const parsedMessage = JSON.parse(messageData);
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, parsedMessage);
                this.covSubRenderController.handleMessage(parsedMessage, {
                    publisher: message.publisher
                });
                return;
            }
            // if Uint8Array, convert to string
            if (messageData instanceof Uint8Array) {
                const decoder = new TextDecoder('utf-8');
                const messageString = decoder.decode(messageData);
                const parsedMessage = JSON.parse(messageString);
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, parsedMessage);
                this.covSubRenderController.handleMessage(parsedMessage, {
                    publisher: message.publisher
                });
                return;
            }
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].warn, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, 'Unsupported message type received');
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, 'Failed to parse message', error);
        }
    }
    _handleRtmPresence(presence) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, `Publisher: ${presence.publisher}`);
        // Handle the presence event
        const stateChanged = presence.stateChanged;
        if (stateChanged?.state && stateChanged?.turn_id) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, `State changed: ${stateChanged.state}, Turn ID: ${stateChanged.turn_id}, timestamp: ${presence.timestamp}`);
            this.covSubRenderController.handleAgentStatus(presence);
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, 'No state change detected, skipping handling presence event');
    }
    _handleRtmStatus(status) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS}`, status);
    }
}
}),
"[project]/components/ChatInterface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAgora$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAgora.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/type.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ChatInterface({ product, onClose }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [agoraConfig, setAgoraConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [agentId, setAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInitializingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rtmClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const convoApiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize Agora RTC connection
    const agora = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAgora$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAgora"])(agoraConfig ? {
        appId: agoraConfig.appId,
        channel: agoraConfig.channel,
        token: agoraConfig.token,
        uid: agoraConfig.uid
    } : {
        appId: "",
        channel: "",
        token: "",
        uid: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    // Initialize Agora session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeAgora = async ()=>{
            if (isInitializingRef.current) return;
            isInitializingRef.current = true;
            try {
                // Initialize Agora session
                const initRes = await fetch("/api/agora/initialize", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: Math.floor(Math.random() * 100000)
                    })
                });
                const initData = await initRes.json();
                setAgoraConfig({
                    appId: initData.appId,
                    channel: initData.channel,
                    token: initData.token,
                    uid: initData.uid,
                    rtmUserId: initData.rtmUserId || initData.uid.toString()
                });
                // Start AI agent
                const agentRes = await fetch("/api/agora/start-agent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        channel: initData.channel,
                        userId: initData.uid,
                        token: initData.token
                    })
                });
                if (!agentRes.ok) {
                    const errorData = await agentRes.json();
                    throw new Error(errorData.error || `Failed to start agent: ${agentRes.status}`);
                }
                const agentData = await agentRes.json();
                if (agentData.agent_id) {
                    setAgentId(agentData.agent_id);
                }
                // Set greeting message from ConvoAI if available
                if (agentData.greeting_message) {
                    setMessages([
                        {
                            role: "assistant",
                            content: agentData.greeting_message
                        }
                    ]);
                } else if (agentData.properties?.llm?.greeting_message) {
                    setMessages([
                        {
                            role: "assistant",
                            content: agentData.properties.llm.greeting_message
                        }
                    ]);
                }
                setIsInitializing(false);
            } catch (error) {
                console.error("Failed to initialize Agora:", error);
                setIsInitializing(false);
            }
        };
        initializeAgora();
    }, [
        product.id
    ]);
    // Initialize RTM and ConversationalAIAPI toolkit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!agoraConfig || !agora?.client || ("TURBOPACK compile-time value", "undefined") === "undefined" || convoApiRef.current) {
            return;
        }
        //TURBOPACK unreachable
        ;
        let isMounted;
        const initToolkit = undefined;
    }, [
        agoraConfig,
        agora?.client
    ]);
    const sendMessage = async ()=>{
        if (!input.trim() || isLoading || !convoApiRef.current || !agentId) return;
        const userMessage = input;
        setInput("");
        setIsLoading(true);
        try {
            // Use toolkit's sendText method
            const message = {
                messageType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EChatMessageType"].TEXT,
                text: userMessage,
                priority: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EChatMessagePriority"].INTERRUPTED,
                responseInterruptable: true
            };
            await convoApiRef.current.sendText("1000", message);
            setIsLoading(false);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I encountered an error. Please try again."
                    }
                ]);
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const handleEndCall = ()=>{
        if (agora) {
            agora.leave();
        }
        if (convoApiRef.current) {
            try {
                convoApiRef.current.unsubscribe();
                convoApiRef.current.destroy();
            } catch (e) {
            // Ignore cleanup errors
            }
            convoApiRef.current = null;
        }
        if (rtmClientRef.current) {
            rtmClientRef.current.logout().catch(()=>{});
            rtmClientRef.current = null;
        }
        onClose();
    };
    const handleClose = ()=>{
        handleEndCall();
    };
    const handleToggleMute = ()=>{
        if (agora) {
            agora.toggleMute();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-24 right-6 z-50 w-80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-2xl border border-gray-200 h-[500px] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        agora?.isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold",
                                            children: "Voice Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        isInitializing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-blue-200",
                                            children: "Connecting..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this) : agora?.isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-green-200",
                                            children: "Listening..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-blue-200",
                                            children: "Ready"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-white hover:text-gray-200 transition",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 text-sm",
                    children: [
                        messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[85%] rounded-lg p-2 ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-white text-gray-800 shadow-sm"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs leading-relaxed",
                                        children: msg.content
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white text-gray-800 rounded-lg p-2 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.1s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.2s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesEndRef
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t bg-white rounded-b-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleMute,
                                    disabled: !agora?.isConnected || isInitializing,
                                    className: `flex-1 py-2 px-2 rounded-lg transition font-medium flex items-center justify-center gap-1 text-xs min-w-0 ${agora?.isMuted ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-300" : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"} disabled:opacity-50 disabled:cursor-not-allowed`,
                                    title: agora?.isMuted ? "Unmute microphone" : "Mute microphone",
                                    "aria-label": agora?.isMuted ? "Unmute" : "Mute",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5 flex-shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: agora?.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs whitespace-nowrap truncate",
                                            children: agora?.isMuted ? "Unmute" : "Mute"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEndCall,
                                    disabled: isInitializing,
                                    className: "bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white py-2 px-2.5 rounded-lg transition font-medium flex items-center justify-center gap-1 shadow-md text-xs flex-shrink-0",
                                    title: "End call",
                                    "aria-label": "End call",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3.5 h-3.5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M16 8l-8 8m0 0l-2-2m2 2l2-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs whitespace-nowrap",
                                            children: "End"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer text-gray-500 hover:text-gray-700 mb-1.5",
                                    children: "Or type a message"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyPress: handleKeyPress,
                                            className: "flex-1 border border-gray-300 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent disabled:opacity-50",
                                            disabled: isLoading || isInitializing || !convoApiRef.current,
                                            placeholder: "Type your question..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: sendMessage,
                                            disabled: isLoading || !input.trim() || isInitializing || !convoApiRef.current || !agentId,
                                            className: "bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded text-xs transition",
                                            children: "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatInterface.tsx",
            lineNumber: 324,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatInterface.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AIAssistant.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAssistant",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatInterface.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function AIAssistant({ product }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition hover:scale-110 z-50 flex items-center justify-center group",
                "aria-label": "Open AI Voice Assistant",
                title: "Talk to AI Assistant",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAssistant.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAssistant.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-8 h-8 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAssistant.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-10 h-10 border-2 border-white rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping",
                                    style: {
                                        animationDelay: "0.2s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAssistant.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAssistant.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAssistant.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AIAssistant.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatInterface"], {
                product: product,
                onClose: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/AIAssistant.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/ProductPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPage",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductImages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductReviews$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductReviews.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AIAssistant.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const fetchProduct = async ()=>{
    const res = await fetch("/api/product");
    return res.json();
};
function ProductPage() {
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProduct().then((data)=>{
            setProduct(data);
            setIsLoading(false);
        }).catch((err)=>{
            setError(err);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-gray-600",
                children: "Loading product..."
            }, void 0, false, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-red-600",
                children: "Error loading product"
            }, void 0, false, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400 text-2xl",
                                            children: [
                                                "★".repeat(Math.floor(product.rating)),
                                                "☆".repeat(5 - Math.floor(product.rating))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductPage.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-gray-600 font-medium",
                                            children: product.rating
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductPage.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-gray-500",
                                            children: [
                                                "(",
                                                product.reviewCount.toLocaleString(),
                                                " reviews)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductPage.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                product.inStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium",
                                    children: "In Stock"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl font-bold text-gray-900",
                                    children: [
                                        "$",
                                        product.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl text-gray-400 line-through",
                                    children: [
                                        "$",
                                        product.originalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium",
                                    children: [
                                        "Save ",
                                        product.discount,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductImages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductImages"], {
                            images: product.images
                        }, void 0, false, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-sm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "Product Details"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 mb-6 leading-relaxed",
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-3",
                                    children: "Specifications"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "space-y-2",
                                    children: Object.entries(product.specifications).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "font-medium text-gray-700 w-48",
                                                    children: [
                                                        key,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ProductPage.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-gray-600",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductPage.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/components/ProductPage.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg",
                                    children: "Add to Cart"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductPage.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductReviews$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductReviews"], {
                    reviews: product.reviews,
                    rating: product.rating
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIAssistant"], {
                    product: product
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductPage.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5660115d._.js.map