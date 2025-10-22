import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Terminal } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import reactLogo from '@/assets/logos/react-logo.svg';
import nodejsLogo from '@/assets/logos/nodejs-logo.svg';
import postgresqlLogo from '@/assets/logos/postgresql-logo.svg';
import webLogo from '@/assets/logos/web-logo.svg';
import figmaLogo from '@/assets/logos/figma-logo.svg';
import awsLogo from '@/assets/logos/aws-logo.svg';
import n8nLogo from '@/assets/logos/n8n-logo.png';
import aiLogo from '@/assets/logos/ai-logo.svg';
import gitLogo from '@/assets/logos/git-logo.svg';

const Experience = () => {
  const expertise = [
    {
      id: 1,
      logo: reactLogo,
      title: 'Desarrollo Frontend',
      description: 'Experiencia en frameworks modernos con enfoque en componentes reutilizables, state management y arquitectura escalable.',
      technologies: ['Angular', 'React', 'TypeScript', 'HTML5/CSS3', 'Responsive Design'],
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      id: 2,
      logo: nodejsLogo,
      title: 'Desarrollo Backend',
      description: 'Diseño e implementación de APIs RESTful, lógica de negocio y arquitectura de servicios.',
      technologies: ['Python', 'FastAPI', 'Node.js', 'Java', 'API Design'],
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 3,
      logo: postgresqlLogo,
      title: 'Bases de Datos',
      description: 'Modelado de datos, optimización de queries y gestión de bases de datos relacionales y no relacionales.',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'Database Design', 'Query Optimization'],
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      id: 4,
      logo: webLogo,
      title: 'Sistemas de Gestión',
      description: 'Desarrollo de aplicaciones empresariales completas con módulos integrados de inventario, clientes y reportes.',
      technologies: ['ERP Systems', 'Business Logic', 'Reporting', 'Process Automation'],
      gradient: 'from-orange-400 to-red-500',
    },
    {
      id: 5,
      logo: figmaLogo,
      title: 'UI/UX Design',
      description: 'Creación de interfaces intuitivas y atractivas con foco en experiencia de usuario y accesibilidad.',
      technologies: ['User Interface', 'User Experience', 'Prototyping', 'Design Systems'],
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 6,
      logo: awsLogo,
      title: 'DevOps & Infraestructura',
      description: 'Configuración y gestión de servidores, despliegue de aplicaciones y administración de infraestructura en la nube.',
      technologies: ['AWS', 'Linux', 'Docker', 'Nginx', 'n8n', 'Cloud Services'],
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 7,
      logo: n8nLogo,
      title: 'Automatización de Procesos',
      description: 'Diseño y creación de flujos de trabajo automatizados para optimizar procesos empresariales.',
      technologies: ['n8n', 'Workflow Automation', 'API Integration', 'Process Optimization'],
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      id: 8,
      logo: aiLogo,
      title: 'IA & Herramientas de Desarrollo',
      description: 'Integración de inteligencia artificial y herramientas modernas para acelerar el desarrollo.',
      technologies: ['Claude', 'GitHub Copilot', 'Vercel', 'Lovable'],
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 9,
      logo: gitLogo,
      title: 'Control de Versiones',
      description: 'Gestión de código fuente, branching strategies y colaboración en equipos de desarrollo.',
      technologies: ['Git', 'GitHub', 'Version Control', 'Code Review', 'CI/CD'],
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  const specializations = [
    {
      title: 'Sistemas Empresariales',
      description: 'Aplicaciones de gestión integral con control de inventario, CRM y reportes financieros.',
      icon: Terminal,
    },
    {
      title: 'Arquitectura Web',
      description: 'Diseño de arquitecturas escalables, patrones de diseño y mejores prácticas de desarrollo.',
      icon: Shield,
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ScrollReveal 
              baseOpacity={0.2} 
              enableBlur={true} 
              baseRotation={2} 
              blurStrength={6}
              containerClassName="text-gradient"
              textClassName="text-4xl md:text-5xl font-bold"
            >
              Áreas de Especialización
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
              Experiencia técnica y conocimientos aplicados
            </ScrollReveal>
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertise.map((area, index) => {
            return (
              <Card 
                key={area.id}
                className="glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Logo */}
                  <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img src={area.logo} alt={area.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gradient mb-3">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="glass border-white/20 text-xs hover:border-primary/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Especializaciones Principales
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card 
                  key={spec.title}
                  className="glass border-white/10 hover:border-primary/30 transition-all duration-500 group hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gradient mb-2">
                          {spec.title}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;