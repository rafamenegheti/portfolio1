"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Server,
  Figma,
  GitBranchPlus,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "React/Next.js", icon: Code2, category: "frontend" },
    { name: "TypeScript", icon: Code2, category: "frontend" },
    { name: "Tailwind CSS", icon: Palette, category: "frontend" },
    { name: "Node.js", icon: Server, category: "backend" },
    { name: "PostgreSQL", icon: Database, category: "backend" },
    { name: "MongoDB", icon: Database, category: "backend" },
    { name: "REST APIs", icon: Globe, category: "backend" },
    { name: "Mobile Dev", icon: Smartphone, category: "frontend" },
    { name: "UI/UX Design", icon: Figma, category: "design" },
    { name: "Git/GitHub", icon: GitBranchPlus, category: "tools" },
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a passionate full-stack developer with a keen eye for
            design and a love for creating seamless user experiences. With
            expertise in modern web technologies and a commitment to continuous
            learning, I bring ideas to life through clean, efficient code.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 mb-4"
            >
              My Journey
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              Started my journey in web development 3+ years ago, I&apos;ve had
              the privilege of working on diverse projects ranging from
              e-commerce platforms to mobile applications. My approach combines
              technical expertise with creative problem-solving.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community. I believe in writing code
              that not only works but is also maintainable and scalable.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-blue-600">50+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h4 className="text-2xl font-bold text-purple-600">3+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 mb-6"
            >
              Skills & Technologies
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring" as const, stiffness: 300 },
                  }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <skill.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-900">
                      {skill.name}
                    </span>
                  </div>
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
