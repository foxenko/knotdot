import "./globals.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const metadata = {
  title: "KnotDot",
  description: "KnotDot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
