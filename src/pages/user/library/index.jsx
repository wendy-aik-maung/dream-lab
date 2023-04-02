import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const allLinks = [
  {
    name: "Books",
    to: "books",
  },
  {
    name: "Articles",
    to: "articles",
  },
];

const Library = () => {
  return (
    <section>
      <h2 className="text-center font-poppins text-xl font-bold mb-3 py-4">
        Library
      </h2>
      <div className="flex justify-center items-center mt-3">
        <ul className="flex gap-6 mb-4">
          {allLinks.map((link) => (
            <CustomLink to={link.to} key={link.name}>
              {link.name}
            </CustomLink>
          ))}
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const tempPathName = location.pathname.split("/");
  let isActive =
    tempPathName[tempPathName.length - 1] === to ||
    tempPathName[tempPathName.length - 1] === "";

  return (
    <Link
      to={to}
      className={` font-semibold text-[#8E98B0] text-lg ${
        isActive
          ? "!text-dreamLabColor1 border-b-4 border-dreamLabColor1"
          : null
      }`}
    >
      {children}
    </Link>
  );
};

export default Library;
