
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image?: string;
  featured?: boolean;
}

const blogPosts: BlogPostProps[] = [
  {
    title: "L'importance des soins infirmiers à domicile",
    excerpt: "Découvrez comment les soins infirmiers à domicile peuvent améliorer la qualité de vie des patients et faciliter leur rétablissement.",
    content: "Les soins infirmiers à domicile jouent un rôle crucial dans le système de santé moderne. Ils permettent aux patients de recevoir des soins professionnels dans le confort de leur foyer, ce qui peut accélérer leur rétablissement et améliorer leur bien-être général. Pour les personnes âgées en particulier, rester à domicile plutôt que d'être hospitalisé ou placé dans un établissement de soins peut avoir des effets positifs significatifs sur la santé mentale et émotionnelle.",
    author: "Dr. Laila Bennani",
    date: "24 mai 2025",
    image: "/lovable-uploads/97c1a968-4e9d-4c9b-8b59-f5967a8d774d.png",
    featured: true
  },
  {
    title: "Conseils pour une vie saine à tout âge",
    excerpt: "Des conseils pratiques pour maintenir une bonne santé physique et mentale à chaque étape de votre vie.",
    author: "Samira El Fassi",
    date: "18 mai 2025",
    featured: false
  },
  {
    title: "Gestion des médicaments: conseils pour les aidants",
    excerpt: "Guide pratique pour aider les familles à gérer efficacement les médicaments de leurs proches à domicile.",
    author: "Mohamed Chakir",
    date: "10 mai 2025",
    image: "/lovable-uploads/912d6130-9281-45c1-afb0-99971e380b8b.png",
    featured: false
  },
  {
    title: "Les avantages de la physiothérapie à domicile",
    excerpt: "Comment la physiothérapie à domicile peut aider à la récupération et améliorer la mobilité des patients.",
    author: "Omar Bouazza",
    date: "5 mai 2025",
    featured: false
  },
  {
    title: "Alimentation et santé: conseils pour les seniors",
    excerpt: "Guide nutritionnel pour les personnes âgées afin de maintenir une bonne santé et prévenir les maladies courantes.",
    author: "Fatima Benkirane",
    date: "28 avril 2025",
    image: "/lovable-uploads/286d6d86-fdcd-4a35-940e-c09d679ecc51.png",
    featured: false
  },
  {
    title: "Comprendre la démence: guide pour les familles",
    excerpt: "Informations et conseils pour aider les familles à comprendre et à gérer la démence chez un proche.",
    author: "Dr. Khalid Alaoui",
    date: "20 avril 2025",
    featured: false
  }
];

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${post.featured ? 'md:col-span-2' : ''}`}>
      {post.image && (
        <div className={`${post.featured ? 'h-64 md:h-80' : 'h-48'}`}>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className={`${post.featured ? 'text-2xl' : 'text-xl'} font-semibold mb-2 text-gray-900`}>
          {post.title}
        </h3>
        <p className="text-gray-700 mb-4">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {post.author} • {post.date}
          </span>
          <Link 
            to={`/blog/${post.title.toLowerCase().replace(/[^\w]+/g, '-')}`} 
            className="inline-flex items-center text-mylli-blue hover:text-mylli-darkblue font-medium"
          >
            Lire plus <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-mylli-lightblue py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
                Ressources et conseils
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Notre blog
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Découvrez des articles, des conseils et des informations sur les soins de santé à domicile, le bien-être et la vie saine.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-blue-100 text-mylli-blue px-3 py-1 rounded-full text-sm mb-4">
                    Article vedette
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {featuredPost.content || featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-mylli-blue flex items-center justify-center text-white text-lg font-semibold">
                        {featuredPost.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Button asChild className="bg-mylli-darkblue hover:bg-mylli-blue">
                    <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/[^\w]+/g, '-')}`}>
                      Lire l'article complet
                    </Link>
                  </Button>
                </div>
                {featuredPost.image && (
                  <div className="hidden md:block">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Articles récents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled className="text-gray-400">
                  Page précédente
                </Button>
                <Button variant="outline" className="bg-mylli-blue text-white hover:bg-mylli-darkblue">
                  1
                </Button>
                <Button variant="outline" className="text-gray-700 hover:bg-mylli-lightblue">
                  2
                </Button>
                <Button variant="outline" className="text-gray-700 hover:bg-mylli-lightblue">
                  3
                </Button>
                <Button variant="outline" className="text-gray-700 hover:bg-mylli-lightblue">
                  Page suivante
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-mylli-darkblue py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Abonnez-vous à notre newsletter
              </h2>
              <p className="text-blue-100 mb-8">
                Recevez nos derniers articles, conseils et actualités directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow px-4 py-3 rounded-l sm:rounded-r-none focus:outline-none"
                />
                <Button className="bg-mylli-blue hover:bg-blue-700 sm:rounded-l-none">
                  S'abonner
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
