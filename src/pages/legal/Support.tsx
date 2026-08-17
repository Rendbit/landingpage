import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function Support() {
  return (
    <LegalLayout title="Support">
      <p>Need help with RendBit? Our team is here for you. Whether you have a question about your account, a payment, or verifying your identity, use any of the options below and we’ll get back to you.</p>

      <h2>Contact us</h2>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@rendbit.com">support@rendbit.com</a> — the fastest way to reach us for any account or payment issue.</li>
        <li><strong>Telegram:</strong> <a href="https://t.me/rendbit" target="_blank" rel="noopener noreferrer">t.me/rendbit</a></li>
        <li><strong>In the app:</strong> open the <strong>Help</strong> menu on the home screen to start a live <strong>Chat with Us</strong> or raise a <strong>Support Ticket</strong>. You can track replies to your ticket right inside the app.</li>
      </ul>

      <h2>Response times</h2>
      <p>We typically respond within 24 hours, Monday to Friday. For urgent issues affecting access to your funds, email us and mark your message “Urgent”.</p>

      <h2>Common topics</h2>
      <ul>
        <li><strong>Account &amp; sign-in</strong> — resetting your PIN, updating your details, or trouble logging in.</li>
        <li><strong>Identity verification (KYC)</strong> — completing verification and understanding what documents are needed.</li>
        <li><strong>Sending &amp; receiving money</strong> — payments, transfers, currency exchange, and payment requests.</li>
        <li><strong>Fees &amp; limits</strong> — how fees are calculated and any limits on your account.</li>
        <li><strong>Managing your account</strong> — see <Link to="/account-deletion">Account Deletion</Link> and <Link to="/data-deletion">Data Deletion</Link>.</li>
      </ul>

      <h2>Policies</h2>
      <p>Read our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link> to understand how we handle your data and the terms of using RendBit.</p>

      <h2>About RendBit</h2>
      <p>RendBit is a cross-border payments app that helps you send, receive, and exchange money quickly and securely. If you can’t find what you need above, just email <a href="mailto:support@rendbit.com">support@rendbit.com</a> and a real person will help.</p>
    </LegalLayout>
  );
}
