import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Cell from "./Cell";

export default function Board() {
  const { gameState } = useContext(AuthContext);

  return (
    <div className="board">
      {gameState.map((item, index) => (
        <Cell key={index} value={item} />
      ))}
    </div>
  );
}
