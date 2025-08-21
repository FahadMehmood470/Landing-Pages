function ProductCard({ title, desc, price }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{desc}</p>
      <p className="font-bold text-blue-600 mb-4">${price}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default function Products() {
  const products = [
    { title: "Cardboard Box", desc: "Strong & durable for shipping.", price: 20 },
    { title: "Paper Bag", desc: "Eco-friendly packaging.", price: 5 },
    { title: "Plastic Bottle", desc: "Reusable & lightweight.", price: 10 },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
