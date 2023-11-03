import React, { useContext } from "react";
import AuthContext from "./Context";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
const Header = ({ heading }) => {
  const { setSidebar, sideBar } = useContext(AuthContext);
  return (
    <div className="flex justify-between px-4 pt-4">
      {!sideBar ? (
        <GiHamburgerMenu
          className="cursor-pointer"
          size={20}
          onClick={() => setSidebar(true)}
        />
      ) : (
        <span></span>
        // <RiCloseFill className="cursor-pointer" size={28} onClick={() => setSidebar(false)} />
      )}
      <h2>{heading}</h2>
    </div>
  );
};

export default Header;
