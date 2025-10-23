import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import projectModule1 from '@/assets/project1-module1.png';
import projectModule2 from '@/assets/project1-module2.png';
import projectModule3 from '@/assets/project1-module3.png';
import projectModule4 from '@/assets/project1-module4.png';
import kedikianAdminPanel from '@/assets/kedikian-admin-panel.png';
import kedikianBalance from '@/assets/kedikian-balance.png';
import projectInstitutional from '@/assets/project-institutional.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import larrosaHome from '@/assets/larrosa-home.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Kedikian - Sistema Web de Gestión Empresarial",
      description: "Sistema web integral desarrollado para optimizar la gestión operativa de una empresa de retroexcavación. Cuenta con DOS TIPOS DE PANELES: Panel de Administrador con gestión completa de proyectos, máquinas, inventario, operarios, informes detallados, y balance financiero del sistema con métricas en tiempo real; y Panel de Operario para registro de horas trabajadas y reportes de actividad. Incluye módulos de control de inventario, seguimiento de proyectos, gestión de clientes, sistema de reportes y análisis financiero con ingresos/egresos. La aplicación mejora la eficiencia administrativa y proporciona una interfaz intuitiva para el manejo de recursos.",
      images: [projectModule1, projectModule2, projectModule3, projectModule4, kedikianAdminPanel, kedikianBalance],
      tags: ["Angular", "Python", "MySQL", "FastAPI", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/M-formoso/KedikianSistem",
      featured: true,
    },
    {
      id: 2,
      title: "Página Web Institucional",
      description: "Proyecto desarrollado desde cero sin usar ningún framework, destacando con un diseño moderno y novedoso la información y conceptos de una gran empresa de importación de maderas. Se priorizó la experiencia de usuario y la presentación visual del contenido corporativo.",
      images: [projectInstitutional],
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoUrl: "https://negretemaderas.com",
      githubUrl: "https://github.com/M-formoso/NegreteMaderas",
      featured: false,
    },
    {
      id: 3,
      title: "Ecommerce para negocio de Lanas",
      description: "Desarrollo de un ecommerce para un negocio de lanas, implementando un sistema de gestión de productos, carrito de compras y pasarela de pago. El proyecto incluye una interfaz amigable y responsive, optimizada para dispositivos móviles, mejorando la experiencia de compra en línea.",
      images: [projectEcommerce],
      tags: ["WordPress", "HTML5", "CSS", "Hosting", "E-commerce"],
      demoUrl: "https://morelattolanas.com",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Larrosa Camiones - Sistema de Gestión de Vehículos",
      description: "Sistema integral de gestión para concesionaria de camiones que incluye sitio web público con catálogo de vehículos disponibles, filtros avanzados de búsqueda, y panel de administración completo. El sistema permite gestionar inventario, subir imágenes, controlar estados de vehículos (disponible/reservado), generar estadísticas y exportar datos. Implementa autenticación segura y dashboard con métricas en tiempo real.",
      images: [larrosaHome],
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Authentication", "Admin Panel"],
      demoUrl: "#",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ScrollReveal 
              baseOpacity={0.2} 
              enableBlur={true} 
              baseRotation={2} 
              blurStrength={6}
              containerClassName="text-gradient"
              textClassName="text-4xl md:text-5xl font-bold"
            >
              Proyectos Desarrollados
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
              Soluciones reales implementadas con diferentes tecnologías y arquitecturas
            </ScrollReveal>
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
                  {/* Project Images Gallery */}
                  <div className="relative overflow-hidden h-full">
                    <div className="grid grid-cols-2 gap-1 h-full">
                      {project.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="relative overflow-hidden cursor-pointer group/img"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`${project.title} - Módulo ${idx + 1}`}
                            className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-110 group-hover/img:brightness-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover/img:from-primary/20 group-hover/img:to-secondary/20 transition-all duration-500"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Floating Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white border-0 z-10">
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
                    src={project.images[0]}
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

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-white/10">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 glass border-white/20 hover:border-primary/50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
