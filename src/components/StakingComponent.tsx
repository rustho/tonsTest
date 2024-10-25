import React, { useState } from "react";
import {
  TonConnectButton,
  useTonWallet,
  TonConnect,
  Wallet,
} from "@tonconnect/ui-react";
import { Tonstakers } from "tonstakers-sdk";

const StakingComponent: React.FC = () => {
  const [isStaked, setIsStaked] = useState(false);
  const [stakeAmount, setStakeAmount] = useState("10"); // Default stake amount
  const wallet = useTonWallet();

  const handleStake = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const connector = new TonConnect({
        manifestUrl: "https://rustho.github.io/tonsTest/",
      }) as unknown as any;
      const tonstakers = new Tonstakers({
        connector,
        partnerCode: 123456,
      });

      await tonstakers.stake(Number(stakeAmount));

      setIsStaked(true);
      alert("Staking successful!");
    } catch (error) {
      console.error("Error staking:", error);
      alert("Failed to stake. Please try again.");
    }
  };

  return (
    <div>
      <TonConnectButton />
      {wallet && (
        <div>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            placeholder="Amount to stake"
          />
          <button onClick={handleStake} disabled={isStaked}>
            {isStaked ? "Staked" : "Stake TON"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StakingComponent;
