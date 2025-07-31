import { SectionTitles } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="">
      <div className="container py-16 flex gap-10 md:gap-4 flex-col md:flex-row lg:gap-16">
        <div className="max-w-[428px]">
          <SectionTitles
            subtitle="experiêcias"
            titlte="Experiência Profissional"
          />
          <p className="text-gray-400 mt-6">
            Sou desenvolvedora com experiência em suporte técnico e 
            desenvolvimento web, com foco em PHP (Laravel, Lumen), 
            ReactJS e MySQL. Atuei na criação e manutenção de APIs, 
            resolução de falhas e desenvolvimento de interfaces. 
            Também tenho vivência na análise de erros via Network, 
            elaboração de consultas SQL e comunicação com times de 
            desenvolvimento para correção de problemas. Busco constantemente 
            evoluir minhas habilidades técnicas, contribuir com soluções de 
            qualidade e crescer junto com a equipe e os projetos.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceItem />
        </div>
      </div>
    </section>
  )
}
