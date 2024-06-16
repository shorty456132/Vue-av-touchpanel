<template>
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

.preview {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}
</style>
