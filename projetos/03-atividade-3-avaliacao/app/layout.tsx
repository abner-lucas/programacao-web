import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3ª Avaliação: Personalização de um Site Responsivo',
  description: 'Roteiro prático da 3ª Avaliação de Programação Web — IFPA Campus Breves, Prof. Ábner Lucas.',
  openGraph: {
    title: '3ª Avaliação: Personalização de um Site Responsivo',
    description: 'Roteiro prático da 3ª Avaliação de Programação Web — IFPA Campus Breves, Prof. Ábner Lucas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3ª Avaliação: Personalização de um Site Responsivo',
    description: 'Roteiro prático da 3ª Avaliação de Programação Web — IFPA Campus Breves, Prof. Ábner Lucas.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-white text-slate-900 antialiased">
      <body suppressHydrationWarning className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}

