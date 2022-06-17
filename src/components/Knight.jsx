import { ItemTypes } from "../DnD/ItemsType";
import { useDrag } from "react-dnd";
export const Knight = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <span
      ref={drag}
      className=" text-9xl font-extrabold flex justify-center justify-items-center"
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      ♘
    </span>
  );
};
