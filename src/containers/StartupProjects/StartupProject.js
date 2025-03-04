import React, { useContext, useState, useEffect } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { marked } from "marked"; // Corrected import

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [readmeContent, setReadmeContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  // Function to fetch and display the README
  const openReadmePopup = async (readmeUrl, title) => {
    setPopupTitle(title);
    try {
      const response = await fetch(readmeUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch README: ${response.status}`);
      }
      const text = await response.text();
      // Render the Markdown using marked:
      const html = marked.parse(text); //Parse the markdown into html
      setReadmeContent(html); //set the markdown as the content
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching or displaying README:", error);
      setReadmeContent("Error loading README. Please check the URL or try again later.");
      setShowPopup(true); // Still show the popup to display error message
    }
  };

  //close popup
  const closePopup = () => {
    setShowPopup(false);
    setReadmeContent(null); // Clear the content when closing
  };

  //close popup on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Define openUrlInNewTab here:
  const openUrlInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };


  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              // New onClick handler:
                              onClick={() =>
                                link.readmeUrl
                                  ? openReadmePopup(link.readmeUrl, link.name)
                                  : openUrlInNewTab(link.url)
                              }
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Popup Modal */}
        {showPopup && (
          <div className="popup-overlay">
            <div
              className={
                isDark
                  ? "dark-mode popup-content popup-content-dark"
                  : "popup-content popup-content-light"
              }
            >
              <div className="popup-header">
                <h3 className="popup-title">{popupTitle}</h3>
                <button className="popup-close" onClick={closePopup}>
                  &times;
                </button>
              </div>
              <div className="popup-body">
                {/* Render the README content here */}
                {readmeContent && (
                  // <pre className="readme-content">{readmeContent}</pre> // Old incorrect code
                  <div className="readme-content" dangerouslySetInnerHTML={{ __html: readmeContent }} /> //New correct code
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
