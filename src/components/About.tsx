import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Target, Users, Zap, BookOpen } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '@/components/ui/scroll-stack';
import ScrollReveal from '@/components/ui/scroll-reveal';

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ScrollReveal 
              baseOpacity={0.2} 
              enableBlur={true} 
              baseRotation={2} 
              blurStrength={6}
              containerClassName="text-gradient"
              textClassName="text-4xl md:text-5xl font-bold"
            >
              Perfil Técnico
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
              Habilidades, conocimientos y cualidades profesionales
            </ScrollReveal>
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p className="font-mono text-sm text-primary">
                {'> whoami'}
              </p>
              <p className="text-lg">
                Desarrollador especializado en <span className="text-primary font-semibold">sistemas de gestión empresarial</span> y 
                aplicaciones web full stack. Mi enfoque está en crear soluciones técnicas robustas que resuelvan problemas reales del negocio.
              </p>
              <p className="text-lg">
                Formación en <span className="text-secondary font-semibold">Ingeniería de Software</span> en UTN, 
                complementada con experiencia práctica desarrollando proyectos reales para clientes desde el inicio de mi carrera.
              </p>
              <p className="font-mono text-sm text-accent">
                {'> skills --list'}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills with ScrollStack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gradient text-center flex items-center justify-center">
            <Code2 className="w-6 h-6 mr-3" />
            Stack Tecnológico
          </h3>
          
          <div className="max-w-4xl mx-auto" style={{ height: '600px' }}>
            <ScrollStack
              itemDistance={50}
              itemScale={0.02}
              itemStackDistance={20}
              stackPosition="20%"
              useWindowScroll={false}
            >
              {technicalSkills.map((skill, index) => (
                <ScrollStackItem key={skill.name}>
                  <Card className="glass border-white/10 h-full">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className={`text-sm font-mono mb-2 bg-gradient-to-r ${getCategoryColor(skill.category)} bg-clip-text text-transparent`}>
                        {skill.category}
                      </div>
                      <div className="text-3xl text-text-primary font-bold mb-3">
                        {skill.name}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-sm ${getLevelColor(skill.level)} border w-fit`}
                      >
                        {skill.level}
                      </Badge>
                    </CardContent>
                  </Card>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>

        {/* Professional Qualities */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gradient text-center">
            Cualidades Profesionales
          </h3>
          
          <div className="max-w-4xl mx-auto" style={{ height: '600px' }}>
            <ScrollStack
              itemDistance={50}
              itemScale={0.02}
              itemStackDistance={20}
              stackPosition="20%"
              useWindowScroll={false}
            >
              {professionalQualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <ScrollStackItem key={quality.title}>
                    <Card className="glass border-white/10 h-full">
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-gradient mb-3">
                          {quality.title}
                        </h4>
                        <p className="text-text-secondary text-base leading-relaxed">
                          {quality.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollStackItem>
                );
              })}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;