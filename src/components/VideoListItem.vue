<template>
  <li class="video-item">
    <a
      :href="`https://youtube.com/watch?v=${video.id.videoId}`"
      target="_blank"
      :title="video.snippet.title"
      class="video-item__link"
    >
      <img
        :src="`${video.snippet.thumbnails.medium.url}`"
        :alt="`${video.snippet.title}`"
      />
    </a>
    <div class="video-item__body">
      <h4 class="video-item__title">{{ video.snippet.title | unescape}}</h4>
      <p class="video-item__subtitle">{{ video.snippet.channelTitle | unescape}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.video-item {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  &__link {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 157px;
    height: 88px;
    margin-right: 20px;
  }
  &__body {
    text-align: left;
    flex: 1 1 auto;
    font-size: 16px;
    line-height: 20px;
  }
  &__title {
    font-weight: 500;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__subtitle {
    color: $primary-gray;
  }
}
@media screen and (max-width: 576px) {
  .video-item {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    &__link {
      flex-basis: 120px;
      height: 72px;
    }
  }
}
</style>
