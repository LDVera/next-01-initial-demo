import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../../components/NavBar.jsx'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


export default function Contact() {
  return (
    <>
      <Head>
        <title>Diego - contacto</title>
        <meta name="description" content="Generado desde script de next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
      
      <main className={styles.main}>
        
        <h1 className={styles.description}>
          ir a <Link href="/about">About</Link>
        </h1>
        

        <p>
          Get Started by editing{' '}
          <code className={styles.code}> pages/index.js </code>
        </p>

      </main>
    </>
  )
}
