import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navibar';
import Home from './pages/Home';
import About from './pages/About';
import EventsPage from './pages/Projects';
import Contact from './pages/Contact';
import PassionList from './pages/Passions';
import Dashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import AdminEventPage from './Components/AdminEventPage';
import AdminMinistriesPage from './Components/AdminMinistries';
import ContactAdmin from './Components/ContactAdmin';
import AdminService from './Components/ServiceAdmin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> {/* Background color for full screen */}
        {/* <Navbar /> */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bidapassions" element={<PassionList />} />
            <Route path="/projects" element={<EventsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/event" element={<AdminEventPage />} />
            <Route path="/admin/ministries" element = {<AdminMinistriesPage/>}/>
            <Route path="/admin/contacts" element = {<ContactAdmin/>}/>            
            <Route path="/admin/services" element = {<AdminService/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
