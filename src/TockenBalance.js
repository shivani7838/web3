import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import Web3 from 'web3'; 
import ENSabi from './ENSabi.json'; // Replace with actual token ABI

function useTokenBalance(tokenAddress) {
//   const { account } = useWeb3React();
  const { account, library, chainId = 1 , active} = useWeb3React();
  const lib = library;
  const web3 = new Web3(lib?.provider);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (!account) return;
    try {
        const instance = new web3.eth.Contract(ENSabi, "0xBC071C64eD8F536011c78e847755680740d6b73C");
        const balance = await instance.methods.balanceOf(account).call();
        const decimal= await instance.methods.decimals().call();
        setBalance(balance/Math.pow(10,decimal));
      } catch (error) {
        console.error('Error fetching token balance:', error);
        setBalance(null); 
      }
    };

    fetchTokenBalance();
  }, [account, tokenAddress]);

  return balance;
}

export default useTokenBalance;
