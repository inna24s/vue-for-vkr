<script setup>
import Table from "@/Table.vue";
</script>

<template>
  <main class="content">
    <div class="container">
      <img src="./assets/logo.svg" alt="Vue" width="40px"/>
      <h1>This is app for VKR (Vue 3.4.3)</h1>
    </div>
    <Table></Table>
  </main>
</template>

<style>
.content {
  padding: 24px;
  height: 100vw;
  background-color: floralwhite;
}

.container {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
