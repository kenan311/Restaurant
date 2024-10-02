import Link from 'next/link';

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-10">
        <h1 className="text-5xl font-bold text-center mb-10">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Grilled Chicken</h2>
            <p className="text-lg">$12</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Pasta Carbonara</h2>
            <p className="text-lg">$15</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Vegetarian Pizza</h2>
            <p className="text-lg">$10</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Beef Steak</h2>
            <p className="text-lg">$20</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
