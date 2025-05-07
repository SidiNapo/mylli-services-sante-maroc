
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Stats from '@/components/home/Stats';
import BlogPreview from '@/components/home/BlogPreview';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <BlogPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
