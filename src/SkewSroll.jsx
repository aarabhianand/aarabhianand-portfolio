import React, { useEffect, useState, useCallback } from "react";
import "./SkewedScroll.css";

const SkewedScroll = () => {
  const [curPage, setCurPage] = useState(1);
  const numOfPages = 5;
  const animTime = 1000;
  const [scrolling, setScrolling] = useState(false);

  const navigateUp = useCallback(() => {
    if (scrolling) return;
    if (curPage === 1) return;
    setScrolling(true);
    setCurPage((prev) => prev - 1);
    setTimeout(() => setScrolling(false), animTime);
  }, [curPage, scrolling, animTime]);

  const navigateDown = useCallback(() => {
    if (scrolling) return;
    if (curPage === numOfPages) return;
    setScrolling(true);
    setCurPage((prev) => prev + 1);
    setTimeout(() => setScrolling(false), animTime);
  }, [curPage, scrolling, animTime, numOfPages]);

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (scrolling) return;
      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
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
              <div className="skw-page__content">
              {i === 1 && (
                  <>
                    
                    
                  </>
                )}
                </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                {i === 0 && (
                  <>
                  
                    <h3 className="skw-page__heading">&lt; Engineering an aesthetic</h3>
                    <h3 className="skw-page__heading" >that thinks /&gt;</h3>
                    <br></br>
                    <br></br>
                    
                    <p className="skw-page__description">Hey there! - I'm Aarabhi</p>
                    
                    <p className="skw-page__description">I'm a senior at PES University, studying  Computer<br></br> Science Engineering specialising in 
                    Artificial <br></br> Intelligence and Machine Learning.</p>
                    <p className="skw-page__description">I enjoy building front-end experiences that are clean,<br></br> intuitive, and functional. I'm interested 
                      in how good<br></br> design and smooth interactions improve the way people <br></br>use technology. I also like working with databases, 
                      <br></br> and 
                      recently, have been exploring Generative AI, its <br></br>
                      ability to create new content and tools, and it's usage<br></br>in practical, meaningful ways. <br></br>
                    
                    </p>
                    <br></br>
                    <p className="skw-page__description">Continue downward to find out more!</p>



                    
                  </>
                )}
                {i === 1 && (
                  <>
                    <h2 className="skw-page__heading">Projects & Publications</h2>
                    {/* <div className="projects-description"> */}
                    {/* <div class="description-of-project"> */}

                    
                    <p className="skw-page__description" font-style="bold">
                      - Few-Shot Learning for Landmarks Classification
                      <br></br>
                      Accepted Paper, 5th ICIVC 2025 Dehradun, India. 
                      <br></br>To be held on June 13–14, 2025.

                      
                    <br></br>
                    <br></br>
                    
                      
                    </p>
                    
                      

                    <p className="skw-page__description" font-style="bold">
                      - Smart City Public Infrastructure Management System
                      <br></br>
                      Technologies: MySQL, React, Node, Express

                      <br></br>
                      <br></br>
                      
                      
                      
                    </p>

                    <p className="skw-page__description" font-style="bold">
                      - Minterest - An NFT Marketplace
                      <br></br>
                      Technologies: Solidity, React, Express

                      <br></br>
                      <br></br>
                      
                      
                      
                    </p>

                    <p className="skw-page__description" font-style="bold">
                      - NAI UI/UX Hackathon, Website Re-design Proposal
                      <br></br>
                      Technologies: Figma

                      <br></br>
                      <br></br>
                      
                      
                      <button className="btn-styled">Click here to explore more!</button>
                    </p>
                    
                    {/* </div> */}
                    
                    {/* </div> */}
                  </>
                )}
                {i === 2 && (
                  <>
                    <h2 className="skw-page__heading">Page 3</h2>
                    <p className="skw-page__description">The end is near, I promise!</p>
                  </>
                )}
                {i === 3 && (
                  <>
                    <h2 className="skw-page__heading">Page 4</h2>
                    <p className="skw-page__description">Ok, ok, just one more scroll!</p>
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
