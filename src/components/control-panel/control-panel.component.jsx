import React from "react";
import "./control-panel.css";

function ControlPanel(props) {
  const { gameStarted, selectedLevel, onGameStart, onLevelChange, timer } = props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  return(
    <section id="panel-control">
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nivel:</label>
          <select id="btLevel" defaultValue="0" onChange={onLevelChange}>
            <option value="0">Selecione...</option>
            <option value="1">Básico</option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado</option>
          </select>
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
          <dd id="points">0</dd>
        </dl>
        <div id="top10" className={`right`}>
          
        </div>
      </div>
    </section>
  );

}

export default ControlPanel;