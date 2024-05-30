import React from "react";
import Doctor from "../Assets/card3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const handleBookAppointmentClick = () => {
    window.open("https://forms.gle/TwnCMFxfVDeumqjz9", "_blank");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose TechnoTrench</span>
        </h3>
        <p className="ba-description">
          At Technotrench, we stand out as your top choice for IT services and
          consultancy due to our relentless dedication to innovation, expertise,
          and client satisfaction. With a proven track record of delivering
          cutting-edge solutions, we offer:
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Elite Mentorship Network
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Accelerate Your Career
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Effortless Enrollment
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Responsive Support
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Apply
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
