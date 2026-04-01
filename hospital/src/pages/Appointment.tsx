import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Ophthalmology', 'Pulmonology', 'Emergency Care', 'General Medicine'];
const doctors = ['Dr. Richard Thompson', 'Dr. Sarah Mitchell', 'Dr. James Lee', 'Dr. Maria Santos', 'Dr. David Kim', 'Dr. Lisa Chen', 'Dr. Robert Williams', 'Dr. Emily Davis'];
const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'];

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', doctor: '', date: '', time: '', reason: '' });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
          <div className="size-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CalendarCheck className="size-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Appointment Booked!</h2>
          <p className="text-gray-600 mb-2">Your appointment has been scheduled successfully.</p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-left mt-6 space-y-2">
            <div><span className="font-medium text-gray-700">Patient:</span> <span className="text-gray-600">{form.name}</span></div>
            <div><span className="font-medium text-gray-700">Department:</span> <span className="text-gray-600">{form.department}</span></div>
            <div><span className="font-medium text-gray-700">Doctor:</span> <span className="text-gray-600">{form.doctor}</span></div>
            <div><span className="font-medium text-gray-700">Date & Time:</span> <span className="text-gray-600">{form.date} at {form.time}</span></div>
          </div>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', department: '', doctor: '', date: '', time: '', reason: '' }); }} className="mt-6 text-blue-600 text-sm font-medium hover:underline">
            Book another appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-gray-600 text-lg">Schedule your visit with one of our expert doctors.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required value={form.name} onChange={set('name')} type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input required value={form.email} onChange={set('email')} type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input required value={form.phone} onChange={set('phone')} type="tel" placeholder="+1 (555) 000-0000" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                <select required value={form.department} onChange={set('department')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Select Department</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doctor *</label>
                <select required value={form.doctor} onChange={set('doctor')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Select Doctor</option>
                  {doctors.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                <input required value={form.date} onChange={set('date')} type="date" min={new Date().toISOString().split('T')[0]} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                <select required value={form.time} onChange={set('time')} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Select Time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
              <textarea value={form.reason} onChange={set('reason')} rows={3} placeholder="Briefly describe your symptoms or reason for visit..." className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <CalendarCheck className="size-4" /> Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
