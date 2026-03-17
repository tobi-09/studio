import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'EduGate Hub | Smart Hardware pro Bakaláře',
  description: 'Propojte své Bakaláře s moderními čtečkami a zabezpečte svou školu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t py-12 bg-white mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
              <div className="font-bold text-xl text-primary">EduGate Hub</div>
              <p className="text-sm text-muted-foreground">© 2024 EduGate Hardware Divize. Všechna práva vyzrazena.</p>
              <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                <a href="mailto:obchod@edugate.cz" className="hover:text-primary transition-colors font-medium">obchod@edugate.cz</a>
                <a href="tel:+420800123456" className="hover:text-primary transition-colors font-medium">+420 800 123 456</a>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
