<template>
  <div class="layout">
    <Main>
      <Chessboard :squares="squares" @on-select="selectSquare" />
    </Main>
    <Sidebar :moves="moves" />
  </div>
</template>

<script setup lang="ts">
import Chessboard from '@/components/Chessboard.vue'
import Main from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'
import { useSquares } from './hooks/useSquares'

const { squares, selectSquare, moves } = useSquares()
</script>

<style scoped>
.layout {
  display: flex;
  width: 100dvw;
  min-height: 100dvh;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
</style>
