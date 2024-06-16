<template>
  <div class="container">
    <aside class="sidebar">
      <h1 class="sidebar-title">Room Controls</h1>
      <ul>
        <li @click="selectTab('camera')">
          <span :class="{ active: activeTab === 'camera' }">Cameras</span>
        </li>
        <li @click="selectTab('lighting')">
          <span :class="{ active: activeTab === 'lighting' }">Lighting</span>
        </li>
        <li @click="selectTab('audio')">
          <span :class="{ active: activeTab === 'audio' }">Audio</span>
        </li>
        <li @click="selectTab('displays')">
          <span :class="{ active: activeTab === 'displays' }">Displays</span>
        </li>
        <li @click="selectTab('ac')">
          <span :class="{ active: activeTab === 'ac' }">A/C & Shades</span>
        </li>
      </ul>
    </aside>
    <main class="content">
      <component :is="currentTabComponent" />
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import CameraControl from '@/components/CameraControl.vue';
import LightingControl from '@/components/LightingControl.vue';
import DisplayControl from '@/components/DisplayControl.vue';

export default {
  setup() {
    const activeTab = ref('camera');

    const currentTabComponent = computed(() => {
      switch (activeTab.value) {
        case 'camera':
          return CameraControl;
        case 'lighting':
          return LightingControl;
        case 'displays':
          return DisplayControl;
        default:
          return null;
      }
    });

    const selectTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      currentTabComponent,
      selectTab,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 200px;
  background: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}

.sidebar-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 10px 0;
  cursor: pointer;
}

.sidebar li span {
  display: block;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar li span.active,
.sidebar li span:hover {
  background-color: #dcdcdc;
}

.content {
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
