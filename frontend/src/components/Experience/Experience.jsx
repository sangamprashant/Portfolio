import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Define state variables to store GitHub data
  const [experience, setExperience] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [companiesWorked, setCompaniesWorked] = useState(0);

  // Fetch GitHub data using the GitHub API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'sangamprashant' with your GitHub username
        const response = await fetch("https://api.github.com/users/sangamprashant");
        const userData = await response.json();

        // Calculate years of experience
        const startDate = new Date("2020-01-01"); // Replace with your start date
        const currentDate = new Date();
        const experienceYears = currentDate.getFullYear() - startDate.getFullYear();

        setExperience(experienceYears);
        setCompletedProjects(userData.public_repos); 
        setCompaniesWorked(2); 
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {experience||3}
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {completedProjects||50}
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
          {companiesWorked ||2}
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Work </span>
        <span>Internships</span>
      </div>
    </div>
  );
};

export default Experience;
