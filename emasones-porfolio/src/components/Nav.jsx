import React from "react";
import { NavLink, useLocation } from "react-router-dom";
/*** icons  ***/
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

const navItems = [
  {
    to: "/",
    imgsrc: astronautHelmet,
    altText: "astronaut helmet",
    navClass: "nav-about",
    title: "ABOUT",
  },
  {
    to: "/skills",
    imgsrc: deadEye,
    altText: "dead eye",
    navClass: "nav-skills",
    title: "SKILLS",
  },
  {
    to: "/contact",
    imgsrc: envelope,
    altText: "envelope",
    navClass: "nav-contact",
    title: "CONTACT",
  },
  {
    to: "/projects",
    imgsrc: stack,
    altText: "stack",
    navClass: "nav-projects",
    title: "PROJECTS",
  },
];

export default function Nav() {
  const location = useLocation();

  const isCurrentPage = (navClass) => location.pathname === navClass;

  return (
    <nav className={`nav ${navItems.find((item) => isCurrentPage(item.navClass))?.navClass || ""}`}>
      {navItems.map((item) => (
        <NavLink to={item.to} key={item.to} className={`nav-link ${isCurrentPage(item.navClass) ? "current" : ""}`}>
          <img src={item.imgsrc} alt={item.altText} />
          {isCurrentPage(item.navClass) && <h1 className="nav-title">{item.title}</h1>}
        </NavLink>
      ))}
    </nav>
  );
}
