import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>();

  const { pathname } = useRouter();

  const NavItem: FunctionComponent<{
    name: string;
    route: string;
  }> = ({ name, route }) => {
    return (
      activeItem !== name && (
        <Link href={route}>
          <a>
            <span
              onClick={() => setActiveItem(name)}
              className="hover:text-green"
            >
              {name}
            </span>
          </a>
        </Link>
      )
    );
  };

  useEffect(() => {
    if (pathname == "/") setActiveItem("About");
    if (pathname == "/projects") setActiveItem("Projects");
    if (pathname == "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem name="About" route="/" />
        <NavItem name="Projects" route="/projects" />
        <NavItem name="Resume" route="/resume" />
      </div>
    </div>
  );
};

export default Navbar;
