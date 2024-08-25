// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Albert",
  middleName: "",
  lastName: "Wang",
  message: " Hi, I am a graduate with a master's degree in Computer Science from National Tsing Hua University. Welcome to my website!",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/albert037037037",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shao-yuan-wang-576000226/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/albert037037037",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpeg"),
  imageSize: 375,
  message:
    "My name is Albert Wang. I am a graduate with a master's degree in the Department of Computer Science at National Tsing Hua University! I've been dedicating to distributed system and cloud computing. Besides, I went to Seoul National University at 2024 Spring as an exchagne student. Moreover, I worked as a summer intern at TSMC in 2022. Looking forward to contact you!",
  resume: "https://albert037037037.github.io/resume/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]<!-- PROJECT LOGO -->
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "albert037037037", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ["ai-platform-server", "Vanilla-Database", "NTHU_Parallel_Programming", "Massive-Data-Analysis", "Leetcode", "Computer-Graphics" ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "First, from Apr. 2019 to Sep. 2019, I was the Coordinator of NTHU Computer Science orientation camp. In order to assist freshmen can get familiar with each others, we held a three days camp for freshmen in our department. Seconds, from Sep. 2019 to Jun. 2020, I was a leader of activities department of student association of computer science department. We held lots of activity to gel our department!",
  images: [
    { 
      img: require("../assets/img/camp.png"), 
      label: "", 
      paragraph: " Orientation camp. " 
    },
    { 
      img: require("../assets/img/uniform.png"), 
      label: "", 
      paragraph: " Uniform party. " 
    },
    { 
      img: require("../assets/img/me.png"), 
      label: "", 
      paragraph: " Feng Qiao Night. " 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 85 },
    { name: "Python", value: 80 },
    { name: "CUDA", value: 75},
    { name: "JavaScript", value: 70 },
    { name: "SQL", value: 60 },
    { name: "Java", value: 60 },
    { name: "HTML/CSS", value: 60 },
    { name: "C#", value: 60 },
  ],
  softSkills: [
    { name: "Git", value: 70 },
    { name: "Kubernetes", value: 70 },
    { name: "Docker", value: 70 },
    { name: "Nsight Systems", value: 75},
    { name: "Notion", value: 80 },
  ],
  // softSkills: [
  //   { name: "Goal-Oriented", value: 80 },
  //   { name: "Collaboration", value: 90 },
  //   { name: "Positivity", value: 80 },
  //   { name: "Adaptability", value: 85 },
  //   { name: "Problem Solving", value: 75 },
  //   { name: "Empathy", value: 90 },
  //   { name: "Organization", value: 70 },
  //   { name: "Creativity", value: 90 },
  // ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Albert Wang",
  email: "albert037037037@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Intern in TSMC',
      companylogo: require('../assets/img/tsmc.png'),
      date: 'Jul. 2022 - Sep. 2022',
    },
    {
      role: 'Teaching Assistant of Operating system class',
      companylogo: require('../assets/img/nthu.jpeg'),
      date: 'Sept. 2021 – Jan. 2024',
    },
    {
      role: 'Exchange Student in Seoul Naional University',// Here Add Company Name
      companylogo: require('../assets/img/snu.jpeg'),
      date: 'Mar. 2024 - Jun. 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
