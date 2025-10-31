import Image from 'next/image'
import Link from 'next/link'

const featuredProjects = [
  {
    id: 1,
    title: 'Bridal Lehenga Editorial',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    description: 'Exquisite bridal lehengas with traditional craftsmanship'
  },
  {
    id: 2,
    title: 'Saree Styling Campaign',
    category: 'Saree',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    description: 'Contemporary saree draping with modern elegance'
  },
  {
    id: 3,
    title: 'Bollywood Celebrity Look',
    category: 'Celebrity',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    description: 'Glamorous Indian ethnic wear for film premieres'
  },
  {
    id: 4,
    title: 'Festival Fashion Series',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    description: 'Vibrant ethnic ensembles for Indian festivals'
  }
]

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            Featured Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated selection of my most impactful Indian fashion styling projects, showcasing expertise in traditional and contemporary ethnic wear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={480}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium text-fashion-gold uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-fashion-black">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}