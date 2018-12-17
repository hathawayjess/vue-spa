<template>
  <nav class="nav has-shadow">
    <div class="container"></div>
    <router-link to="/category/front-end" exact>
      <img src="http://bit.ly/vue-img"
           alt="Vue SPA">
    </router-link>
    <router-link class="nav-item is-tab" to="/category/front-end" exact>Home</router-link>
    <router-link class="nav-item is-tab" to="/login">Login</router-link>
  </nav>
</template>

<script>
  export default {}
</script>
