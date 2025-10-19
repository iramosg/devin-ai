export default function Services() {
  const services = [
    {
      title: 'International Transfers',
      description: 'Send money to over 200 countries with competitive exchange rates',
      icon: '🌍',
    },
    {
      title: 'Fast Processing',
      description: 'Most transfers complete within minutes, not days',
      icon: '⚡',
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security and encryption for all your transfers',
      icon: '🔒',
    },
    {
      title: '24/7 Support',
      description: 'Our customer service team is always here to help',
      icon: '💬',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50" role="region" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for seamless money transfers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
