import Link from 'next/link';

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4">Grilled Chicken</h2>
            <p className="text-xl text-gray-300 mb-6">$12</p>
            <p className="text-gray-400">A delicious grilled chicken dish, served with fresh herbs and spices.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4">Pasta Carbonara</h2>
            <p className="text-xl text-gray-300 mb-6">$15</p>
            <p className="text-gray-400">Classic pasta carbonara with creamy sauce and pancetta.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4">Vegetarian Pizza</h2>
            <p className="text-xl text-gray-300 mb-6">$10</p>
            <p className="text-gray-400">A fresh vegetarian pizza with a crispy crust and fresh vegetables.</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4">Beef Steak</h2>
            <p className="text-xl text-gray-300 mb-6">$20</p>
            <p className="text-gray-400">Premium beef steak, grilled to perfection and served with sides.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/" className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">Back to Home</Link>
      </div>
    </div>
  );
}
