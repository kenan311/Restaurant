import Link from 'next/link';

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto p-8">
        {/* Titulli i faqes */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-yellow-500">Our Menu</h1>
        <p className="text-center text-lg text-gray-400 mb-8">Discover the finest Mediterranean dishes made with fresh ingredients and a touch of love.</p>

        {/* Kartat e menusë me efekte moderne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Grilled Chicken</h2>
            <p className="text-xl text-gray-300 mb-6">$12</p>
            <p className="text-gray-400">A delicious grilled chicken dish, served with fresh herbs and spices.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Pasta Carbonara</h2>
            <p className="text-xl text-gray-300 mb-6">$15</p>
            <p className="text-gray-400">Classic pasta carbonara with creamy sauce and pancetta.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Vegetarian Pizza</h2>
            <p className="text-xl text-gray-300 mb-6">$10</p>
            <p className="text-gray-400">A fresh vegetarian pizza with a crispy crust and fresh vegetables.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Beef Steak</h2>
            <p className="text-xl text-gray-300 mb-6">$20</p>
            <p className="text-gray-400">Premium beef steak, grilled to perfection and served with sides.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Grilled Salmon</h2>
            <p className="text-xl text-gray-300 mb-6">$22</p>
            <p className="text-gray-400">Fresh salmon grilled to perfection, served with lemon and butter sauce.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Stuffed Grape Leaves</h2>
            <p className="text-xl text-gray-300 mb-6">$8</p>
            <p className="text-gray-400">Traditional stuffed grape leaves filled with rice and herbs.</p>
          </div>
        </div>
      </div>

      {/* Butoni për t'u kthyer në home */}
      <div className="text-center mt-10">
        <Link href="/">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
