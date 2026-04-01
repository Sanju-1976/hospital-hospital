import { Award, Heart, Users, Clock } from 'lucide-react';

const milestones = [
  { year: '1995', event: 'MediCare Hospital founded with 50 beds and a mission to serve the community.' },
  { year: '2002', event: 'Expanded to 200 beds and opened the first specialized cardiology center.' },
  { year: '2010', event: 'Launched the Emergency Trauma Center with 24/7 critical care services.' },
  { year: '2018', event: 'Achieved JCI accreditation for international quality standards.' },
  { year: '2023', event: 'Opened the Advanced Robotic Surgery Center with cutting-edge technology.' },
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We treat every patient with empathy and kindness.' },
  { icon: Award, title: 'Excellence', desc: 'We are committed to the highest standards of medical care.' },
  { icon: Users, title: 'Teamwork', desc: 'Our collaborative approach ensures the best outcomes.' },
  { icon: Clock, title: 'Commitment', desc: 'We are available whenever our patients need us, 24/7.' },
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About MediCare Hospital</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
          For over 25 years, we have been a beacon of hope and health for our community — combining medical expertise with heartfelt compassion.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At MediCare Hospital, our mission is simple: to provide exceptional healthcare services that transform lives. We believe that every person deserves access to high-quality, compassionate medical care regardless of their background.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of 150+ specialist doctors, nurses, and healthcare professionals work tirelessly to deliver innovative treatments, precise diagnoses, and personalized care plans for each patient.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '150+', label: 'Specialist Doctors' },
                { num: '500+', label: 'Hospital Beds' },
                { num: '50,000+', label: 'Patients Annually' },
                { num: '98%', label: 'Satisfaction Rate' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{num}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="size-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6">
                  <div className="flex-shrink-0 size-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {year}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 mt-2">
                    <p className="text-gray-700 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
