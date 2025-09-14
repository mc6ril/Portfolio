/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // Support pour React 19
        reactCompiler: false, // Désactivé pour l'instant car expérimental
    },
    // Configuration pour React 19
    compiler: {
        // Désactiver le minification si nécessaire pour le debug
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        qualities: [25, 50, 75, 100],
    },
};

module.exports = nextConfig;
