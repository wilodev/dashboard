/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')],
    },
    images: {
        domains: ["preview.keenthemes.com"],
        deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    }
}

module.exports = nextConfig
