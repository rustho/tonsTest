import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { StakingComponent } from "./widgets/Staking";
import { ExchangeRateComponent } from "./widgets/ExchangeRate/ui/ExchangeRateComponent";
import "./App.css";

function App() {
  const userFriendlyAddress = useTonAddress();
  return (
    <div className="App">
      <h1>TON Staking App</h1>
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <TonConnectButton />
      </div>
      <ExchangeRateComponent />
      {userFriendlyAddress && (
        <div>
          <StakingComponent />
        </div>
      )}
    </div>
  );
}

export default App;
