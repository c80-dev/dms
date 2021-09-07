<template>
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/">
            <img width="50" :src="asset('images/logo.png')" alt="">
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>

export default{
    name: 'Nav',
}
</script>
