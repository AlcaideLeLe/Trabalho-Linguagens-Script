import React from "react";

import "./game-panel.css";

function GamePanel(props) {
  const { tabuleiroJogo, palavrasSelecionadas, gameStarted } = props;

  let selecionado = false;
  let letrasSelecionadas = "";
  let palavrasCertas = [];
  


  function mouseDown(){
    selecionado = true;

  }
  function mouseUp(){
    Array.from(document.querySelectorAll('.Selected')).forEach((el) => el.classList.remove('Selected'));
    selecionado = false;

  }
  function mouseMove(event){
    if(selecionado && !event.currentTarget.classList.contains("Selected")){
      console.log(event.currentTarget.innerText);
      letrasSelecionadas += event.currentTarget.innerText;
      event.currentTarget.className += " Selected";
      let i;
      

      
      if(palavrasCertas.length > palavrasSelecionadas.length){
        return
      }
      else{
        for(i=0; i<palavrasSelecionadas.length; i++){
              if(letrasSelecionadas === palavrasSelecionadas[i]){
                let elemento = document.getElementsByClassName("Selected");
                
                for (let index = 0; index < elemento.length; index++) {
                    elemento[index].classList.add("Right");
                }
                
                riskWord(palavrasSelecionadas[i]);

                palavrasCertas.push(letrasSelecionadas);
                letrasSelecionadas = "";
                //console.log("asd");
              }
          }
        }
    }
  }

  function riskWord(palavra){
    console.log(palavra);
    document.getElementById("col2-" + palavra + "-").classList.add("Risked");
  }
  

  return (
    <section className="game-panel">
      <h3 className="sr-only">Tabuleiro de Jogo</h3>
      <div id = "game">
      <table onMouseDown={mouseDown} onMouseUp = {mouseUp}>
          <tbody>
          
            {tabuleiroJogo.map((linha, index) => {
              return (
                <tr key={`linha1-${index}-`}>
                {linha.map((coluna, cindex) => {
                  return (
                    <td onMouseMove={mouseMove} key={`coluna1-${index}-${cindex}-`}>{ coluna }</td>
                  );
                })}
                </tr>  
                
              );
            })}
          
          </tbody>
        </table>

            

      </div>

      <h3 className="sr-only">Palavras</h3>
      <div id="game">
      <table>
          <tbody>
          
            {palavrasSelecionadas.map((linha, index) => {
              return (
                <tr key={`linha2-${index}-`}>
                  <td key={`col2-${linha}-`} id={`col2-${linha}-`}>{linha}</td>
                </tr>  
                
              );
            })}
          
          </tbody>
        </table>

            

      </div>
    </section>
  );
}
export default GamePanel;
