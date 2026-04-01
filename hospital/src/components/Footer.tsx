import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl text-white font-bold">+</span>
              </div>
              <span className="font-semibold text-gray-900">MediCare Hospital</span>
            </div>
            <p className="text-sm text-gray-600">
              Providing compassionate and excellent healthcare services to our community since 1995.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Cardiology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Neurology</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">info@medicare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
