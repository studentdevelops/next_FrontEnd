import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SideBar from "../components/SideBar";

const Nav = () => {
  return (
    <>
      <SideBar />
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">
              <a>Company Name</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sexy Logo</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
