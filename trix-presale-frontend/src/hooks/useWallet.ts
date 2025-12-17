import { useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet already connected
  const checkWalletConnection = async () => {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }

    const chain = await window.ethereum.request({ method: "eth_chainId" });
    setChainId(chain);
  };

  // Connect MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected. Please install MetaMask.");
      return;
    }

    try {
      setIsConnecting(true);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);

      const chain = await window.ethereum.request({
        method: "eth_chainId",
      });

      setChainId(chain);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Listen for account / chain changes
  useEffect(() => {
    checkWalletConnection();

    if (!window.ethereum) return;

    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setAccount(accounts.length ? accounts[0] : null);
    });

    window.ethereum.on("chainChanged", (chain: string) => {
      setChainId(chain);
    });

    return () => {
      if (!window.ethereum) return;
      window.ethereum.removeAllListeners("accountsChanged");
      window.ethereum.removeAllListeners("chainChanged");
    };
  }, []);

  return {
    account,
    chainId,
    isConnecting,
    connectWallet,
  };
};
