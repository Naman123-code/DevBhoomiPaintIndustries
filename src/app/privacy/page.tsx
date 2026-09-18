export const metadata = {
  title: "Privacy Policy | DevBhoomi Paints",
  description: "Privacy Policy for DevBhoomi Paints Industries",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-db-charcoal mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At DevBhoomi Paints Industries, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products, participating in activities on the website, or otherwise contacting us. The personal information we collect may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and Contact Data (Phone numbers, Email addresses)</li>
            <li>Business or Company Information</li>
            <li>Inquiry Details and Messages</li>
          </ul>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect or receive to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and offer customer support.</li>
            <li>Send you marketing and promotional communications (if you have opted in).</li>
            <li>Fulfill and manage your orders or dealership requests.</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">3. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> info@devbhoomipaints.com
            <br />
            <strong>Address:</strong> 123 Industrial Area, Phase 2, Dehradun, Uttarakhand, India 248001
          </p>
        </div>
      </div>
    </div>
  );
}
