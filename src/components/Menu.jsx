import React from "react";
import './Menu.css'


function Menu() {

  return (
    <div className="menu">
      <div className="menu-logo"><h1>PELISYA</h1></div>
      <ul className="menu-items">
          <li>Home</li>
          <li>Peliculas</li>
          <li>Series</li>
          <li>Anime</li>
      </ul>
    </div>
  );
}
export {Menu}