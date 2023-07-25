import Head from 'next/head';
import FooterProject from '../components/footerProject';
import HeaderProject from '../components/headerProject';
import { NextUIProvider } from '@nextui-org/react';
import Store from '../components/store';

export default function StorePage() {
    return (
        <div>
            <Head>
                <title>Amanda Boaviagem | Escritora da esperança</title>
            </Head>
            <HeaderProject isInitialPage={false}></HeaderProject>
            <main>
                <NextUIProvider>
                    <Store isInitialPage={false}></Store>
                </NextUIProvider>
            </main>
            <FooterProject></FooterProject>
            <style jsx global>{`
                html,
                main {
                background: #2d638e;
                }
                * {
                box-sizing: border-box;
                margin: 0;
                font-family: Open Sans, sans-serif;
                }
                div,footer{
                overflow: hidden;
                white-space: wrap;
                word-break: break-word;
                }
            `}</style>
        </div>
    )
  }