// For building on Vercel: https://github.com/Automattic/node-canvas/issues/1779#issuecomment-895885846
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`
    )
) {
    process.env.LD_LIBRARY_PATH = `${
        process.env.PWD
    }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === '1'
});

module.exports = withBundleAnalyzer({
    compress: false
});
