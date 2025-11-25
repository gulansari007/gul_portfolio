import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react';
import { Code, Zap, Award, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import gul from './assets/gul.png'
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGetx,
  SiRedux,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSwagger,   // ← FINAL WORKING API ICON
} from "react-icons/si";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [hoveredSkill, setHoveredSkill] = useState(null);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //
  const skills = [
    "Flutter", "Dart", "Firebase", "GetX", "State Management",
    "REST API Integration", "Version Control", "UI/UX Design",
    "HTML & CSS", "JavaScript", "React.js"
  ];

  const icons = [
    { icon: <SiFlutter className="text-[#0f91fc]" />, },
    { icon: <SiDart className="text-[#0087e0]" />, },
    { icon: <SiFirebase className="text-[#fd3b00]" />, },
    { icon: <SiGetx className="text-[#6C63FF]" />, },
    { icon: <SiRedux className="text-[#764ABC]" />, },
    { icon: <SiSwagger className="text-[#85EA2D]" />, },
    { icon: <SiGit className="text-[#F05033]" />, },
    { icon: <SiFigma className="text-[#8e00cf]" />, },
    { icon: <SiHtml5 className="text-[#ff6600]" />, },

    { icon: <SiJavascript className="text-[#F7DF1E]" />, },
    { icon: <SiReact className="text-[#61DAFB]" />, },
  ];



  // Detailed information for each skill
  const skillDetails = {
    "Flutter": {
      level: 85,
      experience: "1+ years",
      projects: "9+ projects",
      description: "Building high-performance cross-platform mobile applications"
    },
    "Dart": {
      level: 90,
      experience: "1+ years",
      // projects: "7+ projects",
      description: "Writing clean, efficient, and scalable Dart code for Flutter apps"
    },
    "Firebase": {
      level: 90,
      experience: "1+ years",
      projects: "5+ integrations",
      description: "Integrating Authentication, Firestore, Realtime DB, Storage, and Cloud Messaging"
    },
    "GetX": {
      level: 95,
      experience: "1+ years",
      projects: "7+ projects",
      description: "State management, routing, and dependency injection with GetX"
    },
    "State Management": {
      level: 92,

      // projects: "20+ implementations",
      description: "Managing complex app states using GetX, Provider, and reactive patterns"
    },

    "REST API Integration": {
      level: 90,

      projects: "30+ APIs",
      description: "Designing and consuming RESTful web services"
    },

    "Version Control": {
      level: 85,

      projects: "30+ commits per project",
      description: "Using Git and GitHub for collaboration and code management"
    },

    "UI/UX Design": {
      level: 96,
      experience: "1+ years",
      // projects: "25+ UIs",
      description: "Designing clean, modern, and user-friendly mobile interfaces"
    },

    "HTML & CSS": {
      level: 80,
      experience: "6+ months",
      projects: "8+ web layouts",
      description: "Building responsive webpage structures and styling"
    },

    "JavaScript": {
      level: 65,

      // projects: "8+ JS integrations",
      description: "Adding interactivity and functionality to web applications"
    },

    "React.js": {
      level: 60,
      experience: "6+ months",
      projects: "2+ projects",
      description: "Building interactive and responsive web interfaces with React"
    }
  };



  const projects = [
    {
      title: "Med AI - Chatbot",
      description: "Developed a high-performance, real-time AI-powered chatbot integrated with WebSocket technology for seamless and rapid communication. Implemented advanced PDF upload and document-analysis capabilities, enabling the chatbot to generate intelligent, context-aware responses directly from user-provided files. Enhanced overall system accuracy and stability, contributing to a notable 40% increase in user engagement. Additionally, integrated local chat history storage, giving users convenient access to their previous conversations and improving the overall user experience.",
      gradient: "from-purple-400 to-pink-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },
    {
      title: "Platewise - Meal Planning App",
      description: "Built a complete weekly meal planning system that delivers personalized meal suggestions based on user preferences. Developed and integrated a recipe discovery module, enabling users to explore and prepare a wide variety of new dishes. Enhanced overall UI/UX with an intuitive daily menu builder, making meal organization simple and efficient. Implemented fully customizable meal plans, helping users manage dietary goals and maintain consistent nutrition.",
      gradient: "from-green-400 to-blue-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },
    {
      title: "TerraScript - Name Art Generation Website Using Flutter",
      description: "Created an innovative mobile application that transforms real-world landmarks into personalized geographic typography designs. Leveraged the Google Maps API to intelligently map alphabetic characters to precise global locations, forming visually stunning letter shapes from actual geography. Designed and implemented a fully interactive custom art creation feature, allowing users to generate unique map-based artworks with customizable styles and layouts. Enhanced the user experience with smooth zoom, pan, and landmark positioning controls, ensuring precise placement and creative flexibility.",
      gradient: "from-yellow-400 to-orange-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },
    {
      title: "Zenith - Gemini Clone",
      description: "Developed a robust AI-powered chat application in Flutter using the Google Gemini API to generate real-time, human-like responses. Implemented secure Firebase Authentication with proper token handling to ensure protected and seamless user access, while integrating Firestore Realtime Database to save, sync, and manage chat history efficiently. Designed a sleek and modern chat UI featuring dark mode, typing indicators, and smooth animations, creating an intuitive and engaging user experience.",
      gradient: "from-indigo-400 to-purple-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },
    {
      title: "No Scroll - Kill Reels App",
      description: "-------------------",
      gradient: "from-red-400 to-pink-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },

    {
      title: "Weather",
      description: "This Flutter-based weather application delivers real-time weather updates through a visually immersive and interactive experience. Powered by the OpenWeather API, it provides precise temperature insights, extended forecasts, humidity details, and wind analytics within a clean and modern interface. The UI adapts dynamically to changing weather conditions and features smooth Lottie animations that visually represent different environments. To ensure fast performance and uninterrupted usability, the app uses Hive for efficient local storage, enabling instant access to the latest weather data even when offline. This project highlights strong expertise in Flutter development, API integration, animation, and creating polished, production-ready mobile interfaces.",
      gradient: "from-green-400 to-pink-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    },
    {
      title: "Hired - Job Search & Networking App (in production)",
      description: "Hired is a full-featured job search and professional networking app built using Flutter. The app connects job seekers with employers and enables real-time communication, location-based job discovery, and secure user authentication. It delivers a smooth and modern experience with real-time chat, push notifications, and voice/video calling.",
      keyFeatures: `
• Firebase Authentication: Secure sign-in using Email/Password and Google Login.
• Realtime Job Data: Uses Realtime Database and Firestore for managing jobs, applications, user profiles, bookmarks, and connections.
• Push Notifications: Integrated Firebase Cloud Messaging (FCM) for job alerts, chat notifications, and follow updates.
• Real-Time Chat System: Users can chat instantly using Firestore with real-time reactive streams.
• Voice & Video Calls: Implemented using Agora for seamless audio/video calling between users.
• Follow System: Users can follow each other with 'Followed' and 'Pending Request' states using Firestore and Hive sync.
• Location Detection: Automatic user location selection using Geolocator for location-based job recommendations.
• Local Data Storage: Used Hive for caching user preferences, chat previews, and app data for faster loading.
• Modern Flutter UI: Smooth animations, clean layout, GetX state management, and optimized performance across devices.
• Technologies Used: Flutter, Dart, Firebase Auth, Firebase Cloud Messaging, Firestore, Realtime Database, Hive, GetX, Geolocator, Agora SDK.
`,


      gradient: "from-green-400 to-pink-400",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      ]
    }
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    projects.map(() => 0)
  );


  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 min-h-screen">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Navbar */}
      <nav className={`
  fixed top-0 left-0 right-0 z-50 
  flex justify-between items-center 
  transition-all duration-300
  
  /* Default = Mobile */
  px-3 py-6 text-sm space-x-1.5 h-18

  /* Tablet & above */
  sm:px-6 sm:py-4 sm:text-base

  /* Desktop */
  md:px-6 md:py-4 

  ${scrolled
          ? 'bg-white/60 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
        }
`}
      >
        <h1 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl text-lg">
          Flutter Developer
        </h1>
        <div className="flex space-x-6 font-semibold">
          {['about', 'skills', 'projects', 'contact'].map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:text-blue-600 transition-colors capitalize relative ${activeSection === item ? 'text-blue-600' : ''
                }`}
            >
              {item}
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"></span>
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-32 pt-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="md:w-1/2 z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Gul Mohammad</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              A passionate <span className="font-semibold text-blue-600">Flutter Developer</span> building beautiful UIs, animations, and scalable apps using
              <strong className="text-purple-600"> Flutter + GetX + Firebase</strong>.
            </p>

            <div className="flex space-x-4 mt-8">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center">
                  See My Work
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0">
          <div className="relative">

            {/* Outer Glow Circle */}
            <div className="absolute rounded-full opacity-30 animate-pulse"></div>

            {/* Main Circle */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">

              {/* Glass effect */}
              <div className="absolute inset-0 bg-white/10 z-10"></div>

              {/* Your Image */}
              <img
                src={gul} // <-- import at top: import yourImage from "../assets/myphoto.jpg";
                alt="Gul"
                className="w-full h-full object-cover rounded-full z-0"
              />

              {/* Top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20"></div>

            </div>

            {/* Floating Icons */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-xl">
              <span className="text-2xl">🚀</span>
            </div>

          </div>

        </div>


      </section>

      <div className="text-center bg-white py-10">
        <a
          href="https://drive.google.com/file/d/1wRYPLcyNxVtbxb5TWPVN3AOA-JP64Gh6/view?usp=drive_link"
          className="
      px-6 py-3 
      rounded-full 
      font-semibold 
      text-white 
      bg-gradient-to-r from-blue-500 to-purple-500
      shadow-sm shadow-purple-300/40
      hover:scale-105 hover:shadow-xl 
      flex items-center gap-2 mx-auto
      transition-all duration-300
      inline-flex
    "
        >
          Resume
          <span className="text-xl">➜</span>
        </a>
      </div>



      {/* About Section */}
      <section id="about" className="px-8 py-15 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate Flutter and Frontend Developer with hands-on experience in building cross-platform mobile apps and responsive web interfaces. I completed a 3-month internship focused on Flutter, Dart, and UI/UX principles, and I also work extensively with React, HTML, CSS, and JavaScript.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I love creating high-performance applications that combine intuitive user experiences with clean, maintainable code. I'm always exploring modern tools, frameworks, and best practices to improve development efficiency and overall app performance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I'm motivated to contribute to innovative projects and continuously grow as a versatile mobile and web developer.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
                TECHNICAL EXPERTISE
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Tools and technologies I use to bring ideas to life with expertise and precision
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => {
              const details = skillDetails[skill] || { level: 75, experience: "1+ year", projects: "Multiple projects", description: "Professional experience" };
              const isHovered = hoveredSkill === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent relative"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

                  <div className="p-6 relative z-10">
                    {/* Icon and Level Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-col items-start gap-2">
                        <span className="text-blue-600 text-4xl">
                          {icons[index].icon}
                        </span>
                        <p className="text-sm font-semibold text-gray-700">
                          {icons[index].label}
                        </p>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                          {details.level}%
                        </div>
                      </div>
                    </div>



                    {/* Skill Name */}
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all mb-3">
                      {skill}
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isHovered ? `${details.level}%` : '0%' }}
                      ></div>
                    </div>

                    {/* Experience and Projects */}
                    <div className="flex items-center justify-between mb-3 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{details.experience}</span>
                      </div>
                      <div className="text-gray-500 text-xs">{details.projects}</div>
                    </div>

                    {/* Description - shows on hover */}
                    <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                        {details.description}
                      </p>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full"></div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Technologies', value: `${skills.length}+`, icon: <Code className="w-6 h-6" /> },
              { label: 'Projects Completed', value: '10+', icon: <Award className="w-6 h-6" /> },
              { label: 'Years Experience', value: '1+', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Avg. Proficiency', value: '85%', icon: <Zap className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          {/* <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">Interested in working together?</p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-15 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>

        <h2 className="p-2 text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* State for storing image index for each project */}
        {/*
      Add this at top of component:
      const [currentIndexes, setCurrentIndexes] = useState(
        projects.map(() => 0)
      );
  */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Slider */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.images[currentIndexes[index]]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndexes((prev) => {
                      const clone = [...prev];
                      clone[index] =
                        clone[index] === 0
                          ? project.images.length - 1
                          : clone[index] - 1;
                      return clone;
                    });
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                >
                  ❮
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndexes((prev) => {
                      const clone = [...prev];
                      clone[index] =
                        clone[index] === project.images.length - 1
                          ? 0
                          : clone[index] + 1;
                      return clone;
                    });
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                >
                  ❯
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <h1 className="text-xl mt-4 font-bold text-gray-700">Key Features</h1>

                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.keyFeatures}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="px-8 py-15 bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold text-gray-800">Bachelor of Science (BSC) in Computer</h3>
            <p className="text-blue-600 font-semibold mt-2">Mahatma Jyotiba Phule Rohilkhand University — 2021 - 2024</p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Completed undergraduate studies specializing in software development, programming fundamentals,
              data structures, and mobile app development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-purple-500">
            <h3 className="text-3xl font-bold text-gray-800">Flutter Development Internship</h3>
            <h4 className="text-xl font-semibold text-purple-600 mt-1">Certified Flutter Intern - 2024</h4>
            <p className="text-blue-600 font-semibold mt-2">Pinsout Innovation Pvt.Ltd — 3 Months</p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Gained hands-on experience in Flutter, Dart, Firebase, and UI/UX implementation.
              Worked on real-world production-level applications and improved coding best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative px-8 py-12 bg-gray-700 text-white overflow-hidden"
      >
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm -z-10"></div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center drop-shadow-lg tracking-wide">
          Contact Me
        </h2>

        {/* Content Wrapper */}
        <div className="max-w-2xl mx-auto mt-14 text-center">
          <p className="text-2xl opacity-90 leading-relaxed">
            Want to collaborate or hire me? I’d love to connect!
          </p>

          {/* Contact Details */}
          <div className="mt-12 space-y-5 text-lg">
            <p className="flex justify-center items-center gap-3 text-xl">
              <span className="text-3xl">📞</span>
              <span className="font-semibold tracking-wide">+91 9997807424</span>
            </p>

            <p className="flex justify-center items-center gap-3 text-xl">
              <span className="text-3xl">📍</span>
              <span className="font-semibold tracking-wide">Delhi, India</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-10 mt-14">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white/20 p-5 rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-xl hover:-translate-y-2"
            >
              <FaGithub size={42} />
            </a>

            <a
              href="https://www.linkedin.com/in/gul-mohammad-093207396 "
              target="_blank"
              rel="noreferrer"
              className="bg-white/20 p-5 rounded-2xl hover:bg-white/30 transition-all duration-300 shadow-xl hover:-translate-y-2"
            >
              <FaLinkedin size={42} />
            </a>
          </div>

          {/* Email Button */}
          <a
            href="mailto:gulansariii00@gmail.com"
            className="mt-14 inline-block bg-white text-blue-700 px-12 py-5 rounded-full shadow-xl hover:shadow-[0_12px_12px_gray-100] font-bold text-lg tracking-wide transform hover:-translate-y-1 transition-all duration-300"
          >
            Email Me
          </a>

          <div className="pt-6 text-xl opacity-90 font-medium tracking-wide">
            gulansariii00@gmail.com
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-white">
        <p className="text-lg">© {new Date().getFullYear()} Gul Mohammad — Flutter Developer Portfolio | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;