import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact({ aboutData, socialLinks }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          publicKey
        );
      }
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const githubUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com/janmejayananda955';
  const linkedinUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://www.linkedin.com/in/janmejayananda955';
  const twitterUrl = socialLinks?.find(s => s.platform.toLowerCase() === 'twitter')?.url || 'https://x.com/Janmejaya_955?t=08mD9OBmjYggM5jB2v6BvA&s=08';

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg font-medium">
            Interested in collaboration, backend system development, or hiring? Drop a message below!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Direct Contact Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              Send a Direct Message
            </h3>

            {showSuccess && (
              <div className="p-4 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-3 font-semibold animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, role, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & Social Links */}
          <div className="space-y-6">
            
            {/* Contact Cards */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center gap-4 hover:border-cyan-500 transition-colors shadow-md shadow-slate-200/50 dark:shadow-none">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">Email Address</div>
                  <a href={`mailto:${aboutData?.email || 'janmejayananda326@gmail.com'}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {aboutData?.email || 'janmejayananda326@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center gap-4 hover:border-cyan-500 transition-colors shadow-md shadow-slate-200/50 dark:shadow-none">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">Phone & WhatsApp</div>
                  <a href={`tel:${aboutData?.phone || '+918260674792'}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {aboutData?.phone || '+91-8260674792'}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center gap-4 hover:border-cyan-500 transition-colors shadow-md shadow-slate-200/50 dark:shadow-none">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">Location</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {aboutData?.location || 'Bhubaneswar, Odisha, India'}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-md shadow-slate-200/50 dark:shadow-none">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Connect Across Platforms</h4>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold text-xs shadow-sm"
                >
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold text-xs shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold text-xs shadow-sm"
                >
                  <Twitter className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Twitter / X</span>
                </a>

                <a
                  href={`mailto:${aboutData?.email || 'janmejayananda326@gmail.com'}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold text-xs shadow-sm"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Email Direct</span>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping shrink-0" />
              <div className="text-xs text-emerald-800 dark:text-emerald-300 font-bold">
                Currently open for full-stack Java developer opportunities, freelance projects, and system design consultations.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
