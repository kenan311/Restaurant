"use client"; // Shto këtë direktivë për ta bërë komponentin një Client Component

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
      <div className="bg-gray-800 shadow-lg p-8 max-w-lg rounded-lg text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-700 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="w-full px-4 py-2 bg-gray-700 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
