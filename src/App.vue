<template>
  <div class="syt-app">
    <SytTop />
    <SytContent>
      <router-view />
    </SytContent>
    <SytFooter />
  </div>
</template>
<script setup lang="ts">
  import { SytFooter } from './components';
</script>
