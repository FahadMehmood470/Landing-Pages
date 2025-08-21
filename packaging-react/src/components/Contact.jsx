export default function Contact() {
  return (
    <section className="py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          rows="5"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
