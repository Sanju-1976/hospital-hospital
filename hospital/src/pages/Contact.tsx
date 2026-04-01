import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are here to help. Reach out to us for any inquiries, appointments, or general information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: 'Our Address', value: '123 Medical Center Drive\nHealthcare City, HC 12345' },
              { icon: Phone, title: 'Phone Numbers', value: '+1 (555) 123-4567\n+1 (555) 987-6543 (Emergency)' },
              { icon: Mail, title: 'Email Address', value: 'info@medicare.com\nsupport@medicare.com' },
              { icon: Clock, title: 'Working Hours', value: 'Mon–Fri: 8:00 AM – 8:00 PM\nEmergency: 24/7' },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="size-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="size-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="size-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Send className="size-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }} className="mt-6 text-blue-600 text-sm font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} type="tel" placeholder="+1 (555) 000-0000" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="How can we help you?" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Send className="size-4" /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
