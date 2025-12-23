import React from "react";
import { Download, Wallet, BarChart4 } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <Download className="h-6 w-6" />,
    title: "Create Your Account",
    description:
      "Get started in minutes with a simple, secure signup process designed for a smooth onboarding experience."
  },
  {
    number: "02",
    icon: <Wallet className="h-6 w-6" />,
    title: "Fund Your Wallet",
    description:
      "Deposit crypto or supported fiat currencies using multiple payment methods with fast confirmations."
  },
  {
    number: "03",
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Trade & Manage Assets",
    description:
      "Buy, sell, and manage digital assets using real-time charts, analytics, and professional trading tools."
  }
];
