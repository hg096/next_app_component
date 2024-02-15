import React from "react";
import "./globals.css";

export const metadata = {
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
  description: '',
  keywords: '',
  openGraph: {
    description: '',
    keywords: '',
    image: '',
    title: '',
  },
}


export default function RootLayout({ children,}: { children: React.ReactNode; }) {
  return (
    <html >
      <body>

      </body>
    </html>
  );
}