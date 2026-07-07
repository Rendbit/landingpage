import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function AccountDeletion() {
  return (
    <LegalLayout title="Delete Your Account">
      <p>This page explains how to delete your RendBit account and what happens to your data.</p>

      <h2>Delete your account in the app</h2>
      <ul>
        <li>Open the RendBit app and sign in.</li>
        <li>Go to your profile / Settings and tap <strong>Delete Account</strong>.</li>
        <li>Confirm the request when prompted.</li>
        <li>Once confirmed, your account is closed and deactivated.</li>
      </ul>

      <h2>Cannot access the app?</h2>
      <p>If you are unable to sign in, email <a href="mailto:support@rendbit.com">support@rendbit.com</a> from the email address on your account and request deletion. We may ask you to verify your identity before we proceed.</p>

      <h2>What happens when you delete</h2>
      <p>When you confirm deletion, your account is <strong>closed and deactivated</strong> and you immediately lose access to it. Because RendBit is a regulated financial service, we do not erase everything at once: money-service and anti-money-laundering (AML) rules require us to keep certain records for a set retention period before they are removed.</p>

      <h2>Deleted or anonymised after the retention period</h2>
      <ul>
        <li>Your profile information (name, email, phone number).</li>
        <li>Your identity verification (KYC) data.</li>
        <li>Your wallet profile and app login.</li>
      </ul>

      <h2>Kept while the law requires it</h2>
      <p>Transaction and anti-money-laundering (AML) records are retained for the period required by applicable regulations, then deleted or anonymised. Transactions already recorded on the public Stellar blockchain are permanent and cannot be changed or deleted, as explained in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

      <h2>Contact</h2>
      <p>Questions about account or data deletion: <a href="mailto:privacy@rendbit.com">privacy@rendbit.com</a> or <a href="mailto:support@rendbit.com">support@rendbit.com</a>.</p>
    </LegalLayout>
  );
}
