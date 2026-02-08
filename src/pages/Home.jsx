import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="relative">

      {/* 🎥 VIDEO BACKGROUND WRAPPER */}
      <div className="relative min-h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>

        {/* Dark Transparent Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🌸 HERO SECTION */}
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 text-white">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Glam Beauty Studio
          </h1>

          <p className="text-lg max-w-2xl mb-8">
            Where elegance meets perfection. Experience premium beauty services
            in a relaxing and luxurious environment designed to enhance your natural glow.
          </p>

          <Link to="/appointment">
            <button className="bg-rose-500 px-8 py-3 rounded-full cursor-pointer shadow-lg hover:bg-rose-600 hover:scale-105 transition duration-300">
              Book Your Visit
            </button>
          </Link>

        </section>
      </div>

      {/* 🌸 REST OF YOUR SECTIONS (UNCHANGED) */}

      {/* ABOUT STUDIO SECTION */}
      <section className="py-16 px-6 bg-pink-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold text-rose-600 mb-6">
              A Luxurious Beauty Experience
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              At Glow & Glam, we believe beauty is confidence. Our studio is
              designed with comfort, hygiene, and elegance in mind.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With certified professionals and premium cosmetic brands,
              we ensure every client receives personalized care and flawless results.
            </p>
          </div>

          <div className="bg-pink-200 rounded-2xl border-b-cyan-950 h-80 shadow-lg flex items-center justify-center">
             <img
                        src="/mak.jpg"
                        alt="Waxing / Threading"
                        className="w-full  h-80 object-cover"
                      />
          </div>

        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-16 px-6 bg-pink-300">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-rose-600 mb-6">
            Visit Our Studio
          </h2>

          <p className="text-gray-700 mb-4">
            Beauty Studio, Main Boulevard, Lahore, Pakistan
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394209.9425448229!2d73.87167594436018!3d31.46227255191168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Pakistan!5e1!3m2!1sen!2s!4v1770478131578!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home
