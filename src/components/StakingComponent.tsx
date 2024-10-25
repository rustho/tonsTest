import React, { useState } from "react";
import {
  TonConnectButton,
  // TonConnectUI,
  // useTonAddress,
  useTonWallet,
  // TonConnect,
} from "@tonconnect/ui-react";
// import { Tonstakers as TonstakersSDK } from "tonstakers-sdk";

const StakingComponent: React.FC = () => {
  const [isStaked, setIsStaked] = useState(false);
  // const userFriendlyAddress = useTonAddress();
  const wallet = useTonWallet();
  // const connector = new TonConnect({
  //   manifestUrl: "https://tonstakers.com/dapp/tonconnect-manifest.json",
  // });
  // const tonConnectUI = new TonConnectUI({ connector });

  //   const { Tonstakers } = TonstakersSDK;
  // const tonstakers = new Tonstakers({
  //   connector,
  //   partnerCode: 123456,
  // });

  const handleStake = async () => {
    if (!wallet) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      //   // Initialize TonStakers SDK
      //   const tonstakers = new Tonstakers({
      //     connector: wallet.connector, // Assuming 'wallet.connector' is the correct value
      //     // Add other necessary configuration options if needed
      //   });

      //   // Perform staking operation
      //   // Note: This is a placeholder. You'll need to replace this with the actual staking method from the Tonstakers SDK
      //   await tonstakers.stake(userFriendlyAddress, "10"); // Stake 10 TON for example

      setIsStaked(true);
    } catch (error) {
      console.error("Error staking:", error);
      alert("Failed to stake. Please try again.");
    }
  };

  return (
    <div>
      <TonConnectButton />
      {wallet && (
        <button onClick={handleStake} disabled={isStaked}>
          {isStaked ? "Staked" : "Stake TON"}
        </button>
      )}
    </div>
  );
};

export default StakingComponent;
