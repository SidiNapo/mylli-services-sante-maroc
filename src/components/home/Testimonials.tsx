
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Le service fourni par Mylli Services a été exceptionnel. Le personnel est professionnel, attentif et vraiment soucieux du bien-être de ma mère. Je suis très reconnaissante pour leur aide.",
    name: "Sara Tazi",
    role: "Fille d'une patiente",
    image: "/lovable-uploads/0c13a435-2d55-4f11-b065-81c84a2e6c6f.png"
  },
  {
    id: 2,
    content: "Les soins à domicile de Mylli Services m'ont permis de rester dans le confort de ma maison tout en recevant des soins médicaux de qualité. Les infirmières sont compétentes et aimables.",
    name: "Ahmed Benali",
    role: "Patient",
    image: "/lovable-uploads/0b9e9cac-d087-48ab-a9a8-250b295f942e.png"
  },
  {
    id: 3,
    content: "Depuis que nous avons fait appel à Mylli Services pour mon père, sa qualité de vie s'est considérablement améliorée. Le service est fiable, ponctuel et professionnel.",
    name: "Karim El Mansouri",
    role: "Fils d'un patient",
    image: "/lovable-uploads/f058984d-af55-4751-be48-42a0d2e45ebc.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-r from-mylli-blue to-mylli-darkblue py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Ce que disent nos clients</h2>
          <p className="mt-4 text-blue-100">
            Découvrez les témoignages de personnes qui ont bénéficié de nos services de soins à domicile.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-col items-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6"
              />
              <div className="text-gray-600 text-lg italic mb-6 text-center">
                "{testimonials[activeIndex].content}"
              </div>
              <div>
                <p className="font-semibold text-mylli-darkblue">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-blue-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-mylli-darkblue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-mylli-darkblue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
