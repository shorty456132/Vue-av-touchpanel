<!-- <template>
  <div>
    <h2>Cameras</h2>
    <div class="control-section">
      <div class="selection">
        <span>Selection</span>
        <button :class="{ selected: selectedCamera === 'front' }" @click="selectCamera('front')">Front</button>
        <button :class="{ selected: selectedCamera === 'back' }" @click="selectCamera('back')">Back</button>
        <button @click="togglePrivacy" :class="{ active: privacyMode }">Privacy</button>
      </div>
        <div class="preview">
          <span>Preview</span>
          <div class="directional-buttons">
            <button @click="moveCamera('up')">⬆️</button>
            <div class="middle-row">
              <button @click="moveCamera('left')">⬅️</button>
              <button @click="moveCamera('home')">🏠</button>
              <button @click="moveCamera('right')">➡️</button>
            </div>
            <button @click="moveCamera('down')">⬇️</button>
          </div>
        </div>
      <div class="presets">
        <span>Presets</span>
        <button @click="applyPreset('head')">Head of Table</button>
        <button @click="applyPreset('whole')">Whole Table</button>
        <button @click="applyPreset('presentation')">Presentation</button>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';
import SocketService from '@/services/socketService';

export default {
  name: 'CameraControl',
  setup() {
    const selectedCamera = ref(null);
    const privacyMode = ref(false);

    const selectCamera = (camera) => {
      selectedCamera.value = camera;
      SocketService.sendEvent('cameraSelect', camera);
    };

    const togglePrivacy = () => {
      privacyMode.value = !privacyMode.value;
      SocketService.sendEvent('togglePrivacy', privacyMode.value);
    };

    const moveCamera = (direction) => {
      console.log(`Moving camera: ${direction}`);
      SocketService.sendEvent('moveCamera', direction);
    };

    const applyPreset = (preset) => {
      console.log(`Applying preset: ${preset}`);
      SocketService.sendEvent('applyPreset', preset);
    };

    return {
      selectedCamera,
      privacyMode,
      selectCamera,
      togglePrivacy,
      moveCamera,
      applyPreset,
    };
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
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button.selected, button:hover {
  background: #e0e0e0;
}

button.active {
  background: #dcdcdc;
}

.directional-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.middle-row {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

.preview-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}
.preview {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}
</style> -->

<template>
  <div>
    <h2>Cameras</h2>
    <div class="control-section">
      <div class="selection">
        <span>Selection</span>
        <button :class="{ selected: selectedCamera === 'front' }" @click="selectCamera('front')">Front</button>
        <button :class="{ selected: selectedCamera === 'back' }" @click="selectCamera('back')">Back</button>
        <button class="privacy-button" @click="togglePrivacy" :class="{ active: privacyMode }">Privacy</button>
      </div>
      <div class="preview-directional">
        <div class="preview">
          <span>Preview</span>
          <div class="preview-container">
            <!-- Add the actual preview content here -->
          </div>
        </div>
        <div class="directional-buttons">
          <button @click="moveCamera('up')">⬆️</button>
          <div class="middle-row">
            <button @click="moveCamera('left')">⬅️</button>
            <button @click="moveCamera('home')">🏠</button>
            <button @click="moveCamera('right')">➡️</button>
          </div>
          <button @click="moveCamera('down')">⬇️</button>
        </div>
      </div>
      <div class="presets">
        <span>Presets</span>
        <button @click="applyPreset('head')">Head of Table</button>
        <button @click="applyPreset('whole')">Whole Table</button>
        <button @click="applyPreset('presentation')">Presentation</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import SocketService from '@/services/socketService';

export default {
  name: 'CameraControl',
  setup() {
    const selectedCamera = ref(null);
    const privacyMode = ref(false);

    const selectCamera = (camera) => {
      selectedCamera.value = camera;
      SocketService.sendEvent('cameraSelect', camera);
    };

    const togglePrivacy = () => {
      privacyMode.value = !privacyMode.value;
      SocketService.sendEvent('togglePrivacy', privacyMode.value);
    };

    const moveCamera = (direction) => {
      console.log(`Moving camera: ${direction}`);
      SocketService.sendEvent('moveCamera', direction);
    };

    const applyPreset = (preset) => {
      console.log(`Applying preset: ${preset}`);
      SocketService.sendEvent('applyPreset', preset);
    };

    return {
      selectedCamera,
      privacyMode,
      selectCamera,
      togglePrivacy,
      moveCamera,
      applyPreset,
    };
  },
};
</script>

<!-- <style scoped>
.control-section {
  margin-top: 20px;
}

.selection, .presets {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button.selected, button:hover {
  background: #e0e0e0;
}

button.active {
  background: #dcdcdc;
}

.preview-directional {
  display: flex;
  justify-content: flex-start; /* Align items to the start */
  align-items: center;
  margin-bottom: 20px;
}

.preview {
  flex: 0 0 320px; /* Fixed width for the preview */
  margin-right: 10px; /* Reduced margin to bring directional buttons closer */
}

.preview-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #000; /* Assume black background for preview */
}

.directional-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.middle-row {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

.presets {
  display: flex;
  justify-content: space-between; /* Evenly space presets */
  margin-top: 20px;
  max-width: 480px; /* Adjust as needed to align with the directional buttons */
}

.selection {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.privacy-button {
  margin-left: auto;
}
</style>
 -->

 <style scoped>
.control-section {
  margin-top: 20px;
}

.selection, .presets {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button.selected, button:hover {
  background: #e0e0e0;
}

button.active {
  background: #dcdcdc;
}

.preview-directional {
  display: flex;
  justify-content: flex-start; /* Align items to the start */
  align-items: center;
  margin-bottom: 20px;
}

.preview {
  flex: 0 0 320px; /* Fixed width for the preview */
  margin-right: 10px; /* Reduced margin to bring directional buttons closer */
}

.preview-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #000; /* Assume black background for preview */
}

.directional-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px; /* Margin to space the directional buttons from privacy button */
}

.middle-row {
  display: flex;
  justify-content: space-between;
  width: 150px;
}

.presets {
  display: flex;
  justify-content: space-between; /* Evenly space presets */
  margin-top: 20px;
  max-width: 480px; /* Adjust as needed to align with the directional buttons */
}

.selection {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.privacy-button {
  margin-left: 10px; /* Space between directional buttons and privacy button */
}
</style>
