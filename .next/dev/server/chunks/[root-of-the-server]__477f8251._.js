module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
"[project]/lib/product.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock product data - in production, this would fetch from a database
__turbopack_context__.s([
    "fetchProduct",
    ()=>fetchProduct
]);
async function fetchProduct() {
    // For now, return the same mock data
    // In production, replace with actual database query
    return {
        id: '1',
        name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
        price: 399.99,
        originalPrice: 449.99,
        discount: 11,
        rating: 4.7,
        reviewCount: 2847,
        inStock: true,
        description: 'Industry-leading noise cancellation with Dual Noise Sensor technology. Premium sound quality with LDAC codec support. Up to 30-hour battery life with quick charge. Comfortable design with soft pressure-relieving ear pads.',
        specifications: {
            'Noise Cancellation': 'Industry-leading with Dual Noise Sensor',
            'Battery Life': 'Up to 30 hours',
            'Quick Charge': '3 min charge = 3 hours playback',
            'Connectivity': 'Bluetooth 5.2, NFC, 3.5mm jack',
            'Weight': '250g',
            'Color': 'Black, Silver, Blue'
        },
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
            'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800'
        ],
        reviews: [
            {
                id: 1,
                userName: 'Sarah M.',
                rating: 5,
                date: '2024-01-15',
                title: 'Best headphones I\'ve ever owned!',
                comment: 'The noise cancellation is incredible. I can barely hear anything when these are on. Sound quality is amazing and the battery lasts forever. Worth every penny!',
                verified: true
            },
            {
                id: 2,
                userName: 'Michael T.',
                rating: 5,
                date: '2024-01-10',
                title: 'Perfect for travel',
                comment: 'Used these on a 12-hour flight and they were a game changer. Comfortable for long periods and the noise cancellation made the flight so much better.',
                verified: true
            },
            {
                id: 3,
                userName: 'Jessica L.',
                rating: 4,
                date: '2024-01-08',
                title: 'Great sound, minor comfort issue',
                comment: 'Sound quality is excellent and noise cancellation works well. Only complaint is they can get a bit warm after wearing for several hours, but overall very satisfied.',
                verified: true
            },
            {
                id: 4,
                userName: 'David K.',
                rating: 5,
                date: '2024-01-05',
                title: 'Worth the investment',
                comment: 'I was hesitant about the price, but these are absolutely worth it. The build quality is premium and they sound incredible. Battery life is as advertised.',
                verified: true
            },
            {
                id: 5,
                userName: 'Emily R.',
                rating: 4,
                date: '2024-01-03',
                title: 'Excellent but pricey',
                comment: 'These are fantastic headphones with great features. The only reason I\'m giving 4 stars is the price point, but if you can afford them, they\'re top tier.',
                verified: true
            },
            {
                id: 6,
                userName: 'Robert P.',
                rating: 5,
                date: '2023-12-28',
                title: 'Outstanding quality',
                comment: 'The sound clarity is unmatched. I use these for both music and calls, and the microphone quality is excellent. The touch controls are intuitive and responsive.',
                verified: true
            },
            {
                id: 7,
                userName: 'Lisa W.',
                rating: 4,
                date: '2023-12-25',
                title: 'Great for work from home',
                comment: 'Perfect for video calls and blocking out background noise. The comfort is good for all-day wear. Only wish the case was a bit smaller for travel.',
                verified: true
            }
        ]
    };
}
}),
"[project]/app/api/agora/start-agent/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { channel, userId, token } = body;
        console.log(`[POST] /api/agora/start-agent`);
        console.log("Request body:", JSON.stringify({
            channel,
            userId,
            token: token?.substring(0, 20) + "..."
        }, null, 2));
        if (!channel || !userId || !token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Channel, userId, and token are required"
            }, {
                status: 400
            });
        }
        // Get product context
        const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProduct"])();
        const context = `You are a helpful shopping assistant for an e-commerce website. 
You can ONLY answer questions about this specific product:

Product: ${product.name}
Price: $${product.price} (Original: $${product.originalPrice}, Save ${product.discount}%)
Rating: ${product.rating}/5 stars (${product.reviewCount} reviews)
Stock Status: ${product.inStock ? "In Stock" : "Out of Stock"}
Description: ${product.description}

Specifications:
${Object.entries(product.specifications).map(([key, value])=>`- ${key}: ${value}`).join("\n")}

Recent Customer Reviews:
${product.reviews.slice(0, 5).map((r)=>`• ${r.userName} (${r.rating}/5 stars): "${r.title}" - ${r.comment}`).join("\n\n")}

IMPORTANT RULES:
1. ONLY answer questions about this product, its features, reviews, pricing, specifications, or related shopping questions
2. If asked about unrelated topics (cooking, baking, recipes, weather, sports, politics, general knowledge, other products), politely redirect: "I'm here to help you with this product. Would you like to know about its features, reviews, or specifications?"
3. Be helpful, friendly, and concise
4. Reference specific reviews when relevant to answer questions
5. If asked about availability, mention it's ${product.inStock ? "currently in stock" : "currently out of stock"}
6. Help with purchase decisions by comparing features, mentioning reviews, and highlighting value
7. Keep responses focused and product-related`;
        const APP_ID = process.env.AGORA_APP_ID;
        const API_KEY = process.env.AGORA_API_KEY;
        const API_SECRET = process.env.AGORA_API_SECRET;
        if (!APP_ID || !API_KEY || !API_SECRET) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing Agora credentials"
            }, {
                status: 500
            });
        }
        const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
        console.log(`[start-agent] Agent token: ${token}`);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].post(`https://api.agora.io/api/conversational-ai-agent/v2/projects/${APP_ID}/join`, {
            name: `ecommerce_ai_agent_${Date.now()}_${Math.random().toString(36).substring(7)}`,
            properties: {
                channel: channel,
                token: token,
                agent_rtc_uid: "1000",
                remote_rtc_uids: [
                    `${Number(userId)}`
                ],
                idle_timeout: 120,
                llm: {
                    url: process.env.LLM_URL || "https://api.openai.com/v1/chat/completions",
                    api_key: process.env.LLM_API_KEY || "",
                    system_messages: [
                        {
                            role: "system",
                            content: context
                        }
                    ],
                    greeting_message: "Hello! I'm here to help you with this product. Ask me anything about features, reviews, or specifications!",
                    failure_message: "I'm sorry, I can only assist with questions related to this product. Could you please ask about our product?",
                    max_history: 10,
                    params: {
                        model: process.env.LLM_MODEL || "gpt-4o-mini"
                    }
                },
                asr: {
                    language: "en-US"
                },
                tts: {
                    vendor: "microsoft",
                    params: {
                        key: process.env.TTS_API_KEY || "",
                        region: process.env.TTS_REGION || "eastus",
                        voice_name: "en-US-AndrewMultilingualNeural"
                    }
                }
            }
        }, {
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
            }
        });
        console.log("Response:", JSON.stringify(response.data, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response.data);
    } catch (error) {
        const err = error;
        const status = err?.response?.status;
        const data = err?.response?.data;
        // Handle 409 Conflict - agent already running
        if (status === 409 && data?.agent_id) {
            console.log("Agent already running, returning existing agent:", data.agent_id);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                agent_id: data.agent_id,
                status: data.status || "RUNNING",
                create_ts: data.create_ts,
                ...data
            });
        }
        const message = data?.detail || data?.message || err?.message || "Failed to start AI agent";
        console.error("[start-agent] error:", JSON.stringify(data || err?.message, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message,
            detail: data || err?.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__477f8251._.js.map