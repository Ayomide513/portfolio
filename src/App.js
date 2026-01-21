import React, { useState, useEffect, useRef } from 'react';
import { Brain, Github, Linkedin, Mail, ExternalLink, Code, Database, Cpu, Zap, MessageSquare, Sparkles, Network, Bot, Award, TrendingUp, Users, BookOpen, ChevronDown, Menu, X } from 'lucide-react';

export default function AIMLPortfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
     window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Edulytics Case Study",
      category: "Unsupervised Learning",
      description: "Clustered 15,000 high school students into 7 distinct personas based on social media interests and demographics using advanced ML algorithms.",
      tech: ["KMeans", "DBSCAN", "Agglomerative", "PCA", "Python"],
      metrics: "7 student personas identified using Silhouette Score & Elbow Method",
      impact: "Enabled targeted educational content delivery to 15K+ students",
      github: "https://github.com/Ayomide513/Edulytics-case-study",
      icon: Database,
      color: "cyan"
    },
    {
      id: 2,
      title: "Healthcare Customer Service Chatbot",
      category: "AI & Healthcare",
      description: "An intelligent conversational AI chatbot that streamlines customer service operations at healthcare centers by automating order processing, appointment scheduling, and patient inquiries with 24/7 availability.",
      tech: ["Streamlit", "Gemini API", "Python", "NLP"],
      metrics: "24/7 automated customer support with natural language processing",
      impact: "Reduced response time by 70% and improved patient satisfaction",
      github: "https://github.com/Ayomide513/Chatbot",
      icon: MessageSquare,
      color: "blue"
    },
    {
      id: 3,
      title: "Email Classifier API",
      category: "NLP & API Development",
      description: "Production-ready RESTful API for email classification leveraging transformer models for spam/ham detection with real-time inference.",
      tech: ["FastAPI", "Transformers", "BERT", "Pydantic", "Uvicorn"],
      metrics: "Production-ready API with 95%+ accuracy and confidence scores",
      impact: "Processing 1000+ emails per minute with sub-second latency",
      github: "https://github.com/Ayomide513/email_classifier_api",
      icon: Code,
      color: "emerald"
    },
    {
      id: 4,
      title: "Heart Disease Prediction",
      category: "Healthcare ML",
      description: "Clinical decision support system using ML to predict heart disease risk, optimized for high recall to minimize false negatives in critical diagnosis.",
      tech: ["Logistic Regression", "Scikit-learn", "RobustScaler", "Python"],
      metrics: "82% accuracy, 90% recall, 86.1% cross-validation average",
      impact: "Supporting early detection and preventive healthcare decisions",
      github: "https://github.com/Ayomide513/HeartDisease",
      icon: Cpu,
      color: "rose"
    },
    {
      id: 5,
      title: "Smartphone Price Prediction",
      category: "Supervised Learning",
      description: "Ensemble learning pipeline for price category prediction using technical specifications to optimize product positioning and pricing strategies.",
      tech: ["Random Forest", "Logistic Regression", "SVM", "Scikit-learn"],
      metrics: "Random Forest achieved highest F1-score with interpretable features",
      impact: "Helping manufacturers optimize pricing for competitive markets",
      github: "https://github.com/Ayomide513/-Smartphone-Price-Prediction-Supervised-Learning-",
      icon: Sparkles,
      color: "teal"
    },
    {
      id: 6,
      title: "College Placement Prediction API",
      category: "Machine Learning & API Development",
      description: "The application leverages a trained model to assess student profiles and forecast placement chances.",
      tech: ["FastAPI", "scikit-learn", "Pydantic", "Uvicorn"],
      metrics: "Real-time predictions with confidence scores and explanations",
      impact: "Guiding students with data-driven career planning insights",
      github: "https://github.com/Ayomide513/college_placement",
      icon: Users,
      color: "violet"
    },
    {
      id: 7,
      title: "Hotel Booking Analysis",
      category: "Data Analytics & Visualization",
      description: "Comprehensive data analytics pipeline for hotel operations, providing actionable insights for revenue optimization and demand forecasting.",
      tech: ["Pandas", "Plotly", "Seaborn", "Matplotlib", "Python"],
      metrics: "Insights on ADR optimization, seasonal trends, and cancellation factors",
      impact: "Helping hotels increase revenue by 15% through data insights",
      github: "https://github.com/Ayomide513/SGH-DATABASE",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  const expertise = [
    { 
      title: "Prompt Engineering", 
      desc: "Crafting precision prompts for LLMs and AI systems to maximize accuracy and relevance", 
      icon: Sparkles,
      gradient: "from-yellow-500 to-amber-500"
    },
    { 
      title: "Fine-tuning Models", 
      desc: "Domain-specific adaptation of LLMs and ML models for specialized tasks", 
      icon: Cpu,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      title: "RAG Systems & NLP", 
      desc: "Building retrieval-augmented generation pipelines for enhanced AI responses", 
      icon: Network,
      gradient: "from-purple-500 to-indigo-500"
    },
    { 
      title: "ML Deployment", 
      desc: "Production-ready scalable ML systems with monitoring and optimization", 
      icon: Zap,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const skills = [
    { 
      category: "Data Science", 
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
      icon: Brain,
      color: "cyan"
    },
    { 
      category: "Machine Learning", 
      items: ["Scikit-learn", "XGBoost", "PyTorch", "TensorFlow"],
      icon: Sparkles,
      color: "blue"
    },
    { 
      category: "NLP & LLMs", 
      items: ["BERT", "GPT", "LangChain", "Transformers", "Hugging Face"],
      icon: Bot,
      color: "indigo"
    },
    { 
      category: "Engineering", 
      items: ["Python", "FastAPI", "REST APIs", "Docker", "AWS"],
      icon: Code,
      color: "emerald"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500', glow: 'shadow-cyan-500/50' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'shadow-blue-500/50' },
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500', glow: 'shadow-emerald-500/50' },
      rose: { bg: 'bg-rose-500', text: 'text-rose-400', border: 'border-rose-500', glow: 'shadow-rose-500/50' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500', glow: 'shadow-teal-500/50' },
      violet: { bg: 'bg-violet-500', text: 'text-violet-400', border: 'border-violet-500', glow: 'shadow-violet-500/50' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500', glow: 'shadow-orange-500/50' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-400', border: 'border-indigo-500', glow: 'shadow-indigo-500/50' }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-cyan-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.4), transparent 40%)`
          }}
        />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: ['#3b82f6', '#06b6d4', '#6366f1', '#0ea5e9'][Math.floor(Math.random() * 4)],
                animation: `float ${15 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Desktop Navigation */}
        <nav className={`hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl shadow-blue-500/20">
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('expertise')} className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Expertise</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('content')} className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Content</button>
              <a href="mailto:saheedolamilekanayorinde@gmail.com" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <Brain className="w-8 h-8 text-cyan-400" />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="px-6 pb-6 space-y-4 animate-fadeIn">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-300 hover:text-blue-400 py-2">Home</button>
              <button onClick={() => scrollToSection('expertise')} className="block w-full text-left text-slate-300 hover:text-blue-400 py-2">Expertise</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-300 hover:text-blue-400 py-2">Projects</button>
              <button onClick={() => scrollToSection('content')} className="block w-full text-left text-slate-300 hover:text-blue-400 py-2">Content</button>
              <a href="mailto:ayorindeolamilekan2003@gmail.com" className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold">
                Contact
              </a>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 relative inline-block animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-8 rounded-3xl shadow-2xl shadow-blue-500/50">
                <Brain className="w-20 h-20 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight animate-slideUp">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl">
                Ayorinde Saheed
              </span>
            </h1>

            <div className="space-y-4 mb-12 animate-slideUp animation-delay-200">
              <p className="text-2xl md:text-3xl font-light text-slate-200">
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">LLM Engineer</span>
                <span className="mx-3 text-slate-600">•</span>
                <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">AI Specialist</span>
              </p>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Building intelligent systems with Data Science, Machine Learning & AI. Specialized in LLMs, NLP, and production ML deployment.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-xl mb-12 shadow-lg shadow-green-500/20 animate-slideUp animation-delay-400">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-400 text-sm font-bold tracking-wider">OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slideUp animation-delay-600">
              <a 
                href="mailto:saheedolamilekanayorinde@gmail.com" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </div>
              </a>
              
              <a 
                href="https://github.com/Ayomide513" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-black/50 border-2 border-white/10 rounded-2xl font-bold hover:border-blue-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-xl hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/saheedayorinde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-black/50 border-2 border-white/10 rounded-2xl font-bold hover:border-blue-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-xl hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-slideUp animation-delay-800">
              <a 
                href="https://medium.com/@ayorindeolamilekan2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-black/50 border border-white/10 rounded-xl font-semibold hover:border-green-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-xl hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Medium</span>
                </div>
              </a>
              
              <a 
                href="https://www.credly.com/users/saheed-ayorinde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-black/50 border border-white/10 rounded-xl font-semibold hover:border-orange-500/50 hover:bg-black/70 transition-all duration-300 backdrop-blur-xl hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-sm">Credly</span>
                </div>
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('expertise')}
              className="mt-16 animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-blue-400" />
            </button>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Core Expertise
              </h2>
              <p className="text-xl text-slate-300">Advanced capabilities in AI & ML engineering</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {expertise.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`group relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ${visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                const colors = getColorClasses(skill.color);
                return (
                  <div
                    key={skill.category}
                    className={`bg-black/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${(idx + 4) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                      <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 group/item">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></div>
                          <span className="text-slate-400 text-sm group-hover/item:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-slate-300">Production ML solutions with real-world impact</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, idx) => {
                const Icon = project.icon;
                const colors = getColorClasses(project.color);
                const isActive = activeProject === project.id;
                
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(isActive ? null : project.id)}
                    className={`group relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${colors.bg} rounded-2xl shadow-xl ${colors.glow}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                          <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 hover:bg-white/10 rounded-xl transition-all group/link"
                      >
                        <ExternalLink className={`w-5 h-5 ${colors.text} group-hover/link:scale-110 transition-transform`} />
                      </a>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {isActive && (
                      <div className="space-y-4 pt-6 border-t border-white/10 animate-fadeIn">
                        <div className={`flex items-start gap-3 p-4 bg-gradient-to-r ${colors.bg}/10 border ${colors.border}/30 rounded-2xl`}>
                          <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-yellow-400 font-bold text-sm mb-1">Key Metrics</p>
                            <p className="text-slate-300 text-sm">{project.metrics}</p>
                          </div>
                        </div>
                        <div className={`flex items-start gap-3 p-4 bg-gradient-to-r ${colors.bg}/10 border ${colors.border}/30 rounded-2xl`}>
                          <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-400 font-bold text-sm mb-1">Real-World Impact</p>
                            <p className="text-slate-300 text-sm">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content & Certifications */}
        <section id="content" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Content & Certifications
              </h2>
              <p className="text-xl text-slate-300">Sharing knowledge and continuous learning</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <a
                href="https://medium.com/@ayorindeolamilekan2003"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 ${visibleSections.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="inline-flex p-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-xl">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    Medium Articles
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Deep dives into AI, machine learning, and data science. Sharing insights, tutorials, and research breakdowns.
                  </p>
                  
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <span>Read Articles</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>

              <a
                href="https://www.credly.com/users/saheed-ayorinde"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 ${visibleSections.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-rose-500/0 group-hover:from-orange-500/10 group-hover:to-rose-500/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="inline-flex p-5 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl mb-6 shadow-xl">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    Credly Badges
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Professional certifications in AI, ML, LLMs, and data science from leading tech companies and platforms.
                  </p>
                  
                  <div className="flex items-center gap-2 text-orange-400 font-semibold">
                    <span>View Certifications</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-teal-500/5"></div>
              
              <div className="relative">
                <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Impact Metrics
                </h2>
                
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      7+
                    </div>
                    <div className="text-slate-400 font-medium text-sm md:text-base">ML Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      90%
                    </div>
                    <div className="text-slate-400 font-medium text-sm md:text-base">Model Recall</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      15K+
                    </div>
                    <div className="text-slate-400 font-medium text-sm md:text-base">Data Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-slate-500 text-sm font-mono text-center md:text-left">
                © 2025 Ayorinde Saheed • Built with React & Tailwind CSS
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Ayomide513" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/saheedayorinde" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@ayorindeolamilekan2003" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </a>
                <a href="https://www.credly.com/users/saheed-ayorinde" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <Award className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, -10px); }
          66% { transform: translate(-10px, 10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}