<template>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/test">Go to Test Page</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  router-link {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
  }
  
  router-link:hover {
    color: royalblue;
  }
  </style>
  