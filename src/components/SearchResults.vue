<template>
  <div
    class="container"
    :class="{ right: displayMode === 'list' }"
  >
    <div class="results-header">
      <h3 class="results-header__title">
        Видео по запросу
      </h3>
      <div class="results-header__actions">
        <button
          class="results-header__icon icon"
          @click="changeDisplayMode('list')"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ active: displayMode === 'list' }">
            <g opacity="0.3">
              <path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <button
          class="results-header__icon icon"
          @click="changeDisplayMode('grid')"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ active: displayMode === 'grid' }">
            <g opacity="0.3">
              <path d="M10 5H5V10H10V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 5H14V10H19V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 14H14V19H19V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 14H5V19H10V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="displayMode === 'list'">
      <ul class="videos-list">
        <VideoListItem
          v-for="video in videos"
          :key="video.id.videoId"
          :video="video"
        />
      </ul>
    </div>
    <div v-if="displayMode === 'grid'">
      <ul class="videos-grid">
        <VideoGridItem
          v-for="video in videos"
          :key="video.id.videoId"
          :video="video"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VideoGridItem from './VideoGridItem.vue';
import VideoListItem from './VideoListItem.vue';

export default {
  name: 'SearchResults',
  props: {
    videos: {
      type: Array,
      default: () => ([]),
    },
  },
  components: {
    VideoGridItem,
    VideoListItem,
  },
  data() {
    return {
      displayMode: 'list',
    };
  },
  methods: {
    changeDisplayMode(displayMode) {
      this.displayMode = displayMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container.right {
  position: relative;
  left: 33px;
}
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &__title {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  &__actions {
    display: flex;
    align-items: center;
  }
  &__icon:not(:last-child) {
    margin-right: 20px;
  }
  .icon {
    border: none;
    height: 24px;
    width: 24px;
    background-color: transparent;
    svg.active g {
      opacity: 0.8 !important;
    }
  }
}
.videos-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
}
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 245px);
  gap: 28px 20px;
  justify-content: center;
  padding-bottom: 28px;
}
</style>
