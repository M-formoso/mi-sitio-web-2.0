import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import projectManagement from '@/assets/project-management-system.jpg';
import projectInstitutional from '@/assets/project-institutional.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sistema Web de Gestión Empresarial",
      description: "Sistema web integral desarrollado para optimizar la gestión operativa de una empresa de retroexcavación. Incluye módulos de control de inventario, seguimiento de proyectos, gestión de clientes y reportes financieros. La aplicación mejora la eficiencia administrativa y proporciona una interfaz intuitiva para el manejo de recursos.",
      image: projectManagement,
      tags: ["Angular", "Python", "MySQL", "FastAPI", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/M-formoso/KedikianSistem",
      featured: true,
    },
    {
      id: 2,
      title: "Página Web Institucional",
      description: "Proyecto desarrollado desde cero sin usar ningún framework, destacando con un diseño moderno y novedoso la información y conceptos de una gran empresa de importación de maderas. Se priorizó la experiencia de usuario y la presentación visual del contenido corporativo.",
      image: projectInstitutional,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoUrl: "https://negretemaderas.com",
      githubUrl: "https://github.com/M-formoso/NegreteMaderas",
      featured: false,
    },
    {
      id: 3,
      title: "Ecommerce para negocio de Lanas",
      description: "Desarrollo de un ecommerce para un negocio de lanas, implementando un sistema de gestión de productos, carrito de compras y pasarela de pago. El proyecto incluye una interfaz amigable y responsive, optimizada para dispositivos móviles, mejorando la experiencia de compra en línea.",
      image: projectEcommerce,
      tags: ["WordPress", "HTML5", "CSS", "Hosting", "E-commerce"],
      demoUrl: "https://morelattolanas.com",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Proyectos Desarrollados
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Soluciones reales implementadas con diferentes tecnologías y arquitecturas
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {/* Featured Project */}
          {projects
            .filter(project => project.featured)
            .map((project) => (
              <Card
                key={project.id}
                className="glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                      Destacado
                    </Badge>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <h3 className="text-2xl font-bold text-gradient mb-2">
                        {project.title}
                      </h3>
                    </CardHeader>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="glass border-white/20 hover:border-primary/50 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white border-0 flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="glass border-white/20 hover:border-primary/50 flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter(project => !project.featured)
            .map((project) => (
              <Card
                key={project.id}
                className="glass border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:scale-105"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <h3 className="text-xl font-bold text-gradient mb-2">
                      {project.title}
                    </h3>
                  </CardHeader>
                  
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="glass border-white/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="glass border-white/20 text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white border-0 flex-1 text-xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="glass border-white/20 hover:border-primary/50 flex-1 text-xs"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
