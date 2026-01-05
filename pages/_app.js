import styles from "../styles/global.css";

// i cannot import global css in any other file except _app.js
// this file is used to initialize pages and is a top level component, before rendering any page

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
