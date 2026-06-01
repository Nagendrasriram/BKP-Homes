import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKP Homes | Luxury Furniture & Premium Interiors Hyderabad",
  description: "Experience the ultimate in bespoke living. BKP Homes designs and manufactures high-end luxury sofas, premium beds, dining tables, and customized interiors in Hyderabad. Elevate your spaces with master craftsmanship.",
  keywords: ["luxury furniture hyderabad", "custom sofas hyderabad", "premium beds", "high-end interiors", "BKP Homes", "walnut furniture", "bespoke design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                // Intercept window error events in capture phase (before Next.js overlay sees them)
                window.addEventListener('error', function(e) {
                  var isExtension = (e.filename && e.filename.indexOf('chrome-extension://') !== -1) || 
                                    (e.error && e.error.stack && e.error.stack.indexOf('chrome-extension://') !== -1);
                  if (isExtension) {
                    e.stopImmediatePropagation();
                    console.warn('[Extension Guarded] Blocked unhandled extension crash:', e.message);
                  }
                }, true);
                
                // Intercept unhandled promise rejections
                window.addEventListener('unhandledrejection', function(e) {
                  var isExtension = e.reason && e.reason.stack && e.reason.stack.indexOf('chrome-extension://') !== -1;
                  if (isExtension) {
                    e.stopImmediatePropagation();
                    console.warn('[Extension Guarded] Blocked unhandled extension rejection:', e.reason.message || e.reason);
                  }
                }, true);
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-luxury-black text-luxury-cream font-sans" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}



