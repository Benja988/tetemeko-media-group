import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main> {/* ✅ Semantic HTML: Wrap children in <main> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
