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
                            <p className="mb-4 text-white-50">Last updated: May 19, 2026</p>
                            
                            <h4 className="mt-4 mb-3">1. Agreement to Terms</h4>
                            <p className="text-white-50">By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>

                            <h4 className="mt-4 mb-3">2. Intellectual Property</h4>
                            <p className="text-white-50">The Service and its original content, features, and functionality are and will remain the exclusive property of Techno Dorbit and its licensors. The Service is protected by copyright, trademark, and other laws.</p>

                            <h4 className="mt-4 mb-3">3. Termination</h4>
                            <p className="text-white-50">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

                            <h4 className="mt-4 mb-3">4. Changes to Terms</h4>
                            <p className="text-white-50">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta2></Cta2>
        </div>
    );
};

export default TermsConditions;
