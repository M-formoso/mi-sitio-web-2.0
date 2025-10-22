import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Target, Users, Zap, BookOpen } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const technicalSkills = [
    { name: 'Angular', category: 'Frontend', level: 'Avanzado' },
    { name: 'React', category: 'Frontend', level: 'Intermedio' },
    { name: 'Python', category: 'Backend', level: 'Avanzado' },
    { name: 'FastAPI', category: 'Backend', level: 'Avanzado' },
    { name: 'MySQL', category: 'Database', level: 'Avanzado' },
    { name: 'MongoDB', category: 'Database', level: 'Intermedio' },
    { name: 'Git', category: 'Tools', level: 'Avanzado' },
    { name: 'Node.js', category: 'Backend', level: 'Intermedio' },
    { name: 'Java', category: 'Backend', level: 'Intermedio' },
    { name: 'TypeScript', category: 'Frontend', level: 'Avanzado' },
    { name: 'HTML5/CSS3', category: 'Frontend', level: 'Avanzado' },
    { name: 'JavaScript', category: 'Frontend', level: 'Avanzado' },
  ];

  const professionalQualities = [
    {
      icon: Brain,
      title: 'Pensamiento Analítico',
      description: 'Capacidad para descomponer problemas complejos en soluciones simples y eficientes.',
    },
    {
      icon: Target,
      title: 'Orientado a Resultados',
      description: 'Enfoque pragmático en entregar soluciones funcionales que generen valor real.',
    },
    {
      icon: Zap,
      title: 'Aprendizaje Continuo',
      description: 'Constantemente actualizado con nuevas tecnologías y mejores prácticas de desarrollo.',
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Experiencia trabajando en proyectos reales con clientes y equipos multidisciplinarios.',
    },
    {
      icon: Code2,
      title: 'Código Limpio',
      description: 'Compromiso con escribir código mantenible, escalable y bien documentado.',
    },
    {
      icon: BookOpen,
      title: 'Autodidacta',
      description: 'Capacidad de aprender y dominar nuevas tecnologías de forma independiente.',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'from-blue-400 to-cyan-500',
      'Backend': 'from-green-400 to-emerald-500',
      'Database': 'from-purple-400 to-pink-500',
      'Tools': 'from-orange-400 to-red-500',
    };
    return colors[category] || 'from-primary to-secondary';
  };

  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'Avanzado': 'border-green-500/50 text-green-400',
      'Intermedio': 'border-blue-500/50 text-blue-400',
      'Básico': 'border-yellow-500/50 text-yellow-400',
    };
    return colors[level] || 'border-white/20';
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Perfil Técnico
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Habilidades, conocimientos y cualidades profesionales
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Profile & Bio */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <img
                  src={profileAvatar}
                  alt="Mateo Formoso"
                  className="relative w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p className="font-mono text-sm text-primary">
                  {'> whoami'}
                </p>
                <p>
                  Desarrollador especializado en <span className="text-primary font-semibold">sistemas de gestión empresarial</span> y 
                  aplicaciones web full stack. Mi enfoque está en crear soluciones técnicas robustas que resuelvan problemas reales del negocio.
                </p>
                <p>
                  Formación en <span className="text-secondary font-semibold">Ingeniería de Software</span> en UTN, 
                  complementada con experiencia práctica desarrollando proyectos reales para clientes desde el inicio de mi carrera.
                </p>
                <p className="font-mono text-sm text-accent">
                  {'> skills --list'}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient flex items-center">
              <Code2 className="w-6 h-6 mr-3" />
              Stack Tecnológico
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-4">
                    <div className={`text-xs font-mono mb-1 bg-gradient-to-r ${getCategoryColor(skill.category)} bg-clip-text text-transparent`}>
                      {skill.category}
                    </div>
                    <div className="text-text-primary font-semibold mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getLevelColor(skill.level)} border`}
                    >
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Qualities */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gradient text-center">
            Cualidades Profesionales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <Card 
                  key={quality.title}
                  className="glass border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gradient mb-2">
                      {quality.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {quality.description}
                    </p>
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

export default About;