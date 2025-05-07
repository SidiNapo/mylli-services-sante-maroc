
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Header avec image de fond */}
        <section className="relative py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1666214280391-9863fcffa5e2?auto=format&fit=crop&q=80&w=1920" 
              alt="Équipe médicale" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-mylli-darkblue/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
                Qui nous sommes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                À propos de Mylli Services
              </h1>
              <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                Une entreprise marocaine dédiée à fournir des services de santé à domicile de haute qualité, avec compassion et professionnalisme.
              </p>
            </div>
          </div>
        </section>
        
        {/* Notre Histoire - avec l'image fournie */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre histoire</h2>
                <p className="text-gray-700 mb-4">
                  Fondée en 2020 au Maroc, Mylli Services est née de la vision de fournir des soins de santé à domicile accessibles et de qualité à tous les Marocains. Notre fondateur, ayant personnellement fait face aux défis d'obtenir des soins adéquats pour un parent âgé, a décidé de créer un service qui répond à ce besoin crucial.
                </p>
                <p className="text-gray-700 mb-4">
                  Depuis notre création, nous avons grandi en tant qu'équipe de professionnels de santé dévoués, partageant tous la même passion pour les soins centrés sur le patient et la conviction que chacun mérite des soins dignes et respectueux.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, nous sommes fiers de servir des communautés dans tout le Maroc, en apportant des soins spécialisés aux domiciles des patients, leur permettant de récupérer, de gérer des conditions chroniques ou simplement de vieillir dans le confort de leur foyer.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/c63d8cdf-3bb7-4be6-9f05-0c261a81e412.png" 
                  alt="Infirmière discutant avec une patiente" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Notre Vision & Mission - avec image de fond */}
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920" 
              alt="Soins médicaux" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-100/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-mylli-darkblue">Notre vision</h3>
                <p className="text-gray-700">
                  Un Maroc où des soins de santé de qualité sont accessibles à tous, où que vous soyez, permettant aux individus de vivre dignement et confortablement dans leur propre foyer.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-mylli-darkblue">Notre mission</h3>
                <p className="text-gray-700">
                  Fournir des services de soins à domicile exceptionnels, personnalisés aux besoins individuels, en honorant la dignité de chaque patient et en soutenant les familles tout au long du processus de soins.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nos Valeurs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Nos valeurs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nos valeurs guident tout ce que nous faisons. Nous croyons en la compassion, l'intégrité, l'excellence, le respect et l'innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-mylli-blue mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Compassion</h3>
                <p className="text-gray-600">
                  Nous nous soucions profondément de nos clients et de leurs familles, offrant un soutien avec empathie et compréhension.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-mylli-blue mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Intégrité</h3>
                <p className="text-gray-600">
                  Nous agissons avec honnêteté et transparence dans toutes nos interactions, gagnant ainsi la confiance de nos clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-mylli-blue mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  Nous nous efforçons d'atteindre les plus hauts standards dans tous les aspects de nos services de soins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-mylli-blue mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  Nous recherchons constamment de nouvelles approches pour améliorer nos services et la qualité de vie de nos clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Notre Équipe avec arrière-plan */}
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1920" 
              alt="Fond médical" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-mylli-darkblue/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Notre équipe</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Notre équipe de professionnels de la santé est dédiée à fournir des soins exceptionnels avec compassion et expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" 
                  alt="Dr. Khalid Alaoui" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Dr. Khalid Alaoui</h3>
                  <p className="text-mylli-blue mb-3">Directeur Médical</p>
                  <p className="text-gray-600">
                    Avec plus de 15 ans d'expérience en médecine générale, Dr. Alaoui supervise tous nos protocoles de soins médicaux.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=600" 
                  alt="Fatima Benkirane" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Fatima Benkirane</h3>
                  <p className="text-mylli-blue mb-3">Chef des Soins Infirmiers</p>
                  <p className="text-gray-600">
                    Fatima coordonne notre équipe d'infirmières et s'assure que nos clients reçoivent des soins personnalisés de la plus haute qualité.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" 
                  alt="Omar Bouazza" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Omar Bouazza</h3>
                  <p className="text-mylli-blue mb-3">Spécialiste en Réadaptation</p>
                  <p className="text-gray-600">
                    Spécialiste en physiothérapie, Omar aide nos clients à retrouver leur mobilité et leur indépendance après une maladie ou une blessure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-mylli-darkblue py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Rejoignez notre équipe
              </h2>
              <p className="text-blue-100 mb-8">
                Nous sommes toujours à la recherche de professionnels de la santé passionnés pour rejoindre notre équipe grandissante. Si vous partagez notre engagement envers les soins de qualité, nous aimerions vous rencontrer.
              </p>
              <Button asChild size="lg" className="bg-white text-mylli-darkblue hover:bg-gray-100">
                <Link to="/contact">
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
