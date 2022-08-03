import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Work from '../components/Work'
import WorkWIth from '../components/WorkWIth'


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
        
        <Work/>
        <WorkWIth />
      </div>

      <AboutMe />
      <ContactMe />
      <Footer/>
      
    </div>
  )
}
