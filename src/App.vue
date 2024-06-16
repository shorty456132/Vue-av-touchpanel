<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
