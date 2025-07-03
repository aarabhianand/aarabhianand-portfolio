import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SkewedScroll.css";
import linkedinLogo from './assets/linkedin.png';
import gmailLogo from './assets/GMAIL.png';
import gitLogo from './assets/github.png';

const backgroundImages = [
  "./assets/DSC_6833-4.jpg",
  "./assets/DSC_7499_1.jpg",
  "./assets/crochet2.jpg",
];

const SkewedScroll = () => {
  const [curPage, setCurPage] = useState(1);
  const numOfPages = 5;
  const animTime = 1000;
  const [scrolling, setScrolling] = useState(false);

  const navigateUp = useCallback(() => {
    if (scrolling || curPage === 1) return;
    setScrolling(true);
    setCurPage((prev) => prev - 1);
    setTimeout(() => setScrolling(false), animTime);
  }, [curPage, scrolling]);

  const navigateDown = useCallback(() => {
    if (scrolling || curPage === numOfPages) return;
    setScrolling(true);
    setCurPage((prev) => prev + 1);
    setTimeout(() => setScrolling(false), animTime);
  }, [curPage, scrolling, numOfPages]);

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (scrolling) return;
      if (e.deltaY < 0) navigateUp();
      else navigateDown();
    },
    [scrolling, navigateUp, navigateDown]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (scrolling) return;
      if (e.keyCode === 38) navigateUp();
      if (e.keyCode === 40) navigateDown();
    },
    [scrolling, navigateUp, navigateDown]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]);


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  // 🔁 Background image cycling logic
  
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skw-pages">
      {Array.from({ length: numOfPages }).map((_, i) => (
        <div
          key={i}
          className={`skw-page skw-page-${i + 1} ${
            curPage === i + 1 ? "active" : "inactive"
          }`}
        >
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div
                className="skw-page__content">
                  {i === 2 && (
                    <div className="fade-background-container">
                      {backgroundImages.map((img, index) => (
                        <div
                          key={index}
                          className={`fade-bg-image ${index === bgIndex ? "active" : ""}`}
                          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${img})` }}
                        />
                      ))}
                    </div>
                  )}
                )
              {/* //     
              //           // height: "100%",
              //           // width: "65%",
              //           backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${backgroundImages[bgIndex]})`,
              //           // backgroundSize: "contain",
              //           // backgroundRepeat: "no-repeat",
              //           // backgroundPosition: "center",
              //           // paddingTop: "400px",
              //           // paddingLeft: "175px",
              //           transition: "background-image 1s ease-in-out",
              //         }
              // > */}
                {i === 1 && (
                  <div className="container-images">
                    <p className="skw-page__description">
                      <div className="polaroid">
                        <img
                          className="image-styled"
                          src="/minterest-image.jpeg"
                          alt="minterest-logo"
                        />
                        <div className="container-images2"></div>
                      </div>
                      <br />
                      <div className="polaroid">
                        <img
                          className="image-styled"
                          src="/smart-city.jpeg"
                          alt="smart-city"
                        />
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                {i === 0 && (
                  <>
                    <h3 className="skw-page__heading">
                      &lt; Engineering an aesthetic
                    </h3>
                    <h3 className="skw-page__heading">that thinks /&gt;</h3>
                    <br />
                    <p className="skw-page__description">Hey there! - I'm Aarabhi</p>
                    <p className="skw-page__description">
                      I'm a senior at PES University, studying Computer
                      <br />
                      Science Engineering specialising in Artificial
                      <br />
                      Intelligence and Machine Learning.
                    </p>
                    <p className="skw-page__description">
                      I enjoy building front-end experiences that are clean,
                      <br />
                      intuitive, and functional. I'm interested in how good
                      <br />
                      design and smooth interactions improve the way people
                      <br />
                      use technology. I also like working with databases, and
                      <br />
                      recently, have been exploring Generative AI, its
                      <br />
                      ability to create new content and tools, and it's usage
                      <br />
                      in practical, meaningful ways. <br />
                    </p>
                    <p className="skw-page__description">
                      Continue downward to find out more!
                    </p>
                  </>
                )}
                {i === 1 && (
                  <>
                    <h2 className="skw-page__heading">Projects & Publications</h2>
                    <p className="skw-page__description">
                      - Few-Shot Learning for Landmarks Classification
                      <br />
                      Accepted Paper, 5th ICIVC 2025 Dehradun, India.
                      <br />
                      To be held on June 13–14, 2025.
                      <br />
                      <br />
                      - Smart City Public Infrastructure Management System
                      <br />
                      Technologies: MySQL, React, Node, Express
                      <br />
                      <br />
                      - Minterest - An NFT Marketplace
                      <br />
                      Technologies: Solidity, React, Express
                      <br />
                      <br />
                      - NAI UI/UX Hackathon, Website Re-design Proposal
                      <br />
                      Technologies: Figma
                      <br />
                      <br />
                      <button className="btn-styled" onClick={handleClick}>
                        Click here to explore more!
                      </button>
                    </p>
                  </>
                )}
                {i === 2 && (
                  <>
                    <h2 className="skw-page__heading">Meet my other side</h2>
                    <p className="skw-page__description">
                      My creative inclination doesn't stop at website design
                      <br />
                      and development, but also extends to my hobbies!
                      <br />
                      <br />
                      I am a B-graded Bharatanatyam artiste,
                      <br />
                      certified by Doordarshan Bengaluru and
                      <br />
                      a dedicated student of Carnatic music (like my name <br/>
                       didn't 
                      give
                      that away already :D) for the last 18 years.
                      <br />
                      <br />
                      I play the classical violin and am a grade-3 pianist from
                      <br />
                      Trinity College of Music, London.
                      <br />
                      <br />
                      Outside of my professional work, I enjoy painting and
                      <br />
                      crocheting, which help me express my creativity in
                      <br />
                      different ways.
                    </p>
                  </>
                )}
                {i === 3 && (
                  <>
                    <h2 className="skw-page__heading">Contact</h2>
                    <p className="skw-page__description">If you'd like to get in touch you can contact me here!
                      <br/>
                      <br/>
                      {/* <br/>
                      <br/> */}
                       <img src={linkedinLogo} alt="LinkedIn" className="icon-style" />
                       <a href="https://www.linkedin.com/in/aarabhi-a-47514628b/" target="_blank">LinkedIn</a>
                      {/* <img src={linkedinLogo} alt="LinkedIn" className="icon-style" /> */}
                      <br/>
                      <br/>
                      <img src={gmailLogo} alt="Gmail" className="icon-style" />
                      <a href="mailto:aarabhi.anandh@gmail.com" target="_blank">Email</a>
                      <br/>
                      <br/>
                      <img src={gitLogo} alt="Gmail" className="icon-style" />
                      <a href="https://github.com/aarabhianand" target="_blank">GitHub</a>
                    </p>
                  </>
                )}
                {i === 4 && (
                  <>
                    <h2 className="skw-page__heading">Epic finale</h2>
                    <p className="skw-page__description">
                      Check my other pens and follow me on
                      <a
                        className="skw-page__link"
                        href="https://twitter.com/NikolayTalanov"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Twitter
                      </a>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkewedScroll;
