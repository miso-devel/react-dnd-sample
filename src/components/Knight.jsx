import { ItemTypes } from "../DnD/ItemsType";
import { useDrag } from "react-dnd";
export const Knight = () => {
  // drag操作
  // useDragの引数
  // type（dragするitemの指定）、collect（）
  const [{ isDragging, canDrag }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
  }));

  console.log(`[drag]isDragging:${isDragging}`);
  console.log(`[drag]canDrag:${canDrag}`);

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
