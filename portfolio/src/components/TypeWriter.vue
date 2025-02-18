<template>
  <span>{{ displayText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Props {
  text: string;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 100,
});

const displayText = ref<string>("");

const typeText = async (): Promise<void> => {
  displayText.value = "";
  for (let i = 0; i < props.text.length; i++) {
    displayText.value += props.text[i];
    await new Promise((resolve) => setTimeout(resolve, props.delay));
  }
};

onMounted(() => {
  typeText();
});

watch(
  () => props.text,
  () => {
    typeText();
  }
);
</script>
