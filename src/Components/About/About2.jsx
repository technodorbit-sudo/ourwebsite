import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const About2 = ({image1,image2,image3,experienceNum,experienceTitle,subTitle,title,content,counName1,CounNum1,counName2,CounNum2}) => {
    return (
        <div className="about2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="tech-expertise-visual">
                    <div className="tech-expertise-orbit" aria-hidden="true">
                      <span></span>
                      <span></span>
                    </div>

                    <div className="tech-expertise-core" data-aos="zoom-in" data-aos-duration="800">
                      <span className="tech-core-icon"><i className="bi bi-cpu"></i></span>
                      <h4>Creative Tech Core</h4>
                      <p>Design, code and automation working together.</p>
                    </div>

                    <div className="tech-expertise-chip chip-one"><i className="bi bi-code-slash"></i> React</div>
                    <div className="tech-expertise-chip chip-two"><i className="bi bi-bag-check"></i> E-Commerce</div>
                    <div className="tech-expertise-chip chip-three"><i className="bi bi-palette"></i> Branding</div>
                    <div className="tech-expertise-chip chip-four"><i className="bi bi-lightning-charge"></i> Automation</div>

                    <div className="tech-expertise-panel panel-one">
                      <span>UI</span>
                      <strong>Premium</strong>
                    </div>
                    <div className="tech-expertise-panel panel-two">
                      <span>Speed</span>
                      <strong>Fast</strong>
                    </div>
                    <div className="tech-expertise-panel panel-three">
                      <span>Scale</span>
                      <strong>Ready</strong>
                    </div>

                  {experienceNum && (
                    <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                      <h3>{experienceNum}</h3>
                      <p>{parse(experienceTitle)}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="heading2">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src="/assets/img/icons/span2.png" alt="" /> {subTitle}</span>
                  <h2 className="title tg-element-title">{title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-up-left" data-aos-duration="700">{content}</p>
                  <p data-aos="fade-up-left" data-aos-duration="800" style={{ marginTop: '15px', fontStyle: 'italic', color: '#ccc' }}>
                    <strong>Founders:</strong> Dhruv Parekh & Parthvi Vyas<br/>
                    Driven by a passion for innovation, our founders established Techno Dorbit to deliver exceptional digital services, combining technical excellence with creative brilliance to help businesses scale seamlessly.
                  </p>

                  <div className="space10"></div>

                  <div className="space20"></div>
                  <h5 style={{ color: "#fff", fontSize: "20px", marginBottom: "15px" }}>Our Solutions</h5>
                  <ul className="expart-list" style={{ listStyle: "none", padding: 0, color: "#fff" }}>
                      <li style={{ marginBottom: "10px" }}><span className="check" style={{ marginRight: "10px" }}><i className="bi bi-check-lg" style={{ color: "#5956E9" }}></i></span> <strong style={{ color: "#fff" }}>Website Development:</strong> React, E-Commerce, Business & Static Websites</li>
                      <li style={{ marginBottom: "10px" }}><span className="check" style={{ marginRight: "10px" }}><i className="bi bi-check-lg" style={{ color: "#5956E9" }}></i></span> <strong style={{ color: "#fff" }}>Graphic Design:</strong> Logos, Social Media, Brochures & Branding</li>
                      <li style={{ marginBottom: "10px" }}><span className="check" style={{ marginRight: "10px" }}><i className="bi bi-check-lg" style={{ color: "#5956E9" }}></i></span> <strong style={{ color: "#fff" }}>Automation Solutions:</strong> Business workflows, integrations & notifications</li>
                  </ul>

                  <div className="space30"></div>
                  <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                    <Link className="theme-btn2" to="/about">Learn More <span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About2;
