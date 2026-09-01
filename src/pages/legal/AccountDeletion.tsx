import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { useTheme } from "../../context/ThemeContext";
import LegalLayout from "./LegalLayout";

// Public, OTP-gated deletion endpoints on the main backend (no API key needed).
const API =
  (import.meta.env.VITE_BACKEND_URL || "https://finance.rendbit.com") +
  "/api/public/account-deletion";

export default function AccountDeletion() {
  const { isDark } = useTheme();
  const [step, setStep] = useState<"form" | "code" | "done">("form");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [doneMsg, setDoneMsg] = useState(
    "Your account has been permanently deleted.",
  );

  const brand = "#0E7BB2";
  const ink = isDark ? "#e7e9ee" : "#1e2230";
  const muted = isDark ? "#9aa3b2" : "#5b6472";
  const line = isDark ? "#2a2f3a" : "#d7dce5";
  const fieldBg = isDark ? "#0f1116" : "#ffffff";

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: `1px solid ${line}`,
    background: fieldBg,
    color: ink,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
  };
  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: muted,
    marginBottom: 6,
  };
  const buttonStyle: CSSProperties = {
    marginTop: 4,
    padding: "13px 18px",
    borderRadius: 12,
    border: "none",
    background: brand,
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: busy ? "default" : "pointer",
    opacity: busy ? 0.6 : 1,
    width: "fit-content",
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const submitDetails = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please fill in your first name, last name and account email.");
      return;
    }
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const res = await fetch(`${API}/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          reason: reason.trim(),
        }),
      });
      if (res.ok) {
        setStep("code");
      } else {
        setError(
          "Something went wrong. Please try again, or email support@rendbit.com.",
        );
      }
    } catch {
      setError(
        "Couldn't reach the server. Please try again, or email support@rendbit.com.",
      );
    } finally {
      setBusy(false);
    }
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    if (otp.trim().length < 4) {
      setError("Enter the code we emailed you.");
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const res = await fetch(`${API}/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setDoneMsg(data.message || "Your account has been permanently deleted.");
        setStep("done");
      } else {
        setError(data?.message || "Invalid or expired code.");
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const owner = "RendBit app is owned and operated by Hireskill Global Services";

  if (step === "done") {
    return (
      <LegalLayout title="Delete Your Account" owner={owner}>
        <h2>Account deleted</h2>
        <p>{doneMsg}</p>
        <p>
          If you have funds you did not withdraw, contact{" "}
          <a href="mailto:support@rendbit.com">support@rendbit.com</a> to retrieve
          them.
        </p>
      </LegalLayout>
    );
  }

  if (step === "code") {
    return (
      <LegalLayout title="Delete Your Account" owner={owner}>
        <p>
          We emailed a 6-digit code to <strong>{email.trim()}</strong>. Enter it
          below to permanently delete your account and data.
        </p>
        <form onSubmit={submitCode} style={{ marginTop: 20, display: "grid", gap: 16, maxWidth: 320 }}>
          <div>
            <label style={labelStyle} htmlFor="otp">Confirmation code</label>
            <input
              id="otp"
              style={{ ...inputStyle, letterSpacing: 4, fontSize: 18 }}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="000000"
            />
          </div>
          {error && <p style={{ color: "#e5484d", fontSize: 13, margin: 0 }}>{error}</p>}
          <button type="submit" disabled={busy} style={{ ...buttonStyle, background: "#e5484d" }}>
            {busy ? "Deleting…" : "Delete My Account"}
          </button>
          <button
            type="button"
            onClick={() => { setStep("form"); setOtp(""); setError(null); }}
            style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: 13, width: "fit-content", padding: 0 }}
          >
            ← Use a different email
          </button>
        </form>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Delete Your Account" owner={owner}>
      <p>
        Fill in the form below to delete your RendBit account. We’ll email a
        confirmation code to your account email once you enter it, your account
        and your data are permanently deleted.
      </p>

      <form onSubmit={submitDetails} style={{ marginTop: 20, display: "grid", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="firstName">First name</label>
            <input id="firstName" style={inputStyle} value={firstName}
              onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">Last name</label>
            <input id="lastName" style={inputStyle} value={lastName}
              onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor="email">Account email</label>
          <input id="email" type="email" style={inputStyle} value={email}
            onChange={(e) => setEmail(e.target.value)} autoComplete="email"
            placeholder="you@example.com" />
        </div>

        <div>
          <label style={labelStyle} htmlFor="reason">Reason to delete account (optional)</label>
          <textarea id="reason" rows={3} style={{ ...inputStyle, resize: "vertical" }}
            value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>

        {error && <p style={{ color: "#e5484d", fontSize: 13, margin: 0 }}>{error}</p>}

        <button type="submit" disabled={busy} style={buttonStyle}>
          {busy ? "Sending code…" : "Continue"}
        </button>
      </form>

      <p style={{ marginTop: 22 }}>
        Prefer email? Write to <a href="mailto:support@rendbit.com">support@rendbit.com</a> from your account email.
      </p>
    </LegalLayout>
  );
}
