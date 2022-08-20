import React from "react";
import ProfileImg from "../img/profile-img.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home-section align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Daniel Thapa</h1>
            <h2>Web Developer</h2>
            <a href="#">more about me</a>
            {/* <Link to="#">more about me</Link> */}
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={ProfileImg} alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
