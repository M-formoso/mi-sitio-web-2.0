import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import kedikian1 from '@/assets/proyectos/kedikian1.png';
import kedikian2 from '@/assets/proyectos/kedikian2.png';
import kedikian3 from '@/assets/proyectos/kedikian3.png';
import kedikian4 from '@/assets/proyectos/kedikian4.png';
import kedikian5 from '@/assets/proyectos/kedikian5.png';
import kedikian6 from '@/assets/proyectos/kedikian6.png';
import larrosa1 from '@/assets/proyectos/larrosa1.png';
import larrosa2 from '@/assets/proyectos/larrosa2.png';
import larrosa3 from '@/assets/proyectos/larrosa3.png';
import larrosa4 from '@/assets/proyectos/larrosa4.png';
import larrosa5 from '@/assets/proyectos/larrosa5.png';
import larrosa6 from '@/assets/proyectos/larrosa6.png';
import b2grow1 from '@/assets/proyectos/B2GROW.png';
import b2grow2 from '@/assets/proyectos/B2GROW2.png';
import b2grow3 from '@/assets/proyectos/B2GROW3.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Kedikian - Sistema Web de Gestión Empresarial",
      description: "Sistema web integral desarrollado para optimizar la gestión operativa de una empresa de retroexcavación. Cuenta con DOS TIPOS DE PANELES: Panel de Administrador con gestión completa de proyectos, máquinas, inventario, operarios, informes detallados, y balance financiero del sistema con métricas en tiempo real; y Panel de Operario para registro de horas trabajadas y reportes de actividad. Incluye módulos de control de inventario, seguimiento de proyectos, gestión de clientes, sistema de reportes y análisis financiero con ingresos/egresos. La aplicación mejora la eficiencia administrativa y proporciona una interfaz intuitiva para el manejo de recursos.",
      images: [kedikian1, kedikian2, kedikian3, kedikian4, kedikian5, kedikian6],
      tags: ["Angular", "Python", "MySQL", "FastAPI", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/M-formoso/KedikianSistem",
      featured: true,
    },
    {
      id: 2,
      title: "Larrosa Camiones - Sistema de Gestión de Vehículos",
      description: "Sistema integral de gestión para concesionaria de camiones que incluye sitio web público con catálogo de vehículos disponibles, filtros avanzados de búsqueda, y panel de administración completo. El sistema permite gestionar inventario, subir imágenes, controlar estados de vehículos (disponible/reservado), generar estadísticas y exportar datos. Implementa autenticación segura y dashboard con métricas en tiempo real.",
      images: [larrosa1, larrosa2, larrosa3, larrosa4, larrosa5, larrosa6],
      tags: ["HTML5", "CSS3", "JavaScript", "PostgreSQL", "Python", "Authentication", "Admin Panel"],
      demoUrl: "https://m-formoso.github.io/LarrosaWeb/",
      githubUrl: "https://github.com/M-formoso/LarrosaWeb",
      featured: true,
    },
    {
      id: 3,
      title: "B2GROW - Landing Page Corporativa Moderna",
      description: "Sitio web corporativo desarrollado implementando las mejores prácticas de desarrollo web moderno y tecnologías de vanguardia. Presenta un diseño innovador y contemporáneo con efectos dinámicos y animaciones fluidas que mejoran significativamente la experiencia del usuario. La interfaz cuenta con transiciones suaves, elementos interactivos y una arquitectura responsive optimizada para todos los dispositivos. Desarrollado con React y componentes reutilizables, garantiza un rendimiento excepcional y facilidad de mantenimiento, estableciendo un nuevo estándar en presentación digital corporativa.",
      images: [b2grow1, b2grow2, b2grow3, b2grow1, b2grow2, b2grow3],
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "Modern UI"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="pt-8 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <ScrollReveal 
              baseOpacity={0.2} 
              enableBlur={true} 
              baseRotation={2} 
              blurStrength={6}
              containerClassName="text-gradient"
              textClassName="text-5xl md:text-6xl lg:text-7xl font-bold"
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
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Featured Projects */}
          {projects.map((project) => (
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