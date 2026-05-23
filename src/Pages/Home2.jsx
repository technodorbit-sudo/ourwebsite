import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import Choose2 from "../Components/Choose/Choose2";
import Cta2 from "../Components/Cta/Cta2";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import HowWork1 from "../Components/HowWork/HowWork1";
import Service2 from "../Components/Services/Service2";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const Home2 = () => {
    return (
        <div>
            <HeroBanner2
                subTitle="Techno Dorbit - Web & Graphic Design"
                title="Empowering Your Digital Journey With Techno Dorbit"
                featureList={[
                    "React Websites",
                    "E-Commerce Solutions",
                    "Graphic Design",
                    "Business Automation",
                    "Premium Hosting",
                    "Brand Logos",
                    "Social Media Marketing",
                ]}
                badgeImage="/assets/img/shapes/hero2-shape1.png"
                globeImage="/assets/img/hero/hero2-main-img1.png"
                handImage="/assets/img/hero/hero2-main-img2.png"
            ></HeroBanner2>
            <About2
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum=""
                experienceTitle=""
                subTitle="Our Expertise"
                title="Empower Your Business With Our Digital Solutions"
                content="Techno Dorbit is a leading digital agency specializing in premium website development, comprehensive graphic design, and custom automation solutions. We bridge the gap between creative design and robust technical architecture to help businesses and brands thrive in the modern digital landscape. Our transparent approach and focus on high-quality, responsive delivery ensures your project is a resounding success."
            ></About2>

            <Service2></Service2>

            <Choose2></Choose2>
            <HowWork1></HowWork1>
            <Team1></Team1>
            <Testimonial2></Testimonial2>
            <Cta2></Cta2>
        </div>
    );
};

export default Home2;
