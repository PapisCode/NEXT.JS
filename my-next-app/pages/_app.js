import "@/styles/globals.css";
import Counter from "../components/Counter";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <Counter />
    </div>
  );
}
