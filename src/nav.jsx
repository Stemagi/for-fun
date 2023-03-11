import React from "react";
export default function Navbar() {
  return(
    <div className="nav">
      <nav className="heading">
        <h3>Bocchi is the best anime of 2022?</h3>
      </nav>
      <nav className="contacts">
        <h4> Where you can watch it</h4>
        <a href="https://jut.su/bocchi-the-rock/" target="_blank">
          <button className="image-button">
            <img src="icon-jut.png" alt="naruto" className="icons"/>
          </button>
        </a>
        <a href="https://yummyanime.tv/1417-odinokij-roker.html" target="_blank">
          <button className="image-button">
            <img src="icon-web.png" alt="naruto" className="icons"/>
          </button>
        </a>
        <a href="https://animevost.org/tip/tv/2877-bocchi-the-rock.html" target="_blank">
          <button className="image-button">
            <img src="icon-amino.png" alt="naruto" className="icons"/>
          </button>
        </a>
      </nav>
    </div>
  )
}