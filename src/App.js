import React, { useState, useEffect } from 'react';
import { Brain, Github, Linkedin, Mail, ExternalLink, Code, Database, Cpu, Zap, MessageSquare, Sparkles, Network, Bot } from 'lucide-react';

export default function AIMLPortfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "Building the Future with Large Language Models";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
    }
  }, [typedText]);

  const projects = [
    {
      id: 1,
      title: "Edulytics Case Study",
      category: "Unsupervised Learning",
      description: "Clustered 15,000 high school students into 7 distinct personas based on social media interests and demographics using advanced ML algorithms.",
      tech: ["KMeans", "DBSCAN", "Agglomerative", "PCA", "Python"],
      metrics: "7 student personas identified using Silhouette Score & Elbow Method",
      github: "https://github.com/Ayomide513/Edulytics-case-study",
      icon: Database,
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
     {
      id: 2,
      title: "Healthcare Customer Service Chatbot",
      category: "AI & Healthcare",
      description: "An intelligent conversational AI chatbot that streamlines customer service operations at healthcare centers by automating order processing, appointment scheduling, and patient inquiries with 24/7 availability.",
      tech: ["Streamlit", "Gemini API", "Python", "NLP"],
      metrics: "24/7 automated customer support with natural language processing and real-time order management",
      github: "https://github.com/Ayomide513/Chatbot",
      icon: MessageSquare,
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      id: 3,
      title: "Email Classifier API",
      category: "NLP & API Development",
      description: "Production-ready RESTful API for email classification leveraging transformer models for spam/ham detection with real-time inference.",
      tech: ["FastAPI", "Transformers", "BERT", "Pydantic", "Uvicorn"],
      metrics: "Production-ready API with confidence scores and error handling",
      github: "https://github.com/Ayomide513/email_classifier_api",
      icon: MessageSquare,
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      id: 4,
      title: "Heart Disease Prediction",
      category: "Healthcare ML",
      description: "Clinical decision support system using ML to predict heart disease risk, optimized for high recall to minimize false negatives in critical diagnosis.",
      tech: ["Logistic Regression", "Scikit-learn", "RobustScaler", "Python"],
      metrics: "82% accuracy, 90% recall, 86.1% cross-validation average",
      github: "https://github.com/Ayomide513/HeartDisease",
      icon: Cpu,
      gradient: "from-red-500 via-orange-500 to-amber-500"
    },
    {
      id: 5,
      title: "Smartphone Price Prediction",
      category: "Supervised Learning",
      description: "Ensemble learning pipeline for price category prediction using technical specifications to optimize product positioning and pricing strategies.",
      tech: ["Random Forest", "Logistic Regression", "SVM", "Scikit-learn"],
      metrics: "Random Forest achieved highest F1-score with interpretable feature importance",
      github: "https://github.com/Ayomide513/-Smartphone-Price-Prediction-Supervised-Learning-",
      icon: Sparkles,
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
     {
      id: 6,
      title: "College Placement Prediction API",
      category: "Machine Learning & API Development",
      description: "The application leverages a trained model to assess student profiles and forecast placement chances.",
      tech: ["FastAPI, scikit-learn, Pydantic, Uvicorn"],
      metrics: "Real-time predictions with confidence scores",
      github: "https://github.com/Ayomide513/college_placement",
      icon: MessageSquare,
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      id: 7,
      title: "Hotel Booking Analysis",
      category: "Data Analytics & Visualization",
      description: "Comprehensive data analytics pipeline for hotel operations, providing actionable insights for revenue optimization and demand forecasting.",
      tech: ["Pandas", "Plotly", "Seaborn", "Matplotlib", "Python"],
      metrics: "Insights on ADR optimization, seasonal trends, and cancellation factors",
      github: "https://github.com/Ayomide513/SGH-DATABASE",
      icon: Database,
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    }
  ];

  const llmSkills = [
    { name: "LLM Frameworks", items: ["Transformers", "LangChain", "LlamaIndex", "Hugging Face"], icon: Bot },
    { name: "NLP & Text", items: ["BERT", "GPT", "Text Classification", "Named Entity Recognition"], icon: MessageSquare },
    { name: "ML Foundations", items: ["Scikit-learn", "Random Forest", "SVM", "Deep Learning"], icon: Brain },
    { name: "Data & Engineering", items: ["FastAPI", "Python", "REST APIs", "Vector DBs"], icon: Code },
  ];

  const expertise = [
    { title: "Prompt Engineering", desc: "Crafting optimal prompts for LLM applications", icon: Sparkles },
    { title: "Fine-tuning", desc: "Adapting LLMs for domain-specific tasks", icon: Cpu },
    { title: "RAG Systems", desc: "Building retrieval-augmented generation pipelines", icon: Network },
    { title: "Model Deployment", desc: "Production ML/LLM systems at scale", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Neural Network Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.2), transparent 40%)`,
            transition: 'background 0.3s ease'
          }}
        ></div>
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full blur-sm animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            {/* Animated Brain Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Brain className="w-20 h-20 text-transparent stroke-cyan-400 animate-pulse" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-50 animate-pulse"></div>
              </div>
            </div>

            {/* Main Title with Gradient Animation */}
            <h1 className="text-7xl md:text-8xl font-black text-center mb-6 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-lg opacity-50">
                Ayorinde Saheed
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Ayorinde Saheed
              </span>
            </h1>

            {/* Typing Effect Subtitle */}
            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
                <span className="text-cyan-400 font-bold">LLM Engineer</span> & 
                <span className="text-purple-400 font-bold"> AI Specialist</span>
              </p>
              <div className="h-12 flex items-center justify-center">
                <p className="text-lg text-gray-400 font-mono">
                  {typedText}<span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-full backdrop-blur-xl">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-400 text-sm font-semibold tracking-wide">OPEN TO LLM OPPORTUNITIES</span>
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Specializing in <span className="text-cyan-400 font-semibold">Large Language Models</span>, 
                <span className="text-purple-400 font-semibold"> Natural Language Processing</span>, and 
                <span className="text-pink-400 font-semibold"> AI Engineering</span>
              </p>
              <p className="text-gray-400">
                Building intelligent systems that understand, generate, and reason with human language. 
                Expert in fine-tuning LLMs, RAG systems, and production ML deployment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:saheedolamilekanayorinde@gmail.com" className="group relative px-8 py-4 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-2 font-bold">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </div>
              </a>
              
              <a href="https://github.com/Ayomide513" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 border-2 border-cyan-400/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition-all backdrop-blur-xl flex items-center gap-2 font-semibold">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              
              <a href="https://www.linkedin.com/in/saheedayorinde" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 border-2 border-purple-400/50 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transition-all backdrop-blur-xl flex items-center gap-2 font-semibold">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* LLM Expertise Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LLM Expertise
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Core competencies in Large Language Model development and deployment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
                  <div className="relative">
                    <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {llmSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map(item => (
                      <div key={item} className="flex items-center gap-2 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                        <span className="text-gray-300 text-sm group-hover/item:text-cyan-400 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">End-to-end ML solutions from data to deployment</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer hover:scale-[1.02]"
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-br ${project.gradient} bg-opacity-20 rounded-2xl backdrop-blur-xl`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-sm font-mono text-purple-400">{project.category}</p>
                        </div>
                      </div>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
                      >
                        <ExternalLink className="w-6 h-6 text-cyan-400" />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span key={tech} className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-sm font-medium border border-white/20`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {activeProject === project.id && (
                      <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-start gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-cyan-500/20">
                          <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-yellow-400 font-semibold text-sm mb-1">Impact & Results</p>
                            <p className="text-gray-300 text-sm">{project.metrics}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Continuous learning in AI, ML, and LLM technologies</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Generative AI & LLMs", subtitle: "Architecture and Data Preparation", org: "IBM", icon: "🤖", color: "from-blue-500 to-cyan-500" },
              { title: "Transformer Models & BERT", subtitle: "Advanced NLP Architecture", org: "IBM", icon: "🔄", color: "from-purple-500 to-pink-500" },
              { title: "Large Language Models", subtitle: "LLM Fundamentals", org: "Cursa", icon: "🧠", color: "from-cyan-500 to-blue-500" },
              { title: "Introduction to AI", subtitle: "Artificial Intelligence Foundations", org: "IBM", icon: "✨", color: "from-green-500 to-emerald-500" },
              { title: "Data Science Virtual Experience", subtitle: "Real-world Data Projects", org: "Forage", icon: "📊", color: "from-orange-500 to-rose-500" },
              { title: "Data Science", subtitle: "In Progress", org: "App Click Technology", icon: "⏳", color: "from-indigo-500 to-purple-500", inProgress: true }
            ].map((cert, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl p-3 bg-gradient-to-br ${cert.color} bg-opacity-20 rounded-xl backdrop-blur-xl`}>
                      {cert.icon}
                    </div>
                    {cert.inProgress && (
                      <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-xs font-semibold">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{cert.subtitle}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                    <span className="text-xs text-gray-500 font-medium">{cert.org}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Blog & Articles
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Sharing insights on AI, ML, and data science</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <a 
              href="https://medium.com/@ayorindeolamilekan2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-rose-500/0 group-hover:from-orange-500/10 group-hover:to-rose-500/10 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-2xl backdrop-blur-xl flex-shrink-0">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Read My Articles on Medium
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Data science insights, machine learning tutorials, and AI research breakdowns.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 font-semibold">
                    <span>Visit Medium Profile</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Stats & About Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl rounded-3xl p-12 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              <div className="relative">
                <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Impact Metrics
                </h2>
                
                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div className="text-center group cursor-pointer">
                    <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      5+
                    </div>
                    <div className="text-gray-400 font-medium">ML Projects Deployed</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      90%
                    </div>
                    <div className="text-gray-400 font-medium">Healthcare Model Recall</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      15K+
                    </div>
                    <div className="text-gray-400 font-medium">Data Points Analyzed</div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                    AI/ML Engineer specializing in <span className="text-cyan-400 font-semibold">Large Language Models</span> and 
                    <span className="text-purple-400 font-semibold"> NLP applications</span>. Expert in fine-tuning transformers, 
                    building RAG systems, and deploying production ML pipelines.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Passionate about leveraging LLMs to solve real-world problems in healthcare, business analytics, and 
                    intelligent automation. Currently exploring advanced prompt engineering, retrieval-augmented generation, 
                    and efficient model deployment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-500 font-mono text-sm">
              © 2025 Ayorinde Saheed Olamilekan • Engineered with React & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}