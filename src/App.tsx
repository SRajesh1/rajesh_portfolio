import React, { useEffect, useState } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, 
  BookOpen, Award, User, Phone, MapPin, Calendar, Twitter,
  Instagram, Facebook, Heart
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Create bubbles
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random properties
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.setProperty('--duration', `${duration}s`);
      
      const header = document.querySelector('header');
      if (header) {
        header.appendChild(bubble);
        
        // Remove bubble after animation
        setTimeout(() => {
          bubble.remove();
        }, duration * 1000);
      }
    };

    // Create bubbles periodically
    const interval = setInterval(createBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white animate-gradient">
      {/* Enhanced Hero Section */}
      <header id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')] 
               opacity-20 bg-cover bg-center transform scale-110 animate-subtle-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Avatar Container */}
             

            {/* Name and Title */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  SINGAVARAPU L N V S S RAJESH
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Aspiring Software Developer
                </span>
                <span className="mx-2">|</span>
                <span className="text-gray-400">MCA Student</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="mailto:rajeshsingavarapu20@gmail.com" 
                 className="group relative px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25">
                <span className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-20 transition-opacity bg-white" />
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/l-n-v-s-s-rajesh-singavarapu-54b71a232"
                 className="group relative px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-blue-500/25">
                <span className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-20 transition-opacity bg-white" />
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </div>
              </a>
            </div>

            {/* Scroll Indicator */}
           
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section id="about" className="py-20 px-4 glass-effect">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed backdrop-blur-lg p-6 rounded-lg bg-white/5 hover-scale transition-all duration-300">
            Highly motivated fresher with an eagerness to learn and develop new skills. Possess excellent communication and interpersonal skills with the ability to work both independently and in a team. Seeking a role to utilize my existing knowledge and develop new skills to contribute to the success of the organization.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="bg-purple-500 p-3 rounded-lg mr-4">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Projects</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Online Water Supply",
                description: "The project 'Online water service' is used to allow the user to get the services of water by booking the service simply in a simple and flexible web site.",
                achievement: "Leveraged existing user data to create predictive algorithms, leading to a 17% increase in customer satisfaction. Automated processes for booking, scheduling deliveries, billing, and tracking customer orders.",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Finance Web Application",
                description: "Developed and deployed a responsive finance management web app using React.js, HTML, CSS, and JavaScript, featuring a user-friendly UI for seamless financial tracking and optimized performance on Netlify.",
                tech: ["React.js", "Tailwind CSS", "Netlify"]
              },
              {
                title: "Movie Ticket Booking System",
                description: "Completed a Python internship on 'A Movie Ticket Booking System,' gaining hands-on experience in developing a functional ticket reservation platform.",
                tech: ["Python", "SQLite", "Flask"]
              }
            ].map((project, index) => (
              <div key={index} 
                   className="glass-effect p-8 rounded-xl hover-scale transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.achievement && (
                  <p className="text-gray-300 mb-4">{project.achievement}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 glass-effect">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="bg-green-500 p-3 rounded-lg mr-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-green-400">Education</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                school: "D N R College",
                degree: "Master Of Computer Applications",
                date: "March, 2025",
                location: "Bhimavaram, Andhra Pradesh"
              },
              {
                school: "B V Raju College",
                degree: "Bachelor of Computer Science",
                date: "September, 2022",
                location: "Bhimavaram, Andhra Pradesh"
              }
            ].map((edu, index) => (
              <div key={index} 
                   className="bg-white/5 p-6 rounded-xl hover-scale transition-all duration-300 border border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-green-300">{edu.school}</h3>
                    <p className="text-gray-300">{edu.degree}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-green-400">{edu.date}</p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="bg-yellow-500 p-3 rounded-lg mr-4">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-400">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'HTML', 'JavaScript', 'CSS', 'SQL', 'ReactJS', 'MS Excel', 'MS Word'].map((skill) => (
              <div key={skill} 
                   className="glass-effect p-4 rounded-xl text-center hover-scale transition-all duration-300 border border-white/10">
                <span className="text-yellow-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 glass-effect">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="bg-red-500 p-3 rounded-lg mr-4">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-red-400">Certifications</h2>
          </div>
          <div className="grid gap-4">
            {[
              "TCS ION Career Edge-Young Professional",
              "Accenture-Developer Virtual Experience Program",
              "TCS-EGS Virtual Experience Program"
            ].map((cert, index) => (
              <div key={index} 
                   className="bg-white/5 p-6 rounded-xl hover-scale transition-all duration-300 border border-white/10">
                <p className="text-lg text-red-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer with improved mobile alignment */}
      <footer className="relative bg-gray-900 text-white py-16 px-4">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Details
              </h3>
              <div className="flex flex-col items-center sm:items-start space-y-3">
                <a href="mailto:rajeshsingavarapu20@gmail.com" 
                   className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>rajeshsingavarapu20@gmail.com</span>
                </a>
                <a href="tel:+919799572170" 
                   className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 979 957 2170</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Bhimavaram, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Me</a>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
                <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors">Education</a>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </h3>
              <div className="flex justify-center sm:justify-start gap-4">
                <a href="https://linkedin.com/in/l-n-v-s-s-rajesh-singavarapu-54b71a232" 
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" 
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" 
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" 
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8" />

          {/* Bottom Footer */}
          {/* <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1 text-center md:text-left">
              <span>© {new Date().getFullYear()} SINGAVARAPU L N V S S RAJESH.</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind</span>
            </div>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;