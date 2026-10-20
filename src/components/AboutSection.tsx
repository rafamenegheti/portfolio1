"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";
import TextReveal from "@/components/TextReveal";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Server,
  GitBranchPlus,
  TestTube,
  Zap,
  FileText,
  Cloud,
  Container,
  Braces,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "JavaScript", icon: Code2, category: "language" },
    { name: "TypeScript", icon: Code2, category: "language" },
    { name: "Java", icon: Code2, category: "language" },
    { name: "Python", icon: Code2, category: "language" },
    { name: "C++", icon: Code2, category: "language" },
    { name: "React/Next.js", icon: Braces, category: "frontend" },
    { name: "Vue/Nuxt.js", icon: Braces, category: "frontend" },
    { name: "Angular", icon: Braces, category: "frontend" },
    { name: "React Native", icon: Globe, category: "mobile" },
    { name: "Node/Express", icon: Server, category: "backend" },
    { name: "NestJS", icon: Server, category: "backend" },
    { name: "Spring Boot", icon: Server, category: "backend" },
    { name: "HTML/CSS", icon: Palette, category: "frontend" },
    { name: "PostgreSQL/MySQL", icon: Database, category: "database" },
    { name: "MongoDB/Prisma", icon: Database, category: "database" },
    { name: "Git/GitHub", icon: GitBranchPlus, category: "tools" },
    { name: "AWS", icon: Cloud, category: "cloud" },
    { name: "Docker", icon: Container, category: "tools" },
    { name: "Jest/Vitest", icon: TestTube, category: "testing" },
    { name: "IA Generativa", icon: Zap, category: "tools" },
    { name: "Clean Code/SOLID", icon: FileText, category: "practices" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
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
              <TextReveal text="Sobre Mim" type="word" delay={0.2} />
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Sou Desenvolvedor Full Stack com mais de 6 anos de experiência em TI
            e no desenvolvimento de aplicações web escaláveis e de alta
            performance. Especializado em Next.js, React, Node.js (NestJS e
            Express), TypeScript, Java (Spring Boot) e Angular, trabalho com
            APIs RESTful, PostgreSQL, MongoDB, AWS e testes automatizados,
            sempre aplicando Clean Code, SOLID e TDD.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Minha Jornada
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Comecei na área de tecnologia em 2020, dando suporte a sistemas
              empresariais, e depois migrei para o desenvolvimento web
              full-stack. Desde então, trabalhei em projetos variados: de
              plataformas de ensino e soluções B2B a aplicações orientadas a
              dados para análise meteorológica e, hoje, um CMS multi-tenant na
              4U EdTech.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Uso IA generativa e LLMs no meu fluxo de trabalho para acelerar
              implementação, refatoração, testes e documentação, sem abrir mão
              de código limpo, performance e manutenibilidade. Acredito em
              software que seja funcional, escalável e fácil de evoluir.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Projetos Concluídos
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  6+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Anos de Experiência
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Habilidades & Tecnologias
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                >
                  <InteractiveCard className="h-full" glowColor="blue">
                    <div className="p-4">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
