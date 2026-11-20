import Navbar       from '@/components/layout/Navbar'
import Footer       from '@/components/layout/Footer'
import Hero         from '@/components/sections/Hero'
import Mission      from '@/components/sections/Mission'
import AINative     from '@/components/sections/AINative'
import Work         from '@/components/sections/Work'
import Capabilities from '@/components/sections/Capabilities'
import Systems      from '@/components/sections/Systems'
import Industries   from '@/components/sections/Industries'
import Process      from '@/components/sections/Process'
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

        <section id="mission" className="mx-auto max-w-content px-6 py-24 md:py-36">
          <Mission />
        </section>

        <section id="ai-native" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <AINative />
        </section>

        <section id="work" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <Work />
        </section>

        <section id="capabilities" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <Capabilities />
        </section>

        <section id="systems" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <Systems />
        </section>

        <section id="industries" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <Industries />
        </section>

        <section id="process" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <Process />
        </section>

        <section id="philosophy" className="mx-auto max-w-content px-6 pb-16 md:pb-20">
          <Philosophy />
        </section>

        <section id="why" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <WhyWeblicate />
        </section>

        <section id="faq" className="mx-auto max-w-content px-6 pb-24 md:pb-36">
          <FAQ />
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
