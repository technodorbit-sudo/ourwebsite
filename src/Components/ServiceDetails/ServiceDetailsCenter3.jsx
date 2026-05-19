import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import { Link } from "react-router-dom";

const ServiceDetailsCenter3 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 m-auto">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/service/service-details-img.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Modern Digital Solutions</h2>
                                        <div className="space16"></div>
                                        <p>Welcome to Techno Dorbit, your premier destination for comprehensive web development and graphic design services tailored to meet your business needs. Our team of experienced creators is dedicated to delivering high-quality, scalable, and innovative digital solutions that drive business growth success.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Our Approach</h5>
                                                <div className="space16"></div>
                                                <p>At Techno Dorbit, we take a client-centric approach to digital development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals, target audience, and technical specifications. We then collaborate closely with you at every stage of the creative cycle to ensure that the final product exceeds your expectations.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Custom Development</h5>
                                                <div className="space20"></div>
                                                <p>Our team specializes in developing custom software solutions tailored to address your specific business challenges. Whether you need a web application, mobile app, or enterprise </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Development Services</h5>
                                                <div className="space20"></div>
                                                <p>From initial concept and design to development, testing, and deployment, we offer comprehensive full-cycle development services to ensure a seamless and efficient development process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Our Approach</h5>
                                        <div className="space16"></div>
                                        <p>At Techno Dorbit, we take a client-centric approach to digital development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals, target audience, and technical specifications. We then collaborate closely with you at every stage of the creative cycle to ensure that the final product exceeds your expectations.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Frontend:</span> (HTML, CSS, JavaScript, React, TailwindCSS)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Backend:</span> (Node.js, Express, MongoDB, Firebase)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Design Tools:</span> (Figma, Adobe Illustrator, Photoshop)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Automation:</span> (Make.com, Zapier, Custom scripts)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Hosting:</span> (Vercel, Netlify, Premium cPanel)</li>
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

                            <div className="row">
                                      <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">React Websites</Link></h4>
                                      <div className="space16"></div>
                                      <p>Modern UI, responsive layout, advanced animation, and fast loading performance.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon5.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">Graphic Design</Link></h4>
                                      <div className="space16"></div>
                                      <p>Professional logos, social media posts, brochures, flyers, and creative branding.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                            </div>

                            <div className="space50"></div>

                            <div className="faq-area-all">
                                <div className="heading1">
                                    <h5>Frequently Asked Question</h5>
                                </div>
                                <div className="space20"></div>

                                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">

                                {data.slice(0,4).map((item, index)=>(
                                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
                                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        {item.title}
                                        </button>
                                      </h2>
                                      <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{item.desc}</div>
                                      </div>
                                    </div>
                                    ))}

                                  </div>
                            </div>

                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCenter3;
