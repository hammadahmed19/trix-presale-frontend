import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-[#12141C] to-crypto-blue"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start trading on TriXchange in just a few simple steps. Secure, fast,
            and designed for both beginners and professionals.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-crypto-purple/40 hover:-translate-y-1 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <span className="absolute -top-4 -left-4 bg-crypto-blue border border-crypto-purple/30 rounded-md text-crypto-purple font-bold text-xl px-3 py-1">
                {step.number}
              </span>

              {/* Icon */}
              <div className="bg-crypto-purple/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-crypto-purple">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-10 py-6 text-lg shadow-lg hover:shadow-crypto-purple/30 transition-all"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
