import React from "react";

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
    <path d="M3 13L13 3M13 3H6M13 3v7"/>
  </svg>
);

// Partner logos (simple text-based)
const PartnerLogos = () => (
  <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
    {["Synergy™", "Horizon™", "Phoenix™", "Pulse™", "Solaris™"].map((name) => (
      <div key={name} className="flex items-center gap-1.5 text-gray-400">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" opacity="0.4">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M6 10l2.5 2.5L14 7" strokeWidth="1.5" stroke="currentColor" fill="none"/>
        </svg>
        <span className="text-[13px] font-medium tracking-tight">{name}</span>
      </div>
    ))}
  </div>
);

const Hero = () => (
  <section
    style={{ minHeight: "100vh" }}
    className="relative"
  >

    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-10 pb-4">

      {/* Top badge */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
          <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase">NEW</span>
          <span className="text-[12px] md:text-[13px] text-[#1E1E1E] font-medium">All-in-one crypto dashboard</span>
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* Headline */}
      <div className="text-center mb-4 md:mb-5">
        <h1
          style={{ fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
          className="text-[36px] sm:text-[46px] md:text-[58px] text-[#171717]"
        >
          Send Money Across<br />
          Africa Instantly
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-[14px] md:text-[16px] text-[#1E1E1E] max-w-[500px] mx-auto leading-relaxed mb-6 md:mb-8 px-2">
        Break free from banking restrictions. Transfer money seamlessly across
        African countries using Stellar XLM as your currency bridge.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12">
        <button
          className="flex items-center gap-2 text-white px-6 py-3 rounded-xl text-[14px] font-semibold shadow-lg bg-[#0F7CB3] w-full sm:w-auto justify-center"
        >
          Get Started Today
          <ArrowUpRightIcon />
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl text-[14px] font-medium shadow-sm w-full sm:w-auto justify-center">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
          See how it works
        </button>
      </div>

      <div className="bg-white w-full px-2 md:px-6 py-6 md:py-10">
        <div className="max-w-[1100px] mx-auto">

          {/* ── top row: avatars left · appstore rating right ── */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 gap-4 sm:gap-0 sm:px-1">
            <div className="flex flex-col items-center sm:items-end gap-1 sm:ml-[110px]">
              <img src="/image/avatars.svg" alt="" className="grayscale"/>
              <p className="text-[12px] md:text-[13px] text-[#A3A3A3]">
                Trusted by <span className="font-semibold text-[#5C5C5C]">200,000+</span> crypto traders
              </p>
            </div>

            <div className="sm:mr-[140px] flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1.5 mb-0.5">
                <img src="/image/appstore.svg" alt="" />
                <p className="text-[12px] md:text-[13px] font-semibold text-[#5C5C5C]">4.9/5 Appstore</p>
              </div>
              <p className="text-[12px] md:text-[13px] text-[#A3A3A3]">
                Over <span className="font-semibold text-[#5C5C5C]">$500M</span> swapped securely
              </p>
            </div>
          </div>

          {/* ── main area: single gray bg containing everything, phone overlaps on top ── */}
          <div className="relative">

            {/* full-width gray background card — text top, badges bottom */}
            <div className="bg-[#F5F5F5] rounded-3xl w-full flex flex-col justify-between px-4 md:px-8 pt-6 md:pt-10 pb-6 md:pb-8" style={{ minHeight: "400px" }}>

              {/* top: left text + spacer + right text */}
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0">
                <p className="text-[12px] md:text-[13px] text-[#A3A3A3] leading-relaxed md:text-right w-full md:w-[220px] md:border-r md:pr-9 md:ml-[80px]">
                  Track swaps, <span className="font-semibold text-[#5C5C5C]">monitor</span> tokens, and
                  stay <span className="font-semibold text-[#5C5C5C]">connected</span> with your assets
                  while on the move.
                </p>

                {/* spacer where phone sits — only on desktop */}
                <div className="hidden md:block w-[300px]" />

                <p className="text-[12px] md:text-[13px] text-[#A3A3A3] leading-relaxed w-full md:w-[220px] md:border-l md:pl-9 md:mr-[80px]">
                  Replace scattered <span className="font-semibold text-[#5C5C5C]">wallets</span> with one{" "}
                  <span className="font-semibold text-[#5C5C5C]">mobile-first</span> dashboard{" "}
                  <span className="font-semibold text-[#5C5C5C]">built</span> for active crypto users.
                </p>
              </div>

              {/* phone mockup — mobile only: inside the gray card, centered */}
              <div className="flex md:hidden justify-center my-4">
                <img src="/image/hero-phone-img.svg" alt="" className="w-[220px] sm:w-[280px]" />
              </div>

              {/* bottom: store badges left and right */}
              <div className="flex items-center justify-between mt-2 md:mt-0">
                <a href="#">
                  <img src="/image/apple-store.svg" alt="" />
                </a>

                <a href="#">
                  <img src="/image/google-play.svg" alt="" />
                </a>
              </div>
            </div>

            {/* phone mockup — absolutely centered, overlaps the gray card top to bottom — desktop only */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none top-[-90px] hidden md:flex">
              <img src="/image/hero-phone-img.svg" alt="" className="w-[500px]" />
            </div>

          </div>
        </div>
      </div>


      {/* Partner logos */}
      <PartnerLogos />
    </div>
  </section>
);

export default Hero;