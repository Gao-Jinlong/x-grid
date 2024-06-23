<script setup lang="ts">
import { inject } from 'vue'
import MenuItem from '../menu/MenuItem.vue'
import type { AppContext } from '../../composables/useAppContext'

const { open } = inject<AppContext>('AppContext')!
const handleClick = () => {
  open({
    types: [
      {
        description: 'Excel 文件',
        accept: {
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx', '.xls']
        }
      }
    ],
    excludeAcceptAllOption: true
  })
}
</script>

<template>
  <div class="header">
    <div class="header__menu block__panel">
      <MenuItem @click="handleClick">选择文件</MenuItem>
    </div>
    <div class="header__toolbar block__panel">工具栏</div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &__menu {
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    padding: 6px 12px;
  }

  &__toolbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    padding: 6px 12px;
  }
}
</style>
