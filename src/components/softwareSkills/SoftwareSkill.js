import React from "react";
import * as SiIcons from "react-icons/si"; // Import all icons from react-icons/si  
import "./SoftwareSkill.scss";

// Machine learning technologies with corresponding react-icons
const machineLearningSkills = [
  { skillName: "Python", icon: <SiIcons.SiPython /> },
  { skillName: "NumPy", icon: <SiIcons.SiNumpy /> },
  { skillName: "Pandas", icon: <SiIcons.SiPandas /> },
  { skillName: "Matplotlib", icon: <SiIcons.SiChartdotjs /> }, // Generic charting icon
  { skillName: "Seaborn", icon: <SiIcons.SiChartdotjs /> }, // Similar to Matplotlib
  { skillName: "scikit-learn", icon: <SiIcons.SiScikitlearn /> },
  { skillName: "TensorFlow", icon: <SiIcons.SiTensorflow /> },
  { skillName: "Keras", icon: <SiIcons.SiKeras /> },
  { skillName: "OpenCV", icon: <SiIcons.SiOpencv /> },
  { skillName: "NLTK", icon: <SiIcons.SiPython /> },
  { skillName: "Flask", icon: <SiIcons.SiFlask /> },
  { skillName: "Git", icon: <SiIcons.SiGit /> },
  { skillName: "GitHub", icon: <SiIcons.SiGithub /> },
  { skillName: "Jupyter", icon: <SiIcons.SiJupyter /> },
  { skillName: "Docker", icon: <SiIcons.SiDocker /> },
  { skillName: "Kubernetes", icon: <SiIcons.SiKubernetes /> },
  { skillName: "Azure", icon: <SiIcons.SiCloudways /> },
  { skillName: "PyTorch", icon: <SiIcons.SiPytorch /> },
  { skillName: "Hugging Face", icon: <SiIcons.SiHuggingface /> },
  { skillName: "Anaconda", icon: <SiIcons.SiAnaconda /> }
];

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <div className="scrolling-list">
        <ul className="dev-icons">
          {/* Original list */}
          {machineLearningSkills.map((skills, i) => {
            const { skillName, icon } = skills;
            return (
              <li key={i} className="software-skill-inline" name={skillName}>
                <div className="icon-container">{icon}</div>
                <p>{skillName}</p>
              </li>
            );
          })}
          {/* Duplicate list for seamless scroll */}
          {machineLearningSkills.map((skills, i) => {
            const { skillName, icon } = skills;
            return (
              <li key={`duplicate-${i}`} className="software-skill-inline" name={skillName}>
                <div className="icon-container">{icon}</div>
                <p>{skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
