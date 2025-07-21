<template>
  <div
    class="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div class="container mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My Projects
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my recent work, featuring web applications, tools, and
          experiments that demonstrate my skills and passion for creating
          awesome digital experiences.
        </p>
      </div>

      <!-- Projects List -->
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectList from "../components/projects/ProjectList.vue";
import type { Project } from "../types";

const projects = ref<Project[]>([
  {
    id: "1",
    title: "Breakruptcy - Productivity Timer",
    description:
      "A different kind of productivity timer - based on Tim Urban's writing process ",
    image: "/Breakrupcy-screenshot.png",
    demoUrl: "https://kylereese.org/Breakruptcy/",
    sourceUrl: "https://github.com/KyleReese/Breakruptcy",
    technologies: ["React", "Tailwind CSS", "Vite"],
    createdAt: new Date("2025-06-01"),
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features smooth animations, mobile-first design, and optimized performance.",
    image: "/KyleReeseDotOrg.png", // Using your existing galaxy SVG as placeholder
    demoUrl: "https://kylereese.org",
    sourceUrl: "https://github.com/KyleReese/KyleReese.github.io",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "3",
    title: "Lab Grown Meat Graduate Research",
    description:
      "A research project using automatic differentiation (using the Autograd library) to optimize the structure of lab grown meat.",
    sourceUrl: "https://github.com/KyleReese/labmeat2d",
    technologies: ["Python", "Autograd"],
    createdAt: new Date("2020-02-26"),
  },
]);
</script>
