import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("achrafmazouz50@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            {/* EMAIL COPY */}
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>achrafmazouz50@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:achrafmazouz50@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
            {/* CONTACT FORM WITH FORMSPREE */}
            <div style={{ marginTop: "30px" }}>
              <form
  action="https://formspree.io/f/meorzobo"
  method="POST"
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    maxWidth: "450px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "15px",
    background: "#ffffff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
    style={{
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1.5px solid #ddd",
      fontSize: "16px",
      outline: "none",
      transition: "all 0.3s ease",
    }}
    onFocus={(e) => {
      e.target.style.borderColor = "#ff6600";
      e.target.style.boxShadow = "0 0 8px rgba(255, 102, 0, 0.3)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = "#ddd";
      e.target.style.boxShadow = "none";
    }}
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
    style={{
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1.5px solid #ddd",
      fontSize: "16px",
      outline: "none",
      transition: "all 0.3s ease",
    }}
    onFocus={(e) => {
      e.target.style.borderColor = "#ff6600";
      e.target.style.boxShadow = "0 0 8px rgba(255, 102, 0, 0.3)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = "#ddd";
      e.target.style.boxShadow = "none";
    }}
  />

  <textarea
    name="message"
    placeholder="Your message"
    rows="4"
    required
    style={{
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1.5px solid #ddd",
      fontSize: "16px",
      outline: "none",
      transition: "all 0.3s ease",
      resize: "none",
    }}
    onFocus={(e) => {
      e.target.style.borderColor = "#ff6600";
      e.target.style.boxShadow = "0 0 8px rgba(255, 102, 0, 0.3)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = "#ddd";
      e.target.style.boxShadow = "none";
    }}
  />

  <button
    type="submit"
    style={{
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      background: "linear-gradient(135deg, #e07b00, #e07b00)",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "linear-gradient(135deg, #e07b00, #e07b00)";
      e.target.style.transform = "translateY(-2px)";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "linear-gradient(135deg, #e07b00, #e07b00)";
      e.target.style.transform = "translateY(0)";
    }}
  >
    Send Message
  </button>
</form>

            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
