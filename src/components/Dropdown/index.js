import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
// import images
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Resume from "../../assets/resume.png";
import Upwork from "../../assets/upwork.png";
// import resume download
import MyResume from "../../assets/Joseph Penland Resume.pdf"

function Contact() {
  return (
    <Dropdown className="btn">
      <DropdownButton
        key="start"
        id={`dropdown-button-drop-start`}
        drop="start"
        variant="secondary"
        title="Contact">
        <Dropdown.Item href="https://www.linkedin.com/in/joseph-penland-148889146/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} className="size justify-content-md-center" alt="Linkedin"/>
        </Dropdown.Item>
        <Dropdown.Item href="https://github.com/Wtrickser/" target="_blank" rel="noopener noreferrer">
          <img src={Github} className="size justify-content-md-center" alt="Github"/>
        </Dropdown.Item>
        <Dropdown.Item href={MyResume} download="Joseph Penland Resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src={Resume} className="size justify-content-md-center" alt="Resume"/>
        </Dropdown.Item>
        <Dropdown.Item href="https://www.upwork.com/freelancers/~01091804af69c258bf/" target="_blank" rel="noopener noreferrer">
          <img src={Upwork} className="size justify-content-md-center" alt="Upwork"/>
        </Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  );
};

export default Contact;