import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sergio Valbuena Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />


      <div id="work">
        <h2>Work</h2> 
      </div>
      <Footer/>
      
    </div>
  )
}
