'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchBy } from '@/components/SearchBy';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const activeClass = (path: string) =>
    pathname === path
      ? 'text-black border rounded border-gray-300 font-medium bg-gray-200'
      : '';

  return (
    <html lang="en">
      <body
        className={
          inter.className +
          'flex justify-center m-auto w-1/2 text-center bg-gray-200 p-5'
        }
      >
        <header>
          <div className="flex flex-col text-black">
            <div>
              <button className="p-1 bg-teal-900 text-white w-20 rounded float-right">
                Request
              </button>
            </div>
            <h1 className="text-4xl font-bold">Library</h1>
            <p className="mt-5">
              Browse for assets needed to report and present analysis.
            </p>
            <SearchBy path={pathname} />
            <nav>
              <ul className="flex flex-row mt-5 justify-between bg-gray-300 p-1">
                <li
                  className={`hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out text-center w-1/4 ${activeClass('/')}`}
                >
                  <Link href="/">Featured</Link>
                </li>
                <li
                  className={`hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out text-center w-1/4 ${activeClass('/kpi')}`}
                >
                  <Link href="/kpi">KPI</Link>
                </li>
                <li
                  className={`hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out text-center w-1/4  ${activeClass('/layouts')}`}
                >
                  <Link href="/layouts">Layouts</Link>
                </li>
                <li
                  className={`hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out text-center w-1/4  ${activeClass('/storyboards')}`}
                >
                  <Link href="/storyboards">Storyboards</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
