import { WorkExperience } from './components/pages/home/experience'
import { HeroSection } from './components/pages/home/hero-section'
import { KnownTeachs } from './components/pages/home/known-techs'
import { Projects } from './components/pages/home/projects'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTeachs />
      <WorkExperience />
    </>
  )
}
