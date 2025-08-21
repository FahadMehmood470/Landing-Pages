export default function Services() {
  const services = [
    { title: "Eco-Friendly Boxes", desc: "Biodegradable and recyclable packaging." },
    { title: "Custom Labels", desc: "Branding solutions with premium labels." },
    { title: "Food Packaging", desc: "Safe and hygienic food-grade packaging." },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
