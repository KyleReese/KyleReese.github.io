<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <nav class="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold text-white">
            Kyle Reese
          </router-link>
          <div class="hidden md:flex space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-300 hover:text-white transition-colors"
            >
              {{ item.name }}
            </router-link>
          </div>
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { NavItem } from "./types";

const isMobileMenuOpen = ref<boolean>(false);

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
