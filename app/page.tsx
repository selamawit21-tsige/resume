"use client";

import React from 'react';
import { Mail, Phone, Linkedin, Download, MapPin, ExternalLink, Award, Code, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Control Panel (Hidden during print) */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-end print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 border border-slate-700"
        >
          <Download size={20} /> Download 
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:border-none">
        
        {/* HERO SECTION - Dark Blue Theme */}
        <header className="bg-[#1e293b] text-white p-10 md:p-14 relative overflow-hidden">
          {/* Decorative design element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight italic">Selamawit Tsige</h1>
              <p className="mt-3 text-blue-400 text-xl md:text-2xl font-semibold">Frontend Web Developer</p>
              
              {/* Objective from PDF */}
              <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed text-sm md:text-base">
                Dedicated and skilled web developer with over 2 years of experience in building responsive and user-friendly websites. 
                Proficient in React, jQuery, Tailwind CSS, and modern web technologies, with a strong focus on creating accessible and engaging user experiences.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-slate-300 shrink-0 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-3"><Mail size={16} className="text-blue-400" /> tsigeselamawit925@gmail.com </div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-blue-400" /> +251 991 439 198 </div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-blue-400" /> Addis Abeba, Ethiopia </div>
              <a href="https://www.linkedin.com/in/selamawit-tsige-11067b28b" target="_blank" className="flex items-center gap-3 text-blue-400 hover:text-white transition-colors underline underline-offset-4">
                <Linkedin size={16} /> LinkedIn Profile 
              </a>
            </div>
          </div>
        </header>

{/* CONTACT INFO - Fixed Line 53-55 */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8 text-slate-300 border-t border-slate-800 pt-8">
  <div className="flex items-center gap-3 min-w-0 group">
    <Mail size={18} className="shrink-0 text-blue-400" />
    <span className="truncate text-sm md:text-base">
      tsigeselamawit925@gmail.com
    </span>
  </div>
  
  <div className="flex items-center gap-3 shrink-0">
    <Phone size={18} className="shrink-0 text-blue-400" />
    <span className="text-sm md:text-base">
      +251 991 439 198
    </span>
  </div>

  <a 
    href="https://www.linkedin.com/in/selamawit-tsige-11067b28b" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-white transition-colors min-w-0 group"
  >
    <Linkedin size={18} className="shrink-0 text-blue-400" />
    <span className="truncate text-sm md:text-base">
      LinkedIn Profile
    </span>
  </a>
</div>



        <main className="p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Experience & Projects (8/12) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Work Experience */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
                <Briefcase className="text-blue-600" size={24} /> Work Experience
              </h2>
              <div className="relative border-l-2 border-slate-100 pl-6 ml-3">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Freelance Frontend Developer</h3>
                <p className="text-sm font-semibold text-slate-500 italic">Addis Abeba, Ethiopia | January 2022 - 2023 </p>
                <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  <li>• Developed high-quality applications including Dictionary, Weather App, and Portfolio</li>
                  <li>• Focused on Mobile-first Design and User-Centric Accessibility.</li>
                </ul>
              </div>
            </section>

            {/* Detailed Projects Section from PDF */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">
                <Code className="text-blue-600" size={24} /> Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900">Poem Generator</h4>
                  <p className="text-[10px] font-bold text-blue-600 uppercase mb-2">React, TypeScript, Bootstrap </p>
                  <p className="text-xs text-slate-600 leading-snug">Generates creative poems based on user input.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900">Dictionary App</h4>
                  <p className="text-[10px] font-bold text-blue-600 uppercase mb-2">React, API, JavaScript </p>
                  <p className="text-xs text-slate-600 leading-snug">A search tool providing word definitions, examples, and images.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900">Weather App</h4>
                  <p className="text-[10px] font-bold text-blue-600 uppercase mb-2">HTML5, API, JavaScript </p>
                  <p className="text-xs text-slate-600 leading-snug">Displays real-time weather data for various locations.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900">World Clock</h4>
                  <p className="text-[10px] font-bold text-blue-600 uppercase mb-2">React, API, CSS </p>
                  <p className="text-xs text-slate-600 leading-snug">Displays current time across multiple cities based on user input.</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Skills & Education (4/12) */}
          <div className="lg:col-span-4 space-y-12">
            
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "jQuery", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap", "GitHub", "Netlify", "VS Code", "npm"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-bold rounded shadow-sm">
                    {skill} 
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Education</h2>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 leading-tight">Bachelor&apos;s in Computer Science </h3>
                <p className="text-sm text-slate-600">Unity University College, Addis Abeba </p>
                <p className="text-xs font-bold text-blue-500 mt-2 italic">Expected Graduation: January 2026</p>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Certifications</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Award className="text-blue-600 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold leading-tight  text-slate-300">SheCodes Certifications (France) </p>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Basics, Plus, Responsive, React, Next </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Award className="text-blue-600 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold leading-tight  text-slate-300">Diploma in Frontend Web Development </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Soft Skills</h2>
              <div className="grid grid-cols-1 gap-2 text-xs font-medium text-slate-600 italic">
                <span>• Problem-Solving </span>
                <span>• Communication</span>
                <span>• Attention to Detail </span>
                <span>• Collaboration </span>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <footer className="mt-12 text-center text-slate-400 text-[10px] font-medium print:hidden uppercase tracking-widest">
        © 2026 Selamawit Tsige | Built with React & Next.js
      </footer>
    </div>
  );
};

export default Resume;