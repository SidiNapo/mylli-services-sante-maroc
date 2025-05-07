import { useState } from 'react';
import { Button } from '@/components/ui/button';
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick
}: AccordionItemProps) => {
  return <div className="border-b border-gray-200">
      <button className="flex w-full justify-between py-4 text-left font-medium text-gray-900 focus:outline-none" onClick={onClick}>
        <span>{title}</span>
        <span className="ml-6 flex items-center">
          {isOpen ? <svg className="h-6 w-6 text-mylli-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg> : <svg className="h-6 w-6 text-mylli-darkblue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>}
        </span>
      </button>
      {isOpen && <div className="pb-4 animate-accordion-down">
          <p className="text-gray-600">{content}</p>
        </div>}
    </div>;
};
const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const accordionItems = [{
    title: "Soignants expérimentés",
    content: "Notre équipe est composée de professionnels de santé hautement qualifiés avec de nombreuses années d'expérience dans le domaine des soins à domicile. Chaque membre est minutieusement sélectionné pour garantir des soins de la plus haute qualité."
  }, {
    title: "Approche personnalisée",
    content: "Nous croyons que chaque patient est unique. C'est pourquoi nous créons des plans de soins personnalisés qui répondent à vos besoins spécifiques, en tenant compte de votre état de santé, vos préférences et votre mode de vie."
  }, {
    title: "Disponibilité 24/7",
    content: "Nous comprenons que les besoins en soins de santé ne suivent pas un horaire fixe. Notre service est disponible 24 heures sur 24, 7 jours sur 7, pour assurer que vous recevez les soins dont vous avez besoin, quand vous en avez besoin."
  }, {
    title: "Technologie moderne",
    content: "Nous utilisons les dernières technologies et équipements médicaux pour assurer des soins efficaces et de qualité. Notre approche innovante nous permet de suivre votre santé de manière proactive et d'ajuster votre plan de soins en conséquence."
  }];
  return <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img alt="Soignant avec patient" className="rounded-lg shadow-lg" src="https://plus.unsplash.com/premium_photo-1663054412718-10f332c90891?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Pourquoi choisir Mylli Services?
              </h2>
              <p className="text-gray-600">
                Notre engagement est d'offrir des soins de santé à domicile exceptionnels et personnalisés, en mettant l'accent sur la compassion, la dignité et le professionnalisme.
              </p>
            </div>
            
            <div className="space-y-2">
              {accordionItems.map((item, index) => <AccordionItem key={index} title={item.title} content={item.content} isOpen={index === openIndex} onClick={() => setOpenIndex(index === openIndex ? -1 : index)} />)}
            </div>
            
            <div className="mt-8">
              <Button className="bg-mylli-darkblue hover:bg-mylli-blue">
                En savoir plus sur nous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;