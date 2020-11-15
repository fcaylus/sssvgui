import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Document structure
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <meta name="subject" content="Super Slim SVGs UI"/>
                    <meta name="description" content="Optimize SVGs and create Super Slim SVGs !"/>
                    <meta name="keywords" content="svg, ui, sssvg, compressor, doky, super slim svg"/>
                    <meta name="copyright" content="Doky"/>
                    <meta name="author" content="Doky"/>

                    <link rel="manifest" href="/site.webmanifest" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#042733" />


                    <meta name="apple-mobile-web-app-title" content="Super Slim SVGs UI" />
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

                    <meta name="application-name" content="Super Slim SVGs UI" />
                    <meta name="msapplication-TileColor" content="#2d89ef" />

                    <meta name="theme-color" content="#042733" />
                    <meta name="mobile-web-app-capable" content="yes"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
