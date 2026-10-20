"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";
import TextReveal from "@/components/TextReveal";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "4U EdTech",
    role: "Desenvolvedor Full Stack Pleno",
    period: "Jan 2026 – Atual",
    location: "Porto Alegre, RS (Híbrido)",
    highlights: [
      "Desenvolvimento e manutenção de APIs RESTful (Node.js, TypeScript, NestJS/Express) e de telas (Nuxt, Vue, Vuetify) de uma aplicação CMS multi-tenant.",
      "Refatoração de listagens para o modelo server-side, movendo paginação e filtros para queries SQL no backend e reduzindo o carregamento de minutos para poucos segundos.",
      "Camada de services no cliente e componentes atômicos reutilizáveis, separando UI, comunicação HTTP e regras de negócio.",
      "Modelagem e evolução do PostgreSQL com Prisma ORM, incluindo relacionamentos e tabelas de junção.",
      "Aplicação de IA generativa no fluxo de desenvolvimento para acelerar implementação, refatoração, testes e documentação.",
      "Atuação em Scrum/Kanban: levantamento de requisitos, validação técnica e acompanhamento das entregas.",
    ],
    technologies: [
      "NestJS",
      "Nuxt.js",
      "Vue",
      "Vuetify",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "IA Generativa",
    ],
  },
  {
    company: "Syncbit",
    role: "Desenvolvedor Full Stack",
    period: "Jan 2024 – Jan 2026",
    location: "Ribeirão Preto, SP (Remoto)",
    highlights: [
      "Plataforma de análise e monitoramento meteorológico com dashboards interativos e visualização de dados em tempo real.",
      "Liderança da integração de APIs externas de dados climáticos, com confiabilidade e escalabilidade no processamento de grandes volumes de dados.",
      "Otimização do backend, reduzindo em até 40% o tempo de resposta em consultas críticas.",
      "Colaboração na definição da arquitetura da aplicação com Clean Code, SOLID e arquitetura escalável.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Prisma",
      "MongoDB",
      "Jest",
      "Vitest",
    ],
  },
  {
    company: "Grupo Voitto",
    role: "Desenvolvedor Full Stack Júnior",
    period: "Mar 2022 – Jan 2024",
    location: "Juiz de Fora, MG (Remoto)",
    highlights: [
      "Plataforma de consumo de videoaulas com Next.js, React, TypeScript, Node.js, AWS e Jest.",
      "Plataforma de venda e gerenciamento de licenças de cursos B2B.",
      "Landing pages e programas de indicação que atraíram milhares de usuários.",
      "Manutenção e evolução de todas as plataformas da empresa (sites, blogs e EAD): correção de bugs, performance e novos recursos.",
      "Começou como estagiário Full Stack (mar–jul 2022) e foi promovido a Júnior em jul 2022.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "AWS", "Jest"],
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4"
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <TextReveal
                text="Experiência Profissional"
                type="word"
                delay={0.2}
              />
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Minha trajetória no desenvolvimento de software, entregando
            soluções escaláveis em diferentes equipes e produtos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.company} variants={itemVariants}>
              <InteractiveCard glowColor="blue">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right space-y-1">
                      <p className="flex items-center gap-2 sm:justify-end">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="flex items-center gap-2 sm:justify-end">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
