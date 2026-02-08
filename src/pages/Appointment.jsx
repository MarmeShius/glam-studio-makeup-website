import { useState } from "react"

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>

      {/* 🌸 HERO IMAGE SECTION */}
      <div className="relative h-[90vh] w-full">
        
        {/* Background Image */}
        <img
          src="/appoint.jpg"
          alt="Appointment"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Quote Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            "Your Beauty Journey Begins Here"
          </h1>
          <p className="text-lg max-w-2xl">
            Book your appointment today and let us enhance your natural glow with elegance and care.
          </p>
        </div>

      </div>


      {/* 🌸 FORM SECTION */}
      <div className="bg-pink-200 py-16 px-6">

        {submitted ? (
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-3xl font-semibold text-rose-500 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Your appointment has been booked successfully. We will contact you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition"
            >
              Book Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-10 space-y-6"
          >

            <h2 className="text-3xl font-bold text-rose-600 text-center mb-6">
              Book Your Appointment
            </h2>

            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option value="">-- Choose a Service --</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Party Makeup">Party Makeup</option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Waxing">Waxing</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition"
            >
              Book Appointment
            </button>

          </form>
        )}
      </div>

    </div>
  )
}

export default Appointment
