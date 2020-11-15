const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === '1',
})

module.exports = withBundleAnalyzer({})
