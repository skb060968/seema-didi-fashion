'use client'

import { useState } from 'react'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Royal Rajasthani Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Exquisite Rajasthani bridal lehenga with traditional jewelry'
  },
  {
    id: 2,
    title: 'Contemporary Saree Draping',
    category: 'Saree',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern saree styling with innovative draping techniques'
  },
  {
    id: 3,
    title: 'Bollywood Red Carpet',
    category: 'Celebrity',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Glamorous ethnic wear for film premiere'
  },
  {
    id: 4,
    title: 'Diwali Festival Collection',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant ethnic ensembles for Diwali celebrations'
  },
  {
    id: 5,
    title: 'Bengali Wedding Tradition',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Bengali bridal styling with cultural authenticity'
  },
  {
    id: 6,
    title: 'Silk Saree Editorial',
    category: 'Saree',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious silk sarees showcasing regional craftsmanship'
  }
]

const categories = ['All', 'Bridal', 'Saree', 'Celebrity', 'Festival']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            Portfolio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive showcase of Indian fashion styling work across bridal, saree styling, celebrity looks, and festival wear, 
            demonstrating expertise in traditional and contemporary ethnic fashion.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-fashion-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-fashion-gold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-fashion-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}