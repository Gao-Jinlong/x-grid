<script setup lang="ts">
import HeaderView from './components/header-view/HeaderView.vue'
import GridBody from './components/grid-body/GridBody.vue'

import useAppContext from './composables/useAppContext'
import { provide } from 'vue'

const AppContext = useAppContext()
provide('AppContext', AppContext)
</script>

<template>
  <div class="app">
    <HeaderView class="app__header"></HeaderView>
    <GridBody class="app__body"> </GridBody>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;

  display: flex;
  flex-direction: column;

  &__header {
    flex: 0 0 50px;
  }
  &__body {
    flex: 1;
  }
}
</style>
