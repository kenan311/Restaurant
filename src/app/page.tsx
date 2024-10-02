// src/app/page.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900">Luxury Eats</h1>
          <nav className="hidden md:flex space-x-6 text-lg">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/menu" className="hover:text-yellow-500">Menu</Link>
            <Link href="/about" className="hover:text-yellow-500">About Us</Link>
            <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
            <Link href="/reservation" className="bg-yellow-500 px-4 py-2 rounded-full text-white hover:bg-yellow-600">Reserve a Table</Link>
          </nav>
          <button
            className="md:hidden text-3xl"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            &#9776;
          </button>
        </div>
        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="md:hidden bg-white px-6 py-4">
            <Link href="/" className="block py-2 hover:text-yellow-500">Home</Link>
            <Link href="/menu" className="block py-2 hover:text-yellow-500">Menu</Link>
            <Link href="/about" className="block py-2 hover:text-yellow-500">About Us</Link>
            <Link href="/contact" className="block py-2 hover:text-yellow-500">Contact</Link>
            <Link href="/reservation" className="block py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">Reserve a Table</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-screen bg-[url('/hero-image.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-6xl font-extrabold mb-4">A Fresh Take on Mediterranean</h1>
          <p className="text-2xl mb-8">Discover the rich flavors of the Mediterranean, crafted with care.</p>
          <Link href="/menu">
            <button className="px-8 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
          <p className="text-lg mb-12">We offer a range of Mediterranean dishes made with fresh ingredients.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Falafel</h3>
              <p>A Mediterranean classic served with tahini and fresh herbs.</p>
              <p className="text-lg font-bold mt-4">$12.00</p>
            </div>
            <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Shawarma</h3>
              <p>Spit-roasted and seasoned chicken, served with pickles and garlic sauce.</p>
              <p className="text-lg font-bold mt-4">$15.00</p>
            </div>
            <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Kefta</h3>
              <p>Grilled ground beef and lamb, served with amba and fresh salads.</p>
              <p className="text-lg font-bold mt-4">$18.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Luxury Eats. All rights reserved.</p>
      </footer>
    </div>
  );
}
