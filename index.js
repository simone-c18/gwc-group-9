import React from 'react';
import ReactDOM from 'react-dom/client';
import './landingPage.css'

function App(){
  return (
   <div><h1 id="title"> Dating Languages</h1> <br>
    </br>

  <button>Start</button>  <br>
  </br> 
    <button>Settings</button> <br></br>
    <button>Credits</button>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


