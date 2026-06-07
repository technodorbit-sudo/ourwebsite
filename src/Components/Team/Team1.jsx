import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const Team1 = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="team2-premium pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="Our Team"
                        Title="A Highly Knowledgeable & Experienced Team"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row justify-content-center">
              
              <div className="col-lg-5 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="600">
                <div 
                  className={`premium-team-card-v2 ${hoveredCard === 0 ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="team-card-bg-gradient"></div>
                  <div className="team-card-content-v2">
                    <div className="team-icon-container-premium">
                      <div className="team-icon-circle-premium">
                        <i className="bi bi-code-slash"></i>
                      </div>
                    </div>
                    <h4 className="premium-team-title-v2">Website & Mobile Developers</h4>
                    <p className="premium-team-subtitle-v2">Top Tier Experts</p>
                    <p className="premium-team-desc-v2">Our highly experienced developers specialize in building robust full-stack websites, mobile applications, and powerful business automation solutions.</p>
                    <div className="team-stats-premium">
                      <span className="stat-badge">Expert Level</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800">
                <div 
                  className={`premium-team-card-v2 ${hoveredCard === 1 ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="team-card-bg-gradient"></div>
                  <div className="team-card-content-v2">
                    <div className="team-icon-container-premium">
                      <div className="team-icon-circle-premium design">
                        <i className="bi bi-palette"></i>
                      </div>
                    </div>
                    <h4 className="premium-team-title-v2">Graphic Designers</h4>
                    <p className="premium-team-subtitle-v2">Creative Visionaries</p>
                    <p className="premium-team-desc-v2">Our creative design team brings extensive expertise in graphic design, ensuring premium brand identity and visually stunning communication for all your needs.</p>
                    <div className="team-stats-premium">
                      <span className="stat-badge creative">Creative Pro</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
    );
};

export default Team1;