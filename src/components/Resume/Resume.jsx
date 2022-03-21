import React, { useEffect, useState } from "react";

import "../../styles/resume.css";
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
