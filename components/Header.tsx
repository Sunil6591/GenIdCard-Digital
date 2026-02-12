import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/digital/logo.png"
              alt="GenIdCard Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="https://console.genidcard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors border border-gray-300 rounded px-4 py-2 hover:border-primary-600"
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

