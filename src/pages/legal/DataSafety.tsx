import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function DataSafety() {
  return (
    <LegalLayout title="Data Safety">
      <p>This page summarises what data RendBit collects, why we collect it, how it is protected, and the choices you have. It reflects the same practices described in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

      <h2>Our commitments</h2>
      <ul>
        <li>We do <strong>not</strong> sell your personal data.</li>
        <li>Data is <strong>encrypted in transit</strong> between your device and our servers.</li>
        <li>Passwords and PINs are stored <strong>hashed</strong> or in your device's secure keychain, never in plain text.</li>
        <li>You can <strong>request deletion</strong> of your data by deleting your account in the app or by contacting us.</li>
      </ul>

      <h2>Data we collect and why</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr><th>Data type</th><th>Examples</th><th>Why we collect it</th></tr>
          </thead>
          <tbody>
            <tr><td>Personal details</td><td>Name, email, phone number</td><td>Create and operate your account</td></tr>
            <tr><td>Identity (KYC)</td><td>NIN or BVN, date of birth, ID photo, liveness capture, address</td><td>Verify your identity and meet KYC/AML obligations</td></tr>
            <tr><td>Financial</td><td>Wallet address, balances, transaction history</td><td>Provide wallet, transfer and conversion features</td></tr>
            <tr><td>Device &amp; technical</td><td>Device identifier, IP address, approximate location (country), device model, OS</td><td>Security, fraud prevention and diagnostics</td></tr>
            <tr><td>Messages</td><td>In-app support and email messages</td><td>Provide customer support</td></tr>
          </tbody>
        </table>
      </div>

      <h2>How your data is protected</h2>
      <ul>
        <li>Encryption in transit for all traffic between the app and our servers.</li>
        <li>Hashed credentials and secure device storage (keychain / keystore) for PINs.</li>
        <li>Biometric-gated app access and a screen-capture block you can enable in settings.</li>
        <li>Single active session: signing in on a new device signs out other sessions.</li>
        <li>Step-up liveness checks when we detect a new device, a new country, or a changed IP address.</li>
      </ul>

      <h2>Biometric (liveness) data</h2>
      <p>The liveness check captures facial imagery used <strong>solely</strong> to confirm you are a real, present person and to match your face to your government ID photo. It is not used for advertising and is not sold. It is kept only as long as needed for verification and regulatory record-keeping, then deleted or de-identified.</p>

      <h2>Data sharing</h2>
      <p>We share data only with licensed identity-verification providers and national identity databases (to confirm your NIN/BVN), with infrastructure providers that host our systems and deliver notifications under confidentiality obligations, and with regulators or law enforcement where required by law. Transactions are recorded on the public Stellar blockchain, where wallet addresses and amounts are public and permanent.</p>

      <h2>Your choices</h2>
      <ul>
        <li>Access, correct or delete your personal data, subject to legal record-keeping requirements.</li>
        <li>Delete your account at any time from within the app.</li>
        <li>Enable or disable the screenshot / screen-recording block in settings.</li>
      </ul>

      <h2>Contact</h2>
      <p>Privacy requests: <a href="mailto:privacy@rendbit.com">privacy@rendbit.com</a>. General support: <a href="mailto:support@rendbit.com">support@rendbit.com</a>.</p>
    </LegalLayout>
  );
}
