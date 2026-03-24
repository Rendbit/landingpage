import React from "react";

interface Stat {
  prefix?: string;
  value: string;
  label: string;
}

interface Rating {
  name: string;
  score: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { value: "120+", label: "countries" },
  { prefix: "$", value: "50B+", label: "processed" },
  { value: "15M+", label: "transactions" },
];

const ratings: Rating[] = [
  {
    name: "Google",
    score: "4.6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Trustpilot",
    score: "4.9",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00B67A">
        <path d="M12 2l2.9 8.9H23l-7.5 5.5 2.9 8.9L12 20l-6.4 5.3 2.9-8.9L1 11h8.1z" />
      </svg>
    ),
  },
  {
    name: "G2",
    score: "4.3",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF492C">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="w-full px-6 py-20 flex flex-col items-center">

      {/* Badge */}
      <div className="text-[#5C5C5C] inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="text-[12px] font-medium tracking-wide">
          Stats &amp; metric
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#5C5C5C] text-center leading-tight mb-9 tracking-tight">
        Trusted by{" "}
        <span className="text-[#171717]">leading finance</span>{" "}
        teams <span className="text-[#171717]">worldwide</span>
      </h2>

      {/* Stat Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-6 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <span className="text-[22px] font-bold text-gray-900 tracking-tight">
              {stat.prefix ?? ""}{stat.value}
            </span>
            <span className="text-sm text-gray-400 font-normal">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Ratings Row */}
      <div className="flex flex-wrap justify-center items-center mb-6">
        {ratings.map((r, i) => (
          <React.Fragment key={r.name}>
            <div className="flex items-center gap-1.5 px-5 text-[13.5px] text-gray-500">
              {r.icon}
              <span className="font-semibold text-gray-800">{r.score}</span>
              <span>{r.name}</span>
            </div>
            {i < ratings.length - 1 && (
              <span className="w-px h-4 bg-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-400 text-center leading-relaxed max-w-xs">
        Thousands of finance professionals streamline{" "}
        <span className="font-medium text-gray-500 block">their workflows every day.</span>
      </p>

    </section>
  );
}