import Layout from '../components/layout/Layout'
import { services } from '../data/services'

export default function Services() {
  return (
    <Layout currentPageName="Services">
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.page}
              className="bg-white text-black rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
