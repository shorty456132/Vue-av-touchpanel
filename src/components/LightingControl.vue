<template>
  <div>
    <h2>Lighting</h2>
    <div class="control-section">
      <div class="lighting-levels">
        <span>Lighting Levels</span>
        <div>
          <label>Perimeter</label>
          <input type="range" min="0" max="100" v-model="perimeterLevel" @input="updateLighting('Perimeter', perimeterLevel)" />
        </div>
        <div>
          <label>Front Wall</label>
          <input type="range" min="0" max="100" v-model="frontWallLevel" @input="updateLighting('FrontWall', frontWallLevel)" />
        </div>
        <div>
          <label>Table</label>
          <input type="range" min="0" max="100" v-model="tableLevel" @input="updateLighting('Table', tableLevel)" />
        </div>
        <div>
          <label>Master</label>
          <input type="range" min="0" max="100" v-model="masterLevel" @input="updateLighting('Master', masterLevel)" />
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
import { ref } from 'vue';
import SocketService from '@/services/socketService';

export default {
  name: 'LightingControl',
  setup() {
    const perimeterLevel = ref(50);
    const frontWallLevel = ref(50);
    const tableLevel = ref(50);
    const masterLevel = ref(50);

    const updateLighting = (zone, level) => {
      SocketService.sendEvent('updateLighting', { zone, level });
    };

    const setPreset = (preset) => {
      switch (preset) {
        case 'presentation':
          perimeterLevel.value = 75;
          frontWallLevel.value = 50;
          tableLevel.value = 25;
          masterLevel.value = 100;
          break;
        case 'conference':
          perimeterLevel.value = 50;
          frontWallLevel.value = 50;
          tableLevel.value = 50;
          masterLevel.value = 50;
          break;
        case 'lightsHalf':
          perimeterLevel.value = 25;
          frontWallLevel.value = 25;
          tableLevel.value = 25;
          masterLevel.value = 25;
          break;
      }
      updateLighting('Perimeter', perimeterLevel.value);
      updateLighting('FrontWall', frontWallLevel.value);
      updateLighting('Table', tableLevel.value);
      updateLighting('Master', masterLevel.value);
    };

    return {
      perimeterLevel,
      frontWallLevel,
      tableLevel,
      masterLevel,
      updateLighting,
      setPreset,
    };
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
