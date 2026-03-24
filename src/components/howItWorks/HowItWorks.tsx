const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#A3A3A3]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    iconBg: "bg-[#F0F0F0]",
    title: "Create an Account",
    description: "Download the app and complete our quick KYC verification process in minutes",
    cardBg: "bg-transparent",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    iconBg: "bg-blue-500",
    title: "Fund Your Wallet",
    description: "Add money to your wallet using bank transfer, card, or mobile money",
    cardBg: "bg-white",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#A3A3A3]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    iconBg: "bg-[#F0F0F0]",
    title: "Send Money Globally",
    description: "Transfer funds instantly to any supported country with real-time tracking",
    cardBg: "bg-transparent",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white w-full px-6 py-16">
      <div className="max-w-[1100px] mx-auto">

        {/* ── header ── */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1 mb-5">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M2 8h5M8 3l5 5-5 5" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] text-[#5C5C5C] font-medium">How it works?</span>
          </div>

          <h2 className="text-[44px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Start in 3 simple steps
          </h2>

          <p className="text-[15px] text-[#A3A3A3] leading-relaxed max-w-[480px]">
            Experience the future of cross border payment design for speed, reliability, and safety
            for african money transfers market<br />
            No friction, no confusion — just flow.
          </p>
        </div>

        {/* ── two-column layout ── */}
        <div className="flex gap-1 items-stretch">

          {/* left: step cards */}
          <div className="flex flex-col w-[380px] flex-shrink-0 bg-[#F7F7F7] p-3 rounded-[30px]">
            {steps.map((step) => (
              <div
                key={step.title}
                className={`${step.cardBg} rounded-2xl px-6 py-6 border border-gray-100 flex-1`}
              >
                <div className={`w-8 h-8 rounded-full ${step.iconBg} flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-[#A3A3A3] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* right: phone mockup — stretches to match left height */}
          <div className="flex-1 bg-[#F5F5F5] rounded-[30px] overflow-hidden flex items-center justify-center relative">
            <img
              src="/image/phonemockup1.svg"
              alt="App mockup"
              className="w-[320px] object-contain absolute bottom-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}