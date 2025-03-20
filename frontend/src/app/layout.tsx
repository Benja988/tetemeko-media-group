import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        
          
          <main>{children}</main> {/* ✅ Semantic HTML: Wrap children in <main> */}
        
      </body>
    </html>
  );
}
