import React from "react";
import "../styles/LegalDocs.css";

function Legal() {
  return (
    <div className="legal-section">
      <div className="legal-container">
        <section id="general-info">
          <h2>General Info</h2>
          <p>
            Welcome to TechnoTrench, your premier destination for innovative IT
            solutions and consultancy services. Our mission is to provide
            cutting-edge technology solutions tailored to meet the unique needs
            of businesses and individuals alike. By engaging with our platform,
            you acknowledge and agree to abide by the terms outlined in our
            Privacy Policy and Terms of Service.
          </p>
        </section>

        <section id="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
            At TechnoTrench, we prioritize the confidentiality and security of
            your information. Our Privacy Policy outlines how we collect,
            utilize, and safeguard your personal and professional data. Rest
            assured, your information is handled with the utmost care and
            confidentiality.
          </p>
        </section>

        <section id="terms-of-service">
          <h2>Terms of Service</h2>
          <p>
            By utilizing TechnoTrench's services, you agree to adhere to our
            Terms of Service. These terms govern your usage of our platform,
            interactions with our team, and mutual responsibilities. It's
            imperative to familiarize yourself with these terms to ensure a
            seamless experience for all parties involved.
          </p>
        </section>

        <section id="legal-docs">
          <h2>Legal Docs</h2>
          <p>
            As a testament to our commitment to quality and excellence,
            TechnoTrench proudly holds an MSME (Micro, Small, and Medium
            Enterprises) certification. This certification underscores our
            dedication to providing exceptional IT services and consultancy
            while adhering to industry standards and regulations. By partnering
            with TechnoTrench, you can trust that you are engaging with a
            reputable organization that is recognized for its expertise and
            professionalism in the field of technology. We invite you to explore
            our range of services with confidence, knowing that you are
            collaborating with a certified industry leader.
          </p>
        </section>

        <section id="how-it-works">
          <h2>How it Works</h2>
          <p>
            At TechnoTrench, our internship program offers a diverse range of
            learning paths, including web and app development, data science, and
            programming in Java, C++, and Python. With hands-on experience and
            expert mentorship, you'll gain practical skills and personalized
            guidance to navigate complexities. Applying is easy—simply fill out
            our Google Form to kickstart your career in tech. Don't miss this
            opportunity to unlock your potential and thrive in the dynamic world
            of technology with TechnoTrench.
          </p>
        </section>
      </div>

      <div className="legal-copyright">
        <p>© 2024 TechnoTrench. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Legal;
