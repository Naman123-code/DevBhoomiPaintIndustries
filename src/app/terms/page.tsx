export const metadata = {
  title: "Terms of Service | DevBhoomi Paints",
  description: "Terms of Service for DevBhoomi Paints Industries",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-db-charcoal mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to DevBhoomi Paints Industries. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on DevBhoomi Paints Industries' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          
          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on DevBhoomi Paints Industries' website are provided on an 'as is' basis. DevBhoomi Paints Industries makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Calculations provided by the Coverage Calculator are estimates and should be used as a guide only. Actual consumption may vary based on surface conditions and application methods.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall DevBhoomi Paints Industries or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevBhoomi Paints Industries' website.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">5. Revisions and Errata</h2>
          <p>
            The materials appearing on DevBhoomi Paints Industries' website could include technical, typographical, or photographic errors. DevBhoomi Paints Industries does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2 className="text-2xl font-semibold text-db-charcoal mt-8 mb-4">6. Governing Law</h2>
          <p>
            Any claim relating to DevBhoomi Paints Industries' website shall be governed by the laws of India and the state of Uttarakhand without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}
