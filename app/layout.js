import { Inter } from "next/font/google";
import ThemeRegistry from "@/components/theme-registry";
import {
  ClientHeader,
  ClientFooter,
  ClientMain,
} from "@/components/client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journal Collection",
  description: "Explore our five unique journal categories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dj-favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <ClientHeader />
          <ClientMain>{children}</ClientMain>
          <ClientFooter />
        </ThemeRegistry>
      </body>
    </html>
  );
}
