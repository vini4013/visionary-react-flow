import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";
import Card from "./Card";

export default function OutputNode({ data }) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#bbb", width: 10, height: 10 }}
      />
      <Card title="Output" bgColor="#b8f0d8" icon="📊">
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          {data.description ?? "Analyze trends, create report and save to Google doc"}
        </p>
      </Card>
    </>
  );
}