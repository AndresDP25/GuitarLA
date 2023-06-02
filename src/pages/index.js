import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
      pagina='Inicio'
    >
      <h1>Desde Inicio</h1>
    </Layout>
  )
}
