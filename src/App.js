import { useState } from 'react';
import './App.css';



import{
  ControlPanel,
  Footer,
  Header,
  GamePanel,

} from "./components";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  
  /*When the game starts*/
  
  const handleGameStart = () => {
    if(gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    }
    else {
      console.log("Inicia Jogo");
      setGameStarted(true);
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
        />
        <GamePanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
