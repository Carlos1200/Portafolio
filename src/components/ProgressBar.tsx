import React from "react";

interface Props {
  porcentaje: number;
}

export const ProgressBar = ({ porcentaje }: Props) => {
  return (
    <div className="progressBar">
      <div
        className="progressBarCircle"
        style={{ marginLeft: `${porcentaje - 5}%` }}
      />
      <div className="progress" style={{ width: `${porcentaje}%` }}></div>
    </div>
  );
};
