import React, { useRef, useState } from "react";
import Spinner from "./Spinner";
import { useKeys } from "rooks";

function EasterEggModal({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10000,
    }}>
      <div style={{
        background: "beige",
        padding: 20,
        border: '2px solid black',
        maxWidth: 400,
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}>
        <p>
          Congratulations! You found an easter egg [my swifitie self couldn't resist using that :D]<br />
          If you heard the music in the background, those are the {" "} 
          <a
            href="https://www.ragasurabhi.com/carnatic-music/raga/raga--arabhi.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9cac54", textDecoration: "underline" }}
          >
            notes
        </a>
         <nbsp> </nbsp>that make up my name! I don't own the music but you can listen to the full version here {" "}
          <a
            href="https://youtu.be/FOO8FCP9pS0?si=w30eGnfSrwffvCik"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9cac54", textDecoration: "underline" }}
          >
            Aarabhi
            
          </a>
        </p>
        <button onClick={onClose} style={{ marginTop: 20, padding: "8px 16px",background:'transparent',color:'black' }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function SpinnerWrapper() {
  const spinnerRef = useRef();
  const [showModal, setShowModal] = useState(false);

  useKeys(["KeyR", "KeyB"], () => {
    setShowModal(true);
    
  });

  return (
    <>
      <Spinner ref={spinnerRef} />
      {showModal && <EasterEggModal onClose={() => setShowModal(false)} />}
    </>
  );
}
