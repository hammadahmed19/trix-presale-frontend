import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';

export const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Advanced Market Insights",
    description:
      "Access real-time price data, depth charts, and on-chain analytics to make informed trading decisions."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Institutional-Grade Security",
    description:
      "Protected by end-to-end encryption, multi-factor authentication, and strict access controls."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Ultra-Fast Trade Execution",
    description:
      "Experience low-latency order matching designed for high-frequency and professional traders."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "AI-Driven Portfolio Intelligence",
    description:
      "Smart portfolio insights powered by AI to help balance risk, returns, and diversification."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Smart Alerts & Signals",
    description:
      "Set intelligent alerts for price movements, volume spikes, and market trends in real time."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cold Wallet Asset Protection",
    description:
      "The majority of user funds are securely stored in offline cold wallets to minimize risk."
  }
];
