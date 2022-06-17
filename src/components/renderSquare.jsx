import { Knight } from "./Knight";
import { BoardSquare } from "./BoardSquare";
export const renderSquare = (i, knightPosition) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const renderPiece = (x, y, [knightX, knightY]) => {
    if (x === knightX && y === knightY) {
      return <Knight x={x} y={y} />;
    }
  };

  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};
