import React from "react";
import beacon from "../../assets/Beacon.jpg";
import downward_caret from "../../assets/caret-down.svg";
import search from "../../assets/search.svg";
import arrow_right from "../../assets/arrow-right.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <section class="left-side-header">
        <div class="logo">
          <img src={beacon} alt="beacon logo" />
        </div>
        <nav>
          <ul class="nav-links">
            <li class="discover">
              <a href="#">
                Discover <img src={downward_caret} alt="caret down" />
              </a>
              <div class="discover-dropdown">
                <ul class="select-title">
                  <li>
                    <a href="#">Category</a>
                  </li>
                </ul>
                <ul class="events"></ul>
              </div>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">For Organizers</a>
            </li>
          </ul>
        </nav>
      </section>
      <section class="right-side-header">
        <div class="search-bar">
          <input type="search" placeholder="Discover your next experience..." />
          <button type="button">
            <img src={search} alt="search" />
          </button>
        </div>
        <div class="cta">
          <button class="login">Login</button>
          <button class="signup">
            Try for Free <img src={arrow_right} alt="arrow right" />
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
