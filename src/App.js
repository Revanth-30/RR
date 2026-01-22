import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Users, Camera, Film, Award } from 'lucide-react';
import './App.css';
import videoProjects from './videoProjects';
import emailjs from 'emailjs-com'; // Add this import

const RevanthRecreationsWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Revanth Recreations Logo" className="w-12 h-12 object-contain rounded-lg" />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Revanth Recreations
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'videos', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white hover:text-blue-400 transition-colors duration-200 capitalize font-medium ${
                  activeSection === section ? 'text-blue-400' : ''
                }`}
              >
                {section === 'contact' ? 'Contact Us' : section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              {['home', 'about', 'videos', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-blue-400 transition-colors text-left capitalize font-medium"
                >
                  {section === 'contact' ? 'Contact Us' : section}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );

  const HomeSection = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Simulation */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.5)' }}>
  <source src="/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-8"><br></br><br></br><br></br>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to Revanth Recreations
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Creating unforgettable experiences through innovative entertainment and recreation services
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover More
          </button>
          <button
            onClick={() => scrollToSection('videos')}
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Play size={20} />
            Watch Videos
          </button>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Photography</h3>
            <p className="text-gray-300">Capturing your precious moments with artistic excellence</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <Film className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Production</h3>
            <p className="text-gray-300">Creating stunning visual stories that inspire and engage</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="text-gray-300">Organizing memorable events with attention to detail</p>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Revanth Recreations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Our Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded with a passion for creating extraordinary experiences, Revanth Recreations has been at the forefront of entertainment and recreation services. We believe that every moment deserves to be celebrated and remembered.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of creative professionals combines technical expertise with artistic vision to deliver services that exceed expectations. From intimate gatherings to grand celebrations, we bring your vision to life.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Professional Photography & Videography</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Event Planning & Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Creative Content Production</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>Entertainment Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">500+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">1000+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">5+</h4>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );

  const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Video Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of creative videos showcasing our work and the memorable moments we've captured
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAllVideos ? videoProjects : videoProjects.slice(0, 6)).map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(project.url)}
              className="video-card group cursor-pointer rounded-lg overflow-hidden bg-white/5 shadow-md transition duration-300 hover:bg-white/10"
            >

              <div className="aspect-video bg-black flex items-center justify-center">
                <Play className="w-16 h-16 text-white/80 group-hover:text-white transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAllVideos && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllVideos(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Videos
            </button>
          </div>
        ) }
        

      {/* Modal Video Popup */}
      {selectedVideo && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-end min-h-screen px-4 py-12">
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-2xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2"
          onClick={() => setSelectedVideo(null)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Responsive Video */}
        <div className="w-full aspect-video">
            <video
              src={selectedVideo}
              controls
              className="w-full h-full object-cover rounded-lg"
            />
        </div>
      </div>
    </div>
  </div>
  )}
  </div>
  </section>
 );
};

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.email && formData.message) {
        emailjs.send(
          'service_j7ymtxy',
          'template_3hjwwrn',
          {
            name: formData.name,      // <-- changed from 'from_name'
            email: formData.email,    // <-- changed from 'from_email'
            phone: formData.phone,
            message: formData.message,
          },
          'LD2Eei5oHam_KX25U'
        )
        .then(() => {
          alert('Thank you for your message! We will get back to you soon.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, () => {
          alert('Failed to send message. Please try again later.');
        });
      } else {
        alert('Please fill in all required fields.');
      }
    };

    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create something amazing together? Get in touch with us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send us a Message</h3>
              <div className="space-y-6">
                
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Replace the button's onClick with type="submit" */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-400">Get in Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help bring your vision to life. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 6281880863</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">revanthrecreations@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Anakapalle, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HomeSection />
      <AboutSection />
      <VideosSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src="/logo.png" alt="Revanth Recreations Logo" className="w-12 h-12 object-contain rounded-lg" />
            <span className="text-white font-semibold">Revanth Recreations</span>
          </div>
          <p className="text-gray-400">
            © 2025 Revanth Recreations. All rights reserved. Creating memories that last a lifetime.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RevanthRecreationsWebsite;