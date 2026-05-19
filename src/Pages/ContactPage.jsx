import BreadCumb2 from "../Components/Common/BreadCumb2";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb2 Title="Contact Us"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <ContactInfo1></ContactInfo1>
            <Cta2></Cta2>
        </div>
    );
};

export default ContactPage;