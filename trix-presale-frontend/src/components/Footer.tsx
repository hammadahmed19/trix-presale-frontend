import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              TriX<span className="text-crypto-purple">change</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              TriXchange is a next-generation centralized exchange unifying
              cryptocurrency, forex, and commodities trading in one secure,
              high-performance ecosystem powered by the TRIX utility token.
            </p>

            <div className="flex space-x-4">
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#!"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Spot Trading</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">P2P Marketplace</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Crypto, Forex & Commodities</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Custodial Wallets</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Trading Fees & Discounts</a></li>
            </ul>
          </div>

          {/* TRIX Token */}
          <div>
            <h3 className="text-white font-medium mb-4">TRIX Token</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Token Utility</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Staking & Rewards</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Presale</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Tokenomics</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Airdrops & Incentives</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">About TriXchange</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Roadmap</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Security & Compliance</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">White Paper</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-crypto-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TriXchange. All rights reserved.
              <span className="mx-1">•</span>
              TRIX is a utility token and does not represent equity or ownership.
            </p>

            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Terms
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Privacy
              </a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">
                Risk Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
