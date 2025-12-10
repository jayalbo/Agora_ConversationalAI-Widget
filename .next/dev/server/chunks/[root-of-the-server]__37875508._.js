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
"[project]/app/api/product/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Mock product data with reviews
const product = {
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
async function GET() {
    console.log(`\n[GET] /api/product`);
    console.log("Response:", JSON.stringify(product, null, 2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(product);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37875508._.js.map