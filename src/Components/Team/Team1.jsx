import SectionTitle from '../Common/SectionTitle';

const Team1 = () => {
    return (
        <div className="team2 pt100">
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
              
              <div className="col-lg-5 col-md-6 mb-4">
                <div className="premium-team-card" data-aos="fade-up" data-aos-duration="700">
                  <div className="premium-team-icon-wrap">
                      <i className="bi bi-code-slash" style={{ fontSize: '2.5rem', color: '#5956E9', transition: 'color 0.4s ease' }}></i>
                  </div>
                  <h4 className="premium-team-title">Website & Mobile Developers</h4>
                  <p className="premium-team-subtitle">Top Tier Experts</p>
                  <p className="premium-team-desc">Our highly experienced developers specialize in building robust full-stack websites, mobile applications, and powerful business automation solutions.</p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4">
                <div className="premium-team-card" data-aos="fade-up" data-aos-duration="900">
                  <div className="premium-team-icon-wrap">
                      <i className="bi bi-palette" style={{ fontSize: '2.5rem', color: '#5956E9', transition: 'color 0.4s ease' }}></i>
                  </div>
                  <h4 className="premium-team-title">Graphic Designers</h4>
                  <p className="premium-team-subtitle">Creative Visionaries</p>
                  <p className="premium-team-desc">Our creative design team brings extensive expertise in graphic design, ensuring premium brand identity and visually stunning communication for all your needs.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
    );
};

export default Team1;