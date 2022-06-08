import React from "react";

import "./game-panel.css";

function GamePanel(props) {
  const { tabuleiroJogo } = props;
  

  return (
    <section className="game-panel">
      <h3 className="sr-only">Tabuleiro de Jogo</h3>
      <div id="game">
      <table>
          <thead>
          </thead>
          <tbody>
          
            {tabuleiroJogo.map(linha => {
              return (
                <tr>
                {linha.map(coluna => {
                  return (
                    <td>{ coluna }</td>
                  );
                })}
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
