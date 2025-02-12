import React, { useState } from "react";
import "./App.css";  // Styles will be in here now!

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-container">  {/* Main container */}
      <header className="header">
          <div className="header-left">
              <h1 className="header-title">SRI LAKSHMI MEDICAL CENTRE & HOSPITAL</h1>
              <img src="/sri_lakshmi_group_logo.png" alt="Logo 1" className="logo" />
          </div>
          <div className="header-right">
              <h1 className="header-subtitle">SRI LAKSHMI GROUP OF INSTITUTIONS</h1>
              <img src="/nabh.png" alt="Logo 1" className="logo" />
              <img src="/nabh_16_years_logo.png" alt="Logo 2" className="logo" />
          </div>
      </header>

      <div className="middle-one">
        <div className="image-upload-containers">
          <div className="image-upload-container">
            {image ? (
              <img src={image} alt="Uploaded" className="uploaded-image" />
            ) : (
              <label htmlFor="file-input" className="upload-placeholder">
                Click to Add Photo
              </label>
            )}
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <p className="empowerment">I'm running</p>
          <h2 className="hospital-title highlight">SLH 10K!</h2>
          <p className="empowerment">Are you?</p>
        </div>

        <div className="right-side">
          <section className="event-details">
          <div class="women-empowerment">Women Empowerment</div>
              <sup>1st Edition</sup>
            <h2 className="hospital-title">Sri Lakshmi Hospital</h2>
            <h1 className="run-title">10K RUN</h1>
            <p className="women-empowerment">10K (Timed) | 5K (Timed) | 5K Family Run (Non-Timed)</p>
            <h3 className="date">
              <span className="highlight">9th</span> March 2025
            </h3>
          </section>

          <section className="categories">
            <h4 className="fees-header">Categories and Fees Details:</h4>
            <ul className="fees-list">
              <li>5km Family Run (Non-Timed): ₹555 + Processing fees</li>
              <li>5km Timed Run: ₹666 + Processing fees</li>
              <li>10K Timed Run: ₹799 + Processing fees</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="footer">
  <div className="footer-top">
    <div className="curved-section">
      <span className="icon"><img src="/dummy-tshirt-icon.png" alt="T-Shirt" /><p>T-Shirt</p></span>
      <span className="icon"><img src="/dummy-medal-icon.png" alt="Medal" /><p>Medal</p></span>
      <span className="icon"><img src="/dummy-breakfast-icon.png" alt="Breakfast" /><p>Breakfast</p></span>
      <span className="icon"><img src="/dummy-refreshment-icon.png" alt="Refreshment" /><p>Refreshment</p></span>
    </div>
  </div>

  <div className="footer-bottom">
    <p className="footer-text">
      <span className="location-icon">📍</span> Start & Finish Point: Sri Lakshmi College, MTP Road, Thudiyalur
    </p>
    <div className="footer-contact">
      <a href="https://www.srilakshmimarathon.com" className="footer-link">
        🌐 www.srilakshmimarathon.com
      </a>
      <span className="phone-icon">📞</span> +91 89259 00895 | +91 98434 11231
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;