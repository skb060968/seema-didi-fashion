import { Camera, Users, Sparkles, Briefcase, Clock, DollarSign } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Bridal Styling',
    description: 'Complete bridal styling services for Indian weddings, from mehendi to reception, creating unforgettable looks.',
    features: [
      'Bridal Lehenga Styling',
      'Saree Draping',
      'Jewelry Coordination',
      'Pre-wedding Shoots',
      'Reception Styling'
    ],
    pricing: 'Starting from ₹75,000',
    duration: '3-5 days'
  },
  {
    icon: Camera,
    title: 'Saree Styling',
    description: 'Expert saree draping and styling for all occasions, from traditional to contemporary looks.',
    features: [
      'Traditional Draping',
      'Modern Saree Styling',
      'Regional Styles',
      'Blouse Coordination',
      'Occasion Styling'
    ],
    pricing: 'Starting from ₹15,000',
    duration: '2-4 hours'
  },
  {
    icon: Users,
    title: 'Celebrity Styling',
    description: 'Bollywood and celebrity styling for red carpet events, film promotions, and award shows.',
    features: [
      'Red Carpet Looks',
      'Film Promotions',
      'Award Shows',
      'Magazine Shoots',
      'Event Styling'
    ],
    pricing: 'Starting from ₹50,000',
    duration: '1-2 days'
  },
  {
    icon: Briefcase,
    title: 'Ethnic Wear Consulting',
    description: 'Personal styling consultations for ethnic wear, helping clients build their Indian wardrobe.',
    features: [
      'Wardrobe Planning',
      'Festival Styling',
      'Occasion Dressing',
      'Shopping Assistance',
      'Style Consultation'
    ],
    pricing: 'Starting from ₹25,000',
    duration: '4-6 hours'
  }
]

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We discuss your vision, goals, timeline, and budget to ensure perfect alignment.'
  },
  {
    step: '02',
    title: 'Concept Development',
    description: 'I create detailed concepts, mood boards, and styling plans tailored to your project.'
  },
  {
    step: '03',
    title: 'Preparation & Sourcing',
    description: 'Careful selection and sourcing of garments, accessories, and props for the shoot.'
  },
  {
    step: '04',
    title: 'Execution',
    description: 'Professional styling on set with attention to every detail and creative direction.'
  },
  {
    step: '05',
    title: 'Final Delivery',
    description: 'Complete project delivery with styling notes and recommendations for future projects.'
  }
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            Services
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive styling and creative direction services designed to bring your fashion vision to life 
            with precision, creativity, and professional excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                
                <div className="mb-6">
                  <h4 className="font-semibold text-fashion-black mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-fashion-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="text-sm">{service.pricing}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-fashion-black text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              My Process
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A structured approach that ensures every project is executed flawlessly from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black mb-6">
              Investment & Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transparent pricing with flexible packages designed to meet various project needs and budgets.
            </p>
          </div>

          <div className="bg-fashion-gray p-8 rounded-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  What's Always Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Initial consultation and concept development</li>
                  <li>• Detailed styling plan and mood boards</li>
                  <li>• Professional garment sourcing and coordination</li>
                  <li>• On-set styling and creative direction</li>
                  <li>• Post-project styling notes and recommendations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  Additional Services
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rush project delivery (additional 25%)</li>
                  <li>• Travel and accommodation (as required)</li>
                  <li>• Extended styling days</li>
                  <li>• Additional concept development</li>
                  <li>• Post-production consultation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to discuss your project? Let's create something extraordinary together.
            </p>
            <button className="btn-primary mr-4">
              Schedule Consultation
            </button>
            <button className="btn-secondary">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}