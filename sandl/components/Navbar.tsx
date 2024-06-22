import { NAV_LINKS } from "@/constants";
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="relative z-30 py-5 px-5 flex flex-row w-full">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/sandlLogo.png" alt="S&L Logo" width={75} height={75} />
        <span className="text-2xl font-bold">AUTO CARE</span>
      </Link>

      <ul className="hidden h-full items-center justify-center gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar