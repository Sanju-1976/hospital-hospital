import { Link } from 'react-router';
import { Heart, Shield, Clock, Users, ArrowRight, Star, Phone } from 'lucide-react';

export function Home() {
  const stats = [
    { value: '25+', label: 'Years of Service' },
    { value: '150+', label: 'Specialist Doctors' },
    { value: '50k+', label: 'Patients Treated' },
    { value: '98%', label: 'Patient Satisfaction' },
  ];

  const services = [
    { icon: Heart, title: 'Cardiology', desc: 'Expert heart care with advanced diagnostic and treatment options.' },
    { icon: Shield, title: 'Emergency Care', desc: '24/7 emergency services ready to handle critical situations.' },
    { icon: Users, title: 'Pediatrics', desc: 'Compassionate care for infants, children, and adolescents.' },
    { icon: Clock, title: 'Orthopedics', desc: 'Comprehensive bone, joint, and muscle care and surgery.' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'Outstanding care from every staff member. Felt safe and well cared for throughout my stay.' },
    { name: 'Michael Chen', rating: 5, text: 'The doctors here are incredibly knowledgeable and caring. Highly recommend MediCare!' },
    { name: 'Emily Rodriguez', rating: 5, text: 'Quick diagnosis and effective treatment. Back on my feet in no time thanks to the amazing team.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🏥 Trusted Healthcare Since 1995
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health Is Our <span className="text-blue-200">Priority</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            MediCare Hospital delivers world-class medical care with compassion, cutting-edge technology, and a team of expert specialists dedicated to your well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-blue-600 font-semibold px-8 py-3.5 hover:bg-blue-50 transition-colors shadow-lg"
            >
              Book Appointment <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/60 text-white font-semibold px-8 py-3.5 hover:bg-white/10 transition-colors"
            >
              <Phone className="size-4" /> Call Emergency
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From routine check-ups to complex surgeries, we provide comprehensive medical services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="size-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
              View All Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600">Real stories from the people we care for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, rating, text }) => (
              <div key={name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="size-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{text}"</p>
                <p className="font-semibold text-gray-900 text-sm">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">Schedule your appointment today and take the first step toward better health.</p>
        <Link
          to="/appointment"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Book Your Appointment <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
