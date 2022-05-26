import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchors = links.map((link) =>
    <a href={"#" + link} key={link}>{link}</a>
  )

  return <nav>
    {/* <a href="#home" key={"home"}>home</a>
    <a href="#about" key={"about"}>about</a>
    <a href="#projects" key={"projects"}>projects</a> */}
    {anchors}
  </nav>;
}

export default NavBar;
