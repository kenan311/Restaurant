import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white shadow-lg fixed top-0 w-full z-10">
        <h1 className="text-4xl font-bold">Luxury Eats</h1>
        <nav className="space-x-6">
          <Link href="/menu" className="text-lg hover:text-yellow-400">Menu</Link>
          <Link href="/about" className="text-lg hover:text-yellow-400">About Us</Link>
          <Link href="/contact" className="text-lg hover:text-yellow-400">Contact</Link>
        </nav>
        <Link href="/reservation">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">Reserve a Table</button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/restaurant-hero.jpg')] text-white pt-24">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-md">
          <h2 className="text-5xl font-extrabold mb-4">Luxury Dining Experience</h2>
          <p className="text-xl mb-8">Where taste meets elegance. Explore our exclusive menu crafted by top chefs.</p>
          <div className="flex space-x-4">
            <Link href="/menu">
              <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">Explore Menu</button>
            </Link>
            <Link href="/reservation">
              <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">Reserve Now</button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 bg-gray-800 text-white text-center">
        <p className="text-xl">&copy; 2024 Luxury Eats. All rights reserved.</p>
        <div className="space-x-4 mt-3">
          <Link href="https://facebook.com" className="hover:text-blue-400">Facebook</Link>
          <Link href="https://instagram.com" className="hover:text-pink-400">Instagram</Link>
          <Link href="https://twitter.com" className="hover:text-blue-400">Twitter</Link>
        </div>
      </footer>
    </div>
  );
}
