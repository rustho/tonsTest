import {
  TonConnectButton,
  TonConnectUIProvider,
  useTonAddress,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import StakingComponent from "./components/StakingComponent";
import ExchangeRateComponent from "./components/ExchangeRateComponent";
import "./App.css";

function App() {
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  console.log(tonConnectUI);

  return (
    <TonConnectUIProvider manifestUrl="https://rustho.github.io/tonsTest/tonconnect-manifest.json">
      <div className="App">
        <h1>TON Staking App</h1>
        <TonConnectButton />
        {userFriendlyAddress && (
          <div>
            <p>Connected Address: {userFriendlyAddress}</p>
            <StakingComponent />
          </div>
        )}
        <ExchangeRateComponent />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
