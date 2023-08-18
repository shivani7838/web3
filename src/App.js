import React from 'react';
import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnector from './WalletConnector';

const getLibrary = (provider)=>{
  console.log('getLibrary called'); 
  if (typeof provider !== 'undefined') {
    console.log('getLibrary called');
    const library = new Web3Provider(provider,"any");
    library.pollingInterval = 15_000;
    return library;
  } else {
    throw new Error('Missing provider');
  }
}
  // export function getLibrary(provider) {
  //   console.log('getLibrary called'); 
  //   // const library = new Web3Provider(provider,"any");
  //   // library.pollingInterval = 15_000;
  //   // return library;
  // }
  // getLibrary() 
function App() {
  const provider = typeof window !== 'undefined' ? window.ethereum : undefined;
console.log(provider,"ghjkl")
  return (
    // <h1>hhhh</h1>
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header className="App-header">
          {/* <h1>Web3 React Wallet</h1> */}
          <WalletConnector />
        </header>
      </div>
     </Web3ReactProvider>
  );
}

export default App;
