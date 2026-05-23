import { Link } from 'react-router-dom';
import data from '../../Data/home2/services2.json';
import SectionTitle from '../Common/SectionTitle';

const Service2 = () => {
    return (
        <div className="servcie2 tech-service-section-premium pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="Our Service"
                        Title="Empower Your Business with Our Comprehensive IT Solutions"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="tech-service-grid-premium">
              <div className="tech-service-hub-premium" data-aos="fade-up" data-aos-duration="700">
                <span className="tech-service-hub-kicker-premium">Digital Studio</span>
                <h3>Techno Dorbit</h3>
                <p>Websites, branding, e-commerce and automation connected into one growth system.</p>
              </div>
            {data.map((item, i) => (
              <div key={i} className="tech-service-cell-premium" data-aos="fade-up" data-aos-duration={600 + i * 100}>
                  <div className="tech-service-card-premium">
                    <div className="service-premium-header">
                      <span className="tech-service-count-premium">0{i + 1}</span>
                      <div className="icon-premium">
                        <img src={item.icon} alt={item.title} />
                      </div>
                    </div>
                    <div className="heading2">
                      <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                      <div className="space16"></div>
                      <p>{item.desc}</p>
                    </div>
                    <Link to={item.btnLink} className="premium-service-btn">
                      <span className="btn-text">Explore</span>
                      <span className="btn-icon"><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
              </div>
            ))}

            </div>

            <div className="space40 tech-service-button-space"></div>
            <div className="row">
              <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-duration="700">
                <Link className="theme-btn-premium" to="/service">View All Services <span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></Link>
              </div>
            </div>

          </div>
        </div>
    );
};

export default Service2;
