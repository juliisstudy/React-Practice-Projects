import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "promptopia",
  description: "discover and share ai prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient">{children}</div>
        </div>
      </body>
    </html>
  );
}
