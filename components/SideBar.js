import { SideBarData } from "./SideBarData";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = () => {
  const [toggleSideBar, setSideBar] = useState(true);

  const update = () => {
    setSideBar(!toggleSideBar);
    if (screen.width >= 401) {
      if (toggleSideBar) {
        document.getElementById("main").style.marginLeft = "210px";
        document.querySelector(".footer").style.marginLeft = "170px";
        document.querySelector(".sidebar").style.width = "200px";
        document.querySelector(".nav").style.marginLeft = "200px";
      } else {
        document.getElementById("main").style.marginLeft = "50px";
        document.querySelector(".footer").style.marginLeft = "10px";
        document.querySelector(".sidebar").style.width = "40px";
        document.querySelector(".nav").style.marginLeft = "40px";
      }
    } else {
      if (toggleSideBar) {
        document.getElementById("main").style.marginLeft = "160px";
        document.querySelector(".footer").style.marginLeft = "120px";
        document.querySelector(".sidebar").style.width = "120px";
        document.querySelector(".nav").style.marginLeft = "120px";
        document.querySelector(".nav").style.fontSize = "0.5rem";
      } else {
        document.getElementById("main").style.marginLeft = "50px";
        document.querySelector(".footer").style.marginLeft = "40px";
        document.querySelector(".sidebar").style.width = "40px";
        document.querySelector(".nav").style.marginLeft = "40px";
        document.querySelector(".nav").style.fontSize = "1.1rem";
      }
    }
  };

  return (
    <div className={"sidebar"}>
      <ul>
        <li key={0}>
          {toggleSideBar ? (
            <FiMenu onClick={update} />
          ) : (
            <AiOutlineCloseCircle onClick={update} />
          )}
        </li>
        {SideBarData.map((val, key) => {
          return (
            <li key={key}>
              <Link href={val.link}>
                <a>
                  <div>{val.icon}</div>
                  <div className={toggleSideBar ? "text" : "" }>
                    {val.title}
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
