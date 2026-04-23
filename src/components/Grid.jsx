
import React, { useCallback } from "react";
import InputNode from "./Input"
import GenerateNode from "./Generate"
import OutputNode from "./Ouput"
import { useNodesState, useEdgesState, addEdge, Background, Controls, ReactFlow } from "reactflow";

import "reactflow/dist/style.css";


const nodeTypes = {
  inputNode: InputNode,
  generateNode: GenerateNode,
  outputNode: OutputNode,
};
const initialNodes = [
  {
    id: "1",
    type: "inputNode",
    position: { x: 60, y: 160 },
    data: { placeholder: "Add your topic" },
  },
  {
    id: "2",
    type: "generateNode",
    position: { x: 380, y: 60 },
    data: { label: "to find social trends" },
  },
  {
    id: "3",
    type: "outputNode",
    position: { x: 380, y: 280 },
    data: {
      description:
        "Analyze trends, create report and save to Google doc",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: null,
    targetHandle: null,
    type: "smoothstep",
    animated: false,
    style: { stroke: "#bbb", strokeWidth: 2 },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    animated: false,
    style: { stroke: "#bbb", strokeWidth: 2 },
    markerEnd: { type: "arrowclosed", color: "#bbb" },
  },
];


export default function Grid() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: "smoothstep", style: { stroke: "#bbb", strokeWidth: 2 } },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100vh", background: "#f5f5f3" }}>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        // defaultEdgeOptions={{ type: "smoothstep" }}
      >
        <Background color="#ddd" gap={24} size={1} variant="dots" />
        <Controls
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            borderRadius: 10,
            border: "1px solid #e8e8e8",
          }}
        />
      </ReactFlow>
    </div>
  );
}