<template>
    <div>
      <h2>Displays</h2>
      <div class="control-section">
        <div class="display-control">
          <span>Left Display</span>
          <button @click="toggleDisplay('left')">{{ leftDisplay ? 'Power Off' : 'Power On' }}</button>
        </div>
        <div class="display-control">
          <span>Right Display</span>
          <button @click="toggleDisplay('right')">{{ rightDisplay ? 'Power Off' : 'Power On' }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        leftDisplay: false,
        rightDisplay: false,
      };
    },
    methods: {
      toggleDisplay(display) {
        if (display === 'left') {
          this.leftDisplay = !this.leftDisplay;
        } else if (display === 'right') {
          this.rightDisplay = !this.rightDisplay;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .control-section {
    margin-top: 20px;
  }
  
  .display-control {
    margin-bottom: 20px;
  }
  
  button {
    margin: 5px;
    padding: 10px;
    border: none;
    background: #e0e0e0;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background: #d0d0d0;
  }
  </style>
  