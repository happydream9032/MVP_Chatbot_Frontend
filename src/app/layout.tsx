"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin-allow-popups" />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()"/>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script dangerouslySetInnerHTML={{ __html: `window.googleAsyncInit = function() { window.google.accounts.id.initialize({ 'client_id': '1037111719801-57leuusf3igree0os4oaa7iu2qf8uocs.apps.googleusercontent.com', 'auto_select': true }); };`}}></script>
      </head>

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}

          <Footer />
          <ScrollToTop />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
import { Providers } from "./providers";


