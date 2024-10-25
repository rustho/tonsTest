import React from "react";
import { StakingInfoProps } from "./types";

export const StakingInfo: React.FC<StakingInfoProps> = ({ data }) => (
  <div id="stakingInfo">
    <h2>Staking Information</h2>
    <p>APY: {data.apy}%</p>
    <p>TVL: {data.tvl} TON</p>
    <p>Total Stakers: {data.stakers}</p>
    <p>TON/USD Rate: ${data.tonUsd}</p>
    <p>tsTON/TON Rate: {data.tsTonTon}</p>
  </div>
);
