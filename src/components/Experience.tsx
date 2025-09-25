import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Target, Code, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "2026+",
      title: "Desarrollador Senior",
      company: "Próximo desafío profesional",
      description: "Mi objetivo es integrarme a un equipo de desarrollo donde pueda aportar mi experiencia en sistemas de gestión empresarial y continuar creciendo profesionalmente. Busco contribuir con soluciones innovadoras y aprender de profesionales experimentados.",
      type: "future",
      icon: Target,
      technologies: ["Leadership", "Team Collaboration", "System Architecture"],
    },
    {
      id: 2,
      period: "2025 - Presente",
      title: "Desarrollador Freelance",
      company: "Especialista en Sistemas de Gestión",
      description: "Desarrollo de software web de gestión empresarial para diferentes clientes. He creado sistemas integrales que incluyen control de inventario, seguimiento de proyectos, gestión de clientes y reportes financieros. También desarrollo páginas web institucionales y ecommerce con enfoque en UX/UI moderno.",
      type: "current",
      icon: Code,
      technologies: ["Angular", "Python", "MySQL", "FastAPI", "React", "WordPress"],
    },
    {
      id: 3,
      period: "2022 - 2025",
      title: "Estudiante de Programación",
      company: "Universidad Tecnológica Nacional (UTN)",
      description: "Formación integral en desarrollo de software, arquitectura de sistemas y bases de datos. Durante mis estudios comencé a desarrollar proyectos reales para clientes, aplicando inmediatamente los conocimientos adquiridos en tecnologías como Angular, Python, MySQL y desarrollo web full-stack.",
      type: "education",
      icon: GraduationCap,
      technologies: ["Software Engineering", "Database Design", "Web Development", "System Architecture"],
    },
    {
      id: 4,
      period: "2022",
      title: "Inicio en Programación",
      company: "Decisión de Carrera",
      description: "Comienzo de mi journey en el desarrollo de software, eligiendo especializarme en tecnologías web modernas. Primeros pasos en HTML, CSS, JavaScript y bases de datos, sentando las bases para mi futura especialización en sistemas empresariales.",
      type: "start",
      icon: Briefcase,
      technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'future':
        return {
          gradient: 'from-yellow-400 to-orange-500',
          bg: 'bg-yellow-500/10',
          border: 'border-yellow-500/30',
          glow: 'shadow-yellow-500/20',
        };
      case 'current':
        return {
          gradient: 'from-primary to-secondary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          glow: 'shadow-primary/20',
        };
      case 'education':
        return {
          gradient: 'from-green-400 to-emerald-500',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          glow: 'shadow-green-500/20',
        };
      case 'start':
        return {
          gradient: 'from-purple-400 to-pink-500',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
        };
      default:
        return {
          gradient: 'from-primary to-secondary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          glow: 'shadow-primary/20',
        };
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Mi Trayectoria Profesional
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Desde estudiante hasta desarrollador especializado
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const styles = getTypeStyles(exp.type);
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={exp.id} 
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-16 h-16 rounded-full ${styles.bg} ${styles.border} border-2 flex items-center justify-center shadow-xl ${styles.glow} hover:scale-110 transition-all duration-300`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${styles.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card 
                    className={`glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:scale-105 w-full max-w-md ${
                      isEven ? 'mr-auto pr-24' : 'ml-auto pl-24'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      {/* Period Badge */}
                      <Badge 
                        className={`mb-4 bg-gradient-to-r ${styles.gradient} text-white border-0`}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-gradient mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-text-accent font-medium mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="glass border-white/20 text-xs hover:border-primary/50 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ¿Listo para el próximo paso?
            </h3>
            <p className="text-text-secondary mb-6">
              Busco nuevas oportunidades para crecer profesionalmente y contribuir con equipos innovadores.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
              >
                Hablemos 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;