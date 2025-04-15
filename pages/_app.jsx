import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-900 fixed bottom-0 left-0 right-0">
        <Navbar />
      </footer>
    </>
  );
}
