"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from 'react';

export default function GalleryComponent() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' }
  ];

  const projects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      category: "commercial",
      description: "Complete fire protection system for 25-story office building",
      image: "🏢",
      details: "Advanced sprinkler system, smoke detection, and emergency evacuation systems"
    },
    {
      id: 2,
      title: "Manufacturing Plant Safety Upgrade",
      category: "industrial",
      description: "Industrial fire suppression system installation",
      image: "🏭",
      details: "Foam suppression system for chemical processing facility"
    },
    {
      id: 3,
      title: "Regional Medical Center",
      category: "healthcare",
      description: "Hospital fire safety compliance project",
      image: "🏥",
      details: "Comprehensive fire protection for patient safety"
    },
    {
      id: 4,
      title: "University Science Building",
      category: "education",
      description: "Laboratory fire suppression system",
      image: "🎓",
      details: "Specialized suppression for research laboratories"
    },
    {
      id: 5,
      title: "Shopping Mall Renovation",
      category: "commercial",
      description: "Fire safety system modernization",
      image: "🛍️",
      details: "Updated fire alarm and sprinkler systems"
    },
    {
      id: 6,
      title: "Petrochemical Facility",
      category: "industrial",
      description: "High-risk industrial fire protection",
      image: "⚡",
      details: "Explosion-proof fire detection and suppression"
    },
    {
      id: 7,
      title: "Hospital Emergency Wing",
      category: "healthcare",
      description: "Critical care facility fire safety",
      image: "🚨",
      details: "Life safety systems for emergency operations"
    },
    {
      id: 8,
      title: "Elementary School Campus",
      category: "education",
      description: "School fire safety compliance",
      image: "🏫",
      details: "Child-safe fire protection systems"
    },
    {
      id: 9,
      title: "Corporate Headquarters",
      category: "commercial",
      description: "Executive office fire protection",
      image: "🏗️",
      details: "Integrated fire safety and security systems"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Industry Awards" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl mb-8">Showcasing Our Fire Protection Excellence</p>
            <p className="text-lg opacity-90">
              Explore our portfolio of successful fire protection projects across various industries. 
              Each project demonstrates our commitment to safety, innovation, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <div className="text-6xl">{project.image}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-sm">#{project.id.toString().padStart(3, '0')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.details}</p>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-600">Specialized solutions for every fire protection need</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "💧",
                  title: "Sprinkler Systems",
                  description: "Wet, dry, deluge, and foam systems"
                },
                {
                  icon: "🚨",
                  title: "Fire Alarms",
                  description: "Detection and notification systems"
                },
                {
                  icon: "🧯",
                  title: "Suppression Systems",
                  description: "Clean agent and CO2 systems"
                },
                {
                  icon: "🔍",
                  title: "Inspections",
                  description: "Testing and maintenance services"
                }
              ].map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
              <p className="text-lg text-gray-600">What our clients say about our work</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Davis",
                  role: "Facility Manager",
                  company: "Metro Office Complex",
                  rating: 5,
                  testimonial: "Crossfire's team delivered exceptional service from start to finish. Their attention to detail and professional approach exceeded our expectations."
                },
                {
                  name: "Sarah Wilson",
                  role: "Safety Director", 
                  company: "Industrial Solutions Inc.",
                  rating: 5,
                  testimonial: "The industrial fire suppression system they installed has given us complete peace of mind. Highly recommend their expertise."
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Administrator",
                  company: "Regional Medical Center", 
                  rating: 5,
                  testimonial: "Working with Crossfire was seamless. They understood our unique healthcare requirements and delivered accordingly."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-red-600">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let us help you design and implement the perfect fire protection solution for your facility.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
