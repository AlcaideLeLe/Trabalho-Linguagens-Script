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
  let tabuleiroaux = [[]];
  let nrLinhas;
  let nrColunas;
  let nrMaximoPalavras;
  let randomWords = ["APROVADO","FACIL","SCRIPT","WEBSITE","REACT","PROFESSOR","PEDRO","RODRIGO","TELMO","GRADA"]
 

  if(selectedLevel === "1"){
    nrLinhas = 15;
    nrColunas = 15;
    nrMaximoPalavras = 10;
  }
  else if(selectedLevel === "2"){
    nrLinhas = 25;
    nrColunas = 25;
    nrMaximoPalavras = 15;

  } 
  else if(selectedLevel === "3"){
    nrLinhas = 40;
    nrColunas = 40;
    nrMaximoPalavras = 20;

  } 


  function inverteString(s){
    return s.split("").reverse().join("");
}

  function encontraLetraRandom(){
    var resultado = '';
    var caracteres = '123456789';
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

  function encontraTamanhoDaPalavra(){
    let tamanhoPalavra = encontraRandomWord().length;
    return tamanhoPalavra;
  }
    
  function encontraRandomPosicaoTab(){
      let posicao = Math.floor((Math.random() * 10));
      return posicao;

  }

  function organizaTabuleiro(){
    let nrpalavras = 0;

    do{

      let nrRandom = Math.floor((Math.random() * 5));
      console.log(nrRandom);
        if(nrRandom === 0){
          [tabuleiro, tabuleiroaux] = trocaLetraHorizontal();
        }
        else if(nrRandom == 1){
          [tabuleiro, tabuleiroaux] = trocaLetraHorizontalReverse();
        }
        else if(nrRandom == 2){
          [tabuleiro, tabuleiroaux] = trocaLetraVertical();
        }
        else if(nrRandom == 3){
          [tabuleiro, tabuleiroaux] = trocaLetraVerticalReverse();
        }
        else if(nrRandom == 4){
          [tabuleiro, tabuleiroaux] =  trocaLetraDiagonal();
        }
        else if(nrRandom == 5){
          [tabuleiro, tabuleiroaux] =  trocaLetraDiagonalReverse();
        }

        nrpalavras++;
      
    }while(nrpalavras < nrMaximoPalavras)
  }
  
  function preencheTabuleiroAuxiliar(){
    tabuleiroaux = Array(nrLinhas).fill(0).map( 
      () => new Array(nrColunas).fill(0).map( 
          () => " "
      ) )

      /*
      console.log(tabuleiroaux); 
      organizaTabuleiro();
      console.log(tabuleiroaux); */
      
      }

  function preencheTabuleiro(){
    tabuleiro = Array(nrLinhas).fill(0).map( 
      () => new Array(nrColunas).fill(0).map( 
          () => encontraLetraRandom()
      ))     
       
    console.log(tabuleiro);
    organizaTabuleiro();
    //console.log(tabuleiroaux);
    console.log(tabuleiro);
  
  }
  
  function trocaLetraHorizontal(){
    
        let palavra = encontraRandomWord();
        let posicaoC;
        let posicaoL = encontraRandomPosicaoTab();
        let sobreposicao = false;
        do{
          sobreposicao = false;
          posicaoC = encontraRandomPosicaoTab();
          for(let p = 0; p < palavra.length; p++){
            if(tabuleiroaux[posicaoL][posicaoC + p] !== " "){
             sobreposicao = true;
            } 
          }
          
        }while(posicaoC + palavra.length > nrColunas || sobreposicao)
        
        for(let p = 0; p < palavra.length; p++){
          if(tabuleiroaux[posicaoL][posicaoC + p] === " "){
            tabuleiroaux[posicaoL][posicaoC + p] = palavra[p];  
            tabuleiro[posicaoL][posicaoC + p] = palavra[p];  
          } 
        }
      
        return [tabuleiro, tabuleiroaux];
    
}
  
  function trocaLetraHorizontalReverse(){
    
    let palavra = encontraRandomWord();
    palavra = inverteString(palavra);
    let posicaoC;
    let posicaoL = encontraRandomPosicaoTab();
    let sobreposicao = true;
    do{
      sobreposicao = false;
      posicaoC = encontraRandomPosicaoTab();
      for(let p = 0; p < palavra.length; p++){
        if(tabuleiroaux[posicaoL][posicaoC + p] !== " "){
          sobreposicao = true;
        } 
      }
    }while(posicaoC + palavra.length > nrColunas || sobreposicao)

    for(let p = 0; p < palavra.length; p++){
      if(tabuleiroaux[posicaoL][posicaoC + p] === " "){
        tabuleiroaux[posicaoL][posicaoC + p] = palavra[p];  
        tabuleiro[posicaoL][posicaoC + p] = palavra[p];  
      } 
   }
   return [tabuleiro, tabuleiroaux];
  }

  function trocaLetraVertical(){
    let palavra = encontraRandomWord();
    let posicaoL;
    let posicaoC = encontraRandomPosicaoTab();
    let sobreposicao = true;
    do{
      sobreposicao = false;
      posicaoL = encontraRandomPosicaoTab();
      for(let p = 0; p < palavra.length; p++){
        if(tabuleiroaux[posicaoL + p][posicaoC] !== " "){
          sobreposicao = true;
        } 
      }
    }while(posicaoL + palavra.length > nrLinhas || sobreposicao)
  
    for(let p = 0; p < palavra.length; p++){
      if(tabuleiroaux[posicaoL + p][posicaoC ] === " "){
        tabuleiroaux[posicaoL + p][posicaoC] = palavra[p];  
        tabuleiro[posicaoL + p][posicaoC] = palavra[p];  
      } 
    }

    return [tabuleiro, tabuleiroaux];

  }
  function trocaLetraVerticalReverse(){
    
    let palavra = encontraRandomWord();
    palavra = inverteString(palavra);
    let posicaoC = encontraRandomPosicaoTab();
    let posicaoL;
    let sobreposicao;
    do{
      sobreposicao = false;
      posicaoL = encontraRandomPosicaoTab();
      for(let p = 0; p < palavra.length; p++){
        if(tabuleiroaux[posicaoL + p][posicaoC] !== " "){
          sobreposicao = true;
        } 
      }
    }while(posicaoL + palavra.length > nrLinhas || sobreposicao)
  
    for(let p = 0; p < palavra.length; p++){
      if(tabuleiroaux[posicaoL + p][posicaoC ] === " "){
        tabuleiroaux[posicaoL + p][posicaoC] = palavra[p];  
        tabuleiro[posicaoL + p][posicaoC] = palavra[p];  
      } 
   }

   return [tabuleiro, tabuleiroaux];

  }

  function trocaLetraDiagonal(){
    let palavra = encontraRandomWord();
    let posicaoL;
    let posicaoC;
    let sobreposicao = true;
    do{
      sobreposicao = false;  
      posicaoL = encontraRandomPosicaoTab();
      posicaoC = encontraRandomPosicaoTab();
      for(let p = 0; p < palavra.length; p++ ){
        if(tabuleiroaux[posicaoL + p][posicaoC + p] !== " "){
          sobreposicao = true;
        } 
      }
    
    }while(posicaoL + palavra.length > nrLinhas || posicaoC + palavra.length > nrColunas  || sobreposicao)
        

    for(let p = 0; p < palavra.length; p++){
      if(tabuleiroaux[posicaoL + p][posicaoC + p] === " "){
        tabuleiroaux[posicaoL + p][posicaoC + p] = palavra[p];  
        tabuleiro[posicaoL + p][posicaoC + p] = palavra[p];  
      } 
    }

    return [tabuleiro, tabuleiroaux];
  }

  function trocaLetraDiagonalReverse(){
    
    let palavra = encontraRandomWord();
    palavra = inverteString(palavra);
    let posicaoL;
    let posicaoC;
    let sobreposicao = true;
    do{
      sobreposicao = false;
      posicaoL = encontraRandomPosicaoTab();
      for(let p = 0; p < palavra.length; p++){
        if(tabuleiroaux[posicaoL][posicaoC + p] !== " "){
          sobreposicao = true;
        } 
      }
    
    }while(posicaoL + palavra.length > nrLinhas || posicaoC + palavra.length > nrColunas || sobreposicao)

    for(let p = 0; p < palavra.length; p++){
      if(tabuleiroaux[posicaoL + p][posicaoC + p] === " "){
        tabuleiroaux[posicaoL + p][posicaoC + p] = palavra[p];  
        tabuleiro[posicaoL + p][posicaoC + p] = palavra[p];  
      } 
    }
      
    return [tabuleiro, tabuleiroaux];
  }

  
 

  


  

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

