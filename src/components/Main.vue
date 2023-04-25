<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
  width: var(--boardSize);
  height: var(--boardSize);
  background-color: #202020;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
}
</style>
