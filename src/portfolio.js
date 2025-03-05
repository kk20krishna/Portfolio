/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Krishna Kumar S",
  title: "Hi all, I'm KK",
  subTitle: emoji(
    "I am an experienced professional in Intelligent Automation, constantly pushing the boundaries of what's possible with AI & automation. Passionate about innovation and always eager to learn, I thrive at the intersection of automation, machine learning, and cutting-edge AI advancements."
  ),
  //resumeLink:
    //"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kk20krishna",
  linkedin: "https://www.linkedin.com/in/krishna-kumar-sankaran-kutty/",
  gmail: "urkrishna@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@urkrishna",
  kaggle: "https://www.kaggle.com/kk20krishna",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Interests",
  subTitle: "I specialize in leveraging AI and Intelligent Automation to create innovative, efficient, and scalable solutions. Here’s what I currently focus on:",
  skills: [
    emoji("✅ Intelligent Automation – Streamlining processes by integrating AI, automation, and decision-making systems to enhance efficiency and productivity."),
    emoji("📊 Machine Learning – Building and training ML models to solve complex problems, uncover insights, and drive data-driven decision-making."),
    emoji("🚀 Latest AI Developments – Staying at the forefront of AI advancements, from cutting-edge research to real-world applications in automation and beyond."),
    emoji("🧠 AI Agents – Designing autonomous, multi-agent systems that can interact, learn, and make decisions to optimize workflows and business operations."),
    emoji("🤖 Artificial Intelligence – Harnessing the power of AI to build innovative solutions that push the boundaries of what’s possible in automation and beyond."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Automation",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "This portfolio is a showcase of my personal projects and learning journey, where I learn, experiment, build, and refine projects that drive efficiency, intelligence, and automation to new heights. Whether it's crafting smarter AI agents, optimizing workflows, or solving complex problems with ML, each project reflects my dedication to the AI revolution.",
  projects: [
    {
      image: "https://media.licdn.com/dms/image/v2/D5612AQHoSy7vEfqRtA/article-cover_image-shrink_720_1280/B56ZVQ_fRNGsAI-/0/1740820578081?e=1746662400&v=beta&t=Uj3fzLAIahMVcTVTYvYd8haRo4y0IOWLvaOP88fIBEE",
      projectName: "Agentic AI News Room",
      projectDesc: "An autonomous newsroom powered by AI agents that can research, write, and refine news articles, with a unique India-focused editorial perspective.",
      footerLink: [
          { name: "LinekdIn Article", url: "https://www.linkedin.com/pulse/exploring-agentic-automation-crewai-krishna-kumar-sankaran-kutty-ylunc/" },
          { name: "Generated Article", readmeUrl: "https://raw.githubusercontent.com/kk20krishna/Agentic-Automation/refs/heads/main/CrewAI%20NewsRoom%20Crew%20v1/Generated_Editorial_Opinions/editorial_opinion_Trump%20and%20Zelensky_2025-03-02_14-22-17.txt" },
          { name: "GitHub", url: "https://github.com/kk20krishna/Agentic-Automation/tree/main/CrewAI%20NewsRoom%20Crew%20v1"},
      ]
    },
    {
      image: "https://blog.emojipedia.org/content/images/size/w2000/2016/11/hands.jpg",
      projectName: "Gesture recognition model for Smart TVs",
      projectDesc: "CNN based model which can accurately detect 9 types of skin cancers.",
      footerLink: [
          { name: "Details", readmeUrl: "https://raw.githubusercontent.com/kk20krishna/Gesture-Recognition/refs/heads/main/README.md" },
          { name: "GitHub", url: "https://github.com/kk20krishna/Gesture-Recognition"},
          //{ name: "Demo", url: "https://demo.com/project1" },
      ]
    },
    {
      image: "https://private-user-images.githubusercontent.com/64156067/411407047-a2293089-6337-46c5-a89c-e6d951512291.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDExNTIwODcsIm5iZiI6MTc0MTE1MTc4NywicGF0aCI6Ii82NDE1NjA2Ny80MTE0MDcwNDctYTIyOTMwODktNjMzNy00NmM1LWE4OWMtZTZkOTUxNTEyMjkxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA1VDA1MTYyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJiMGJkYjMzYTE2YjljYWU2YjVkYzZiYThjNDkyOWM4OTQ4MGU4N2ZlNDU1YzA1NGJmM2E2OWMwMDViZjkxMzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YG5MDhzX76wMHAbVRXPku6bK0q9d_sUEZyiLs7kUpa8",
      projectName: "Skin Cancer Detection",
      projectDesc: "Gesture recognition model for Smart TVs that can recognise five different gestures performed by the user which will help users control the TV without using a remote.",
      footerLink: [
          { name: "Details", readmeUrl: "https://raw.githubusercontent.com/kk20krishna/skin-cancer-detection/refs/heads/main/README.md" },
          { name: "GitHub", url: "https://github.com/kk20krishna/skin-cancer-detection"},
      ]
    },
    {
      image: "https://camo.githubusercontent.com/89afa3a12cc624408bba07713908c25d999843f97c4080222e9294da9a71d427/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f612f61312f4e6f726d616c5f706f737465726f616e746572696f725f25323850412532395f63686573745f726164696f67726170685f253238582d7261792532392e6a70672f32383070782d4e6f726d616c5f706f737465726f616e746572696f725f25323850412532395f63686573745f726164696f67726170685f253238582d7261792532392e6a7067",
      projectName: "Pleural Effusion detection from chest X-ray images",
      projectDesc: "This project demonstrates the successful application of transfer learning for Pleural Effusion detection in chest X-ray images. The model shows promising results and can potentially aid in assisting healthcare professionals with diagnosis. ",
      footerLink: [
          { name: "Details", readmeUrl: "https://raw.githubusercontent.com/kk20krishna/X-ray-image-Classification/refs/heads/main/README.md" },
          { name: "GitHub", url: "https://github.com/kk20krishna/X-ray-image-Classification"},
      ]
    },
    {
      image: "https://private-user-images.githubusercontent.com/64156067/419334699-f012935b-d477-4efd-a6be-65b5ebc1206a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDExNTgyNTUsIm5iZiI6MTc0MTE1Nzk1NSwicGF0aCI6Ii82NDE1NjA2Ny80MTkzMzQ2OTktZjAxMjkzNWItZDQ3Ny00ZWZkLWE2YmUtNjViNWViYzEyMDZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA1VDA2NTkxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0ZjI2MTk4NTE4OWFmYWI0YTgyZjUyMjAxYzdmNzY4NjdjNzkyNDQ3YjVmNTM1Y2RlOGU2NDE2NzA4MmRmZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bGx9_AXvNkmhRefu_p0cL9U15kah4KweDVBzILujpbE",
      projectName: "Supply Chain Optimization",
      projectDesc: " Supply Chain Optimization PoC aimed at minimizing transportation costs by determining the optimal distribution plan across factories, warehouses, and stores. (uses Linear Optimization)",
      footerLink: [
          { name: "Details", readmeUrl: "https://raw.githubusercontent.com/kk20krishna/Supply-Chain-Optimization-PoC/refs/heads/main/README.md" },
          { name: "GitHub", url: "https://github.com/kk20krishna/Supply-Chain-Optimization-PoC"},
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Reachout via LinkedIN.",
  number: "+91 999999",
  email_address: "xxxxxx at gmail dot com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
