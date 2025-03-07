"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calculator, Timer, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Time Calculations",
      description: "Precise time arithmetic for adding, subtracting, and calculating time differences with professional-grade accuracy.",
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Date & Time Tools",
      description: "Comprehensive suite of tools for date and time calculations, perfect for project planning and scheduling.",
    },
    {
      icon: <Timer className="h-12 w-12 text-blue-600" />,
      title: "Advanced Features",
      description: "Professional tools including work hours tracking, countdown timers, and precise stopwatch functionality.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "User-Friendly Design",
      description: "Intuitive interface designed for both casual users and professionals, making complex calculations simple.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TimeCalc</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            TimeCalc is your professional solution for all time-related calculations,
            designed to make complex time computations simple and accurate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At TimeCalc, we're committed to providing the most accurate and user-friendly
              time calculation tools for professionals and individuals alike. Our goal is
              to simplify complex time calculations while maintaining precision and reliability.
            </p>
            <h3 className="text-xl font-semibold mb-3">Why Choose TimeCalc?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Professional-grade accuracy in all calculations</li>
              <li>Intuitive and responsive user interface</li>
              <li>Comprehensive suite of time calculation tools</li>
              <li>Regular updates and improvements</li>
              <li>Free to use for all users</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or suggestions? We'd love to hear from you. Reach out to our
              team for support, feedback, or collaboration opportunities.
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: support@timecalc.com</p>
              <p>Twitter: @TimeCalc</p>
              <p>GitHub: github.com/timecalc</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
