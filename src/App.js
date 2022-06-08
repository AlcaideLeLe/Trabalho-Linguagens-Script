
import { useState, useEffect } from 'react';
import './App.css';
import callFunction from "./components/game-panel/callFunction"
import {TIMEOUTGAME} from "./constants"




import{
  ControlPanel,
  Footer,
  Header,
  GamePanel,

} from "./components";

let timerId = undefined;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [tabuleiroJogo, setTabuleiroJogo] = useState([[]]);

  
  const [timer, setTimer] = useState(TIMEOUTGAME[selectedLevel-1]);


  useEffect(() => {
    let nextTimer;
    if (gameStarted) {
      timerId = setInterval(() => {
        
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });

        if (nextTimer === 0) {
          setGameStarted(false);

        }
      }, 1000);
    } else if (timer !== TIMEOUTGAME[selectedLevel-1]) {
      setTimer(TIMEOUTGAME[selectedLevel-1]);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted, selectedLevel]);

  
  const handleGameStart = () => {
    if(gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    }
    else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      setTabuleiroJogo(callFunction(selectedLevel)) ;
      console.log(tabuleiroJogo);
      

    }
  }
  /*When the user selects a new level, this callback function is executed*/
  
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
  }
  
  return (
    <div id="container">
      <Header/>
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          timer={timer}
        />
        <GamePanel 
          setTabuleiroJogo={setTabuleiroJogo}
          selectedLevel={selectedLevel}
          tabuleiroJogo={tabuleiroJogo}
          gameStarted={gameStarted}

        />
        
      </main>
      <Footer />
    </div>
  );
}


export default App;


