function Footer() {
  return (
    <footer className="bg-rose-600 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Glam Beauty Studio</h2>
          <p className="text-gray-200">
            Bringing beauty and confidence to every client. Visit us for makeup, hair, and skin services in a luxurious environment.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p>📍  Beauty Studio, Lahore, Pakistan</p>
          <p>📞 +92 303 5862728</p>
          <p>✉️ info@glamandglam.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition">Instagram</a>
            <a href="#" className="hover:text-gray-300 transition">Facebook</a>
            <a href="#" className="hover:text-gray-300 transition">TikTok</a>
            
          </div>
        </div>

      </div>

      <div className="text-center text-gray-200 border-t border-rose-500 py-4">
        &copy; {new Date().getFullYear()} Glam Beauty Studio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
