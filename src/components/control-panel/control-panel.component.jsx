import React from "react";
import "./control-panel.css";
import GamePanel from "../game-panel/game-panel.component";

function ControlPanel(props) {
  const { gameStarted, selectedLevel, onGameStart, onLevelChange, timer, palavrasUser, setPalavrasUser, points } = props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  

  function adicionaPalavra(){
    
    setPalavrasUser([...palavrasUser, document.getElementById("palavra").value.toUpperCase()]);
    
  }

  
   

  return(
    <section id="panel-control">
      <form  className="form" onSubmit={event => event.preventDefault()}>
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nivel:</label>
          <select id="btLevel" defaultValue="0" onChange={onLevelChange}>
            <option value="0">Selecione...</option>
            <option value="1">Básico</option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado</option>
          </select>
          <br></br>
          <br></br>
          <label for="novaPalavra">Insira uma palavra</label><br></br>
          <input type="text" id="palavra" name="novaPalavra" placeholder="Ex: Linguagem" /><br></br>
          <button type = "button" id="novaPalavra" onClick={adicionaPalavra}>Inserir palavra</button>
        </fieldset>
        <button type="button" id="btPlay" disabled={selectedLevel=== "0"} onClick={onGameStart}>
          {gameStarted ? "Parar Jogo" : "Iniciar Jogo"}
        </button>
      </form>
      <div className="form-metadata">
        <p id="message" role="alert" className="hide">Clique em Iniciar Jogo!</p>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{timer}</dd>
        </dl>
        <dl className={`list-item right${gameStartedClass}`}>
          
        </dl>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">{points}</dd>
        </dl>
        <div id="top10" className={`right`}>
          
        </div>
      </div>
    </section>
  );

}

export default ControlPanel;