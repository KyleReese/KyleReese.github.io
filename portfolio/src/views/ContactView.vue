<!-- <template>
  <div class="min-h-screen pt-20">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-white">Contact</h1>
      <div class="text-2xl pt-2 text-white content-center">Reach out to me! You can email me at: contact {{'<<AT>>'}} kylereese.org</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script> -->
<template>
  <div
    class="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <!-- bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -->
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1
          class="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Get In Touch
        </h1>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"
        ></div>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? I'd love to hear
          from you. Let's create something amazing together.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Contact Info -->
        <div class="space-y-8">
          <!-- Email Card -->
          <div
            class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-white">Email</h3>
            </div>
            <p class="text-slate-300 mb-4 leading-relaxed">
              Drop me a line and I'll get back to you as soon as possible.
            </p>
            <div class="flex items-center space-x-3">
              <code
                class="bg-slate-900/50 text-blue-300 px-4 py-2 rounded-lg font-mono text-sm border border-slate-600"
              >
                contact@kylereese.org
              </code>
              <button
                @click="copyEmail"
                class="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg transition-colors duration-200 border border-blue-500/30 hover:border-blue-400/50 text-sm font-medium"
              >
                {{ copied ? "Copied!" : "Copy" }}
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column - Visual Element -->
        <div class="relative">
          <!-- Decorative Elements -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          ></div>
          <div
            class="absolute -bottom-8 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          ></div>

          <!-- Main Visual Card -->
          <div
            class="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
          >
            <div class="text-center space-y-6">
              <!-- Avatar/Icon Area -->
              <div
                class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mx-auto flex items-center justify-center mb-6"
              >
                <svg
                  class="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="text-2xl font-bold text-white mb-2">
                  Let's Connect
                </h3>
                <p class="text-slate-400">
                  Whether it's a new project, collaboration, or just a friendly
                  chat, I'm always excited to connect with fellow creators and
                  innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="text-center mt-16 pb-16">
        <p class="text-slate-400 text-lg mb-6">
          Ready to start a conversation?
        </p>
        <a
          href="mailto:contact@kylereese.org"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
            />
          </svg>
          Send Email
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("contact@kylereese.org");
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy email:", err);
  }
};
</script>
