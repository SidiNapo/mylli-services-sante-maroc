
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

const BlogPost = ({ title, excerpt, author, date, image }: BlogPostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {author} • {date}
          </span>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-mylli-blue hover:text-mylli-darkblue font-medium"
          >
            Lire plus <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Explorez notre blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des conseils, des informations et des ressources pour vous aider à comprendre les soins de santé à domicile et à prendre soin de vos proches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPost 
            title="L'importance des soins infirmiers à domicile" 
            excerpt="Découvrez comment les soins infirmiers à domicile peuvent améliorer la qualité de vie des patients et faciliter leur rétablissement."
            author="Dr. Laila Bennani" 
            date="24 mai 2025"
            image="/lovable-uploads/97c1a968-4e9d-4c9b-8b59-f5967a8d774d.png"
          />
          
          <BlogPost 
            title="Conseils pour une vie saine à tout âge" 
            excerpt="Des conseils pratiques pour maintenir une bonne santé physique et mentale à chaque étape de votre vie."
            author="Samira El Fassi" 
            date="18 mai 2025"
          />
          
          <BlogPost 
            title="Gestion des médicaments: conseils pour les aidants" 
            excerpt="Guide pratique pour aider les familles à gérer efficacement les médicaments de leurs proches à domicile."
            author="Mohamed Chakir" 
            date="10 mai 2025"
            image="/lovable-uploads/912d6130-9281-45c1-afb0-99971e380b8b.png"
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-mylli-darkblue text-mylli-darkblue hover:bg-mylli-lightblue">
            <Link to="/blog">
              Voir tous les articles <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
