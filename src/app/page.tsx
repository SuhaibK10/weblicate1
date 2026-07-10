import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import Mission      from '@/components/sections/Mission'
import TechStack    from '@/components/sections/TechStack'
import Capabilities from '@/components/sections/Capabilities'
import Industries   from '@/components/sections/Industries'
import Work         from '@/components/sections/Work'
import Philosophy   from '@/components/sections/Philosophy'
import WhyWeblicate from '@/components/sections/WhyWeblicate'
import FAQ          from '@/components/sections/FAQ'
import Contact      from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="mission" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <Mission />
        </section>

        <TechStack />

        <section id="capabilities" className="py-32 md:py-40 px-6 max-w-content mx-auto">
          <Capabilities />
        </section>

        <section id="industries" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <Industries />
        </section>

        <section id="work" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <Work />
        </section>

        <section id="philosophy" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <Philosophy />
        </section>

        <section id="why" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <WhyWeblicate />
        </section>

        <section id="faq" className="py-32 md:py-40 px-6 max-w-content mx-auto border-t border-border">
          <FAQ />
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
