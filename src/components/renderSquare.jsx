import { Square } from "./Square";
import { Knight } from "./Knight";
import { canMoveKnight, moveKnight } from "./Game";
export const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;
  const handleSquareClick = (toX, toY) => {
    console.log(toX, toY);
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  };
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <div onClick={() => handleSquareClick(x, y)}>
        <Square black={black}>{piece}</Square>
      </div>
    </div>
  );
};
