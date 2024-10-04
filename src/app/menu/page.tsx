"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto p-8">
        {/* Title */}
        <h1 className="text-6xl font-serif font-bold text-center mb-12 text-[#D4AF37]">Our Menu</h1>
        <p className="text-center text-lg text-gray-400 mb-8">
          Discover the finest Mediterranean dishes, carefully crafted with fresh ingredients.
        </p>

        {/* Appetizers */}
        <div className="mb-6">
          <button
            onClick={() => toggleCategory("appetizers")}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition-all duration-500"
          >
            Appetizers
          </button>
          {activeCategory === "appetizers" && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Falafel</h3>
                <p className="text-gray-400">A Mediterranean classic served with tahini and fresh herbs.</p>
                <p className="text-lg font-bold mt-4">$12.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Hummus & Pita</h3>
                <p className="text-gray-400">Creamy hummus served with warm pita bread and olive oil.</p>
                <p className="text-lg font-bold mt-4">$10.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Stuffed Grape Leaves</h3>
                <p className="text-gray-400">Grape leaves stuffed with rice, herbs, and spices.</p>
                <p className="text-lg font-bold mt-4">$9.00</p>
              </div>
            </div>
          )}
        </div>

        {/* Main Courses */}
        <div className="mb-6">
          <button
            onClick={() => toggleCategory("main")}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition-all duration-500"
          >
            Main Courses
          </button>
          {activeCategory === "main" && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Grilled Chicken</h3>
                <p className="text-gray-400">A delicious grilled chicken dish, served with fresh herbs and spices.</p>
                <p className="text-lg font-bold mt-4">$12.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Beef Steak</h3>
                <p className="text-gray-400">Premium beef steak, grilled to perfection and served with sides.</p>
                <p className="text-lg font-bold mt-4">$20.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Lamb Shawarma</h3>
                <p className="text-gray-400">Succulent lamb served with pita and tzatziki sauce.</p>
                <p className="text-lg font-bold mt-4">$18.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Grilled Salmon</h3>
                <p className="text-gray-400">Freshly grilled salmon served with garlic butter and lemon.</p>
                <p className="text-lg font-bold mt-4">$22.00</p>
              </div>
            </div>
          )}
        </div>

        {/* Desserts */}
        <div className="mb-6">
          <button
            onClick={() => toggleCategory("desserts")}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition-all duration-500"
          >
            Desserts
          </button>
          {activeCategory === "desserts" && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Baklava</h3>
                <p className="text-gray-400">A traditional Mediterranean dessert made with layers of filo pastry and honey.</p>
                <p className="text-lg font-bold mt-4">$8.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Kunafa</h3>
                <p className="text-gray-400">Cheese-filled pastry topped with crispy vermicelli and syrup.</p>
                <p className="text-lg font-bold mt-4">$9.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Rice Pudding</h3>
                <p className="text-gray-400">Creamy rice pudding with a hint of cinnamon and nuts.</p>
                <p className="text-lg font-bold mt-4">$7.00</p>
              </div>
            </div>
          )}
        </div>

        {/* Drinks */}
        <div className="mb-6">
          <button
            onClick={() => toggleCategory("drinks")}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition-all duration-500"
          >
            Drinks
          </button>
          {activeCategory === "drinks" && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Mint Lemonade</h3>
                <p className="text-gray-400">Refreshing lemonade with fresh mint and lemon slices.</p>
                <p className="text-lg font-bold mt-4">$5.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Turkish Coffee</h3>
                <p className="text-gray-400">Strong, aromatic Turkish coffee served with a side of delight.</p>
                <p className="text-lg font-bold mt-4">$4.00</p>
              </div>
            </div>
          )}
        </div>

        {/* Sides */}
        <div className="mb-6">
          <button
            onClick={() => toggleCategory("sides")}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition-all duration-500"
          >
            Sides
          </button>
          {activeCategory === "sides" && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">French Fries</h3>
                <p className="text-gray-400">Crispy golden fries seasoned with Mediterranean spices.</p>
                <p className="text-lg font-bold mt-4">$6.00</p>
              </div>
              <div className="bg-gray-900 border border-[#D4AF37] p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-500">
                <h3 className="text-3xl font-bold mb-2 text-[#FFD700]">Tabbouleh Salad</h3>
                <p className="text-gray-400">Freshly chopped parsley salad with tomatoes and lemon juice.</p>
                <p className="text-lg font-bold mt-4">$7.00</p>
              </div>
            </div>
          )}
        </div>

        {/* Button for viewing full menu */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-gray-900 font-semibold rounded-full hover:from-[#FFD700] hover:to-[#D4AF37] transform hover:scale-105 transition-all duration-500 shadow-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
