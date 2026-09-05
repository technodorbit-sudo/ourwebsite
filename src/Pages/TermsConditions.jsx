import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";

const TermsConditions = () => {
    return (
        <div>
            <BreadCumb2 Title="Terms & Conditions"></BreadCumb2>
            <div className="container py-5 mt-5 mb-5 text-white">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="p-5 rounded" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)" }}>
                            <h2 className="mb-4" style={{ color: "#a5ef35" }}>Terms & Conditions</h2>
                            <p className="mb-4 text-white-50">Last updated: September 5, 2026</p>
                            <p className="text-white-50">These Terms & Conditions govern your use of the Techno Dorbit website and our discussions about digital, design, automation, software, and 3D printing services. By using this website, you agree to these terms.</p>

                            <h4 className="mt-4 mb-3">1. Our Services</h4>
                            <p className="text-white-50">Techno Dorbit provides website development, e-commerce, graphic design, automation, website redesign, ERP and custom software, and 3D printing and prototyping services. The final scope, timeline, deliverables, fees, revisions, and responsibilities will be confirmed separately for each engagement.</p>

                            <h4 className="mt-4 mb-3">2. Enquiries and Proposals</h4>
                            <p className="text-white-50">Information on this website is general information and does not create a binding offer. A quotation or proposal becomes applicable only after the project details and terms are accepted by both parties.</p>

                            <h4 className="mt-4 mb-3">3. Client Responsibilities</h4>
                            <p className="text-white-50">You are responsible for providing accurate information, content, brand assets, approvals, access credentials, and feedback needed for the agreed work. Delays in receiving required materials or approvals may affect delivery timelines.</p>

                            <h4 className="mt-4 mb-3">4. Payments and Delivery</h4>
                            <p className="text-white-50">Payment amounts, due dates, deposits, taxes, hosting, domain fees, third-party subscriptions, delivery charges, and cancellation terms will be stated in the applicable quotation or agreement. Work may be paused when agreed payments or required approvals are overdue.</p>

                            <h4 className="mt-4 mb-3">5. Intellectual Property</h4>
                            <p className="text-white-50">Each party retains ownership of materials it supplied before the project. Ownership or usage rights for final deliverables transfer only as stated in the applicable project agreement and after the required payments are completed. Third-party libraries, fonts, stock assets, hosting, and software remain subject to their own licenses.</p>

                            <h4 className="mt-4 mb-3">6. Acceptable Use</h4>
                            <p className="text-white-50">You must not use our website or services for unlawful activity, fraud, abuse, infringement, malware, harassment, or any activity that could harm our systems, team, clients, or third parties.</p>

                            <h4 className="mt-4 mb-3">7. Third-Party Services</h4>
                            <p className="text-white-50">Projects may use third-party platforms such as hosting providers, payment services, APIs, analytics tools, messaging platforms, or deployment services. Their availability, pricing, policies, and performance are controlled by those providers.</p>

                            <h4 className="mt-4 mb-3">8. Warranty and Limitation</h4>
                            <p className="text-white-50">We will provide services with reasonable care and skill based on the agreed scope. Unless expressly stated in writing, we do not guarantee uninterrupted operation, specific business results, third-party availability, or that a website will be completely free of defects. To the extent permitted by law, Techno Dorbit is not responsible for indirect or consequential losses.</p>

                            <h4 className="mt-4 mb-3">9. Termination</h4>
                            <p className="text-white-50">Either party may end a project according to the applicable quotation or agreement. Fees for completed work, approved expenses, third-party costs, and work already committed may remain payable after termination.</p>

                            <h4 className="mt-4 mb-3">10. Changes to These Terms</h4>
                            <p className="text-white-50">We may update these terms when our services, technology, or legal obligations change. The updated version will be posted on this page with a new revision date.</p>

                            <h4 className="mt-4 mb-3">11. Contact Us</h4>
                            <p className="text-white-50">If you have questions about these terms, contact Techno Dorbit at <a href="mailto:technodorbit@gmail.com" className="text-info">technodorbit@gmail.com</a> or +91 96875 67294.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta2></Cta2>
        </div>
    );
};

export default TermsConditions;
