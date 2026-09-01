import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function DataDeletion() {
  return (
    <LegalLayout
      title="Request Data Deletion"
      owner="RendBit app is owned and operated by Hireskill Global Services"
    >
      <p>You can ask us to delete your data or to close your RendBit account at any time. This page explains how to make the request.</p>

      <h2>How to request</h2>
      <ul>
        <li>Email <a href="mailto:support@rendbit.com">support@rendbit.com</a> from the email address registered on your account.</li>
        <li>Tell us you want to <strong>delete</strong> your data and close your account, or use our delete-account page: <Link to="/delete-account">https://rendbit.com/#delete-account</Link>.</li>
        <li>You can also delete your data and close your account directly from the RendBit app in Account &gt; Settings &gt; Delete Account.</li>
        <li>We may ask you to verify your identity before we act on the request, to protect your account.</li>
      </ul>

      <h2>What happens next</h2>
      <p>Once verified, your account is closed and your personal data is deleted.</p>

      <h2>Contact</h2>
      <p><a href="mailto:privacy@rendbit.com">privacy@rendbit.com</a> or <a href="mailto:support@rendbit.com">support@rendbit.com</a>.</p>
    </LegalLayout>
  );
}
