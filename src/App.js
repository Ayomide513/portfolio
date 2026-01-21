import React, { useState, useEffect } from 'react';
import { Brain, Github, Linkedin, Mail, ExternalLink, Code, Database, Cpu, Zap, MessageSquare, Sparkles, Network, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIMLPortfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "Building the Future with Data Science, Machine Learning, and AI";

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => setTypedText(fullText.slice(0, typedText.length + 1)), 50);
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
      metrics: "24/7 automated customer support with NLP and real-time order management",
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
    }
  ];

  const llmSkills = [
    { name: "Data Science & Analytics", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Wrangling", "EDA"], icon: Brain },
    { name: "Machine Learning", items: ["Scikit-learn", "Random Forest", "SVM", "XGBoost", "Deep Learning", "PyTorch", "TensorFlow"], icon: Sparkles },
    { name: "NLP & LLMs", items: ["BERT", "GPT", "Transformers", "LangChain", "LlamaIndex", "Text Classification", "NER", "Hugging Face"], icon: Bot },
    { name: "Data Engineering & Deployment", items: ["Python", "FastAPI", "REST APIs", "Vector Databases", "Cloud Deployment"], icon: Code }
  ];

  const expertise = [
    { title: "Prompt Engineering", desc: "Designing effective prompts for LLMs and AI-driven applications", icon: Sparkles },
    { title: "Fine-tuning Models", desc: "Adapting LLMs and ML models for domain-specific tasks with high accuracy", icon: Cpu },
    { title: "RAG Systems & NLP", desc: "Building retrieval-augmented generation pipelines and advanced NLP solutions", icon: Network },
    { title: "Machine Learning Deployment", desc: "Deploying scalable ML and LLM systems into production environments", icon: Zap },
    { title: "Data Science & Analytics", desc: "Performing data preprocessing, EDA, and deriving actionable insights from complex datasets", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>
        <div 
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.2), transparent 40%)`, transition: 'background 0.3s ease'}}
        ></div>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full blur-xl opacity-50"
            animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0], scale: [1,1.5,1] }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, backgroundColor: ['#0ff','#f0f','#ff0','#0f0'][i%4] }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex justify-center mb-8">
              <Brain className="w-20 h-20 text-transparent stroke-cyan-400 animate-pulse" strokeWidth={1.5} />
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-lg opacity-50">Ayorinde Saheed</span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">Ayorinde Saheed</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
              <span className="text-cyan-400 font-bold">LLM Engineer</span> & <span className="text-purple-400 font-bold">AI Specialist</span>
            </p>
            <p className="text-lg text-gray-400 font-mono mb-12">{typedText}<span className="animate-pulse">|</span></p>

            <motion.div className="flex justify-center gap-4 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <a href="mailto:saheedolamilekanayorinde@gmail.com" className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform flex items-center gap-2 font-semibold">
                <Mail className="w-5 h-5" /> Get In Touch
              </a>
              <a href="https://github.com/Ayomide513" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 border-2 border-cyan-400/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2 font-semibold">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/saheedayorinde" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 border-2 border-purple-400/50 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transition-all flex items-center gap-2 font-semibold">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </header>

        {/* Skills & Expertise */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise & Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">Mastery in Data Science, ML, NLP, and AI deployment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
                  <div className="relative">
                    <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {llmSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
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
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-white/10 text-center text-gray-500 font-mono text-sm">
          © 2025 Ayorinde Saheed Olamilekan • Engineered with React, Tailwind CSS & Framer Motion
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,100%{background-position:0% 50%}
          50%{background-position:100% 50%}
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
