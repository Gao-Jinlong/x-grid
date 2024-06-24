<script setup lang="ts">
import { inject } from 'vue'
import type { AppContext } from '../../composables/useAppContext'

const { fileName } = inject<AppContext>('AppContext')!
</script>

<template>
  <div>
    {{ fileName }}
  </div>
</template>

<style lang="scss" scoped></style>
