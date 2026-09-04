import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { WhyHire } from '@/components/sections/WhyHire'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <WhyHire />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
