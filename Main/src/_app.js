import "./assets/scss/style.scss";
import React from "react";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

function MyApp({ Component, pageProps }) {
  return (
    <PageScrollTop>
      <Component {...pageProps} />
    </PageScrollTop>
  );
}

// document.querySelector("body").classList.toggle("light"); ??

export default MyApp;
