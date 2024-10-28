import React from "react";
import { PoolInfoProps } from "../model/types";

export const PoolInfo: React.FC<PoolInfoProps> = ({ onRefresh }) => (
  <div>
    <h2>Pool Information</h2>
    <button onClick={onRefresh}>Refresh Data</button>
  </div>
);
