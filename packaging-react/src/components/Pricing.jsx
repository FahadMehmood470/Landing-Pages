export default function Pricing() {
  const plans = [
    { name: "Basic", price: 49, features: ["100 Boxes", "Free Shipping", "Basic Support"] },
    { name: "Standard", price: 99, features: ["500 Boxes", "Custom Design", "Priority Support"] },
    { name: "Premium", price: 199, features: ["1000 Boxes", "Branding Kit", "24/7 Support"] },
  ];

  return (
    <section className="py-16 bg-white px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-blue-600 text-3xl font-bold mb-4">${plan.price}</p>
            <ul className="text-gray-600 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx} className="mb-2">✔ {f}</li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
