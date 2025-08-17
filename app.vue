<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Matt Eason` : 'Matt Eason'
  }
})
</script>
