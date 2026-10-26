import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import Work         from '@/components/sections/Work'
import Mission      from '@/components/sections/Mission'
import WhyWeblicate from '@/components/sections/WhyWeblicate'
import Capabilities from '@/components/sections/Capabilities'
import Industries   from '@/components/sections/Industries'
import Philosophy   from '@/components/sections/Philosophy'
import FAQ          from '@/components/sections/FAQ'
import Contact      from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="work" className="px-6 pb-24 md:pb-32">
          <Work />
        </section>

        <section id="mission" className="mx-auto max-w-content px-6 py-24 md:py-32">
          <Mission />
        </section>

        <section id="why" className="mx-auto max-w-content px-6">
          <WhyWeblicate />
        </section>

        <section id="capabilities" className="mx-auto max-w-content px-6 py-24 md:py-32">
          <Capabilities />
        </section>

        <section id="industries" className="mx-auto max-w-content px-6 py-16 md:py-24">
          <Industries />
        </section>

        <section id="philosophy" className="mx-auto max-w-content px-6 py-24 md:py-32">
          <Philosophy />
        </section>

        <section id="faq" className="mx-auto max-w-content px-6 py-16 md:py-24">
          <FAQ />
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
