import React, { useState } from "react";
import AdminSidebarLink from "./AdminSidebarLink";
import { AiFillHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { MdEventNote } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiFillFilePdf } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { BiCategory, BiLogOut } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BiImage } from "react-icons/bi";
import { AiFillCreditCard } from "react-icons/ai";
import { useUserDataContext } from "../../contexts/UserDataContext";
import { useNavigate } from "react-router-dom";
import { ISADMIN_LOCAL_STORAGE } from "../../contexts/AdminAuthContext";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const Sidebar = () => {
  const navigate = useNavigate();
  const [manage, setManage] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const { logout } = useUserDataContext();

  const handleLogout = () => {
    logout();
    localStorage.removeItem(ISADMIN_LOCAL_STORAGE);
    navigate(0);
  };

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden flex flex-col w-80 items-center py-8 bg-dreamLabColor4 text-white text-opacity-50 fixed top-0 left-0 z-10 ">
      <div className="grow  py-20">
        <div className="flex items-center mb-8">
          <span className="text-xl font-bold text-textColor3">
            Admin Dashboard
          </span>
        </div>
        <ul className="flex flex-col">
          <AdminSidebarLink to="/" icon={<AiFillHome />} title="Dashboard" />
          <AdminSidebarLink to="/books" icon={<ImBooks />} title="Books" />
          <AdminSidebarLink to="/plans" icon={<MdEventNote />} title="Plans" />
          <AdminSidebarLink
            to="/subscriptions"
            icon={<RiVipCrownFill />}
            title="Subscription plan"
          />
          <hr />
          <div
            className="flex justify-between items-center text-textColor3 py-4 text-xl cursor-pointer "
            onClick={() => setManage(!manage)}
          >
            <h1>Manage</h1>
            <IoIosArrowDropdown />
          </div>
          {manage && (
            <div>
              <AdminSidebarLink to="/books" icon={<ImBooks />} title="Books" />
              <AdminSidebarLink
                to="/ebooks"
                icon={<AiFillFilePdf />}
                title="E-Books"
              />
              <AdminSidebarLink
                to="/articles"
                icon={<MdArticle />}
                title="Articles"
              />
              <AdminSidebarLink
                to="/podcasts"
                icon={<MdPodcasts />}
                title="Podcasts"
              />
              <AdminSidebarLink
                to="/videos"
                icon={<FaYoutube />}
                title="Videos"
              />
              <AdminSidebarLink
                to="/plans"
                icon={<MdEventNote />}
                title="Plans"
              />
              <AdminSidebarLink
                to="/category"
                icon={<BiCategory />}
                title="Category"
              />
              <AdminSidebarLink
                to="/author/books"
                icon={<HiOutlinePencilSquare />}
                title="Authors"
              />
              <AdminSidebarLink to="/users" icon={<FaUsers />} title="Users" />
              <AdminSidebarLink
                to="/banner"
                icon={<BiImage />}
                title="Banner"
              />
              <AdminSidebarLink
                to="/"
                icon={<AiFillCreditCard />}
                title="Payment Method"
              />
            </div>
          )}
          <hr />

          <div
            className="flex justify-between items-center  text-textColor3 py-4 text-xl cursor-pointer"
            onClick={() => setSubscription(!subscription)}
          >
            <h1>Subscription</h1>
            <IoIosArrowDropdown />
          </div>
          {subscription && (
            <div>
              <AdminSidebarLink
                to="/subscribers"
                icon={<FaUserAlt />}
                title="Subscriber"
              />
            </div>
          )}
          <hr />
          <li>
            <button
              className="text-textColor3 py-4 text-lg cursor-pointer gap-2  flex items-center"
              onClick={handleLogout}
            >
              <BiLogOut />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
