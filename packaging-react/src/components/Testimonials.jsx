export default function Testimonials() {
  const testimonials = [
    { name: "Ali Khan", text: "Best packaging service! My business looks more professional." },
    { name: "Sara Ahmed", text: "Eco-friendly options that my customers love." },
    { name: "John Doe", text: "Fast delivery and excellent quality packaging." },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <p className="text-gray-600 mb-4">"{t.text}"</p>
            <h4 className="font-semibold text-gray-900">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
