import React, {MouseEventHandler} from "react";
import { useLocation } from "react-router-dom";

import useAudio from "../hooks/use-audio";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPaper} from "@fortawesome/free-solid-svg-icons";

import './Game.scss';

export const Game: React.FC = () => {
  const location = useLocation();
  const [playing, toggle] = useAudio(`./sounds/${(location.state as {userId: number}).userId}.mp3`);

  return (
    <div className="game-container">
      <div className="text">
        <p>
          Жми, если знаешь ответ!
        </p>
      </div>
      <button style={{backgroundColor: playing ? '#942c2c' : '#d43d3d'}} className="main-button" onClick={toggle as MouseEventHandler<HTMLButtonElement>}>
        <FontAwesomeIcon icon={faHandPaper} color="#fff" style={{fontSize: '100px', opacity: 0.5}} />
      </button>
    </div>
  );
};
