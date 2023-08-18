import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from './connectors'; 
import useTokenBalance from './TockenBalance';
const WalletConnector = () => {
  const { activate, active, account } = useWeb3React();
  const tokenAddress = '0xe7cF04797951aDfee0b75A884c057f8E091159Eb';
  const tokenBalance = useTokenBalance(tokenAddress);
 
  const connectWallet = () => {
   activate(injected);
  };

  return (
    <div>
    <h2>Your Token Balance:</h2>
    {active ? (
      <div>
        <p>Connected with address: {account} </p>
        <p>{tokenBalance !== null ? `${tokenBalance} Tokens` : 'Loading...'}</p></div>
    ) : (
      <button onClick={connectWallet}>Connect Wallet</button>
    )}
  </div>
  );
};

export default WalletConnector;
