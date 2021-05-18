<template>
  <header class="dp-l-header">
    <router-link to="/" class="atom-logo">
      <img alt="Vue logo" src="./assets/sh-logo.svg" />
    </router-link>
  </header>
  <div id="sideNavBar">
    <div id="nav" class="mdl-tab-bar open">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/orders">Orders</router-link>
      <router-link to="/invoices">Invoices</router-link>
      <router-link to="/news">News</router-link>
    </div>
  </div>
  <main class="dp-l-main">
    <div class="inner-container">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
