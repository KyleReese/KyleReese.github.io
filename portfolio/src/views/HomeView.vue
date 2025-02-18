<template>
  <div class="min-h-screen pt-20">
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col items-center justify-center min-h-[80vh] text-center"
      >
        <div class="space-y-6">
          <h1 class="text-5xl md:text-7xl font-bold text-white">
            <span class="block">Hello, I'm</span>
            <span class="block text-blue-500 mt-2">
              <TypeWriter :text="name" :delay="100" />
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {{ tagline }}
          </p>
          <div class="flex space-x-4 justify-center mt-8">
            <a
              href="projects"
              class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="contact"
              class="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "../components/TypeWriter.vue";

const name = ref<string>("Kyle Reese");
const tagline = ref<string>(
  "Experienced Software Engineer building exceptional digital experiences"
);
</script>
