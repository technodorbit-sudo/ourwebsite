import About2 from "../Components/About/About2";
import Choose2 from "../Components/Choose/Choose2";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const AboutDark = () => {
    return (
        <div>
            <BreadCumb2 Title="About Us"></BreadCumb2>
            <MarqueeText></MarqueeText>
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
            <Choose2></Choose2>
            <Testimonial2></Testimonial2>
            <Team1></Team1>
            <Cta2></Cta2>
        </div>
    );
};

export default AboutDark;
