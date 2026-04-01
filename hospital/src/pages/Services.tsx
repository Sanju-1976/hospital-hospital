import { Heart, Brain, Bone, Baby, Eye, Wind, Activity, Stethoscope } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Cardiology', desc: 'Comprehensive heart care including diagnostics, interventional cardiology, and cardiac surgery.' },
  { icon: Brain, title: 'Neurology', desc: 'Expert care for neurological disorders including stroke, epilepsy, and Parkinson\'s disease.' },
  { icon: Bone, title: 'Orthopedics', desc: 'Advanced bone, joint, and muscle treatments including joint replacement and sports medicine.' },
  { icon: Baby, title: 'Pediatrics', desc: 'Complete children\'s healthcare from newborn care to adolescent medicine.' },
  { icon: Eye, title: 'Ophthalmology', desc: 'Full-service eye care including LASIK, cataract surgery, and retinal treatments.' },
  { icon: Wind, title: 'Pulmonology', desc: 'Specialized care for respiratory conditions including asthma, COPD, and sleep disorders.' },
  { icon: Activity, title: 'Emergency Care', desc: '24/7 emergency services with state-of-the-art trauma center and rapid response teams.' },
  { icon: Stethoscope, title: 'General Medicine', desc: 'Preventive care, routine check-ups, and management of chronic conditions.' },
];

export function Services() {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of medical specialties with cutting-edge technology and compassionate care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Icon className="size-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
