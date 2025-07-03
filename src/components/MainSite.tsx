import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Code, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  FileText, 
  Zap,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Briefcase,
  Coffee,
  Home,
  User,
  Settings,
  Contact,
  Linkedin,
  Award,
  Calendar,
  Building,
  Send,
  Loader2,
  Instagram,
  ArrowUp,
  Github,
  Twitter,
  Youtube,
  Flower,
} from 'lucide-react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { AnimeNavBar } from '@/components/ui/anime-navbar';
import { ChromeGrid } from '@/components/ui/chrome-grid';
import { motion, useInView } from 'framer-motion';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Toast, ToastType } from '@/components/ui/toast';
import sitekartLogo from '../assets/sitekart-logo.png';
import { AnimatedDock } from "./ui/animated-dock";

export function MainSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastState, setToastState] = useState<{ message: string; type: ToastType } | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbkdorn";

  // Navigation items for the anime navbar
  const navItems = [
    {
      name: "Home",
      url: "#home",
      icon: Home,
    },
    {
      name: "About",
      url: "#about",
      icon: User,
    },
    {
      name: "Services",
      url: "#services",
      icon: Settings,
    },
    {
      name: "Profile",
      url: "#profile",
      icon: Linkedin,
    },
    {
      name: "Contact",
      url: "#contact",
      icon: Contact,
    },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'profile', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Capitalize first letter to match nav item names
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle navbar item click
  const handleNavItemClick = (itemName: string) => {
    setActiveSection(itemName);
    scrollToSection(itemName);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          requirements: formData.requirements,
        }),
      });
      if (response.ok) {
        setFormSuccess(true);
        setFormData({ name: '', email: '', phone: '', businessType: '', requirements: '' });
        setSubmitMessage('Thank you! We\'ll get back to you soon.');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting form: ' + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced Typewriter effect words for hero section
  const heroWords = [
    {
      text: "Build",
      className: "text-white font-black tracking-tight drop-shadow-lg",
    },
    {
      text: "Bold.",
      className: "text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text font-black tracking-tight drop-shadow-lg animate-pulse",
    },
    {
      text: "Build",
      className: "text-white font-black tracking-tight drop-shadow-lg",
    },
    {
      text: "Smart.",
      className: "text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text font-black tracking-tight drop-shadow-lg",
    },
    {
      text: "Build",
      className: "text-white font-black tracking-tight drop-shadow-lg",
    },
    {
      text: "with",
      className: "text-white font-black tracking-tight drop-shadow-lg",
    },
    {
      text: "SiteKart.",
      className: "text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text font-black tracking-tight drop-shadow-lg animate-pulse",
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Website Design",
      description: "Tailored designs that reflect your brand identity and engage your audience effectively."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimization",
      description: "Responsive designs that look perfect on every device, from smartphones to desktops."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Analytics",
      description: "Boost your online visibility with SEO optimization and comprehensive analytics setup."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Setup",
      description: "Complete online store solutions with secure payment gateways and inventory management."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Booking & Contact Forms",
      description: "Streamlined booking systems and contact forms to capture leads and manage appointments."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Deployment",
      description: "Quick turnaround times without compromising quality. Get your site live in days, not weeks."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Healthy Affordability",
      description: "Transparent, healthy pricing that makes quality web solutions accessible for every business."
    }
  ];

  // Animation variants for sliding effects
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Custom hook for scroll-triggered animations
  const AnimatedSection = ({ children, variants = slideInFromBottom, className = "" }: any) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 1. Section fade-in animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // 4. Show toast on form submit
  // useEffect(() => {
  //   if (!submitMessage) return;
  //   setToastState({
  //     message: submitMessage,
  //     type: isSubmitted ? 'success' : 'error',
  //   });
  // }, [submitMessage, isSubmitted]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Modern Anime Navigation */}
      <AnimeNavBar 
        items={navItems} 
        defaultActive={activeSection}
        onItemClick={handleNavItemClick}
      />

      {/* Hero Section with ChromeGrid Background */}
      <motion.section id="home" className="h-screen w-screen relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <ChromeGrid />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-50" />
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-40" />
          <div className="absolute bottom-20 right-32 w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse opacity-50" />
        </div>

        <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center">
          {/* Enhanced Typewriter Effect for Main Heading */}
          <div className="text-center mb-12 relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full scale-150" />
            
            <TypewriterEffectSmooth 
              words={heroWords} 
              className="justify-center relative z-10"
              cursorClassName="bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-500 shadow-lg shadow-blue-500/50 animate-pulse"
            />
            
            {/* Decorative elements around the text */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border border-blue-400/30 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-8 -right-8 w-12 h-12 border border-cyan-400/30 rounded-full animate-pulse" />
          </div>
          
          <div className="text-center mb-8 relative">
            <p className="text-lg md:text-xl text-white/80 font-medium tracking-wide pointer-events-none max-w-3xl px-4 leading-relaxed">
              Professional website development services tailored for 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold"> restaurants</span>, 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> offices</span>, 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> small businesses</span>, and 
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text font-semibold"> organizations</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8 pointer-events-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-3 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10">Let's Build Your Website</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center space-x-3 backdrop-blur-sm hover:backdrop-blur-none overflow-hidden"
            >
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <span className="relative z-10">View Our Services</span>
              <ExternalLink className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-white/70 mt-8 pointer-events-none">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <span className="font-medium">Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <span className="font-medium">SEO Ready</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section with Sliding Animation */}
      <motion.section id="about" className="py-20 bg-gray-900 relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        {/* Soft Blurred Background Shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/30 rounded-full blur-3xl z-0" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-2xl z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variants={slideInFromLeft} className="space-y-6">
              <div className="space-y-4">
                {/* Gradient Heading with Icon and Accent Underline */}
                <div className="relative inline-block mb-2">
                  <span className="inline-flex items-center gap-2">
                    <Globe className="w-7 h-7 text-blue-400 drop-shadow-md" />
                    <motion.h2 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                    >
                      About SiteKart
                    </motion.h2>
                  </span>
                  {/* Gradient Underline Accent */}
                  <div className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full blur-sm opacity-80" />
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  We're a passionate team of web developers and designers specializing in creating 
                  stunning, functional websites for businesses that matter to communities.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-gray-400 leading-relaxed">
                  Our mission is simple: to help real-world businesses thrive in the digital space. 
                  Whether you're running a cozy restaurant, managing a busy office, or leading a growing organization, 
                  we understand the unique challenges you face and create solutions that work.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  What sets us apart is our focus on understanding your business needs first, then crafting 
                  digital experiences that not only look beautiful but also drive real results. We don't just 
                  build websites – we build digital foundations for your business growth.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6 pt-6"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-900/50 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Coffee className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection variants={slideInFromRight} className="relative">
              <img
                src={sitekartLogo}
                alt="SiteKart Logo"
                className="rounded-2xl shadow-xl border border-gray-700 bg-white object-contain p-8"
                style={{ maxHeight: '320px', maxWidth: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl"></div>
            </AnimatedSection>
          </div>
        </div>
      </motion.section>

      {/* Services Section with Sliding Animation */}
      <motion.section id="services" className="py-20 bg-gray-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="relative inline-block mb-2">
              <span className="inline-flex items-center gap-2">
                <Settings className="w-7 h-7 text-blue-400 drop-shadow-md" />
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                >
                  Our Services
                </motion.h2>
              </span>
              <div className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full blur-sm opacity-80" />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive web development solutions designed to elevate your business 
              and engage your customers effectively.
            </motion.p>
          </AnimatedSection>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07, rotateX: 6, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform group cursor-pointer"
              >
                <div className="text-blue-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Professional LinkedIn Profile Section */}
      <section id="profile" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Professional Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Joel Jimmy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The creative mind behind SiteKart, bringing innovative web solutions to life
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <AnimatedSection variants={slideInFromLeft} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Joel Jimmy</h3>
                    <p className="text-blue-400 font-medium mb-1">Web Developer & AI Integrator | Founder at SiteKart</p>
                    <p className="text-gray-400 text-sm">Founder & Lead Developer at SiteKart</p>
                  </div>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/joel-jimmy-27391a289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-3 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Details */}
            <AnimatedSection variants={slideInFromRight} className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-900/50 border border-blue-500/30 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">About</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Passionate full-stack developer with expertise in modern web technologies. 
                  Specializing in creating scalable, user-friendly applications that solve real-world problems. 
                  Committed to delivering high-quality solutions that exceed client expectations and drive business growth.
                </p>
              </div>

              {/* Skills & Expertise */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-900/50 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Skills & Expertise</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Frontend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript'].map((skill) => (
                        <span key={skill} className="bg-blue-900/30 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Backend & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Git'].map((skill) => (
                        <span key={skill} className="bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-900/50 border border-green-500/30 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience Highlights</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Founder & Lead Developer - SiteKart</h4>
                      <p className="text-gray-400 text-sm mb-2">2023 - Present</p>
                      <p className="text-gray-300 text-sm">Leading a team to deliver custom web solutions for businesses across various industries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Web Developer & AI Integrator | Founder at SiteKart</h4>
                      <p className="text-gray-400 text-sm mb-2">2020 - 2021</p>
                      <p className="text-gray-300 text-sm">Developed and maintained web applications using modern technologies and best practices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-500/30 rounded-xl p-8 text-center">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-7 h-7 text-yellow-300 drop-shadow-lg animate-bounce" />
                  <div className="relative inline-block mb-2">
                    <span className="inline-flex items-center gap-2">
                      <Zap className="w-7 h-7 text-blue-400 drop-shadow-md" />
                      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                        Ready to Get Started?
                      </span>
                    </span>
                    <div className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full blur-sm opacity-80" />
                  </div>
                </div>
                <p className="mb-2 text-blue-100 mb-6">
                  Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/joel-jimmy-27391a289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital presence? Get in touch with us and let's discuss 
              how we can help your business grow online.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Us a Message
              </h3>
              
              {/* Success/Error Messages */}
              {(isSubmitted || submitMessage) && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                  isSubmitted 
                    ? 'bg-green-900/50 border border-green-500/30' 
                    : 'bg-red-900/50 border border-red-500/30'
                }`}>
                  {isSubmitted ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                  <span className={isSubmitted ? 'text-green-300' : 'text-red-300'}>
                    {submitMessage || 'Thank you! We\'ll get back to you soon.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
                    Type of Business *
                  </label>
                  <select
                    id="businessType"
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Select your business type</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="office">Corporate Office</option>
                    <option value="retail">Retail/Small Business</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="nonprofit">Non-Profit Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    id="requirements"
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white placeholder-gray-400"
                    placeholder="Tell us about your project requirements..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-cyan-900/70 border border-blue-500/20 p-8 sm:p-10 flex flex-col gap-6 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(30,41,59,0.85) 0%, rgba(45,108,253,0.5) 100%)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
                {/* Animated Glow */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Mail className="w-7 h-7 text-blue-300 animate-bounce" />
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div className="w-12 h-12 bg-blue-900/60 border border-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">Email</div>
                      <div className="text-gray-300 text-sm">sitekart28@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div className="w-12 h-12 bg-green-900/60 border border-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">Phone</div>
                      <div className="text-gray-300 text-sm">+91 7447665524</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <div className="w-12 h-12 bg-purple-900/60 border border-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">Location</div>
                      <div className="text-gray-300 text-sm">Remote & Local Services</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-500 border border-blue-500/30 p-8 sm:p-10 flex flex-col gap-6 backdrop-blur-md" style={{background: 'linear-gradient(120deg, rgba(34,193,195,0.7) 0%, rgba(45,108,253,0.7) 100%)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
                {/* Animated Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                {/* Heading with Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-7 h-7 text-yellow-300 drop-shadow-lg animate-bounce" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ready to Get Started?</h3>
                </div>
                <p className="mb-2 text-blue-100 text-base sm:text-lg font-medium">
                  Join the growing list of businesses that have transformed their digital presence with <span className="font-bold text-white">SiteKart</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href="https://wa.me/917447665524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-green-400 via-green-500 to-cyan-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <MessageCircle className="w-6 h-6 animate-pulse" />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="px-7 py-3 rounded-xl font-semibold text-lg border border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-blue-700 hover:border-blue-400 shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 w-full bg-black/70 backdrop-blur-xl border-t border-gray-800/40 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 relative">
          {/* Brand & Dock Row */}
          <div className="w-full flex flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-slow">
                <Globe className="w-7 h-7 text-white drop-shadow-lg" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
                SiteKart
              </span>
            </div>
            {/* Spacer to push dock to the far right */}
            <div className="flex-1 hidden md:block" />
            <div className="absolute right-0 top-0 md:static md:ml-auto">
              <AnimatedDock
                className="my-4 md:my-0"
                items={[
                  {
                    link: "https://www.linkedin.com/in/joel-jimmy-27391a289/",
                    target: "_blank",
                    Icon: <Linkedin size={22} />,
                  },
                  {
                    link: "https://wa.me/917447665524",
                    target: "_blank",
                    Icon: <MessageCircle size={22} />,
                  },
                  {
                    link: "https://mail.google.com/mail/?view=cm&to=sitekart28@gmail.com&su=SiteKart%20Inquiry",
                    target: "_blank",
                    Icon: <Mail size={22} />,
                  },
                  {
                    link: "https://www.instagram.com/_joel.46_?igsh=MXEydDVkdTk2b2lubQ%3D%3D&utm_source=qr",
                    target: "_blank",
                    Icon: <Instagram size={22} />,
                  },
                ]}
              />
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</a>
            <a href="#profile" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Profile</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms</a>
          </div>
          {/* Gradient Divider */}
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-purple-500/30 rounded-full my-2" />
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 text-xs text-gray-400">
            <span>© 2025 SiteKart. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>Built with <span className="text-pink-400">❤️</span> for business growth</span>
          </div>
        </div>
      </footer>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top animate-bounce"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Toast Notification */}
      {toastState && (
        <Toast
          message={toastState.message}
          type={toastState.type}
          onClose={() => setToastState(null)}
        />
      )}

      {formSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-xs sm:max-w-sm flex flex-col items-center justify-center">
            <div className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 rounded-full p-4 shadow-lg mb-4 animate-pulse">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div className="text-lg font-bold text-green-700 dark:text-green-400 text-center mb-2">Form submitted successfully!</div>
            <div className="text-sm text-green-600 dark:text-green-300 text-center mb-4">Thank you for reaching out. We will get back to you soon.</div>
            <button
              className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-lime-400 text-white font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => setFormSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}