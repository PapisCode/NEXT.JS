import "@/styles/globals.css";
import CounterProvider from "../context/CounterProvider";


export default function App({ Component, pageProps }) {
  return (
  <CounterProvider>
  <Component {...pageProps} />;
  </CounterProvider>
  );
}