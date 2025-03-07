import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you have any questions or inquiries, feel free to contact us:
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <p className="text-blue-600 hover:text-blue-800">
                <a href="mailto:timecalc25@gmail.com">timecalc25@gmail.com</a>
              </p>
            </div>
            <p className="text-gray-600 text-center mt-6">
              We will do our best to respond to your message as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
