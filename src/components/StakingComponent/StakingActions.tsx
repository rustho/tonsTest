import React from "react";
import { StakingActionsProps } from "./types";

export const StakingActions: React.FC<StakingActionsProps> = ({
  isStaked,
  stakeAmount,
  setStakeAmount,
  handleStake,
  availableBalance,
  stakedBalance,
}) => (
  <div id="stakingActions">
    <h2>Staking Actions</h2>
    <p>Staked Balance: {stakedBalance} tsTON</p>
    <p>Available Balance: {availableBalance} TON</p>
    <input
      type="number"
      value={stakeAmount}
      onChange={(e) => setStakeAmount(e.target.value)}
      placeholder="Amount to stake"
    />
    <button onClick={handleStake} disabled={isStaked}>
      {isStaked ? "Staked" : "Stake TON"}
    </button>
    <button onClick={() => setStakeAmount(availableBalance)}>Stake Max</button>
  </div>
);
