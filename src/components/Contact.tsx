import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Villa Maria, Córdoba, Argentina",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      value: "mateoformoso0606@gmail.com",
      link: "mailto:mateoformoso0606@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 353 4210821",
      link: "tel:+543534210821",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ScrollReveal 
              baseOpacity={0.2} 
              enableBlur={true} 
              baseRotation={2} 
              blurStrength={6}
              containerClassName="text-gradient"
              textClassName="text-4xl md:text-5xl font-bold"
            >
              Contacto
            </ScrollReveal>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            <ScrollReveal 
              baseOpacity={0.1} 
              enableBlur={true} 
              baseRotation={1} 
              blurStrength={4}
              textClassName="text-xl"
            >
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </ScrollReveal>
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
                Información de Contacto
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                Estoy interesado en oportunidades de trabajo freelance o posiciones de tiempo completo. 
                Sin embargo, si tienes otra solicitud o pregunta, no dudes en contactarme.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-all duration-300"
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 mb-2">
                          {info.title}
                        </h4>
                        <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <Button
                onClick={() => window.open('mailto:mateoformoso0606@gmail.com', '_blank')}
                className="glass border-white/20 hover:border-primary/50 text-white hover:text-primary h-16 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
                variant="outline"
              >
                <Mail className="w-6 h-6 mb-2" />
                <span className="text-sm">Email Directo</span>
              </Button>
              
              <Button
                onClick={() => window.open('https://wa.me/543534210821', '_blank')}
                className="glass border-white/20 hover:border-green-500/50 text-white hover:text-green-400 h-16 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
                variant="outline"
              >
                <MessageCircle className="w-6 h-6 mb-2" />
                <span className="text-sm">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/M-formoso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mateoformoso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="text-text-muted">
            © 2025 Mateo Formoso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
