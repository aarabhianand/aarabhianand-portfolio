// import React, { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SkewedScroll.css";
// import linkedinLogo from './assets/linkedin.png';
// import gmailLogo from './assets/GMAIL.png';
// import gitLogo from './assets/github.png';
// import pdfURL from './assets/AarabhiAnand.pdf';

// const backgroundImages = [
//   "./assets/DSC_6833-4.jpg",
//   "./assets/DSC_7499_1.jpg",
//   "./assets/crochet2.jpg",
// ];

// function handleClickdl(){
//   const link = document.createElement("a");
//   link.href = pdfURL;
//   link.setAttribute("download","AarabhiAnand.pdf");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// const SkewedScroll = () => {
//   const [curPage, setCurPage] = useState(1);
//   const numOfPages = 5;
//   const animTime = 1000;
//   const [scrolling, setScrolling] = useState(false);

//   const navigateUp = useCallback(() => {
//     if (scrolling || curPage === 1) return;
//     setScrolling(true);
//     setCurPage((prev) => prev - 1);
//     setTimeout(() => setScrolling(false), animTime);
//   }, [curPage, scrolling]);

//   const navigateDown = useCallback(() => {
//     if (scrolling || curPage === numOfPages) return;
//     setScrolling(true);
//     setCurPage((prev) => prev + 1);
//     setTimeout(() => setScrolling(false), animTime);
//   }, [curPage, scrolling, numOfPages]);

//   const handleScroll = useCallback(
//     (e) => {
//       e.preventDefault();
//       if (scrolling) return;
//       if (e.deltaY < 0) navigateUp();
//       else navigateDown();
//     },
//     [scrolling, navigateUp, navigateDown]
//   );

//   const handleKeyDown = useCallback(
//     (e) => {
//       if (scrolling) return;
//       if (e.keyCode === 38) navigateUp();
//       if (e.keyCode === 40) navigateDown();
//     },
//     [scrolling, navigateUp, navigateDown]
//   );

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll, { passive: false });
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleScroll, handleKeyDown]);


//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/projects");
//   };

//   // 🔁 Background image cycling logic
  
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="skw-pages">
//       {Array.from({ length: numOfPages }).map((_, i) => (
//         <div
//           key={i}
//           className={`skw-page skw-page-${i + 1} ${
//             curPage === i + 1 ? "active" : "inactive"
//           }`}
//         >
//           <div className="skw-page__half skw-page__half--left">
//             <div className="skw-page__skewed">
//               <div
//                 className="skw-page__content">
//                   {i === 2 && (
//                     <div className="fade-background-container">
//                       {backgroundImages.map((img, index) => (
//                         <div
//                           key={index}
//                           className={`fade-bg-image ${index === bgIndex ? "active" : ""}`}
//                           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${img})` }}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 )
//               {/* //     
//               //           // height: "100%",
//               //           // width: "65%",
//               //           backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${backgroundImages[bgIndex]})`,
//               //           // backgroundSize: "contain",
//               //           // backgroundRepeat: "no-repeat",
//               //           // backgroundPosition: "center",
//               //           // paddingTop: "400px",
//               //           // paddingLeft: "175px",
//               //           transition: "background-image 1s ease-in-out",
//               //         }
//               // > */}
//                 {i === 1 && (
//                   <div className="container-images">
//                     <p className="skw-page__description">
//                       <div className="polaroid">
//                         <img
//                           className="image-styled"
//                           src="/minterest-image.jpeg"
//                           alt="minterest-logo"
//                         />
//                         <div className="container-images2"></div>
//                       </div>
//                       <br />
//                       <div className="polaroid">
//                         <img
//                           className="image-styled"
//                           src="/smart-city.jpeg"
//                           alt="smart-city"
//                         />
//                       </div>
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="skw-page__half skw-page__half--right">
//             <div className="skw-page__skewed">
//               <div className="skw-page__content">
//                 {i === 0 && (
//                   <>
//                     <h3 className="skw-page__heading">
//                       &lt; Engineering an aesthetic
//                     </h3>
//                     <h3 className="skw-page__heading">that thinks /&gt;</h3>
//                     <br />
//                     <p className="skw-page__description">Hey there! - I'm Aarabhi</p>
//                     <p className="skw-page__description">
//                       I'm a senior at PES University, studying Computer
//                       <br />
//                       Science Engineering specialising in Artificial
//                       <br />
//                       Intelligence and Machine Learning.
//                     </p>
//                     <p className="skw-page__description">
//                       I enjoy building front-end experiences that are clean,
//                       <br />
//                       intuitive, and functional. I'm interested in how good
//                       <br />
//                       design and smooth interactions improve the way people
//                       <br />
//                       use technology. I also like working with databases, and
//                       <br />
//                       recently, have been exploring Generative AI, its
//                       <br />
//                       ability to create new content and tools, and it's usage
//                       <br />
//                       in practical, meaningful ways. <br />
//                     </p>
//                     <p className="skw-page__description">
//                       Continue downward to find out more!
//                     </p>
//                   </>
//                 )}
//                 {i === 1 && (
//                   <>
//                     <h2 className="skw-page__heading">Projects & Publications</h2>
//                     <p className="skw-page__description">
//                       - Few-Shot Learning for Landmarks Classification
//                       <br />
//                       Accepted Paper, 5th ICIVC 2025 Dehradun, India.
//                       <br />
//                       To be held on June 13–14, 2025.
//                       <br />
//                       <br />
//                       - Smart City Public Infrastructure Management System
//                       <br />
//                       Technologies: MySQL, React, Node, Express
//                       <br />
//                       <br />
//                       - Minterest - An NFT Marketplace
//                       <br />
//                       Technologies: Solidity, React, Express
//                       <br />
//                       <br />
//                       - NAI UI/UX Hackathon, Website Re-design Proposal
//                       <br />
//                       Technologies: Figma
//                       <br />
//                       <br />
//                       <button className="btn-styled" onClick={handleClick}>
//                         Click here to explore more!
//                       </button>
//                     </p>
//                   </>
//                 )}
//                 {i === 2 && (
//                   <>
//                     <h2 className="skw-page__heading">Meet my other side</h2>
//                     <p className="skw-page__description">
//                       My creative inclination doesn't stop at website design
//                       <br />
//                       and development, but also extends to my hobbies!
//                       <br />
//                       <br />
//                       I am a B-graded Bharatanatyam artiste,
//                       <br />
//                       certified by Doordarshan Bengaluru and
//                       <br />
//                       a dedicated student of Carnatic music (like my name <br/>
//                        didn't 
//                       give
//                       that away already :D) for the last 18 years.
//                       <br />
//                       <br />
//                       I play the classical violin and am a grade-3 pianist from
//                       <br />
//                       Trinity College of Music, London.
//                       <br />
//                       <br />
//                       Outside of my professional work, I enjoy painting and
//                       <br />
//                       crocheting, which help me express my creativity in
//                       <br />
//                       different ways.
//                     </p>
//                   </>
//                 )}
//                 {i === 3 && (
//                   <>
//                     <h2 className="skw-page__heading">Let's Connect!</h2>
//                     <p className="skw-page__description">Whether you’re interested in working together, 
//                       have a  <br/> question, or just want to say hi — I’d 
//                       love to hear from <br/> you! Here’s a glimpse of the 
//                       technologies I have been <br/> working with recently:
//                       <br/> 
//                       <br/>
//                       Languages: Python, Java, MySQL, JavaScript, R
//                       <br/>
//                       Frameworks: React, Node.js, Express, Flask
//                       <br/>
//                       Tools & Platforms: Git, Docker, VSCode, Figma
//                       <br/>
//                       <br/>
//                       {/* <br/>
//                       <br/> */}
//                        <img src={linkedinLogo} alt="LinkedIn" className="icon-style" />
//                        <a href="https://www.linkedin.com/in/aarabhi-a-47514628b/" target="_blank" rel="noreferror">Find me on LinkedIn</a>
//                       {/* <img src={linkedinLogo} alt="LinkedIn" className="icon-style" /> */}
//                       <br/>
//                       <br/>
//                       <img src={gmailLogo} alt="Gmail" className="icon-style" />
//                       <a href="mailto:aarabhi.anandh@gmail.com" target="_blank" rel="noreferror"> OR you can email me too :D</a>
//                       {/* <button class="button-dl">Click to Download my Resume</button> */}
//                       <br/>
//                       <br/>
//                       <img src={gitLogo} alt="Gmail" className="icon-style" />
//                       <a href="https://github.com/aarabhianand" target="_blank" rel="noreferror">and check out my work on GitHub!</a>
//                         <br/>
//                         {/* <br/> */}
//                       <button class="button-dl" onClick={handleClickdl}>Download Resume</button>
//                     </p>
//                   </>
//                 )}
//                 {i === 4 && (
//                   <>
//                     <h2 className="skw-page__heading">Chat with my Resume!</h2>
                    
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

import React from "react";
// import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./SkewedScroll.css";

import linkedinLogo from "./assets/linkedin.png";
import gmailLogo from "./assets/GMAIL.png";
import gitLogo from "./assets/github.png";
import pdfURL from "./assets/AarabhiAnand.pdf";
import Navbar from "./Navbar";
import heroImg from "../assets/bgpicforwebsite.jpeg";

// import { useEffect } from "react";

function handleClickdl() {
  const link = document.createElement("a");
  link.href = pdfURL;
  link.setAttribute("download", "AarabhiAnand.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Portfolio = () => {
  const navigate = useNavigate();

//   useEffect(() => {
//   const tl = gsap.timeline();

//   tl.fromTo(
//     ".type-me",
//     { width: "0" },
//     {
//       width: "870px",
//       duration: 5,
//       ease: "steps(24)"
//     }
//   );
// }, []);


  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="portfolio">

      <Navbar/>

      {/* HERO / HOME */}
      {/* <section className="section hero">

        <div className="hero-wrapper">

        <div className="hero-image"> */}

        {/* <div className="hero-content"> */}

        {/* <h1>&lt; Engineering an aesthetic that thinks /&gt;</h1> */}

        {/* </div>
        </div> */}

        {/* <div className="hero-content"> */}

        

        {/* <p className="intro">Hey there! I'm Aarabhi </p>

        <p className="intro">
          I'm a senior at PES University studying Computer Science
          Engineering specialising in Artificial Intelligence and
          Machine Learning.
        </p>

        <p className="intro">
          I enjoy building front-end experiences that are clean,
          intuitive, and functional. I'm interested in how good
          design and smooth interactions improve the way people
          use technology.
        </p>

        <p className="intro">
          Recently I’ve been exploring Generative AI and its
          ability to create meaningful tools.
        </p>

        <p className="intro">Scroll down to explore more ↓</p> */}
        {/* </div> */}
      {/* </section> */}


      <section className="portfolio-hero">

        <div className="portfolio-card">

          <div className="portfolio-overlay">

            <div className="portfolio-overlay-content">
              <h1>Aarabhi Anand</h1>
              {/* <p className="portfolio-subtext">
                Engineering aesthetic + intelligent systems
              </p> */}
            </div>

            <div
              className="portfolio-image"
              style={{ backgroundImage: `url(${heroImg})` }}
            ></div>

            <div className="portfolio-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>

          <div className="portfolio-text">
            <p>
              &lt; Engineering an aesthetic that thinks /&gt;
            </p>
            <p>
              Hey there, I'm Aarabhi! I'm a senior at PES University specializing in Artificial Intelligence and Machine Learning.
            </p>
             <p>
              I'm currently interning at HPE, exploring the domains of Cloud, Storage and Generative AI and building meaningful tools.
            </p>
            <p>
              I also enjoy building clean, intuitive front-end experiences with a strong focus on interaction.
            </p>
             <p>
              My creative inclination doesn't end there, I am B-graded Bharatanaytam Artiste from Doordarshan Bengaluru, also pursuing Carnatic classical music for the past 18 years(hence the name haha xD) and a Grade-3 Pianist from the Trinity College of Music, London.
            </p>
            <p>Scroll to explore more!</p>
          </div>

        </div>

      </section>



      {/* PROJECTS */}
      <section className="section projects">

        <h2>Projects & Publications</h2>

        <div className="project">

          <h3>Few-Shot Learning for Landmarks Classification</h3>

          <p>
            Accepted Paper — ICIVC 2025, Dehradun India
          </p>

        </div>

        <div className="project">

          <h3>Smart City Public Infrastructure Management System</h3>

          <p>Technologies: MySQL, React, Node, Express</p>

        </div>

        <div className="project">

          <h3>Minterest – NFT Marketplace</h3>

          <p>Technologies: Solidity, React, Express</p>

        </div>

        <div className="project">

          <h3>NAI UI/UX Hackathon Website Redesign</h3>

          <p>Technologies: Figma</p>

        </div>

        <button className="btn" onClick={handleClick}>
          Explore More Projects
        </button>

      </section>

      {/* HOBBIES */}
      <section className="section hobbies">

        <h2>Meet my other side</h2>

        <p>
          My creative inclination doesn't stop at website
          design and development.
        </p>

        <p>
          I am a B-graded Bharatanatyam artiste certified by
          Doordarshan Bengaluru.
        </p>

        <p>
          I’ve been learning Carnatic music for over
          18 years.
        </p>

        <p>
          I play classical violin and am a Grade-3
          pianist from Trinity College of Music, London.
        </p>

        <p>
          Outside tech, I enjoy painting and crocheting.
        </p>

      </section>

      {/* CONTACT */}
      <section className="section contact">

        <h2>Let's Connect!</h2>

        <p>
          Whether you want to collaborate,
          ask a question, or just say hi —
          I’d love to hear from you!
        </p>

        <div className="tech">

          <p><b>Languages:</b> Python, Java, MySQL, JavaScript, R</p>

          <p><b>Frameworks:</b> React, Node.js, Express, Flask</p>

          <p><b>Tools:</b> Git, Docker, VSCode, Figma</p>

        </div>

        <div className="links">

          <div className="link">
            <img src={linkedinLogo} alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/aarabhi-a-47514628b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="link">
            <img src={gmailLogo} alt="Email" />
            <a href="mailto:aarabhi.anandh@gmail.com">
              Email
            </a>
          </div>

          <div className="link">
            <img src={gitLogo} alt="GitHub" />
            <a
              href="https://github.com/aarabhianand"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

        </div>

        <button className="btn" onClick={handleClickdl}>
          Download Resume
        </button>

      </section>

    </div>
  );
};

export default Portfolio;
