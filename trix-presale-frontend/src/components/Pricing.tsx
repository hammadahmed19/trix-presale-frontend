import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tokenomics = [
  {
    name: "Presale",
    allocation: "30%",
    features: ["Early access", "Lowest price", "Priority rewards"],
    highlighted: true,
  },
  {
    name: "Liquidity",
    allocation: "40%",
    features: ["DEX liquidity", "Price stability", "Locked pool"],
  },
  {
    name: "Team & Development",
    allocation: "30%",
    features: ["Vesting applied", "Long-term growth", "Ecosystem funding"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#12141C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            TRIX Tokenomics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent, fair, and built for sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm border rounded-xl ${
                item.highlighted ? 'border-crypto-purple' : 'border-white/10'
              }`}
            >
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.name}
                </h3>
                <p className="text-4xl font-bold text-crypto-purple mb-6">
                  {item.allocation}
                </p>

                <Button className="w-full mb-6 bg-crypto-purple hover:bg-crypto-dark-purple">
                  Allocation
                </Button>

                <ul className="space-y-3 text-left">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-crypto-purple mr-3" />
                      <span className="text-gray-400 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
