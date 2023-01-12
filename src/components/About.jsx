import React from "react";
import ProfileImg from "../img/profile-img.png";

const About = () => {
  return (
    <section className="about-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={ProfileImg} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolorum natus odio sunt recusandae, unde, sit corrupti similique
              magnam veniam eligendi! Reiciendis, vero? Quisquam culpa eum sequi
              ducimus ut nemo unde alias. Perspiciatis sint vel, saepe eum
              consequatur aliquam, iure quam dolores at aliquid repellendus eius
              voluptate distinctio esse veniam.
            </p>
            <h3>Skills</h3>
            <div className="skills">
              <div className="skill-item">html</div>
              <div className="skill-item">css</div>
              <div className="skill-item">javascript</div>
              <div className="skill-item">reactjs</div>
              <div className="skill-item">java</div>
              <div className="skill-item">mysql</div>
              <div className="skill-item">python</div>
            </div>
            <div className="about-tabs">
              <button
                type="button"
                className="tab-item active"
                data-target="#education"
              >
                education
              </button>
              <button
                type="button"
                className="tab-item"
                data-target="#experience"
              >
                experience
              </button>
              {/* Education Starts */}
              <div className="tab-content" id="education">
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">2013-2014</span>
                    <h4>
                      master of computer application -{" "}
                      <span>martin luther christian university</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro nostrum minima perspiciatis? Voluptates, doloremque
                      quia?
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">2013-2014</span>
                    <h4>
                      bachelor of computer application -{" "}
                      <span>punjab technical university</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro nostrum minima perspiciatis? Voluptates, doloremque
                      quia?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
