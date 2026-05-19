import { Link } from "react-router-dom";

const HeroBanner2 = ({ subTitle, title, featureList, badgeImage, globeImage, handImage }) => {
  return (
    <div className="hero2 tech-orbit-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-heading">
              <span className="span" data-aos="zoom-in-right" data-aos-duration="700"><img src="/assets/img/icons/span2.png" alt="" /> {subTitle}</span>
              <h1 className="title tg-element-title">{title}</h1>
            </div>

            <div className="row _relative">
              <div className="col-lg-9">
                <div className="hero2-tags">
                  <ul>
                    {featureList?.map((item, index) => (
                      <li key={index}><Link to="#">{item}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="tech-hero-stage" aria-label="Robotic hand holding an orbiting digital globe">
              <div className="tech-hero-vortex" aria-hidden="true"></div>
              <div className="tech-orbit-globe">
                <div className="tech-globe-halo" aria-hidden="true"></div>
                <div className="tech-orbit-ring tech-orbit-ring-one" aria-hidden="true">
                  <span className="tech-orbit-dot tech-orbit-dot-blue"></span>
                </div>
                <div className="tech-orbit-ring tech-orbit-ring-two" aria-hidden="true">
                  <span className="tech-orbit-dot tech-orbit-dot-pink"></span>
                </div>
                <div className="tech-orbit-ring tech-orbit-ring-three" aria-hidden="true">
                  <span className="tech-orbit-dot tech-orbit-dot-cyan"></span>
                </div>
                <img src={globeImage} alt="Digital globe" className="tech-globe-img" />
              </div>

              <div className="tech-robot-hand">
                <span className="tech-palm-glow" aria-hidden="true"></span>
                <img src={handImage} alt="Robot hand" />
              </div>

              <div className="tech-energy-arc tech-energy-arc-one" aria-hidden="true"></div>
              <div className="tech-energy-arc tech-energy-arc-two" aria-hidden="true"></div>

              <div className="tech-hero-badge round-circle2">
                <img src={badgeImage} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default HeroBanner2;
