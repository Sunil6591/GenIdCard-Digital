import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-xl font-bold text-white">GenIdCard</div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold text-gray-300">Twin Enterprises</span>
          </p>
          <p className="text-sm text-gray-400">
            400/2, Shaniwar Peth, Sudarshan Apt, Pune 411038
          </p>
        </div>
      </div>
    </footer>
  );
}

