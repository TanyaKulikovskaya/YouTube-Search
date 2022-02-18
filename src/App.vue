<template>
  <div id="app">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
