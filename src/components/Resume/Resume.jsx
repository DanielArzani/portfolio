import React, { useEffect, useState } from "react";

import "../../styles/resume.css";

//! Placeholder, will be replaced with an actual resume later (after i've created it)
function Resume() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState("");

  useEffect(() => {
    myGitHub();
  }, []);

  async function myGitHub() {
    const userResponse = await fetch(
      "https://api.github.com/users/danielarzani",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const userData = await userResponse.json();

    const userReposResponse = await fetch(
      "https://api.github.com/users/DanielArzani/repos?per_page=50",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const userReposData = await userReposResponse.json();

    const userGistsResponse = await fetch(
      "https://api.github.com/users/DanielArzani/gists",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const userGistsData = await userGistsResponse.json();

    // console.log(userData, userReposData, userGistsData);

    setUser(userData);
    setRepos(userReposData);
  }
  console.log(user);

  return (
    <section className="section--resume">
      <div className="header">
        <h1>Daniel Arzanipour</h1>
        <p>ENTHUSIASTIC WEB DEVELOPER USER</p>
      </div>
      {/* ADD THIS IN LATER */}
      {/* <div className="contact-info">
        <p>Address: 272 TaylorMills Dr South</p>
        <p>Phone Number: 647-465-6149</p>
      </div> */}
      <div className="github_profile">
        <h3>Github Profile</h3>
        <p>
          Joined Github as of{" "}
          {new Date(user.created_at).toString().slice(0, 15)}, Daniel Arzanipour
          is a developer with
          {" " + repos.length} public repositories
        </p>
      </div>
      <div className="tech_stack">
        <h3>Languages and Technologies</h3>
        <ul className="tech_stack--list"></ul>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <p>Skill 1 ~ Along with link to repo that involves it</p>
        <a href="http://www.github.com">Link to github repo</a>
      </div>
      <div className="repos">
        <h3>Repos</h3>
      </div>
      <div className="contributions">
        <h3>Collaborations</h3>
      </div>
      <div className="problem_solving">
        <h3>Problem Solving Examples</h3>
      </div>
      <div className="education">
        <h3>Education</h3>
      </div>
      <div className="about_this_resume">
        <h3>About This Resume</h3>
        <p>The data from this resume is generated using Github's Api</p>
      </div>
    </section>
  );
}

export default Resume;
