import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This Privacy Policy explains how RendBit ("we", "us", "our") collects, uses, shares and protects your personal information when you use the RendBit mobile application and related services (the "Service"). By using the Service you agree to this Policy.</p>

      <h2>1. Information we collect</h2>
      <h3>Account information</h3>
      <ul>
        <li>Name, email address and phone number.</li>
        <li>Authentication data: your password (stored hashed) and app/transaction PINs (stored hashed or in your device's secure keychain).</li>
      </ul>
      <h3>Identity verification (KYC)</h3>
      <ul>
        <li>Your National Identification Number (NIN) or Bank Verification Number (BVN), date of birth, and the government-issued photograph returned by the identity source.</li>
        <li>A <strong>liveness check</strong>: an active facial capture used to confirm you are a real, present person and to match your face to your government ID photo.</li>
        <li>Address details and a proof-of-address document (Tier 2).</li>
      </ul>
      <h3>Financial and transaction information</h3>
      <ul>
        <li>Your wallet address(es), balances and transaction history. Transactions are settled on a public blockchain network (see the Blockchain notice below).</li>
      </ul>
      <h3>Device and technical information</h3>
      <ul>
        <li>A per-installation device identifier, IP address and approximate location (country), device model and operating system.</li>
        <li>Push notification tokens, app version and usage/diagnostic data.</li>
      </ul>
      <h3>Communications</h3>
      <ul><li>Messages you send us through in-app support or email.</li></ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To create and operate your account and provide the Service.</li>
        <li>To verify your identity and meet our Know-Your-Customer (KYC), Anti-Money-Laundering (AML) and other legal and regulatory obligations.</li>
        <li>To detect, prevent and investigate fraud, and to secure your account (for example, requiring a fresh liveness check when we detect a new device or a new country, and keeping only one active session at a time).</li>
        <li>To send you transactional and security notifications.</li>
        <li>To provide customer support and to improve the Service.</li>
      </ul>

      <h2>3. Legal bases</h2>
      <p>We process your information to perform our contract with you, to comply with legal obligations (including KYC/AML), with your consent (for example, biometric liveness), and for our legitimate interests in securing and improving the Service.</p>

      <h2>4. Biometric information</h2>
      <p>The liveness check captures facial imagery that is used <strong>solely</strong> to confirm liveness and to match your face against your government ID photo for identity verification. We do not use it for advertising or sell it. It is retained only as long as needed for verification and to meet our regulatory record-keeping obligations, after which it is deleted or de-identified.</p>

      <h2>5. How we share information</h2>
      <p>We do <strong>not</strong> sell your personal information. We share it only:</p>
      <ul>
        <li><strong>Identity verification:</strong> with a licensed identity-verification provider and the relevant national identity databases (e.g. NIBSS / NIMC) to confirm your NIN/BVN and details.</li>
        <li><strong>Cloud, messaging and infrastructure providers:</strong> service providers that host our systems and deliver push notifications and email on our behalf, under confidentiality obligations.</li>
        <li><strong>Legal and regulatory:</strong> with regulators, law enforcement or other authorities where required by law, or to protect our rights, users and the public.</li>
        <li><strong>Business transfers:</strong> in connection with a merger, acquisition or sale of assets, subject to this Policy.</li>
      </ul>

      <h2>6. Blockchain notice</h2>
      <p>Transactions you make are recorded on a public blockchain (the Stellar network). Information written to the blockchain, such as wallet addresses and transaction amounts, is <strong>public, permanent and outside our control</strong>, and cannot be changed or deleted.</p>

      <h2>7. Data retention</h2>
      <p>We keep your information for as long as your account is active and for any additional period required to meet legal, regulatory (including AML record-keeping) and dispute-resolution obligations, after which it is deleted or anonymised.</p>

      <h2>8. Security</h2>
      <p>We use technical and organisational measures to protect your information, including encryption in transit, hashed credentials, secure device storage for PINs, biometric-gated app access, and single-active-session controls. No system is perfectly secure, but we work to protect your data.</p>

      <h2>9. Your rights</h2>
      <p>Subject to applicable law, you may request to access, correct, or delete your personal information, object to or restrict certain processing, and withdraw consent. You can delete your account from within the app or by contacting us. See <Link to="/account-deletion">Delete Your Account</Link> and <Link to="/data-deletion">Request Data Deletion</Link> for the steps and what data is kept. Some information may be retained where we are legally required to keep it.</p>

      <h2>10. Children and minors</h2>
      <p>The Service is not available to anyone under 16. Users aged 16 to 17 may only use the Service with verified guardian consent; without it, the account is restricted. We do not knowingly collect data from children under 16.</p>

      <h2>11. International transfers</h2>
      <p>Your information may be processed in countries other than your own. Where it is, we take steps to ensure it remains protected in line with this Policy.</p>

      <h2>12. Changes to this Policy</h2>
      <p>We may update this Policy from time to time. Material changes will be notified in the app or by email, and the "Last updated" date above will change.</p>

      <h2>13. Contact us</h2>
      <p>Questions or requests: <a href="mailto:privacy@rendbit.com">privacy@rendbit.com</a> (privacy) or <a href="mailto:support@rendbit.com">support@rendbit.com</a> (support).</p>
    </LegalLayout>
  );
}
