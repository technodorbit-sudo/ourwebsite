import { useState } from 'react';

const Cta2 = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Subscribing...");

        const submissionData = {
            email: email,
            access_key: "8b9ec994-7e2a-4620-be25-217b9c1912a7",
            subject: "New Newsletter Subscription",
            from_name: "Techno Dorbit Website"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(submissionData)
            });

            const json = await response.json();

            if (response.status === 200) {
                setResult("Thank you for subscribing!");
                setEmail('');
            } else {
                setResult(json.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Subscription error:", error);
            setResult("Error subscribing. Please try again.");
        }
    };

    return (

        <div className="cta2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading2">
                  <h2 className="title tg-element-title"> We are Committed To Businesses</h2>
                  <div className="space16"></div>
                  <p>At Techno Dorbit IT Solutions, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours. </p>

                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <div className="subscribe-form">
                        <form onSubmit={handleSubmit}>
                          <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                          />
                          <div className="button">
                            <button type="submit" className="theme-btn2">Subscribe <span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></button>
                          </div>
                        </form>
                      </div>
                      {result && <p className="mt-3 text-center" style={{ color: result.includes("Thank") ? "#a5ef35" : "#ff5555", fontWeight: '600' }}>{result}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
};

export default Cta2;