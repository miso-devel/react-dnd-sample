import { ItemTypes } from "../DnD/ItemsType";
import { useDrag } from "react-dnd";
import { useState } from "react";
export const Knight = ({ x, y }) => {
  const [positions, setPositions] = useState([]);

  // drag操作
  // useDragの引数
  // type（dragするitemの指定）、collect（）
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult();

      setPositions([...positions, dropResult]);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  console.log(positions);
  // console.log(`[drag]isDragging:${isDragging}`);
  // console.log(`[drag]canDrag:${canDrag}`);

  return (
    <span
      ref={drag}
      className="text-9xl font-extrabold flex justify-center justify-items-center"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      ♘
    </span>
  );
};
