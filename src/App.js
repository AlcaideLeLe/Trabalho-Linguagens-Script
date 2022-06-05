
import { useState } from 'react';
import './App.css';
import preencheTabuleiroAuxiliar from "./components/game-panel/game-panel.component"
import preencheTabuleiro from "./components/game-panel/game-panel.component"



import{
  ControlPanel,
  Footer,
  Header,
  GamePanel,

} from "./components";


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [tabuleiroJogo, setTabuleiroJogo] = useState([[]]);

  const handleGameStart = () => {
    if(gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    }
    else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      preencheTabuleiroAuxiliar();
      preencheTabuleiro();
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
        />
        <GamePanel 
          setTabuleiroJogo={setTabuleiroJogo}
          selectedLevel={selectedLevel}
          tabuleiroJogo={tabuleiroJogo}
        />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;