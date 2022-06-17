/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import "../styles/navbar.css";
import "../styles/catagory.css";
import "../styles/detail.css";
import "../styles/instructor.css";
import "../styles/login.css";
import "../styles/register.css";
import "../styles/notFound.css";
import "../styles/landingpage.css";
import "../styles/member-page-styles/overview.css";
import "../styles/member-page-styles/sidebar.css";
import "../styles/member-page-styles/utilities.css";
import "../styles/member-page-styles/plant.css";
import "../styles/globals.css";

import "../styles/responsive.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
