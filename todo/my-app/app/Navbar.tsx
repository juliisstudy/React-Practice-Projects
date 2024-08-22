"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export default function Navbar() {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "list", href: "/list" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 items-cente">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={classnames({
              "text-zinc-800": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-700 transition-colors": true,
            })}
            // className={`${
            //   link.href === currentPath ? "text-zinc-900" : "text-zinc-900"
            // }hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
