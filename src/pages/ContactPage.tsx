
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demande envoyée avec succès!",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-mylli-lightblue py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
                Nous sommes à votre écoute
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Contactez-nous
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Vous avez des questions ou vous souhaitez planifier une consultation? N'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mylli-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mylli-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mylli-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service intéressé
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mylli-blue"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="nursing">Soins infirmiers</option>
                        <option value="medication">Gestion des médicaments</option>
                        <option value="chronic">Gestion des maladies chroniques</option>
                        <option value="personal">Assistance personnelle</option>
                        <option value="rehab">Réadaptation</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mylli-blue"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-mylli-darkblue hover:bg-mylli-blue"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <div className="bg-mylli-blue text-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Nos coordonnées
                  </h2>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 mt-1" />
                      <span>
                        123 Avenue Mohammed V<br />
                        Casablanca, 20000<br />
                        Maroc
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-6 w-6 mr-3" />
                      <a href="tel:+212522123456" className="hover:underline">
                        +212 522 12 34 56
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-6 w-6 mr-3" />
                      <a href="mailto:contact@mylliservices.ma" className="hover:underline">
                        contact@mylliservices.ma
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-6 w-6 mr-3" />
                      <span>
                        Lun - Ven: 8h00 - 18h00<br />
                        Sam: 9h00 - 14h00
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Besoin d'une assistance immédiate?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Pour toute urgence ou demande nécessitant une attention immédiate, n'hésitez pas à nous appeler directement.
                  </p>
                  <div className="flex justify-center">
                    <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
                      <a href="tel:+212522123456">
                        <Phone className="h-5 w-5 mr-2" />
                        Appelez-nous maintenant
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Notre emplacement
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                <p className="text-lg font-medium">Carte Google Maps ici</p>
                {/* Remplacer par une intégration Google Maps réelle en production */}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-mylli-lightblue py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Besoin d'une consultation à domicile?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Nous proposons des consultations initiales à domicile pour évaluer vos besoins spécifiques et élaborer un plan de soins personnalisé.
              </p>
              <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
                <a href="tel:+212522123456">
                  Planifier une consultation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
