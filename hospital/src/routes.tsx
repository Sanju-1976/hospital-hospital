import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Doctors } from './pages/Doctors';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Appointment } from './pages/Appointment';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'doctors', Component: Doctors },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'appointment', Component: Appointment },
      { path: '*', Component: NotFound },
    ],
  },
]);
