import { Navbar } from '@/components/Navbar'
import { HashScroll } from '@/components/HashScroll'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { WhyHire } from '@/components/sections/WhyHire'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <HashScroll />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <WhyHire />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
