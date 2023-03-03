import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import SearchInput from "./SearchInput";
import Logo from "../../assets/Icon.svg";
import { useLoginModalContext } from "../../contexts/LoginModalContext";
const Navbar = () => {
  const { setIsUserLoginModalOpen } = useLoginModalContext();

  const handleLoginModalOpen = () => {
    return setIsUserLoginModalOpen(true);
  };

  return (
    <nav className="py-4 flex justify-between items-baseline text-textColor1">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="flex items-center gap-8 ml-8">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold hover:text-textColor2"
          >
            <AiFillHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold hover:text-textColor2"
          >
            <MdLocalLibrary />
            <span>Library</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold hover:text-textColor2"
          >
            <AiFillDollarCircle />
            <span>Pricing</span>
          </Link>
        </li>
      </ul>
      <SearchInput />
      <button
        className="btn_primary flex items-center justify-center font-semibold rounded-xl"
        onClick={handleLoginModalOpen}
      >
        <RxPerson className="mr-2" size={18} />
        <span>Login</span>
      </button>
    </nav>
  );
};

export default Navbar;
