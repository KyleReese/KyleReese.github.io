<template>
  <div class="space-y-8">
    <!-- Projects Grid -->
    <div
      v-if="projects.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ProjectListItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16">
      <div
        class="mx-auto w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4"
      >
        <svg
          class="w-12 h-12 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-gray-400 mb-2">No Projects Yet</h3>
      <p class="text-gray-500">
        Projects will be displayed here once they are added.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectListItem from "./ProjectListItem.vue";
import type { Project } from "../../types";

interface Props {
  projects: Project[];
}

const props = withDefaults(defineProps<Props>(), {});
</script>
