import React from 'react';
import './spinner.css';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import SkewedScroll from './SkewSroll';
import logo from './logo.png';

class Spinner extends React.Component {
    state = {
        name: "circle",
        showMessage: false,
        showRevealPage: false,
        showCircle: true,
        fadingOut: false,
        stopFireworks: false  // new
      };
      

  audioRef = React.createRef();

  startFireworks = () => {
    const colors = ['#9CAC54', '#97CD97', '#345C32'];
    const defaults = {
      startVelocity: 30,
      spread: 55,
      ticks: 60,
      zIndex: 999
    };
  
    const frame = () => {
      if (this.state.stopFireworks) return;  // stop gracefully
  
      confetti({
        ...defaults,
        particleCount: 30,
        angle: 60,
        origin: { x: 0 },
        colors: colors
      });
  
      confetti({
        ...defaults,
        particleCount: 30,
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
      this.setState({ name: "circle", fadingOut: true });  // trigger fade out
  
      if (this.audioRef.current) {
        const audio = this.audioRef.current;
        audio.volume = 0;
        audio.play();
        this.fadeAudio(audio, 0, 1, 3000);
      }
  
      this.startFireworks();
      this.setState({ showMessage: true });
  
      // 👇 NEW: Stop fireworks after 5s
      setTimeout(() => {
        this.setState({ stopFireworks: true });
      }, 5000);
  
      setTimeout(() => {
        if (this.audioRef.current) {
          this.fadeAudio(this.audioRef.current, this.audioRef.current.volume, 0, 4500);
          setTimeout(() => {
            this.setState({ showRevealPage: true });
          }, 4500);
        } else {
          this.setState({ showRevealPage: true });
        }
      }, 5000);
    }, 2100);
  };
  

  componentDidMount() {
    this.startRotation();
    this.audioRef.current.volume = 0.3;
  }

  render() {
    return (
      <div>
        {this.state.showCircle && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: this.state.fadingOut ? 0 : 1 }}
            transition={{ duration: 5 }}
            onAnimationComplete={() => {
              if (this.state.fadingOut) {
                this.setState({ showCircle: false, fadingOut: false });
              }
            }}
            className="spinner-wrapper"
          >
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
          </motion.div>
        )}

<div className="logo-container">
  <img className='logo' src={logo} alt="Logo" />
  <div className="overlay">
    <div className="image-text">R B</div>
  </div>
</div>


        <audio ref={this.audioRef} src="/aarabhi_audio.m4a" volume='0.3' />

        {this.state.showMessage && (
          <div className="fade-message">
            {`You've landed on Aarabhi's Website!`.split("").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "inline-block", marginRight: "6px" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        )}

        {this.state.showRevealPage && (
          <div className="reveal-page">
            <SkewedScroll />
            <div className="content">
              
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Spinner;
