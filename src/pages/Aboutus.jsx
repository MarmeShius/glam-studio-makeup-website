import mer from "../assets/mer.jpg"
import was from "../assets/was.jpg"
import zain from "../assets/zain.jpg"

function About() {
  return (
    <div>

      {/* 🌸 HERO IMAGE SECTION */}
      <div className="relative h-[90vh] w-full">

        <img
          src="/abtus.jpg"
          alt="About Studio"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Quote Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            "Where Beauty Meets Passion & Perfection"
          </h1>
          <p className="text-lg max-w-2xl">
            Discover the story behind Glow & Glam Studio and the artists who bring elegance to life.
          </p>
        </div>
      </div>


      {/* 🌸 CONTENT SECTION */}
      <div className="bg-pink-200 min-h-screen py-16 px-6">

        {/* Introduction */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-rose-600 mb-6">
            About Glow & Glam Studio
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Glow & Glam, we believe beauty is confidence. Our studio is designed to provide a luxurious,
            relaxing environment where our clients can feel pampered and cared for.
            From bridal transformations to everyday glam, we focus on enhancing your natural beauty.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-rose-500 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide professional beauty services that enhance confidence and celebrate individual style.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-rose-500 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted and sought-after beauty studio known for excellence and creativity.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-rose-600 text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "Glow & Glam gave me the most beautiful bridal look.Sbne bht tareef ki as it was my special day and i wanted something like that  I felt like a princess!"
              </p>
              <p className="text-rose-500 font-semibold">- Lubaiqa Bandesha</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "Amazing party makeup service. Bht pyara hair style bnaya , i receive many compliments .very satisfied and Highly recommended!"
              </p>
              <p className="text-rose-500 font-semibold">- Fatima Jaspal</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "Very friendly environment and nice threading services . Threading and waxing was very convenient for me , pehly me dar ri th but that was amazing!"
              </p>
              <p className="text-rose-500 font-semibold">- Liaba Jutt</p>
            </div>
          </div>
        </section>

        {/* Meet Our Artists */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-rose-600 text-center mb-10">
            Meet Our Artists
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <img
                src={mer}
                alt="Artist 1"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-rose-500 mb-1">
                Zainab Asad
              </h3>
              <p className="text-gray-600">Senior Makeup Artist</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <img
                src={was}
                alt="Artist 2"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-rose-500 mb-1">
                Wasifa Shah
              </h3>
              <p className="text-gray-600">Hair & Styling Expert</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
              <img
                src={zain}
                alt="Artist 3"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-rose-500 mb-1">
                Merium Shah
              </h3>
              <p className="text-gray-600">Skincare & Waxing Specialist</p>
            </div>

          </div>
        </section>

      </div>

    </div>
  )
}

export default About
