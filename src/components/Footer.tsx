
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-mylli-darkblue font-bold">
                <svg className="h-8 w-8 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="ml-2 text-xl">Mylli Services</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              Des services de santé personnalisés à domicile pour vous et vos proches dans tout le Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mylli-blue hover:text-mylli-darkblue">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-mylli-blue hover:text-mylli-darkblue">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-mylli-blue hover:text-mylli-darkblue">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Liens */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-mylli-blue">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-600 hover:text-mylli-blue">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-mylli-blue">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-mylli-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mylli-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#soins-infirmiers" className="text-gray-600 hover:text-mylli-blue">
                  Soins Infirmiers
                </Link>
              </li>
              <li>
                <Link to="/services#gestion-medicaments" className="text-gray-600 hover:text-mylli-blue">
                  Gestion des Médicaments
                </Link>
              </li>
              <li>
                <Link to="/services#maladies-chroniques" className="text-gray-600 hover:text-mylli-blue">
                  Gestion des Maladies Chroniques
                </Link>
              </li>
              <li>
                <Link to="/services#assistance-personnelle" className="text-gray-600 hover:text-mylli-blue">
                  Assistance Personnelle
                </Link>
              </li>
              <li>
                <Link to="/services#readaptation" className="text-gray-600 hover:text-mylli-blue">
                  Réadaptation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-mylli-blue mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Avenue Mohammed V, Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-mylli-blue mr-2" />
                <a href="tel:+212522123456" className="text-gray-600 hover:text-mylli-blue">
                  +212 522 12 34 56
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-mylli-blue mr-2" />
                <a href="mailto:contact@mylliservices.ma" className="text-gray-600 hover:text-mylli-blue">
                  contact@mylliservices.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mylli Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
