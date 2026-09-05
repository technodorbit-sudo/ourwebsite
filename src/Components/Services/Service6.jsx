import { Link } from 'react-router-dom';
import data from '../../Data/sercicePage.json';

const Service6 = () => {
    const serviceMeta = [
      { bestFor: "Any business website", result: "A responsive web presence built around your goals", tag: "Web" },
        { bestFor: "Selling products online", result: "Store, cart and payment-ready flow", tag: "Commerce" },
        { bestFor: "Brand visibility", result: "Logo, creatives and marketing design", tag: "Creative" },
        { bestFor: "Saving manual work", result: "Automated updates and integrations", tag: "Smart" },
        { bestFor: "Old website upgrade", result: "Fresh UI, better UX and performance", tag: "Refresh" },
      { bestFor: "Growing operations", result: "Connected workflows, reporting and business control", tag: "Enterprise" },
      { bestFor: "Digital product designs", result: "Physical prototypes ready to test and refine", tag: "Prototype" },
    ];

    const servicePaths = [
        "I need a website",
      "I need online sales",
      "I need brand design",
      "I need automation",
      "I need custom business software",
      "I need a physical prototype",
    ];

    const serviceFeatures = [
      ["HTML, CSS, JS and React builds", "Backend, database and admin integration", "Responsive, fast and scalable UI"],
        ["E-commerce store setup", "Checkout & payment flow", "Product and cart management"],
        ["Brand identity assets", "Marketing-ready visuals", "Consistent design system"],
        ["Automation workflows", "Updates & notifications", "Third-party connection"],
      ["Website refresh package", "Modern UX redesign", "Performance improvements"],
      ["Workflow-specific modules", "Reports, roles and permissions", "Integrations with existing tools"],
      ["Digital model preparation", "Accurate physical prototypes", "Material and finish guidance"],
    ];

    return (
        <div className="servcie2 service-page-sec premium-service-page">
            <div className="space100"></div>
        <div className="container">
          <div className="premium-service-intro" data-aos="fade-up" data-aos-duration="700">
            <span>Service System</span>
            <h2>Premium digital services built as one connected growth engine</h2>
            <p>Choose a focused service or combine web, design, commerce, automation and business software into a complete digital workflow.</p>
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
            <p className="service-path-description"></p>
          </div>

          <div className="premium-service-grid-redesigned">
            {data.map((item, i) => (
              <div key={i} className={`premium-service-item-redesigned premium-service-item-${i + 1}`} data-aos="zoom-in-up" data-aos-duration="700">
                <div className="servcie2-box premium-service-card-redesigned">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="icon-glow"></div>
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-content">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <p>{item.desc}</p>

                    <div className="service-card-features">
                      <ul>
                        {serviceFeatures[i]?.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="premium-service-result">
                      <div className="result-item">
                        <span className="result-label">Best for</span>
                        <strong>{serviceMeta[i]?.bestFor}</strong>
                      </div>
                      <div className="result-item">
                        <span className="result-label">Result</span>
                        <strong>{serviceMeta[i]?.result}</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-footer">
                    <Link to="/contact#contact-form" className="service-arrow-btn">
                      <span>Learn More</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                  <div className="card-overlay-effects">
                    <div className="shine-effect"></div>
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
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
