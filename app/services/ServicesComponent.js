"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesComponent() {
  const services = [
    {
      icon: "🔥",
      title: "Fire Risk Assessment",
      description: "Comprehensive evaluation of fire hazards and risks in your facility with detailed recommendations for improvement.",
      features: ["Site surveys", "Risk analysis", "Compliance reports", "Safety recommendations"]
    },
    {
      icon: "🚨",
      title: "Fire Alarm Systems",
      description: "Design, installation, and maintenance of advanced fire detection and alarm systems.",
      features: ["Smoke detection", "Heat detection", "Emergency alerts", "System monitoring"]
    },
    {
      icon: "💧",
      title: "Sprinkler Systems",
      description: "Professional sprinkler system design and installation for optimal fire suppression coverage.",
      features: ["Wet systems", "Dry systems", "Deluge systems", "Foam systems"]
    },
    {
      icon: "🔧",
      title: "System Maintenance",
      description: "Regular maintenance and testing services to ensure your fire protection systems remain reliable.",
      features: ["Routine inspections", "Performance testing", "Repairs", "Upgrades"]
    },
    {
      icon: "📋",
      title: "Code Compliance",
      description: "Expert guidance to ensure your facility meets all local and national fire safety codes.",
      features: ["NFPA standards", "Local codes", "Permit assistance", "Inspection support"]
    },
    {
      icon: "🎓",
      title: "Training Programs",
      description: "Comprehensive fire safety training for your staff and emergency response teams.",
      features: ["Fire prevention", "Emergency procedures", "Equipment usage", "Safety protocols"]
    }
  ];

  const industries = [
    {
      name: "Commercial Buildings",
      icon: "🏢",
      description: "Office buildings, retail spaces, and mixed-use developments"
    },
    {
      name: "Industrial Facilities", 
      icon: "🏭",
      description: "Manufacturing plants, warehouses, and processing facilities"
    },
    {
      name: "Healthcare",
      icon: "🏥", 
      description: "Hospitals, clinics, and long-term care facilities"
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Schools, universities, and research institutions"
    },
    {
      name: "Hospitality",
      icon: "🏨",
      description: "Hotels, restaurants, and entertainment venues"
    },
    {
      name: "Government",
      icon: "🏛️",
      description: "Federal, state, and municipal facilities"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">Comprehensive Fire Protection Solutions</p>
            <p className="text-lg opacity-90">
              From initial assessment to ongoing maintenance, we provide complete fire safety services 
              tailored to your specific needs and industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600">Professional fire protection services you can trust</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
              <p className="text-lg text-gray-600">How we ensure your fire safety needs are met</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive evaluation of your facility and current fire safety measures"
                },
                {
                  step: "02", 
                  title: "Design",
                  description: "Custom fire protection system design based on your specific requirements"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Professional installation and testing of all fire safety systems"
                },
                {
                  step: "04",
                  title: "Maintenance",
                  description: "Ongoing support and maintenance to ensure continued protection"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600">Specialized fire protection for every sector</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">24/7 Emergency Services</h2>
            <p className="text-xl mb-8">
              Fire emergencies don't wait for business hours. Neither do we.
            </p>
            <p className="text-lg mb-8 opacity-90">
              Our emergency response team is available around the clock to provide immediate assistance 
              for fire system failures, emergency repairs, and urgent safety concerns.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Emergency Line
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Request Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Crossfire</h2>
              <p className="text-lg text-gray-600">The advantages of working with our team</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "✅",
                  title: "Certified Experts",
                  description: "All our engineers are licensed and certified professionals"
                },
                {
                  icon: "⚡",
                  title: "Fast Response",
                  description: "Quick turnaround times for all service requests"
                },
                {
                  icon: "🛡️",
                  title: "Quality Guaranteed",
                  description: "We stand behind our work with comprehensive warranties"
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "Competitive pricing without compromising on quality"
                }
              ].map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
