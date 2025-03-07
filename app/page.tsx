import { Clock, Calculator, Timer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Calculations",
      description: "Add, subtract, and calculate time differences with ease",
      link: "/calc/add-subtract",
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Date & Time Calculator",
      description: "Comprehensive date and time calculations in one place",
      link: "/calc/date-time",
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Work Hours Tracker",
      description: "Track your work hours and calculate billable time",
      link: "/tools/work-hours",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Advanced Tools",
      description: "Countdown timer, stopwatch, and more professional tools",
      link: "/tools/countdown",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Time Calculations Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your all-in-one solution for time calculations and tracking
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="/calc/add-subtract">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything You Need for Time Management
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools designed for professionals and everyday users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button asChild variant="outline">
                  <Link href={feature.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Master Your Time?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start using our professional time calculation tools today
          </p>
          <Button asChild size="lg" className="bg-blue-600 text-white">
            <Link href="/calc/add-subtract">Try TimeCalc Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
