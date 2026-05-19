const services = [
  "Website Design in HTML CSS JS", "Static Website", "React Website", "E-Commerce", "Website Redesign", 
  "Automation Solutions", "Professional Custom Logo", "Brand Logo", 
  "Business Card Design", "Social Media Posts", "YouTube Thumbnail", 
  "Brochure Design", "Flyer Design", "Poster Design", "Magazine Design", 
  "Book Cover Design", "Company Profile Design"
];

const MarqueeText = () => {
    return (
        <section className="hero10-benar">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="marquee-wrap marquee-wrap-inner">
                    <div className="marquee-text" style={{ display: 'flex', alignItems: 'center' }}>
                      {[...services, ...services, ...services].map((service, index) => (
                        <div key={index} className="brand-single-box" style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', whiteSpace: 'nowrap' }}>{service}</span>
                          <span style={{ fontSize: '18px', color: '#000' }}>☼</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-after"></div>
            </div>
          </section>
    );
};

export default MarqueeText;