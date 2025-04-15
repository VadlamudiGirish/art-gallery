import Navbar from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="bg-gray-900 fixed top-0 left-0 right-0"
        style={{ zIndex: "10" }}
      >
        <Header />
      </header>
      <main className="flex-1 pb-24 pt-20">
        <Component {...pageProps} />
      </main>

      <footer className="bg-gray-900 fixed bottom-0 left-0 right-0 z-50">
        <Navbar />
      </footer>
    </div>
  );
}
