"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from 'react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    alert('Thank you for your message! We will contact you soon.');
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Our Location",
      details: ["123 Fire Safety Drive", "Safety City, SC 12345", "United States"]
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Emergency: +1 (555) 911-FIRE"]
    },
    {
      icon: "✉️",
      title: "Email Addresses",
      details: ["info@crossfire.com", "emergency@crossfire.com", "quotes@crossfire.com"]
    },
    {
      icon: "🕐",
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "24/7 Emergency Service"]
    }
  ];

  const services = [
    "Fire Risk Assessment",
    "Fire Alarm Systems", 
    "Sprinkler Systems",
    "System Maintenance",
    "Code Compliance",
    "Training Programs",
    "Emergency Services",
    "Other"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">Get in Touch for Your Fire Protection Needs</p>
            <p className="text-lg opacity-90">
              Ready to protect what matters most? Contact our expert team today for a consultation 
              or emergency service. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Tell us about your fire protection needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help with all your fire protection needs. Contact us today 
                  for expert consultation and service.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-3xl mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">🚨 Emergency Service</h3>
                  <p className="text-red-700 mb-3">
                    For fire emergencies or urgent system failures, call our 24/7 emergency line:
                  </p>
                  <a 
                    href="tel:+15559111fire" 
                    className="text-2xl font-bold text-red-600 hover:text-red-800"
                  >
                    +1 (555) 911-FIRE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Our Office</h2>
              <p className="text-lg text-gray-600">Visit us at our headquarters</p>
            </div>
            
            {/* Placeholder for map */}
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-gray-500 mb-4">🗺️</div>
                <p className="text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm">123 Fire Safety Drive, Safety City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Areas</h2>
              <p className="text-lg text-gray-600">We proudly serve the following regions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Greater Metro Area",
                "Industrial District",
                "Healthcare Corridor", 
                "Educational Zone",
                "Government District",
                "Commercial Centers",
                "Residential Areas",
                "Emergency Coverage"
              ].map((area, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl text-red-600 mb-3">📍</div>
                  <h3 className="font-semibold text-gray-800">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Quick answers to common questions</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you respond to emergencies?",
                  answer: "We provide 24/7 emergency service with response times typically within 1 hour for critical situations."
                },
                {
                  question: "Do you service all types of buildings?",
                  answer: "Yes, we service commercial, industrial, healthcare, educational, and residential facilities of all sizes."
                },
                {
                  question: "Are your technicians certified?",
                  answer: "All our technicians are fully licensed, certified, and regularly trained on the latest fire protection technologies."
                },
                {
                  question: "Do you provide free consultations?",
                  answer: "Yes, we offer free initial consultations to assess your fire protection needs and provide recommendations."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
