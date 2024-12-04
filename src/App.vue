<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="scss">
@use '@/style/index.scss';

// /* ===============
//    自定义页面样式 app铺满画面
//    =============== */
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

// a {
//   text-decoration: none;
// }
</style>
