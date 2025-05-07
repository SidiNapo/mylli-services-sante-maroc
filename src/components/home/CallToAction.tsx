
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-mylli-lightblue py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Rejoignez notre communauté de soins
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Chez Mylli Services, nous sommes là pour fournir des soins compatissants et personnalisés à vous ou à vos proches. Contactez-nous dès aujourd'hui pour découvrir comment nos services peuvent améliorer votre qualité de vie.
          </p>
          <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
            <Link to="/contact">
              Commencez maintenant
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
