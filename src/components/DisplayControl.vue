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
import { ref } from 'vue';
import SocketService from '@/services/socketService';

export default {
  name: 'DisplayControl',
  setup() {
    const leftDisplay = ref(false);
    const rightDisplay = ref(false);

    const toggleDisplay = (display) => {
      if (display === 'left') {
        leftDisplay.value = !leftDisplay.value;
        SocketService.sendEvent('toggleDisplay', { display: 'left', state: leftDisplay.value });
      } else if (display === 'right') {
        rightDisplay.value = !rightDisplay.value;
        SocketService.sendEvent('toggleDisplay', { display: 'right', state: rightDisplay.value });
      }
    };

    return {
      leftDisplay,
      rightDisplay,
      toggleDisplay,
    };
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
