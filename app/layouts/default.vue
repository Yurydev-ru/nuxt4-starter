<template>
  <div class="wrapper">
    
    <AppHeader/>
      <main class="app-main">
  
        <slot />
      </main>
    <AppFooter/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  padding: 20px;
}
</style>