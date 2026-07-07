import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <p>These Terms of Service ("Terms") govern your use of the RendBit application and services (the "Service"). By creating an account or using the Service you agree to these Terms.</p>

      <h2>1. Eligibility</h2>
      <p>You must be at least 16 years old. Users aged 16 to 17 require verified guardian consent. Each verified national identity (NIN/BVN) may be used to verify only <strong>one</strong> account.</p>

      <h2>2. Your account</h2>
      <p>Keep your credentials, PINs and device secure. You are responsible for activity under your account. For your security, signing in on a new device signs you out of other sessions and may require a fresh liveness check.</p>

      <h2>3. Identity verification</h2>
      <p>Access to features requires completing identity verification (KYC). You agree to provide accurate, current and complete information. We may restrict, suspend or close accounts that fail verification, that belong to ineligible minors, or where we suspect fraud or unlawful activity.</p>

      <h2>4. Wallet and digital assets</h2>
      <p>The Service lets you hold and transfer digital assets on a public blockchain. Blockchain transactions are generally <strong>irreversible</strong>, may incur network fees, and the value of digital assets can be volatile. You are responsible for the details of any transaction you authorise.</p>

      <h2>5. Acceptable use</h2>
      <p>You must not use the Service for fraud, money laundering, financing of illegal activity, or any unlawful purpose, or attempt to circumvent our security or verification controls.</p>

      <h2>6. Fees</h2>
      <p>Applicable fees are disclosed in the app before you confirm a transaction. Blockchain network fees may also apply.</p>

      <h2>7. Suspension and termination</h2>
      <p>We may suspend or terminate access where required by law, to protect users or the Service, or for breach of these Terms. You may close your account at any time from within the app. See <Link to="/account-deletion">Delete Your Account</Link> or <Link to="/data-deletion">Request Data Deletion</Link>.</p>

      <h2>8. Disclaimers and limitation of liability</h2>
      <p>The Service is provided "as is". To the maximum extent permitted by law, we are not liable for indirect or consequential losses, or for losses arising from blockchain network conditions or from transactions you authorise.</p>

      <h2>9. Governing law</h2>
      <p>These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-laws rules.</p>

      <h2>10. Changes</h2>
      <p>We may update these Terms; continued use after changes take effect constitutes acceptance. Material changes will be notified in the app or by email.</p>

      <h2>11. Contact</h2>
      <p><a href="mailto:support@rendbit.com">support@rendbit.com</a></p>
    </LegalLayout>
  );
}
