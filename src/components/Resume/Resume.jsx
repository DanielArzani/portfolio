import React from "react";
import "../../styles/resume.css";
//^ Remember for live hosted version, its better to have a link to my github
function Resume() {
  return (
    <iframe
      src={require("../../assets/resume/resume.pdf")}
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="daniel arzanipour resume"
    ></iframe>
  );
}

export default Resume;
