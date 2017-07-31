// This is the Link API
import Link from 'next/link'
import Layout from '../components/MyLayout.js'

const Index = () => (
    <Layout>
      <p>Hello Next.js</p>
      <Link>
        <button>Click here!</button>
      </Link>
    </Layout>
)

export default Index
