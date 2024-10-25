import React from "react";
import { PoolInfoProps } from "./types";

export const PoolInfo: React.FC<PoolInfoProps> = ({ onRefresh }) => (
  <div id="poolInfo">
    <h2>Pool Information</h2>
    <button onClick={onRefresh}>Refresh Data</button>
  </div>
);
