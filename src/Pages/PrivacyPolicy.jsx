import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";

const PrivacyPolicy = () => {
    return (
        <div>
            <BreadCumb2 Title="Privacy Policy"></BreadCumb2>
            <div className="container py-5 mt-5 mb-5 text-white">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="p-5 rounded" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)" }}>
                            <h2 className="mb-4" style={{ color: "#38dcff" }}>Privacy Policy</h2>
                            <p className="mb-4 text-white-50">Last updated: May 19, 2026</p>
                            
                            <h4 className="mt-4 mb-3">1. Information We Collect</h4>
                            <p className="text-white-50">We collect information that you provide directly to us, including when you fill out a form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.</p>

                            <h4 className="mt-4 mb-3">2. How We Use Your Information</h4>
                            <p className="text-white-50">We use the information we collect to provide, maintain, and improve our services, communicate with you, monitor and analyze trends, usage, and activities in connection with our services, and to personalize your experience.</p>

                            <h4 className="mt-4 mb-3">3. Data Security</h4>
                            <p className="text-white-50">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

                            <h4 className="mt-4 mb-3">4. Contact Us</h4>
                            <p className="text-white-50">If you have any questions about this Privacy Policy, please contact us at technodorbit@gmail.com.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta2></Cta2>
        </div>
    );
};

export default PrivacyPolicy;
