import { Camera, Users, Sparkles, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Bridal Styling',
    description: 'Complete bridal styling services for Indian weddings, from mehendi to reception, creating unforgettable looks.',
    features: ['Bridal Lehenga Styling', 'Saree Draping', 'Jewelry Coordination', 'Pre-wedding Shoots']
  },
  {
    icon: Camera,
    title: 'Saree Styling',
    description: 'Expert saree draping and styling for all occasions, from traditional to contemporary looks.',
    features: ['Traditional Draping', 'Modern Saree Styling', 'Regional Styles', 'Blouse Coordination']
  },
  {
    icon: Users,
    title: 'Celebrity Styling',
    description: 'Bollywood and celebrity styling for red carpet events, film promotions, and award shows.',
    features: ['Red Carpet Looks', 'Film Promotions', 'Award Shows', 'Magazine Shoots']
  },
  {
    icon: Briefcase,
    title: 'Ethnic Wear Consulting',
    description: 'Personal styling consultations for ethnic wear, helping clients build their Indian wardrobe.',
    features: ['Wardrobe Planning', 'Festival Styling', 'Occasion Dressing', 'Shopping Assistance']
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-fashion-black mb-6">
            Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive Indian fashion styling services that celebrate traditional elegance while embracing contemporary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-fashion-gray p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-fashion-black">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-fashion-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
          <button className="btn-primary">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}