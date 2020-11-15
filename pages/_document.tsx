import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const siteName = 'Super Slim SVGs UI';
const siteDescription = 'Optimize SVGs and create Super Slim SVGs !';
const siteAuthor = 'Doky';
const siteColor = '#042733';

/**
 * Document structure
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="subject" content={siteName} />
                    <meta name="description" content={siteDescription} />
                    <meta name="keywords" content="svg, ui, sssvg, compressor, doky, super slim svg" />
                    <meta name="copyright" content={siteAuthor} />
                    <meta name="author" content={siteAuthor} />

                    <link rel="manifest" href="/site.webmanifest" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color={siteColor} />


                    <meta name="apple-mobile-web-app-title" content={siteName} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                    <meta name="application-name" content={siteName} />
                    <meta name="msapplication-TileColor" content="#2d89ef" />

                    <meta name="theme-color" content={siteColor} />
                    <meta name="mobile-web-app-capable" content="yes" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={siteName} />
                    <meta property="og:image" content="/android-chrome-512x512.png" />
                    <meta property="og:image:alt" content={siteName} />
                    <meta property="og:description" content={siteDescription} />
                    <meta property="og:site_name" content={siteName} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="article:author" content={siteAuthor} />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={siteName} />
                    <meta name="twitter:description" content={siteDescription} />
                    <meta name="twitter:image" content="/android-chrome-512x512.png" />
                    <meta name="twitter:image:alt" content={siteName} />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
