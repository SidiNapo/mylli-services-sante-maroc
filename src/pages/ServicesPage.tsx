
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const ServiceCard = ({
  id,
  icon,
  title,
  description,
  bgColor
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => {
  return <div id={id} className={`${bgColor} rounded-lg p-8`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Button asChild className="bg-mylli-darkblue hover:bg-mylli-blue">
        <Link to="/contact">En savoir plus</Link>
      </Button>
    </div>;
};
const ServicesPage = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-mylli-lightblue py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
                  Nos services de santé
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Des soins médicaux complets à domicile
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Découvrez notre gamme complète de services de soins à domicile, conçus pour fournir des soins professionnels et compatissants dans le confort de votre foyer.
                </p>
                <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
                  <Link to="/contact">
                    Demande d'information
                  </Link>
                </Button>
              </div>
              
              <div className="hidden lg:block">
                <img alt="Services de soins à domicile" className="rounded-lg shadow-xl" src="https://plus.unsplash.com/premium_photo-1661770160867-2c3a5092ec3b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZSUyMHNlcnZpY2VzfGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Nos services principaux
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous offrons une gamme complète de services de soins à domicile pour répondre à tous vos besoins médicaux et de bien-être.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard id="soins-infirmiers" title="Soins infirmiers à domicile" description="Des soins infirmiers professionnels dispensés par du personnel qualifié directement à votre domicile. Nos infirmiers et infirmières sont formés pour fournir une variété de soins médicaux." bgColor="bg-blue-50" icon={<div className="bg-mylli-blue p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>} />
              
              <ServiceCard id="gestion-medicaments" title="Gestion des médicaments" description="Service complet de gestion des médicaments incluant des rappels, l'administration et le suivi pour s'assurer que les médicaments sont pris correctement et en toute sécurité." bgColor="bg-green-50" icon={<div className="bg-green-500 p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>} />
              
              <ServiceCard id="maladies-chroniques" title="Gestion des maladies chroniques" description="Programme personnalisé de gestion des maladies chroniques comme le diabète, l'hypertension et les maladies cardiaques, visant à améliorer la qualité de vie et à réduire les complications." bgColor="bg-blue-50" icon={<div className="bg-mylli-blue p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>} />
              
              <ServiceCard id="assistance-personnelle" title="Assistance personnelle" description="Aide aux activités quotidiennes comme la toilette, l'habillage, les repas et la mobilité, permettant aux clients de maintenir leur indépendance et leur dignité." bgColor="bg-green-50" icon={<div className="bg-green-500 p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>} />
              
              <ServiceCard id="readaptation" title="Services de réadaptation" description="Programmes de rééducation physique, d'ergothérapie et d'orthophonie pour aider les patients à récupérer après une maladie, une blessure ou une opération chirurgicale." bgColor="bg-blue-50" icon={<div className="bg-mylli-blue p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>} />
              
              <ServiceCard id="soins-palliatifs" title="Soins palliatifs" description="Soins compassionnels axés sur le confort et la qualité de vie pour les patients atteints de maladies graves ou en fin de vie, soutenus par une équipe pluridisciplinaire." bgColor="bg-green-50" icon={<div className="bg-green-500 p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>} />

              <ServiceCard id="pediatric-care" title="Soins pédiatriques" description="Services de soins spécialisés pour les enfants, avec une approche douce et attentionnée, adaptés aux besoins uniques des jeunes patients dans un environnement familier." bgColor="bg-blue-50" icon={<div className="bg-mylli-blue p-4 rounded-full inline-block">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>} />
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Questions fréquentes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous avons rassemblé les réponses aux questions les plus courantes sur nos services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Comment puis-je savoir quels services me conviennent le mieux?
                </h3>
                <p className="text-gray-700">
                  Notre équipe effectue une évaluation initiale gratuite pour déterminer vos besoins spécifiques et recommander les services les plus appropriés. Contactez-nous pour planifier cette évaluation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Les services sont-ils disponibles 24/7?
                </h3>
                <p className="text-gray-700">
                  Oui, nos services sont disponibles 24 heures sur 24, 7 jours sur 7. Nous comprenons que les besoins en soins ne suivent pas un horaire fixe et nous sommes là pour vous quand vous en avez besoin.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Comment sont sélectionnés et formés vos soignants?
                </h3>
                <p className="text-gray-700">
                  Tous nos soignants passent par un processus de sélection rigoureux, incluant des vérifications des antécédents et des références. Ils reçoivent également une formation continue pour garantir des soins de la plus haute qualité.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Puis-je changer de soignant si nécessaire?
                </h3>
                <p className="text-gray-700">
                  Absolument. Votre confort et votre satisfaction sont notre priorité. Si pour une raison quelconque vous préférez un autre soignant, nous ferons tout notre possible pour répondre à votre demande.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Vous avez d'autres questions?
              </p>
              <Button asChild className="bg-mylli-darkblue hover:bg-mylli-blue">
                <Link to="/contact">
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-mylli-lightblue py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Prêt à commencer?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Contactez-nous dès aujourd'hui pour planifier une consultation gratuite et découvrir comment nos services peuvent améliorer votre vie ou celle d'un proche.
              </p>
              <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
                <Link to="/contact">
                  Demande d'information
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ServicesPage;
