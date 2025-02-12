import React, { useState } from "react";
import "./App.css";

const SLH10KRun = () => {
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
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <h1>SRI LAKSHMI MEDICAL CENTRE & HOSPITAL</h1>
          <h2>SRI LAKSHMI GROUP OF INSTITUTIONS</h2>
        </div>
        <div className="header-right">
          <img src="/dummy-logo1.png" alt="Logo 1" className="logo" />
          <img src="/dummy-logo2.png" alt="Logo 2" className="logo" />
        </div>
      </header>

      {/* Black Space for Image Upload */}
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

      {/* Event Details */}
      <section className="event-details">
        <p>I'm running</p>
        <h1>SLH 10K!</h1>
        <p>Are you?</p>
        <div className="event-info">
          <p>Women Empowerment</p>
          <h2>Sri Lakshmi Hospital</h2>
          <h1>10K RUN</h1>
          <p>10K (Timed) | 5K (Timed) | 5K Family Run (Non-Timed)</p>
          <h3>9th March 2025</h3>
        </div>
      </section>

      {/* Categories and Fees */}
      <section className="categories">
        <h4>Categories and Fees Details:</h4>
        <ul>
          <li>5km Family Run (Non-Timed): ₹555 + Processing fees</li>
          <li>5km Timed Run: ₹666 + Processing fees</li>
          <li>10K Timed Run: ₹799 + Processing fees</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
          {/* Dummy icons */}
          <span><img src="/dummy-tshirt-icon.png" alt="T-Shirt" /></span>
          <span><img src="/dummy-medal-icon.png" alt="Medal" /></span>
          <span><img src="/dummy-breakfast-icon.png" alt="Breakfast" /></span>
          <span><img src="/dummy-refreshment-icon.png" alt="Refreshment" /></span>
        </div>
        <p>Start & Finish Point: Sri Lakshmi College, MTP Road, Thudiyalur</p>
        <p>Contact: +91 89259 00895 | +91 98434 11231</p>
        <a href="#">www.srilakshmimarathon.com</a>
      </footer>
    </div>
  );
};

export default SLH10KRun;
