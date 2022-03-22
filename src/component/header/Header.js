import React, { useRef } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
const headerNav = [
  { display: "Home", path: "/" },
  { display: "Movies", path: "/movies" },
  { display: "Tv Series", path: "/tv" },
];
export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          Chưa có logo
          <Link to="/"> tMovies </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
