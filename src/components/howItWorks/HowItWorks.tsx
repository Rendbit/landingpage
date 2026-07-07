import { useTheme } from "../../context/ThemeContext";

export default function HowItWorks() {
  const { isDark } = useTheme();

  const surface = isDark ? "#1a1a1a" : "#F7F7F7";
  const cardBg = isDark ? "#111111" : "#ffffff";
  const phoneBg = isDark ? "#161616" : "#F5F5F5";
  const textPrimary = isDark ? "#f5f5f5" : "#111827";
  const textMuted = isDark ? "#9ca3af" : "#A3A3A3";
  const border = isDark ? "#2a2a2a" : "#f3f4f6";
  const iconBgDefault = isDark ? "#2a2a2a" : "#F0F0F0";
  const iconColorDefault = isDark ? "#9ca3af" : "#A3A3A3";

  const steps = [
    {
      iconBg: iconBgDefault,
      iconColor: iconColorDefault,
      filled: false,
      title: "Create an Account",
      description: "Download the app and complete our quick KYC verification process in minutes",
      cardBg: "transparent",
    },
    {
      iconBg: "#3b82f6",
      iconColor: "#ffffff",
      filled: true,
      title: "Fund Your Wallet",
      description: "Add money to your wallet using bank transfer, card, or mobile money",
      cardBg: cardBg,
    },
    {
      iconBg: iconBgDefault,
      iconColor: iconColorDefault,
      filled: false,
      title: "Send Money Globally",
      description: "Transfer funds instantly to any supported country with real-time tracking",
      cardBg: "transparent",
    },
  ];

  const UserIcon = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );

  return (
    <section className="w-full px-4 md:px-6 py-10 md:py-16" id="see-how-it-works" style={{ background: isDark ? "#0f0f0f" : "#ffffff" }}>
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1 mb-4 md:mb-5"
            style={{ background: isDark ? "#1f1f1f" : "#f3f4f6" }}
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M2 8h5M8 3l5 5-5 5" stroke={isDark ? "#9ca3af" : "#5C5C5C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] font-medium" style={{ color: isDark ? "#9ca3af" : "#5C5C5C" }}>
              How it works?
            </span>
          </div>

          <h2
            className="text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-tight tracking-tight mb-3 md:mb-4"
            style={{ color: textPrimary }}
          >
            Start in 3 simple steps
          </h2>

          <p className="text-[13px] md:text-[15px] leading-relaxed max-w-[480px] px-2" style={{ color: textMuted }}>
            Experience the future of cross border payment design for speed, reliability, and safety
            for african money transfers market<br />
            No friction, no confusion. Just flow.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-1 items-stretch">

          {/* Step cards */}
          <div
            className="flex flex-col w-full md:w-[380px] md:flex-shrink-0 p-3 rounded-[30px]"
            style={{ background: surface }}
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl px-4 md:px-6 py-5 md:py-6 flex-1"
                style={{
                  background: step.cardBg,
                  border: `0.5px solid ${step.cardBg === "transparent" ? "transparent" : border}`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-3 md:mb-4"
                  style={{ background: step.iconBg }}
                >
                  <UserIcon color={step.iconColor} />
                </div>
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-1.5" style={{ color: textPrimary }}>
                  {step.title}
                </h3>
                <p className="text-[12px] md:text-[13px] leading-relaxed" style={{ color: textMuted }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div
            className="flex-1 rounded-[30px] overflow-hidden flex items-center justify-center relative min-h-[280px] sm:min-h-[340px] md:min-h-0"
            style={{ background: phoneBg }}
          >
            <img
              src="/image/phonemockup1.svg"
              alt="App mockup"
              className="w-[220px] sm:w-[270px] md:w-[320px] object-contain absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}