'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Instagram, Clock, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            Let's Create Together
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to bring your fashion vision to life? I'd love to hear about your project and explore 
            how we can collaborate to create something extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-fashion-black mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Whether you're planning an editorial shoot, commercial campaign, or need personal styling services, 
                  I'm here to help bring your vision to life. Let's discuss your project and create something amazing together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Email</h4>
                    <p className="text-gray-600">hello@piyushbabu.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Location</h4>
                    <p className="text-gray-600">New York, NY (Travel Available)</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Instagram</h4>
                    <p className="text-gray-600">@seemadidifashion</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-fashion-gray p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-fashion-gold mr-3" />
                    <span className="text-gray-700">Response Time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-fashion-gold mr-3" />
                    <span className="text-gray-700">Next Available: January 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-fashion-black mb-6">
                Project Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
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
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Publication
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Styling</option>
                    <option value="saree">Saree Styling</option>
                    <option value="celebrity">Celebrity Styling</option>
                    <option value="ethnic">Ethnic Wear Consulting</option>
                    <option value="festival">Festival Styling</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-plus">₹1,00,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project, vision, specific requirements, and any other relevant details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-fashion-black mb-2">
                How far in advance should I book your services?
              </h3>
              <p className="text-gray-700">
                I recommend booking 4-6 weeks in advance for most projects. For wedding season (October-March) and 
                festival periods, booking 2-3 months ahead is ideal. Rush projects may be accommodated with additional fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-fashion-black mb-2">
                Do you travel for projects?
              </h3>
              <p className="text-gray-700">
                Yes, I'm available for travel across India and internationally. Travel expenses (flights, accommodation, meals) 
                are additional to the styling fee and will be discussed during the consultation phase.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-fashion-black mb-2">
                What's included in your styling services?
              </h3>
              <p className="text-gray-700">
                All services include initial consultation, concept development, outfit sourcing, styling session, 
                and post-styling notes. For bridal services, this includes trial sessions and jewelry coordination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}