//import Rainbow from './Rainbow';
//import Backgrounds from './Rainbow';
//import Spinner from './Spinner';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Alert from './alert';
import ResumeBot from './ResumeBot';
//import { ReactComponent as DecalCluster } from './assets/clusters1.svg';

function App() {
  return (
    // <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
    //   <Rainbow />
    //   <div
    //     style={{
    //       position: 'relative',  // position required for z-index to work
    //       zIndex: 25,
    //       color: '#000',        // make sure text color is visible
    //       textAlign: 'center',
    //       marginTop: '40vh',
    //       fontFamily: 'Times New Roman',
    //       fontSize: '2.5rem',
    //     }}
    //   >
        
      //   <h1>Hello! Welcome to Aarabhi's Portfolio!</h1>
      //   <hr></hr>
      // </div>
      //<div> <Backgrounds /> <div></div>
    //   <div className="relative w-full h-screen">
    //   <DecalCluster className="absolute top-20 left-24 w-24 h-24" />


    // </div>
    <div> 
      <BrowserRouter>
      <Alert> 
      <Routes path="/projects" element={<ResumeBot />} />
      </Alert>
      </BrowserRouter>
      </div>

    //</div>
  );
}

export default App;
