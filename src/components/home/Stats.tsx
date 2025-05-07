
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-mylli-darkblue mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number="300+" label="Patients servis" />
          <StatItem number="30+" label="Professionnels de santé" />
          <StatItem number="10+" label="Services offerts" />
          <StatItem number="95%" label="Satisfaction client" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
