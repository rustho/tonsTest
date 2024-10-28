import React, { useState, useEffect, useCallback } from "react";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Tonstakers } from "tonstakers-sdk";
import { StakingData } from "../model/types";
import { StakingInfo } from "./StakingInfo";
import { StakingActions } from "./StakingActions";
import { PoolInfo } from "./PoolInfo";

const initialStakingData: StakingData = {
  apy: "",
  tvl: "",
  stakers: "",
  tonUsd: "",
  tsTonTon: "",
  stakedBalance: "",
  availableBalance: "",
};

export const StakingComponent: React.FC = () => {
  const [isStaked, setIsStaked] = useState(false);
  const [stakeAmount, setStakeAmount] = useState("10");
  const [stakingData, setStakingData] =
    useState<StakingData>(initialStakingData);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const tonstakers = new Tonstakers({
    connector: tonConnectUI.connector as unknown as any,
    partnerCode: 123456,
  });

  const fetchData = useCallback(async () => {
    try {
      tonstakers.addEventListener("initialized", () => {
        console.log("Tonstakers SDK initialized successfully.");
      });

      tonstakers.addEventListener("deinitialized", () => {
        console.log("Tonstakers SDK has been deinitialized.");
      });

      const [
        apyValue,
        tvlValue,
        stakersCount,
        rates,
        stakedBalanceValue,
        availableBalanceValue,
      ] = await Promise.all([
        tonstakers.getCurrentApy(),
        tonstakers.getTvl(),
        tonstakers.getStakersCount(),
        tonstakers.getRates(),
        tonstakers.getStakedBalance(),
        tonstakers.getAvailableBalance(),
      ]);

      setStakingData({
        apy: apyValue.toString(),
        tvl: (tvlValue / 1e9).toString(),
        stakers: stakersCount.toString(),
        tonUsd: rates.TONUSD.toString(),
        tsTonTon: rates.tsTONTON.toString(),
        stakedBalance: (stakedBalanceValue / 1e9).toString(),
        availableBalance: (availableBalanceValue / 1e9).toString(),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleStake = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      await tonstakers.stake(Number(stakeAmount));
      setIsStaked(true);
      alert("Staking successful!");
      fetchData();
    } catch (error) {
      console.error("Error staking:", error);
      alert("Failed to stake. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <StakingInfo data={stakingData} />
        <StakingActions
          isStaked={isStaked}
          stakeAmount={stakeAmount}
          setStakeAmount={setStakeAmount}
          handleStake={handleStake}
          availableBalance={stakingData.availableBalance}
          stakedBalance={stakingData.stakedBalance}
        />
        <PoolInfo onRefresh={fetchData} />
      </div>
    </div>
  );
};
