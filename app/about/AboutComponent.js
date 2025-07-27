"use client"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutComponent() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Crossfire</h1>
            <p className="text-xl mb-8">Your Trusted Fire Safety Partner Since 2000</p>
            <p className="text-lg opacity-90">
              Fire Protection Engineers & Consultants providing comprehensive fire safety solutions 
              to protect lives and property across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2000, Crossfire has been at the forefront of fire protection engineering, 
                providing innovative safety solutions that meet the highest industry standards. 
                Our team of certified engineers and consultants brings decades of combined experience 
                to every project.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in comprehensive fire safety assessments, system design, 
                installation supervision, and ongoing maintenance support. Our commitment to 
                excellence has made us a trusted partner for businesses, institutions, 
                and government agencies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">23+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-6xl text-red-600">🔥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600">Committed to protecting what matters most</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-4xl text-red-600 mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive fire safety solutions that protect lives, property, 
                  and the environment through innovative engineering, expert consultation, 
                  and unwavering commitment to safety standards.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-4xl text-red-600 mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading fire protection engineering firm, setting industry standards 
                  for safety excellence while fostering a culture of continuous improvement 
                  and innovation in fire safety technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-red-600">🛡️</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Safety First</h3>
                <p className="text-gray-600">
                  Every decision we make prioritizes the safety and well-being of people and property.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-orange-600">⚡</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace cutting-edge technology and methodologies to deliver superior solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-yellow-600">🤝</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
              <p className="text-lg text-gray-600">Meet the professionals behind our success</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Mitchell",
                  role: "Lead Fire Protection Engineer",
                  experience: "15+ years",
                  certifications: "P.E., CFPS"
                },
                {
                  name: "Sarah Thompson",
                  role: "Senior Safety Consultant",
                  experience: "12+ years",
                  certifications: "CSP, CIH"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Project Manager",
                  experience: "10+ years",
                  certifications: "PMP, FPE"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl text-red-600">👨‍💼</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.experience} Experience</p>
                  <p className="text-gray-500 text-sm">{member.certifications}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Certifications & Accreditations</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our commitment to excellence is backed by industry-leading certifications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "NFPA Certified",
                "ISO 9001:2015",
                "OSHA Compliant",
                "NICET Certified"
              ].map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl text-red-600">🏆</div>
                  </div>
                  <h3 className="font-semibold text-gray-800">{cert}</h3>
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
