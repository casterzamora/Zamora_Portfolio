import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'A showcase of my projects, skills, and growth journey',
  keywords: 'developer, portfolio, projects, web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-100">
        {children}
      </body>
    </html>
  );
}
