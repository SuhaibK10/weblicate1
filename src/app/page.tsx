import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import GlobalStrip  from '@/components/sections/GlobalStrip'
import Work         from '@/components/sections/Work'
import Services     from '@/components/sections/Services'
import Process      from '@/components/sections/Process'
import Team         from '@/components/sections/Team'
import FAQ          from '@/components/sections/FAQ'
import FooterCTA    from '@/components/sections/FooterCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GlobalStrip />

        <section id="services" className="py-24 px-6 max-w-content mx-auto">
          <Services />
        </section>

        <section id="work" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Work />
        </section>

<section id="process" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Process />
        </section>

<section id="team" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Team />
        </section>

        <section id="faq" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <FAQ />
        </section>

        <FooterCTA />
      </main>
      <Footer />
    </>
  )
}
