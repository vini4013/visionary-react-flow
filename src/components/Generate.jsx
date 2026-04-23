import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";
import Card from "./Card";

const SearchIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

export default function Generate({ data }) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#bbb", width: 10, height: 10 }}
      />
      <Card
        title="Generate"
        bgColor="#c7d7f8"
        icon="✦"
      >
            <p
            style={{
                margin: 0,
                fontSize: 13,
                color: "#555",
                lineHeight: 1.5,
            }}
            >
            {data.description ?? "Type to search web"}
            </p>
        </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#bbb", width: 10, height: 10 }}
      />
    </>
  );
}