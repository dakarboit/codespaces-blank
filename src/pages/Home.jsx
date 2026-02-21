import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout currentPageName="Home">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to CyberDork</h1>
        <p className="text-lg text-gray-300">
          MSSP-grade security services for modern organizations.
        </p>
      </section>
    </Layout>
  )
}
