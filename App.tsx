
import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_DATA } from './constants';
import { PortfolioData, Project, SkillGroup, Certification, Service } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Settings, 
  Code, 
  BookOpen, 
  Award, 
  Briefcase,
  X,
  Save,
  ChevronRight,
  FileDown,
  ShieldCheck,
  Zap,
  Cloud,
  Shield,
  Send,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(INITIAL_DATA);
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'view' | 'edit-raw'>('view');
  const [rawJson, setRawJson] = useState('');

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [data, isEditMode]);

  useEffect(() => {
    const savedData = localStorage.getItem('dishan_portfolio_data');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dishan_portfolio_data', JSON.stringify(data));
    setRawJson(JSON.stringify(data, null, 2));
  }, [data]);

  const handleRawJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawJson(e.target.value);
  };

  const applyRawJson = () => {
    try {
      const parsed = JSON.parse(rawJson);
      setData(parsed);
      setActiveTab('view');
      alert("Changes applied successfully!");
    } catch (e) {
      alert("Invalid JSON format. Please check your syntax.");
    }
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "New Project",
      period: "2024",
      description: ["Project description goes here"],
      technologies: ["Tech Stack"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    };
    setData({ ...data, projects: [newProject, ...data.projects] });
  };

  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: "New Certification",
      issuer: "Organization Name",
      date: "Month Year",
      link: "#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
    };
    setData({ ...data, certifications: [newCert, ...data.certifications] });
  };

  const deleteItem = (type: 'projects' | 'skills' | 'certifications' | 'achievements' | 'services', id: string) => {
    const list = data[type] as any[];
    setData({ ...data, [type]: list.filter((item: any) => (item.id || item.category) !== id) });
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="text-blue-400" size={32} />;
      case 'Cloud': return <Cloud className="text-purple-400" size={32} />;
      case 'Code': return <Code className="text-green-400" size={32} />;
      case 'Zap': return <Zap className="text-yellow-400" size={32} />;
      default: return <Zap className="text-blue-400" size={32} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="text-xl font-bold gradient-text tracking-tighter">MY PORTFOLIO</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Capabilities</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          {/* <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isEditMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            {isEditMode ? <Save size={16} /> : <Settings size={16} />}
            {isEditMode ? 'Exit Build' : 'Editor'}
          </button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
              Available for Collaborations
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
              Dishan <br />
              Dilakshitha <br />
              <span className="gradient-text">Ranasinghe</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
              {data.summary}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href={data.cvUrl || "#"} 
                className="flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-blue-50 rounded-2xl font-black transition-all shadow-2xl shadow-white/5 active:scale-95"
                download
              >
                <FileDown size={20} />
                Download CV
              </a>
              <div className="flex gap-3">
                <a href={`https://${data.github}`} target="_blank" className="p-4 bg-gray-900 border border-white/5 hover:border-white/20 rounded-2xl transition-all hover:translate-y-[-2px]"><Github size={24} /></a>
                <a href={`https://${data.linkedin}`} target="_blank" className="p-4 bg-gray-900 border border-white/5 hover:border-white/20 rounded-2xl transition-all hover:translate-y-[-2px]"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="relative reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-[120px] rounded-full animate-float"></div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 glass rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl">
              <img src="/images/My-Photo.png" alt="Profile" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-700" />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border border-white/10 shadow-2xl animate-float">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Shield size={20} className="text-blue-400" />
                 </div>
                 <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Expertise</div>
                    <div className="text-xs font-bold">Secure Architecture</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

<section>
  <div className="text-center mb-32 reveal">
    <h2 className="text-4xl font-bold gradient-text mb-4">
      2y+ Experience | 20+ Projects
    </h2>
  </div>
</section>

      {/* What I Can Do (Services) Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4">What I Can Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Leveraging my multi-disciplinary background to solve complex real-world challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, idx) => (
            <div key={service.id} className="reveal glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group hover:bg-blue-500/[0.02]">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {getServiceIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4 reveal">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
              <Code className="text-blue-500" /> Technical Arsenal
            </h2>
            <p className="text-gray-400">The machinery behind the solutions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.skills.map((group, idx) => (
            <div key={idx} className="reveal glass p-8 rounded-[2rem] border border-white/5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-blue-400 font-black mb-8 text-xs uppercase tracking-[0.2em] border-b border-white/5 pb-4">{group.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, si) => (
                  <div key={si} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                    {skill.logo && <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />}
                    <span className="text-xs font-bold text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4 reveal">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
              <Briefcase className="text-purple-500" /> Featured Work
            </h2>
            <p className="text-gray-400">Engineering excellence in action.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects.map((project) => (
            <div key={project.id} className="reveal group glass rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">Project Case</div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" className="p-3 bg-white/5 hover:bg-blue-600 rounded-full transition-all group-hover:rotate-12">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <ArrowRight size={14} className="shrink-0 mt-1 text-blue-500" />
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4">Tech Infrastructure</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] px-3 py-1.5 bg-blue-600/10 border border-blue-500/10 rounded-xl uppercase font-black text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {isEditMode && (
                  <button onClick={() => deleteItem('projects', project.id)} className="mt-8 text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-xl transition-all w-full border border-red-500/10">
                    Delete Entry
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
               <ShieldCheck className="text-green-500" /> Certifications & Badges
            </h2>
            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="glass p-6 rounded-3xl border border-white/5 flex items-center gap-6 hover:bg-white/[0.03] transition-all">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 p-3 shrink-0">
                    {cert.logo ? <img src={cert.logo} className="w-full h-full object-contain" /> : <Award className="text-blue-500" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                    <p className="text-xs text-blue-400 font-bold mb-1 uppercase tracking-wider">{cert.issuer}</p>
                    <p className="text-[10px] text-gray-500">{cert.date}</p>
                  </div>
                  {cert.link && <a href={cert.link} className="p-2 hover:text-blue-400"><ExternalLink size={18} /></a>}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal delay-200">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
               <Award className="text-yellow-500" /> Milestones
            </h2>
            <div className="space-y-6">
              {data.achievements.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="reveal glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-transparent">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black mb-8">Let's build <br/><span className="gradient-text">together.</span></h2>
            <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects, secure systems, or creative cloud opportunities.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href={`mailto:${data.email}`} 
                className="flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xl transition-all shadow-3xl shadow-blue-600/40 active:scale-95 w-full md:w-auto"
              >
                <Send size={24} /> Reach Me
              </a>
              <div className="flex gap-4">
                <a href={`https://${data.linkedin}`} target="_blank" className="p-5 bg-gray-900 border border-white/5 hover:border-blue-500/50 rounded-[2rem] transition-all hover:translate-y-[-5px]">
                  <Linkedin size={24} />
                </a>
                <a href={`https://${data.github}`} target="_blank" className="p-5 bg-gray-900 border border-white/5 hover:border-white/20 rounded-[2rem] transition-all hover:translate-y-[-5px]">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-12 grayscale opacity-50">
                <div className="text-sm font-black uppercase tracking-widest">dishand398@gmail.com</div>
                <div className="text-sm font-black uppercase tracking-widest">{data.phone}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-lg font-black gradient-text tracking-tighter mb-1">DISHAN RANASINGHE</div>
            <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">Crafting Secure Digital Futures</p>
          </div>
          <div className="flex gap-8 text-[10px] uppercase font-black tracking-[0.2em]">
            <a href="#about" className="text-gray-500 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-500 hover:text-white transition-colors">Portfolio</a>
            <a href={`mailto:${data.email}`} className="text-gray-500 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-[10px] text-gray-700 font-mono">
            
          </div>
        </div>
      </footer>

      {/* Editor Console */}
      {/* {isEditMode && (
        <div className="fixed inset-0 z-[60] glass flex flex-col p-6 animate-in fade-in duration-300">
          <div className="max-w-4xl w-full mx-auto flex flex-col h-full bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Portfolio Architecture</h2>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Developer State Management</p>
              </div>
              <button onClick={() => setIsEditMode(false)} className="p-4 hover:bg-white/10 rounded-2xl transition-all">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex gap-2 mb-6">
              <button onClick={() => setActiveTab('view')} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest ${activeTab === 'view' ? 'bg-blue-600' : 'bg-gray-900 border border-white/5'}`}>Visual Controls</button>
              <button onClick={() => setActiveTab('edit-raw')} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest ${activeTab === 'edit-raw' ? 'bg-blue-600' : 'bg-gray-900 border border-white/5'}`}>Raw JSON</button>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col">
              {activeTab === 'view' ? (
                <div className="bg-black/50 border border-white/5 rounded-[2rem] p-10 overflow-y-auto space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button onClick={addProject} className="p-8 bg-gray-900/50 border border-white/5 rounded-3xl text-left hover:border-blue-500 transition-all group">
                      <Plus className="text-blue-500 mb-4 group-hover:scale-125 transition-transform" />
                      <div className="font-bold text-lg">Deploy Project Card</div>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">Instantiate a new project object in the state array.</p>
                    </button>
                    <button onClick={addCertification} className="p-8 bg-gray-900/50 border border-white/5 rounded-3xl text-left hover:border-green-500 transition-all group">
                      <ShieldCheck className="text-green-500 mb-4 group-hover:scale-125 transition-transform" />
                      <div className="font-bold text-lg">Register Certificate</div>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">Add a cryptographically verified or professional credential.</p>
                    </button>
                  </div>
                  <div className="p-8 bg-blue-500/5 rounded-[2rem] border border-blue-500/20">
                     <div className="flex items-center gap-4 mb-4">
                        <Zap className="text-blue-400" size={24} />
                        <h4 className="font-black uppercase text-xs tracking-widest">Real-time Persistence</h4>
                     </div>
                    <p className="text-sm text-blue-300 leading-relaxed">
                      Changes made here are instantly persisted to <code>localStorage</code>. For production updates, copy the JSON from the "Raw JSON" tab and paste it into <code>constants.ts</code> in your project repository.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col gap-4">
                  <textarea 
                    value={rawJson}
                    onChange={handleRawJsonChange}
                    className="flex-1 bg-black text-blue-400 font-mono text-sm p-8 border border-white/5 rounded-[2rem] focus:border-blue-500 focus:outline-none resize-none leading-relaxed shadow-inner"
                    placeholder="Input schema..."
                  />
                  <div className="flex justify-end gap-4 mt-2">
                     <button onClick={() => setIsEditMode(false)} className="px-8 py-4 bg-gray-900 border border-white/10 rounded-2xl font-bold">Discard</button>
                    <button onClick={applyRawJson} className="px-12 py-4 bg-blue-600 rounded-2xl hover:bg-blue-500 font-black text-white shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3">
                      <Save size={20} /> Deploy Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default App;
