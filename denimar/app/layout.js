import "./globals.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata = {
  title: "Denimar",
  description: "Хакатон",
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
