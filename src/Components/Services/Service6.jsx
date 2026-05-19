import { Link } from 'react-router-dom';
import data from '../../Data/sercicePage.json';

const Service6 = () => {
    const serviceMeta = [
        { bestFor: "New business launch", result: "Clean, responsive web presence", tag: "Starter" },
        { bestFor: "Modern animated website", result: "Fast React UI with premium feel", tag: "Popular" },
        { bestFor: "Company operations", result: "Dynamic website with backend control", tag: "Scale" },
        { bestFor: "Selling products online", result: "Store, cart and payment-ready flow", tag: "Commerce" },
        { bestFor: "Brand visibility", result: "Logo, creatives and marketing design", tag: "Creative" },
        { bestFor: "Saving manual work", result: "Automated updates and integrations", tag: "Smart" },
        { bestFor: "Old website upgrade", result: "Fresh UI, better UX and performance", tag: "Refresh" },
    ];

    const servicePaths = [
        "I need a website",
        "I need online sales",
        "I need brand design",
        "I need automation",
    ];

    return (
        <div className="servcie2 service-page-sec premium-service-page">
            <div className="space100"></div>
        <div className="container">
          <div className="premium-service-intro" data-aos="fade-up" data-aos-duration="700">
            <span>Service System</span>
            <h2>Premium digital services built as one connected growth engine</h2>
            <p>Choose a focused service or combine web, design, commerce and automation into a complete digital workflow.</p>
          </div>

          <div className="service-decision-panel" data-aos="fade-up" data-aos-duration="800">
            <div className="decision-copy">
              <span>Start Here</span>
              <h3>Pick the outcome you want. We handle the technical path.</h3>
            </div>
            <div className="decision-options">
              {servicePaths.map((path, index) => (
                <a href="#service-options" key={path}>
                  <strong>0{index + 1}</strong>
                  {path}
                </a>
              ))}
            </div>
          </div>

          <div id="service-options" className="service-path-label">
            <span>Service Options</span>
          </div>

          <div className="premium-service-grid">
          {data.map((item, i) => (
            <div key={i} className="premium-service-item" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="servcie2-box premium-service-card">
                  <span className="premium-service-tag">{serviceMeta[i]?.tag}</span>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <Link to={item.btnLink} className="arrow"><i className="bi bi-arrow-right"></i></Link>
                  <div className="heading1">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                    <div className="premium-service-result">
                      <span>Best for</span>
                      <strong>{serviceMeta[i]?.bestFor}</strong>
                      <span>Result</span>
                      <strong>{serviceMeta[i]?.result}</strong>
                    </div>
                  </div>
                </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    );
};

export default Service6;
