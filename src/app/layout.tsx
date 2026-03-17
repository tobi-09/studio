import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { ExternalLink } from 'lucide-react';

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
          <footer className="border-t py-16 bg-white mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
              <div className="space-y-2">
                <div className="font-bold text-2xl text-primary font-headline">EduGate Hub</div>
                <p className="text-sm text-muted-foreground">Chytré hardwarové rozšíření pro systém Bakaláři.</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Oficiální prezentace projektu</p>
                <a 
                  href="https://tobi-09.github.io/studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                >
                  tobi-09.github.io/studio
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="pt-8 border-t flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex gap-6">
                  <a href="mailto:obchod@edugate.cz" className="hover:text-primary transition-colors font-medium">obchod@edugate.cz</a>
                  <a href="tel:+420800123456" className="hover:text-primary transition-colors font-medium">+420 800 123 456</a>
                </div>
                <p className="text-xs">© 2024 EduGate Hardware Divize. Všechna práva vyzena.</p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
