<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <demo />
  </div>
</template>

<script>
import demo from './components/demo.vue';

export default {
    name: 'app',
    components: {
        demo
    }
};
</script>

<style>
#app {
    padding: 20px 50px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}
</style>
