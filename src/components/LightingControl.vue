<template>
    <div>
      <h2>Lighting</h2>
      <div class="control-section">
        <div class="lighting-levels">
          <span>Lighting Levels</span>
          <div>
            <label>Perimeter</label>
            <input type="range" min="0" max="100" v-model="perimeterLevel" />
          </div>
          <div>
            <label>Front Wall</label>
            <input type="range" min="0" max="100" v-model="frontWallLevel" />
          </div>
          <div>
            <label>Table</label>
            <input type="range" min="0" max="100" v-model="tableLevel" />
          </div>
          <div>
            <label>Master</label>
            <input type="range" min="0" max="100" v-model="masterLevel" />
          </div>
        </div>
        <div class="lighting-presets">
          <span>Lighting Presets</span>
          <button @click="setPreset('presentation')">Presentation</button>
          <button @click="setPreset('conference')">Conference</button>
          <button @click="setPreset('lightsHalf')">Lights Half</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        perimeterLevel: 50,
        frontWallLevel: 50,
        tableLevel: 50,
        masterLevel: 50,
      };
    },
    methods: {
      setPreset(preset) {
        switch (preset) {
          case 'presentation':
            this.perimeterLevel = 75;
            this.frontWallLevel = 50;
            this.tableLevel = 25;
            this.masterLevel = 100;
            break;
          case 'conference':
            this.perimeterLevel = 50;
            this.frontWallLevel = 50;
            this.tableLevel = 50;
            this.masterLevel = 50;
            break;
          case 'lightsHalf':
            this.perimeterLevel = 25;
            this.frontWallLevel = 25;
            this.tableLevel = 25;
            this.masterLevel = 25;
            break;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .control-section {
    margin-top: 20px;
  }
  
  .lighting-levels, .lighting-presets {
    margin-bottom: 20px;
  }
  
  input[type="range"] {
    width: 100%;
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
  