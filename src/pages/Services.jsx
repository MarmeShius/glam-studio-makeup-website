import bridal from "../assets/bridal.jpg";
import party from "../assets/party.jpg";
import hair from "../assets/hair.jpg";
import wax from "../assets/wax.webp";



function Services() {
  return (
    <div className="bg-pink-200 min-h-screen py-16 px-6">

      <h1 className="text-5xl font-bold text-rose-600 text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Bridal Makeup */}
        <div className="bg-white rounded-2xl shadow-md  hover:shadow-pink-800 transition-transform cursor-pointer flex flex-col md:flex-row overflow-hidden">
          <img
            src={bridal}
            alt="Bridal Makeup"
            className="w-full md:w-1/3 h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-rose-500 mb-2">
              Bridal Makeup
            </h2>
            <p className="text-gray-600">
              Flawless bridal glam tailored for your special day. We ensure long-lasting, elegant looks for every bride.
            </p>
          </div>
        </div>

        {/* Party Makeup */}
        <div className="bg-white rounded-2xl shadow-md  hover:shadow-pink-800 transition-transform cursor-pointer flex flex-col md:flex-row overflow-hidden">
          <img
            src={party}
            alt="Party Makeup"
            className="w-full md:w-1/3 h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-rose-500 mb-2">
              Party / Event Makeup
            </h2>
            <p className="text-gray-600">
              Glamorous makeup looks for parties, birthdays, or special events that make you shine.
            </p>
          </div>
        </div>

        {/* Hair Styling */}
        <div className="bg-white rounded-2xl cursor-pointer shadow-md hover:shadow-pink-800 transition-transform flex flex-col md:flex-row overflow-hidden">
          <img
            src={hair}
            alt="Hair Styling"
            className="w-full md:w-1/3 h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-rose-500 mb-2">
              Hair Styling
            </h2>
            <p className="text-gray-600">
              Trendy and elegant hairstyles, from curls and braids to updos. We also provide extensions and weaving.
            </p>
          </div>
        </div>

        {/* Waxing / Threading */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-pink-800 transition-transform cursor-pointer flex flex-col md:flex-row overflow-hidden">
          <img
            src={wax}
            alt="Waxing / Threading"
            className="w-full md:w-1/3 h-80 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-rose-500 mb-2">
              Waxing / Threading
            </h2>
            <p className="text-gray-600">
              Professional hair removal services including waxing and precise eyebrow threading for a smooth finish.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
