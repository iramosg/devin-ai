export default function About() {
  return (
    <section id="about" className="py-20 bg-white" role="region" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Etran Money Transfer
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              For over 15 years, Etran has been helping families and businesses send money across borders with confidence. We understand that every transfer represents something important - supporting loved ones, growing a business, or pursuing dreams.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our commitment to transparency, security, and customer service has made us a trusted partner for millions of customers worldwide.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5M+</div>
                <div className="text-sm text-gray-600">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center text-blue-600">
              <svg
                className="w-32 h-32 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-semibold">Trusted Money Transfer Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
