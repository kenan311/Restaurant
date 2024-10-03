// src/app/page.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-white">Luxury Eats</h1>
          <nav className="hidden md:flex space-x-6 text-lg">
            {/* Përdorim padding për të barazuar madhësinë e lidhjeve me butonin */}
            <Link href="/" className="text-white px-4 py-2 hover:text-yellow-400 transition duration-300">Home</Link>
            <Link href="/menu" className="text-white px-4 py-2 hover:text-yellow-400 transition duration-300">Menu</Link>
            <Link href="/about" className="text-white px-4 py-2 hover:text-yellow-400 transition duration-300">About Us</Link>
            <Link href="/contact" className="text-white px-4 py-2 hover:text-yellow-400 transition duration-300">Contact</Link>
            <Link href="/reservation" className="px-4 py-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition duration-300 shadow-lg">Reserve a Table</Link>
          </nav>
          <button
            className="md:hidden text-3xl text-white focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="md:hidden bg-gray-800 px-6 py-4">
            <Link href="/" className="block py-2 text-white hover:text-yellow-400">Home</Link>
            <Link href="/menu" className="block py-2 text-white hover:text-yellow-400">Menu</Link>
            <Link href="/about" className="block py-2 text-white hover:text-yellow-400">About Us</Link>
            <Link href="/contact" className="block py-2 text-white hover:text-yellow-400">Contact</Link>
            <Link href="/reservation" className="block w-full py-3 bg-yellow-500 text-white text-center rounded-full hover:bg-yellow-600 transition duration-300">Reserve a Table</Link>
          </div>
        )}
      </header>
      

      
      {/* Hero Section with Collage */}
      <div className="relative h-screen bg-cover bg-center" 
     style={{ backgroundImage: "url('https://i.postimg.cc/MKXJVrRJ/restaurant.png')" }}>
  <div className="absolute inset-0 bg-black opacity-65"></div> {/* Overlay për ta bërë më të errët */}
  <div className="relative h-full flex justify-center items-center">
    {/* Main Image in the center */}
    <div className="relative z-10">
      <img 
        src="https://i.postimg.cc/MKXJVrRJ/restaurant.png" 
        alt="Restaurant Main" 
        className="w-[800px] h-[700px] object-cover rounded-lg shadow-2xl" 
        style={{ border: "5px solid white" }}
      />
        </div>

        {/* Collage Images - Top Left and Right, Bottom Left and Right */}
        <div className="absolute z-10 top-20 left-10 transform rotate-6">
          <img 
            src="https://i.postimg.cc/4xZjYGk5/home-dish.png" 
            alt="Dish 1" 
            className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" 
            style={{ border: "4px solid white" }} 
          />
        </div>
        <div className="absolute z-10 top-20 right-12 transform -rotate-6">
          <img 
            src="https://i.postimg.cc/C5Tm9CwN/home-dish2.png" 
            alt="Dish 2" 
            className="w-40 h-40 object-cover rounded-lg shadow-lg" 
            style={{ border: "4px solid white" }} 
          />
        </div>
        <div className="absolute z-10 bottom-12 left-16 transform rotate-3">
          <img 
            src="https://i.postimg.cc/85ntSwCL/home-dish3.png" 
            alt="Dish 3" 
            className="w-36 h-36 object-cover rounded-lg shadow-lg" 
            style={{ border: "4px solid white" }} 
          />
        </div>
        <div className="absolute z-10 bottom-16 right-10 transform -rotate-3">
          <img 
            src="https://i.postimg.cc/DwPVTk3s/home-dish4.png" 
            alt="Dish 4" 
            className="w-[142px] h-[158px] object-cover rounded-lg shadow-lg" 
            style={{ border: "4px solid white" }} 
          />
        </div>

        {/* Text and Button */}
        <div className="absolute z-20 flex flex-col justify-center items-center text-center">
  <h1 className="text-5xl font-extrabold mb-4 text-white">A Fresh Take on Mediterranean</h1> {/* Ngjyra e bardhë */}
  <p className="text-lg mb-8 text-white">Discover the rich flavors of the Mediterranean, crafted with care.</p> {/* Tekst i bardhë */}
  <Link href="/menu">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>



      {/* Menu Section */}
      <section className="py-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
    <p className="text-lg mb-12">We offer a range of Mediterranean dishes made with fresh ingredients.</p>

    {/* Grid me 6 pjata në total */}
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

      {/* Shtimi i tre pjatave të reja */}
      <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4">Hummus & Pita</h3>
        <p>Creamy hummus served with warm pita bread and olive oil.</p>
        <p className="text-lg font-bold mt-4">$10.00</p>
      </div>

      <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4">Grilled Salmon</h3>
        <p>Freshly grilled salmon served with garlic butter and lemon.</p>
        <p className="text-lg font-bold mt-4">$22.00</p>
      </div>

      <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4">Stuffed Grape Leaves</h3>
        <p>Traditional stuffed grape leaves filled with rice and herbs.</p>
        <p className="text-lg font-bold mt-4">$8.00</p>
      </div>
    </div>

    {/* Butoni për faqen e plotë të menusë me animacion */}
    <div className="mt-12">
      <Link href="/menu">
        <button className="px-6 py-3 bg-yellow-500 text-white text-lg font-bold rounded-full hover:bg-yellow-600 transform hover:scale-105 transition duration-300">
          View Full Menu
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Contact Information */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <ul>
        <li className="mb-2">
          <strong>Address:</strong> 1234 Main St, Cityville, ST 12345
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> (123) 456-7890
        </li>
        <li className="mb-2">
          <strong>Email:</strong> info@luxuryeats.com
        </li>
      </ul>
    </div>

    {/* Google Maps Embed */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Find Us</h2>
      <div className="h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9240362763657!2d-122.08424968484773!3d37.421999779821106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb735d5a63d17%3A0xe58b522acdd1f78e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630428590269!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Restaurant Location"
        ></iframe>
      </div>
    </div>
  </div>

  {/* Footer bottom - Social links and copyright */}
  <div className="mt-8 border-t border-gray-700 pt-6 text-center">
    <p>&copy; 2024 Luxury Eats. All rights reserved.</p>
    <div className="flex justify-center space-x-6 mt-4">
      <a href="https://facebook.com" className="hover:text-yellow-500">Facebook</a>
      <a href="https://instagram.com" className="hover:text-yellow-500">Instagram</a>
      <a href="https://twitter.com" className="hover:text-yellow-500">Twitter</a>
    </div>
  </div>
</footer>
    </div>
  );
}
