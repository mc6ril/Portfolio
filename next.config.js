/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    reactCompiler: false,
    // Configuration pour React 19
    compiler: {
        // Désactiver le minification si nécessaire pour le debug
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        qualities: [75, 100],
    },
};

module.exports = nextConfig;
