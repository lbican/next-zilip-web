import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

type NavItemProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  children,
  href = "#",
}) => (
  <li>
    <a className="text-gray-500 transition hover:text-gray-500/75" href={href}>
      {children}
    </a>
  </li>
);
