import { Star, GraduationCap } from 'lucide-react';

const doctors = [
  { name: 'Dr. Richard Thompson', specialty: 'Cardiology', experience: '20 years', rating: 4.9, education: 'MD, Johns Hopkins University', image: '👨‍⚕️' },
  { name: 'Dr. Sarah Mitchell', specialty: 'Neurology', experience: '15 years', rating: 4.8, education: 'MD, Harvard Medical School', image: '👩‍⚕️' },
  { name: 'Dr. James Lee', specialty: 'Orthopedics', experience: '18 years', rating: 4.9, education: 'MD, Stanford University', image: '👨‍⚕️' },
  { name: 'Dr. Maria Santos', specialty: 'Pediatrics', experience: '12 years', rating: 4.9, education: 'MD, Yale School of Medicine', image: '👩‍⚕️' },
  { name: 'Dr. David Kim', specialty: 'Ophthalmology', experience: '14 years', rating: 4.7, education: 'MD, Columbia University', image: '👨‍⚕️' },
  { name: 'Dr. Lisa Chen', specialty: 'Pulmonology', experience: '16 years', rating: 4.8, education: 'MD, UCSF School of Medicine', image: '👩‍⚕️' },
  { name: 'Dr. Robert Williams', specialty: 'Emergency Medicine', experience: '22 years', rating: 4.9, education: 'MD, Mayo Clinic School', image: '👨‍⚕️' },
  { name: 'Dr. Emily Davis', specialty: 'General Medicine', experience: '10 years', rating: 4.8, education: 'MD, Duke University', image: '👩‍⚕️' },
];

export function Doctors() {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Doctors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our team of highly qualified specialists dedicated to providing exceptional care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map(({ name, specialty, experience, rating, education, image }) => (
            <div key={name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
                <div className="text-6xl mb-2">{image}</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  {specialty}
                </span>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="size-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({experience})</span>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-gray-500">
                  <GraduationCap className="size-3.5 mt-0.5 flex-shrink-0" />
                  <span>{education}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
