<template>
    <div>
      <h2>Cameras</h2>
      <div class="control-section">
        <div class="selection">
          <span>Selection</span>
          <button :class="{ selected: selectedCamera === 'front' }" @click="selectCamera('front')">Front</button>
          <button :class="{ selected: selectedCamera === 'back' }" @click="selectCamera('back')">Back</button>
          <button @click="togglePrivacy">Privacy</button>
        </div>
        <div class="preview">
          <span>Preview</span>
          <div class="preview-controls">
            <button>🔍</button>
            <button>➕</button>
            <button>🔽</button>
            <button>➖</button>
            <button>▶️</button>
          </div>
        </div>
        <div class="presets">
          <span>Presets</span>
          <button>Head of Table</button>
          <button>Whole Table</button>
          <button>Presentation</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCamera: null,
        privacyMode: false,
      };
    },
    methods: {
      selectCamera(camera) {
        this.selectedCamera = camera;
      },
      togglePrivacy() {
        this.privacyMode = !this.privacyMode;
      },
    },
  };
  </script>
  
  <style scoped>
  .control-section {
    margin-top: 20px;
  }
  
  .selection, .preview, .presets {
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
  
  button.selected, button:hover {
    background: #d0d0d0;
  }
  
  .preview-controls {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  </style>
  