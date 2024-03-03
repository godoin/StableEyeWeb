import React from "react";

interface ItemProps {
  param: string;
  name: string;
}

export default function Item(props: ItemProps) {
  return (
    <div className="p-2 grid grid-cols-1 rounded-lg border border-zinc-300">
      <span className="semibold">{props.param}</span>
      <span>{props.name}</span>
    </div>
  );
}
