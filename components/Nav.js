import Image from "next/image";
import * as mdIcons from "react-icons/md";
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
          <li className= "dropdown">
            <Link href="/">
              <a>
                <mdIcons.MdAccountCircle />
                Account
              </a>
            </Link>
            <div className="dropdown-content">
              <Link href="/">
                <a>
                  <mdIcons.MdAccountCircle />
                  Account
                </a>
              </Link>
              <Link href="/">
                <a>
                  <mdIcons.MdAccountCircle />
                  Account
                </a>
              </Link>
              <Link href="/">
                <a>
                  <mdIcons.MdAccountCircle />
                  Account
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
