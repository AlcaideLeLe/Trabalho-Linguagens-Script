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
  let tabuleiro = [[]];
  let nrLinhas;
  let nrColunas;
  let randomWords = ["Aprovado","Facil","Script","Website","React","Professor","Pedro","Rodrigo","Telmo","Grada"]

  if(selectedLevel === "1"){
    nrLinhas = 15;
    nrColunas = 15;
  }
  else if(selectedLevel === "2"){
    nrLinhas = 25;
    nrColunas = 25;
  } 
  else if(selectedLevel === "3"){
    nrLinhas = 40;
    nrColunas = 40;
  } 

  function encontraLetraRandom(){
    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var caracteresLength = caracteres.length;
   
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
   
    return resultado;
  }

  function encontraNrRandom(){
    let nrRandom;
    nrRandom = Math.floor((Math.random() * 10));

    return nrRandom;
  }

  function encontraRandomWord(){
    let posicao = encontraNrRandom();
    return randomWords[posicao];

  }

  function preencheTabuleiro(){
    tabuleiro = Array(nrLinhas).fill(0).map( 
      () => new Array(nrColunas).fill(0).map( 
          () => encontraLetraRandom()
      )
)       
        console.log(tabuleiro);
        console.log(encontraRandomWord());
          }
  
  /*When the game starts*/
  

  const handleGameStart = () => {
    if(gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    }
    else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      preencheTabuleiro();
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
