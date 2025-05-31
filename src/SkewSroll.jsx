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
              <div className="skw-page__content">{/* Left side content */}</div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                {i === 0 && (
                  <>
                    <h3 className="skw-page__heading">Engineering an aesthetic</h3>
                    <h3 className="skw-page__heading" >that thinks</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                  </>
                )}
                {i === 1 && (
                  <>
                    <h2 className="skw-page__heading">Page 2</h2>
                    <p className="skw-page__description">
                      Nothing to do here, continue scrolling.
                    </p>
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
