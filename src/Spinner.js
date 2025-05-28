import React from 'react';
import './spinner.css';
import confetti from 'canvas-confetti';
import {motion} from 'framer-motion';

class Spinner extends React.Component {
  state = {
    name: "circle",
    showMessage: false
  };

  audioRef = React.createRef();

  startFireworks = (duration = 15000) => {
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 30 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors:['#CB9606','#9CAC54','#A7FODD','#97CD97']
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors:['#345C32','#9CAC54','#A7FODD','#97CD97']
      });
    }, 250);
  };

  fadeAudio = (audioEl, from, to, duration) => {
    if (!audioEl) return;
    const steps = 20;  // number of steps for fade
    const stepTime = duration / steps;
    let currentStep = 0;
  
    const fadeInterval = setInterval(() => {
      currentStep++;
      const newVolume = from + ((to - from) * currentStep) / steps;
      audioEl.volume = Math.min(Math.max(newVolume, 0), 1); // clamp between 0 and 1
  
      if (currentStep >= steps) {
        clearInterval(fadeInterval);
        if (to === 0) {
          audioEl.pause();
          audioEl.currentTime = 0;
        }
      }
    }, stepTime);
  };
  

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });
  
    setTimeout(() => {
      this.setState({
        name: "circle"
      });
  
      if (this.audioRef.current) {
        const audio = this.audioRef.current;
        audio.volume = 0; // start muted
        audio.play();
        this.fadeAudio(audio, 0, 1, 3000); // fade in over 3 seconds
      }
  
      console.log('triggering confetti rain now');
      this.startFireworks();
  
      this.setState({ showMessage: true });
  
      // Your page zoom effect
      setTimeout(() => {
        const page = document.body;
        if (page) {
          page.classList.add('page-zoom-in');
        }
      }, 5000);
  
      // Fade out audio and redirect after 10 seconds total
      setTimeout(() => {
        if (this.audioRef.current) {
          this.fadeAudio(this.audioRef.current, this.audioRef.current.volume, 0, 2000);
        }
      }, 8000);
  
      setTimeout(() => {
        window.location.href = '/home';
      }, 10500);
  
    }, 2100);
  };
  

  componentDidMount() {
    this.startRotation();
  }

  render() {
    return (
      <div>
        <div className="spinner-wrapper">
          <div className="arrow"> </div>
          <ul className={this.state.name}>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Aarabhi</div>
            </li>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Atana</div>
            </li>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Bilahari</div>
            </li>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Chaya</div>
            </li>
            <li>
                <div className="separator">
                </div><div className="text" contentEditable={false} spellCheck={false}>Maand</div>
            </li>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Lahari</div>
            </li>
            <li>
                <div className="separator">
                </div><div className="text" contentEditable={false} spellCheck={false}>Sindhu</div>
            </li>
            <li>
                <div className="separator">
                </div><div className="text" contentEditable={false} spellCheck={false}>Behag</div>
            </li>
            <li>
                <div className="separator">
                    </div><div className="text" contentEditable={false} spellCheck={false}>Begade</div>
            </li>
            <li>
                <div className="separator"></div>
                <div className="text" contentEditable={false} spellCheck={false}>Kedaram</div>
            </li>
            <li>
                <div className="separator"></div>
                <div className="text" contentEditable={false} spellCheck={false}>Kurinji</div>
            </li>
            <li>
                <div className="separator"></div>
                <div className="text" contentEditable={false} spellCheck={false}>Pahadi</div>
            </li>
            <button className='spin-button' onClick={this.startRotation}></button>
          </ul>
        </div>

        <audio ref={this.audioRef} src="/aarabhi_audio.m4a" />

        {this.state.showMessage && (
  <div className="fade-message">
    {`You've landed on Aarabhi's Website!`.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: i * 0.30,
        }}
        style={{ display: "inline-block", marginRight: "6px" }}
      >
        {word}
      </motion.span>
    ))}
  </div>
)}

      </div>
    );
  }
}

export default Spinner;
