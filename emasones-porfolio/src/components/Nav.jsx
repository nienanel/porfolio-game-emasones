import React from "react";
import { Link, useLocation } from "react-router-dom";

/*** icons  ***/
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

import "../styles/Nav.css";

const navItems = [
  {
    to: "/",
    imgsrc: astronautHelmet,
    altText: "astronaut helmet",
    navClass: "nav-home",
    title: "HOME",
  },
  {
    to: "/skills",
    imgsrc: deadEye,
    altText: "dead eye",
    navClass: "nav-skills",
    title: "SKILLS",
  },
  {
    to: "/projects",
    imgsrc: stack,
    altText: "stack",
    navClass: "nav-projects",
    title: "PROJECTS",
  },
  {
    to: "/contact",
    imgsrc: envelope,
    altText: "envelope",
    navClass: "nav-contact",
    title: "CONTACT",
  },
];

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-home";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();

  return (
    <nav className={`nav ${navPositionClass}`}>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          imgSrc={item.imgsrc}
          altText={item.altText}
          text={item.title}
          currentPath={location.pathname}
        />
      ))}
    </nav>
  );
}

function NavLink({ to, imgSrc, altText, text, currentPath }) {
  const isCurrent = currentPath === to;
  const linkClass = isCurrent ? "nav-link current" : "nav-link";

  return (
    <Link to={to} className={linkClass}>
      <img src={imgSrc} alt={altText} />
      {isCurrent && <h1 className="page-title">{text}</h1>}
    </Link>
  );
}