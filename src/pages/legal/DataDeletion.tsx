import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function DataDeletion() {
  return (
    <LegalLayout title="Request Data Deletion">
      <p>You can ask us to delete your data or to disable your RendBit account at any time by contacting our support team. This page explains how to make the request and what happens to your data.</p>

      <h2>How to request</h2>
      <ul>
        <li>Email <a href="mailto:support@rendbit.com">support@rendbit.com</a> from the email address registered on your account.</li>
        <li>Tell us what you want: to <strong>disable</strong> your account (pause access) or to <strong>delete</strong> your data and close your account.</li>
        <li>We may ask you to verify your identity before we act on the request, to protect your account.</li>
      </ul>

      <h2>What happens next</h2>
      <p>Once verified, we disable or close your account as requested. Because RendBit is a regulated financial service, we do not erase everything at once: anti-money-laundering (AML) and other regulations require us to keep certain records for a set retention period.</p>

      <h2>Deleted or anonymised after the retention period</h2>
      <ul>
        <li>Your profile information (name, email, phone number).</li>
        <li>Your identity verification (KYC) data.</li>
        <li>Your wallet profile and app login.</li>
      </ul>

      <h2>Kept while the law requires it</h2>
      <p>Transaction and AML records are retained for the period required by applicable regulations, then deleted or anonymised. Transactions already recorded on the public Stellar blockchain are permanent and cannot be changed or deleted, as explained in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

      <h2>Prefer to do it in the app?</h2>
      <p>You can also delete your account directly in the app. See <Link to="/account-deletion">Delete Your Account</Link>.</p>

      <h2>Contact</h2>
      <p><a href="mailto:privacy@rendbit.com">privacy@rendbit.com</a> or <a href="mailto:support@rendbit.com">support@rendbit.com</a>.</p>
    </LegalLayout>
  );
}
