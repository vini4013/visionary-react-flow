import { Handle, Position } from "reactflow";
import Card from "./Card";

function InputNode({ data }) {
  return (
    <>
      <Card title="Input" bgColor="#f0f566" icon="⬛">
        <input
          type="text"
          placeholder={data.placeholder ?? "Add your topic"}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: 13,
            color: "#555",
            background: "transparent",
            fontFamily: "inherit",
            padding: 0,
            boxSizing: "border-box",
          }}
        />
      </Card>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#bbb", width: 10, height: 10 }}
      />
    </>
  );
}

export default InputNode;