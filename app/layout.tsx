export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Viamobile",
<<<<<<< HEAD
=======
<<<<<<< HEAD
  description: "Viamobile is a modern banking for all people  ",
icons: {
  icon: '/icons/viamobile.png'
}

=======
>>>>>>> 519afc0 (ci: integrate SonarCloud with GitHub Actions)
  description: "Viamobile is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
<<<<<<< HEAD
=======
>>>>>>> ea8c8d3 (feat: updated project files)
>>>>>>> 519afc0 (ci: integrate SonarCloud with GitHub Actions)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
