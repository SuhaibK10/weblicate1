import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import GlobalStrip  from '@/components/sections/GlobalStrip'
import Logos        from '@/components/sections/Logos'
import Work         from '@/components/sections/Work'
import Services     from '@/components/sections/Services'
import Pricing      from '@/components/sections/Pricing'
import Process      from '@/components/sections/Process'
import Stats        from '@/components/sections/Stats'
import Team         from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import FAQ          from '@/components/sections/FAQ'
import FooterCTA    from '@/components/sections/FooterCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GlobalStrip />
        <Logos />

        <section id="work" className="py-24 px-6 max-w-content mx-auto">
          <Work />
        </section>

        <section id="services" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Services />
        </section>

        <section id="pricing" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Pricing />
        </section>

        <section id="process" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Process />
        </section>

        <Stats />

        <section id="team" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Team />
        </section>

        <section id="testimonials" className="py-24 px-6 max-w-content mx-auto border-t border-border">
          <Testimonials />
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
