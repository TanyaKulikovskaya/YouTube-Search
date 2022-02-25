<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade {
    &-enter-active,
    &-leave-active {
      transition: all .5s ease;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: scale(0.9);
    }
}
</style>
