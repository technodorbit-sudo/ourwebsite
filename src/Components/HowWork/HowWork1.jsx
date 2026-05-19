import { Link } from 'react-router-dom';
import data from '../../Data/home2/work2.json';
import SectionTitle from '../Common/SectionTitle';

const HowWork1 = () => {
    const phases = ["Start", "Build", "Verify", "Launch"];

    return (
        <div className="work2 tech-flow-work pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="How It Works"
                        Title="Unlocking Success The Path To Seamless Solutions"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="tech-flow-map tech-step-workflow">
              <div className="tech-flow-line" aria-hidden="true">
                <span></span>
              </div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className={item.addClass}>
                <div className="work2-box tech-flow-card" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="tech-flow-card-top">
                    <span className="tech-flow-phase">{phases[i] || `Step ${i + 1}`}</span>
                    <span className="tech-flow-node" aria-hidden="true"></span>
                  </div>
                  <div className="tech-flow-step-row">
                    <span className="tech-flow-step">0{i + 1}</span>
                    {i < data.length - 1 && <span className="tech-flow-arrow" aria-hidden="true"><i className="bi bi-arrow-right"></i></span>}
                  </div>
                  <div className="space20"></div>
                  <div className="heading2">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space10"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
             
            </div>
            </div>
          </div>
        </div>
    );
};

export default HowWork1;
