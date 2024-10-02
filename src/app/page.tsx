import Link from 'next/link'; // Shto importin e Link
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-4xl font-extrabold">Modern Restaurant</h1>
        <nav className="space-x-6">
          <Link href="/menu" className="text-lg hover:text-blue-500">Menu</Link>
          <Link href="/about" className="text-lg hover:text-blue-500">About Us</Link>
          <Link href="/contact" className="text-lg hover:text-blue-500">Contact</Link>
        </nav>
        <Link href="/reservation">
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Reserve a Table</button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/restaurant.jpg')] text-white">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-6xl font-extrabold mb-4">Exquisite Dining Experience</h2>
          <p className="text-2xl mb-6">Taste the best dishes from around the world, curated by top chefs.</p>
          <Link href="/menu">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Explore Menu</button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Modern Restaurant. All rights reserved.</p>
        <div className="space-x-4 mt-3">
          <Link href="https://facebook.com" className="hover:text-blue-400">Facebook</Link>
          <Link href="https://instagram.com" className="hover:text-pink-400">Instagram</Link>
          <Link href="https://twitter.com" className="hover:text-blue-400">Twitter</Link>
        </div>
      </footer>
    </div>
  );
}
