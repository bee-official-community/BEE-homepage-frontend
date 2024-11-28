import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-gray-900">
      {/* 로고 */}
      <div className="text-3xl font-bold">
        <Link to="/" className="text-amber-500">
          BEE
        </Link>
      </div>

      {/* 메뉴 */}
      <div className="flex flex-1 justify-center">
        <ul className="flex gap-5 items-center list-none m-0 p-0">
          {[
            { name: "About", path: "/about" },
            { name: "Community", path: "/community" },
            { name: "Generation", path: "/generation" },
            { name: "Project", path: "/project" },
            { name: "Admin", path: "/admin" },
          ].map((menu, index) => (
            <li
              key={index}
              className={`px-5 py-2 rounded-md transition-colors duration-300 ${
                location.pathname === menu.path
                  ? "text-amber-500"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              <Link to={menu.path} className="no-underline">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
