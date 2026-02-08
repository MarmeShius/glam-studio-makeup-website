import { useState } from "react";


function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full h-[90vh] relative">
        <img
          src="/white.jpg"
          alt="Contact Glow & Glam"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Get In Touch With Us
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-linear-to-br from-pink-100 to-rose-200 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-rose-500 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-700 mb-6">
                  Your message has been sent successfully. We will contact you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition"
                >
                  Send Message
                </button>

              </form>
            )}
          </div>

          {/* MAP + DETAILS */}
          <div className="space-y-8">

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394209.9425448229!2d73.87167594436018!3d31.46227255191168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Pakistan!5e1!3m2!1sen!2s!4v1770478131578!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Studio Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-gray-700">
              <h3 className="text-2xl font-semibold text-rose-500 mb-3">
                Our Studio
              </h3>
              <p>📍 Glow & Glam Beauty Studio, Lahore, Pakistan</p>
              <p>📞 +92 303 5862728</p>
              <p>📧 info@glowandglam.com</p>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-gray-700">
              <h3 className="text-2xl font-semibold text-rose-500 mb-3">
                Follow Us
              </h3>
              <p>Instagram | Facebook | TikTok</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
