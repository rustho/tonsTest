import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { WalletInfoProps } from "./types";

export const WalletInfo: React.FC<WalletInfoProps> = ({ wallet }) => (
  <div id="walletInfo">
    <TonConnectButton />
    {wallet && <p>Wallet Address: {wallet.account.address}</p>}
  </div>
);
