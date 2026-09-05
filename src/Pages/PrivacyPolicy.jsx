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
                            <p className="mb-4 text-white-50">Last updated: September 5, 2026</p>
                            <p className="text-white-50">Techno Dorbit respects your privacy. This policy explains what information we collect when you use our website, contact us, or request our services, and how we use that information.</p>

                            <h4 className="mt-4 mb-3">1. Information We Collect</h4>
                            <p className="text-white-50">We may collect your name, company name, email address, phone number, service requirements, project details, and any other information you submit through our forms or direct communications.</p>
                            <p className="text-white-50">We may also receive basic technical information such as browser type, device type, pages visited, and general usage information when you browse our website.</p>

                            <h4 className="mt-4 mb-3">2. How We Use Your Information</h4>
                            <p className="text-white-50">We use your information to respond to enquiries, prepare quotations, provide requested services, communicate about projects, improve our website, prevent misuse, and maintain business records.</p>

                            <h4 className="mt-4 mb-3">3. Contact Forms and WhatsApp</h4>
                            <p className="text-white-50">If you contact us through our website form, email, phone, or WhatsApp, we use the information you provide to respond to your request. WhatsApp conversations are also subject to WhatsApp's own privacy practices and terms.</p>

                            <h4 className="mt-4 mb-3">4. Cookies and Analytics</h4>
                            <p className="text-white-50">Our website may use essential browser storage or analytics tools to help the site function, understand general traffic, and improve the user experience. You can manage cookies through your browser settings.</p>

                            <h4 className="mt-4 mb-3">5. Sharing of Information</h4>
                            <p className="text-white-50">We do not sell your personal information. We may share relevant information with trusted service providers who help us operate our website, process enquiries, deliver services, or provide technical support. We only share information reasonably needed for those purposes.</p>

                            <h4 className="mt-4 mb-3">6. Data Security and Retention</h4>
                            <p className="text-white-50">We take reasonable administrative and technical steps to protect personal information. We retain information only for as long as reasonably necessary to respond to enquiries, provide services, maintain records, resolve disputes, and meet applicable obligations.</p>

                            <h4 className="mt-4 mb-3">7. Your Choices</h4>
                            <p className="text-white-50">You may contact us to ask what personal information we hold about you, request a correction, or ask us to stop using your information for a particular communication purpose, subject to applicable legal and business requirements.</p>

                            <h4 className="mt-4 mb-3">8. Changes to This Policy</h4>
                            <p className="text-white-50">We may update this policy when our services, technology, or legal obligations change. The updated version will be posted on this page with a new revision date.</p>

                            <h4 className="mt-4 mb-3">9. Contact Us</h4>
                            <p className="text-white-50">For privacy questions or requests, contact Techno Dorbit at <a href="mailto:technodorbit@gmail.com" className="text-info">technodorbit@gmail.com</a> or +91 96875 67294.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta2></Cta2>
        </div>
    );
};

export default PrivacyPolicy;
