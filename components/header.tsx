import React from "react";
import Link from "next/link";
import { HeaderLinks } from "@/lib/HeaderLinks";

function Header() {
  return (
    <header>
      <ul className="header-nav">
        {HeaderLinks.map((link) => (
          <li className="header-link" key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
