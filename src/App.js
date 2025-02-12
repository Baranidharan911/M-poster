import React, { useState } from "react";
import html2canvas from "html2canvas";
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

  const downloadPageAsImage = () => {
    const page = document.getElementById("capture-area");

    html2canvas(page, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "SLH_10K_Run.png";
      link.click();
    });
  };

  return (
    <div className="app-container">
      <div id="capture-area">  {/* Capturing this entire div */}
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
            <h2 className="hospital-titles highlight">SLH 10K!</h2>
            <p className="empowerment">Are you?</p>
          </div>

          <div className="right-side">
            <section className="event-details">
              <div className="women-empowerment">Women Empowerment</div>
              <sup>1st Edition</sup>
              <h2 className="hospital-title">Sri Lakshmi Hospital</h2>
              <h1 className="run-title">10K RUN</h1>
              <p className="women-empowerments">10K (Timed) | 5K (Timed) | 5K Family Run (Non Timed)</p>
              <h3 className="date">
                <span className="highlight">9th</span> March 2025
              </h3>
            </section>

            <section className="categories">
              <h4 className="fees-header">Categories and Fees Details:</h4>
              <ul className="fees-list">
                <li>5km Family Run (Non-Timed)</li>
                <p>₹555 + Processing fees</p>
                <li>5km Timed Run</li>
                <p>₹666 + Processing fees</p>
                <li>10K Timed Run</li>
                <p>₹799 + Processing fees</p>
              </ul>
            </section>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-top">
            <div className="curved-section">
              <span className="icon"><img src="/tshirt-icon.png" alt="T-Shirt" /><p>T-Shirt</p></span>
              <span className="icon"><img src="/medal-icon.png" alt="Medal" /><p>Medal</p></span>
              <span className="icon"><img src="/breakfast-icon.png" alt="Breakfast" /><p>Breakfast</p></span>
              <span className="icon"><img src="/refreshment-icon.png" alt="Refreshment" /><p>Refreshment</p></span>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <p className="footer-text">Start & Finish Point</p>
              <p className="footer-subtext">
                <span className="location-icon">📍</span> Sri Lakshmi College, MTP Road, Thudiyalur
              </p>
            </div>

            <div className="footer-right">
              <div className="qr-code">
                <img src="/qr-code.jpg" alt="QR Code" />
              </div>
              <p className="qr-text">Scan for Registration</p>
            </div>
          </div>

          <div className="footer-center">
            <a href="https://www.srilakshmimarathon.com" className="footer-link">
              🌐 www.srilakshmimarathon.com
            </a>
            <p className="footer-subtext">
              <span className="phone-icon">📞</span> +91 89259 00895 | +91 98434 11231
            </p>
          </div>
        </footer>
      </div>

      {/* Download Button */}
      <div className="download-section">
        <button className="download-button" onClick={downloadPageAsImage}>
          Download as Image
        </button>
      </div>
    </div>
  );
}

export default App;
