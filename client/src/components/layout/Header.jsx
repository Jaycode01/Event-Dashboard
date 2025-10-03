import React, { useState } from "react";
import beacon from "../../assets/Beacon.jpg";
import downward_caret from "../../assets/caret-down.svg";
import search from "../../assets/search.svg";
import arrow_right from "../../assets/arrow-right.svg";
import cancel from "../../assets/cancel.svg";
import { HiOutlineBars2 } from "react-icons/hi2";
import "./Header.css";

function Header() {
  const eventsData = [
    {
      category: "Entertainment & Art",
      events: [
        "Concerts & Music",
        "Theatre & Performing Arts",
        "Comedy Shows",
        "Film & Movies",
        "Festivals",
        "Nightlife & Parties",
      ],
    },
    {
      category: "Tech & Business",
      events: [
        "Hackatons",
        "Startup Events",
        "Tech Meetups",
        "Product Launches",
        "Business Conferences",
      ],
    },
    {
      category: "Learning & Professional",
      events: [
        "Conferences & Summits",
        "Workshops & classNamees",
        "Seminars & Webinars",
        "Networking Events",
        "Trade Shows & Expos",
      ],
    },
    {
      category: "Community & Culture",
      events: [
        "Community Events",
        "Charity & Fundraisers",
        "Religious & Spiritual",
        "Cultural Celebrations",
      ],
    },
    {
      category: "Sports & Fitness",
      events: [
        "Sports Events",
        "Marathons & Races",
        "Fitness & Wellness",
        "Outdoor & Adventure",
      ],
    },
    {
      category: "Others",
      events: [
        "Virtual Events",
        "Social Gathering",
        "Gaming & Hobbies",
        "Fashion & Beauty",
      ],
    },
  ];
  const [openDropdown, setopenDropdown] = useState(false);
  const [openMenu, setopenMenu] = useState(false);

  return (
    <header>
      <section className="left-side-header">
        <div className="logo">
          <a href="/">
            <img src={beacon} alt="beacon logo" />
          </a>
        </div>
        <nav>
          <ul className="nav-links">
            <li className="discover">
              <a href="#">
                Discover <img src={downward_caret} alt="caret down" />
              </a>
              <div className="discover-dropdown">
                {eventsData.map((eventByCategory, index) => (
                  <div key={index} className="select-event">
                    <h4 className="event_category">
                      {eventByCategory.category}
                    </h4>
                    <ul className="events">
                      {eventByCategory.events.map((event, index) => (
                        <li key={index}>
                          <a href="#">{event}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
        <div className="menu" onClick={() => setopenMenu(true)}>
          <HiOutlineBars2 />
        </div>
      </section>
      <section className="right-side-header desktop-nav-2">
        <div className="cancel">
          <img src={cancel} alt="cancel" onClick={() => setopenMenu(false)} />
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Discover your next experience..." />
          <button type="button">
            <img src={search} alt="search" />
          </button>
        </div>
        <div className="cta">
          <button className="login">Login</button>
          <button className="signup">
            Try for Free <img src={arrow_right} alt="arrow right" />
          </button>
        </div>
      </section>
      {openMenu && (
        <section className="right-side-header small-screen">
          <div className="cancel">
            <img src={cancel} alt="cancel" onClick={() => setopenMenu(false)} />
          </div>
          <div className="search-bar">
            <input
              type="search"
              placeholder="Discover your next experience..."
            />
            <button type="button">
              <img src={search} alt="search" />
            </button>
          </div>
          <ul className="mobile-nav">
            <li>
              <a href="#" onClick={() => setopenDropdown(!openDropdown)}>
                Discover{" "}
                <img src={downward_caret} className="down_caret" alt="caret" />
              </a>
              {openDropdown && (
                <div className="discover-mobile-dropdown">
                  {eventsData.map((eventByCategory, index) => (
                    <div key={index} className="select-event">
                      <h4 className="event_category">
                        {eventByCategory.category}
                      </h4>
                      <ul className="events">
                        {eventByCategory.events.map((event, index) => (
                          <li key={index}>
                            <a href="#">{event}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">For Organizers</a>
            </li>
          </ul>
          <div className="cta">
            <button className="login">Login</button>
            <button className="signup">
              Try for Free <img src={arrow_right} alt="arrow right" />
            </button>
          </div>
        </section>
      )}
    </header>
  );
}

export default Header;
