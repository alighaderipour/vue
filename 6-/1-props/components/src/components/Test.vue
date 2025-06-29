<template>
    <div class="simple-component">
      <h1>{{ title }}</h1>
      <p class="message">{{ message }}</p>
      <button @click="incrementCount">Click me!</button>
      <p>Button clicked {{ count }} times</p>
      
      <div v-if="showExtra" class="extra-content">
        <p>Counter reseted to 0</p>
      </div>
      
      <button @click="toggleExtra" class="toggle-btn">
        {{ showExtra ? 'Hide' : 'Show' }} resest
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SimpleComponent',
    data() {
      return {
        title: 'Welcome to My Vue Component',
        message: 'This is a simple Vue component example',
        count: 0,
        showExtra: false
      }
    },
    methods: {
      incrementCount() {
        this.count++
      },
      toggleExtra() {
        this.showExtra = !this.showExtra
        this.count = 0
      }
    }
  }
  </script>
  
  <style scoped>
  .simple-component {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .message {
    color: #42b983;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  
  .toggle-btn {
    background-color: #3498db;
  }
  
  .toggle-btn:hover {
    background-color: #2980b9;
  }
  
  .extra-content {
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: #e8f4fc;
    border-left: 4px solid #3498db;
    text-align: left;
  }
  </style>