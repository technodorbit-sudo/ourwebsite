import { Link } from "react-router-dom";
import logo from '../../assets/td.png';

const Footer2 = () => {
    return (
        <div className="footer2 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <Link to="/"><img src={logo} alt="Techno Dorbit" className="techxen-main-logo" /></Link>
                            </div>
                            <div className="space20"></div>
                            <div className="heading2">
                              <p>At Techno Dorbit, we are dedicated to delivering innovative technology, robust web applications, graphic design, and automation solutions tailored to meet the unique needs of businesses and brands.</p>
                            </div>
                            <ul className="social-icon">
                                <li><a href="https://www.linkedin.com/in/techno-dorbit-undefined-6a91a1413" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/share/1DorrhRozQ/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/technodorbit?igsh=YngxeWp5cXVsemV1" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                                <li><a href="https://wa.me/919687567294" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Service We Offer</h3>

                            <ul className="menu-list">
                                <li><Link to="/service">Website Design &amp; Development</Link></li>
                                <li><Link to="/service">E-Commerce Solutions</Link></li>
                                <li><Link to="/service">Graphic Design</Link></li>
                                <li><Link to="/service">Automation Solutions</Link></li>
                                <li><Link to="/service">Website Redesign</Link></li>
                                <li><Link to="/service">ERP Systems &amp; Custom Software</Link></li>
                                <li><Link to="/service">3D Printing &amp; Prototyping</Link></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items pl-5">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/service">Our Services</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
                            </ul>
                       </div>
                  </div>


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Us</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:9687567294">+91 96875 67294</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:+916352376755">+91 6352 376 755</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:technodorbit@gmail.com">technodorbit@gmail.com</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="https://technodorbit.com">www.technodorbit.com</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space70"></div>
        </div>

        <div className="copyright-area _relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>Copyright © 2026 Techno Dorbit. All Rights Reserved</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                   </div>
              </div>
         </div>
          </div>

          <a href="#" className="arrow-up"><i className="bi bi-arrow-up"></i></a>
     </div>

      </div>
    );
};

export default Footer2;
