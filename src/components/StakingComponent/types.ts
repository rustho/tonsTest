import { Wallet } from "@tonconnect/ui-react";

export interface StakingData {
  apy: string;
  tvl: string;
  stakers: string;
  tonUsd: string;
  tsTonTon: string;
  stakedBalance: string;
  availableBalance: string;
}

export interface WalletInfoProps {
  wallet: Wallet | null;
}

export interface StakingInfoProps {
  data: StakingData;
}

export interface StakingActionsProps {
  isStaked: boolean;
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
  handleStake: () => void;
  availableBalance: string;
  stakedBalance: string;
}

export interface PoolInfoProps {
  onRefresh: () => void;
}
