import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useWallet } from '@/hooks/useWallet';

const Hero = () => {
  const { account, connectWallet } = useWallet();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* LEFT */}
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-crypto-purple mr-2">
                TRIX Presale Live
              </span>
              <span className="text-xs text-gray-300">
                Powering the TriXchange Ecosystem
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-1" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Future of Finance <br />
              <span className="text-gradient">Is Connected</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              TRIX is the utility token powering <strong>TriXchange</strong> — a next-generation
              centralized exchange unifying <strong>crypto, forex, and commodities</strong> in one
              seamless trading ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {!account ? (
                <Button
                  size="lg"
                  onClick={connectWallet}
                  className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6"
                >
                  Connect Wallet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6"
                >
                  Buy TRIX
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-white hover:bg-white/5 py-6"
              >
                Read White Paper
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* STATS */}
            <div className="mt-10 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">300M</p>
                <p className="text-sm text-gray-400">Total Supply</p>
              </div>
              <div className="h-12 w-px bg-gray-700" />
              <div>
                <p className="text-2xl font-bold text-white">25%</p>
                <p className="text-sm text-gray-400">Presale Allocation</p>
              </div>
              <div className="h-12 w-px bg-gray-700" />
              <div>
                <p className="text-2xl font-bold text-white">Utility</p>
                <p className="text-sm text-gray-400">Driven Token</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img
                src="https://images.unsplash.com/photo-1642790551116-18e4f8f92f43?auto=format&fit=crop&h=800"
                alt="TriXchange unified trading dashboard"
                className="rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
