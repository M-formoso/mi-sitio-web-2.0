import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const skills = [
    { name: 'HTML5', color: 'text-orange-400' },
    { name: 'CSS3', color: 'text-blue-400' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Angular', color: 'text-red-400' },
    { name: 'Python', color: 'text-green-400' },
    { name: 'MySQL', color: 'text-orange-400' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'MongoDB', color: 'text-green-600' },
    { name: 'Git', color: 'text-orange-500' },
    { name: 'FastAPI', color: 'text-teal-400' },
    { name: 'Responsive Design', color: 'text-purple-400' },
    { name: 'IA', color: 'text-pink-400' },
    { name: 'Java', color: 'text-red-500' },
  ];

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
            Sobre Mí
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Conoce más sobre mi experiencia y habilidades
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src={profileAvatar}
                  alt="Mateo Formoso"
                  className="relative w-full max-w-md mx-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass rounded-lg p-3 animate-float">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-lg p-3 animate-float delay-1000">
              <span className="text-2xl">🚀</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Soy un <span className="text-primary font-semibold">desarrollador web full stack</span> con 
                experiencia en la creación de aplicaciones web modernas y responsivas. Mi pasión por la 
                tecnología y la resolución de problemas me impulsa a crear soluciones elegantes y eficientes.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Con más de <span className="text-secondary font-semibold">3 años de experiencia</span> en 
                el desarrollo web, he trabajado en diversos proyectos que van desde sitios web corporativos 
                hasta aplicaciones web complejas. Mi enfoque siempre es crear productos de alta calidad que 
                proporcionen una excelente experiencia al usuario.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Tecnologías & Herramientas
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card 
                    key={skill.name}
                    className="glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`text-2xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        {/* You can add icons here if needed */}
                      </div>
                      <span className="text-text-secondary group-hover:text-primary font-medium transition-colors duration-300">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center glass rounded-lg p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-text-secondary text-sm">Años de Experiencia</div>
              </div>
              
              <div className="text-center glass rounded-lg p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-text-secondary text-sm">Proyectos Completados</div>
              </div>
              
              <div className="text-center glass rounded-lg p-4 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-secondary text-sm">Dedicación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;