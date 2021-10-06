import { SideBarData } from "./SideBarData";
import { SideBarDataToggled } from "./SideBarDataToggled";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = () => {
  const [toggleSideBar, setSideBar] = useState(true);
  const [toggleSlider, setSlider] = useState(false);

  const updateSlider = () => {
    setSlider(!toggleSlider);
  };

  const updateSidebar = () => {
    setSideBar(!toggleSideBar);
    if (screen.width >= 401) {
      if (toggleSideBar) {
        document.getElementById("main").style.marginLeft = "210px";
        document.querySelector(".footer").style.marginLeft = "170px";
        document.querySelector(".sidebar").style.width = "200px";
        document.querySelector(".nav").style.marginLeft = "200px";
        document.querySelector(".nav").style.marginLeft = "200px";
        document.querySelector(".center").style.textAlign = "center";
        document.querySelector(".menu.items").style.justifyContent = "flex-end";
      } else {
        document.getElementById("main").style.marginLeft = "70px";
        document.querySelector(".footer").style.marginLeft = "15px";
        document.querySelector(".sidebar").style.width = "70px";
        document.querySelector(".menu.items").style.justifyContent = "center";
        document.querySelector(".nav").style.marginLeft = "70px";
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
        document.querySelector(".sidebar").style.width = "50px";
        document.querySelector(".nav").style.marginLeft = "40px";
        document.querySelector(".nav").style.fontSize = "1.1rem";
      }
    }
  };

  return (
    <div className={"sidebar"}>
      <ul>
        <li key={0} className="menu items">
          {toggleSideBar ? (
            <FiMenu onClick={updateSidebar} />
          ) : (
            <AiOutlineCloseCircle onClick={updateSidebar} />
          )}
        </li>
        <li className="slider">
          <div className="center">
            <div className={`hide ${toggleSlider ? "highlight" : ""} `}>
              Services{" "}
            </div>{" "}
            <input type="checkbox" onClick={ updateSlider } />
            <div className={`hide ${toggleSlider ? "" : "highlight"}`}>
              Information
            </div>
          </div>
        </li>
        {}
        {(toggleSlider ? SideBarDataToggled : SideBarData).map((val, key) => {
          return (
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              key={key}
              className="items"
            >
              <Link href={val.link}>
                <a>
                  <div>{val.icon}</div>
                  <div className={toggleSideBar ? "text" : ""}>{val.title}</div>
                </a>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
