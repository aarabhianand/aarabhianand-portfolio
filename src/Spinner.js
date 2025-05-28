import React from 'react';
import './spinner.css';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

class Spinner extends React.Component {
  state = {
    name: "circle",
    showMessage: false,
    showRevealPage: false
  };

  audioRef = React.createRef();

  startFireworks = (duration = 15000) => {
    const animationEnd = Date.now() + duration;
    const colors = ['#CB9606', '#9CAC54', '#A7FODD', '#97CD97'];
    const defaults = {
      startVelocity: 30,
      spread: 55,
      ticks: 60,
      zIndex: 999
    };

    const frame = () => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;

      confetti({
        ...defaults,
        particleCount: 3,
        angle: 60,
        origin: { x: 0 },
        colors: colors
      });

      confetti({
        ...defaults,
        particleCount: 3,
        angle: 120,
        origin: { x: 1 },
        colors: colors
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  fadeAudio = (audioEl, from, to, duration) => {
    if (!audioEl) return;
    const steps = 20;
    const stepTime = duration / steps;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
      currentStep++;
      const newVolume = from + ((to - from) * currentStep) / steps;
      audioEl.volume = Math.min(Math.max(newVolume, 0), 1);

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
    this.setState({ name: "circle start-rotate" });

    setTimeout(() => {
      this.setState({ name: "circle" });

      if (this.audioRef.current) {
        const audio = this.audioRef.current;
        audio.volume = 0;
        audio.play();
        this.fadeAudio(audio, 0, 1, 3000);
      }

      this.startFireworks();
      this.setState({ showMessage: true });

      // New: Trigger reveal page after delay
      setTimeout(() => {
        if (this.audioRef.current) {
          this.fadeAudio(this.audioRef.current, this.audioRef.current.volume, 0, 5000);
          setTimeout(() => {
            this.setState({ showRevealPage: true });
          }, 5000); // wait for fade out duration before showing reveal page
        } else {
          this.setState({ showRevealPage: true });
        }
      }, 5000);
      

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
            <li><div className="separator"></div><div className="text">Aarabhi</div></li>
            <li><div className="separator"></div><div className="text">Atana</div></li>
            <li><div className="separator"></div><div className="text">Bilahari</div></li>
            <li><div className="separator"></div><div className="text">Chaya</div></li>
            <li><div className="separator"></div><div className="text">Maand</div></li>
            <li><div className="separator"></div><div className="text">Lahari</div></li>
            <li><div className="separator"></div><div className="text">Sindhu</div></li>
            <li><div className="separator"></div><div className="text">Behag</div></li>
            <li><div className="separator"></div><div className="text">Begade</div></li>
            <li><div className="separator"></div><div className="text">Kedaram</div></li>
            <li><div className="separator"></div><div className="text">Kurinji</div></li>
            <li><div className="separator"></div><div className="text">Pahadi</div></li>
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
                transition={{ duration: 3.0, delay: i * 0.30 }}
                style={{ display: "inline-block", marginRight: "6px" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        )}

        
        {this.state.showRevealPage && (
          <div className="reveal-page">
            <h2>Welcome</h2>
            <div className="content">
              {/* {Array.from({ length: 15 }, (_, i) => (
                // <motion.p
                //   key={i}
                //   initial={{ opacity: 0, y: 50 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   transition={{ delay: i * 0.2 }}
                // >
                //   Hello
                // </motion.p>
              ))} */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Spinner;
