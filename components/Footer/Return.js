import React from "react";
import "./Data.css";


function Return() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h3>Return Policy</h3>
      <p>
        At PJSofttech Pvt. Ltd., we aim to provide high-quality software solutions. However, if you are not satisfied with your purchase, we offer the following refund policy.
      </p>

      <h3>Eligibility for Refunds</h3>
      <ul>
        <li>Refunds are available within 7 days of purchase.</li>
        <li>Only unused licenses or unactivated subscriptions are eligible.</li>
        <li>Refunds are not applicable for:</li>
        <ul>
          <li>Downloaded software or activated licenses.</li>
          <li>Subscription renewals (unless canceled before the renewal date).</li>
          <li>Custom software development services.</li>
        </ul>
      </ul>

      <h3>Refund Process</h3>
      <ol>
        <li>
          <strong>Request a Refund:</strong> Contact our support team at <a href="mailto:sales@pjsofttech.com">sales@pjsofttech.com</a> with your order details.
        </li>
        <li>
          <strong>Review & Approval:</strong> Our team will assess your request within 7 business days.
        </li>
        <li>
          <strong>Refund Issuance:</strong> Approved refunds will be processed to the original payment method.
        </li>
      </ol>

      <h2>Subscription Cancellations</h2>
      <p>
        Users can cancel subscriptions anytime, but refunds are only available within the initial purchase period. After cancellation, access remains valid until the end of the billing cycle.
      </p>

      <h3>Exceptions</h3>
      <p>Refunds will not be granted for:</p>
      <ul>
        <li>Trial versions, beta releases, or promotional offers.</li>
        <li>If the software is defective, we will provide technical support or an exchange.</li>
      </ul>

      <h3>Contact Us</h3>
      <p>
        If you have any questions or need assistance with a refund, feel free to contact us:
      </p>
      <address>
        <strong>PJSoftTech Pvt. Ltd.</strong>
        <br />
        PjSoftTech Pvt Ltd, 203, 2nd floor, Mangalmurti Complex, behind ABIL Tower, hirabagh chowk, Tilak Road, Shrukravar Peth, Pune-411002, India
        <br />
        Pune, Maharashtra, India
        <br />
        Email: <a href="mailto:sales@pjsofttech.com">sales@pjsofttech.com</a>
        <br />
        Phone: <a href="tel:+919923570901">+91 9923570901</a>
      </address>
    </div>
  );
}

export default Return;