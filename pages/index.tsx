import Home from '../components/Home/Home';
import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Index() {
    useEffect(() => {
        console.log(
            "\n"
            + "Engineered @\n\n"
            + "██████╗  ██████╗ ██╗  ██╗██╗   ██╗\n"
            + "██╔══██╗██╔═══██╗██║ ██╔╝╚██╗ ██╔╝\n"
            + "██║  ██║██║   ██║█████╔╝  ╚████╔╝ \n"
            + "██║  ██║██║   ██║██╔═██╗   ╚██╔╝  \n"
            + "██████╔╝╚██████╔╝██║  ██╗   ██║   \n"
            + "╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   \n\n"
            + "Check our work at https://doky.fr\n\n"
        );
    }, []);
    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    key="viewport"/>
                <title>Super Slim SVGs UI</title>
            </Head>
            <Home />
        </React.Fragment>
    );
}
