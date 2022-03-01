<template>
  <li class="video-item">
    <a
      :href="`https://youtube.com/watch?v=${video.id.videoId}`"
      target="_blank"
      :title="video.snippet.title"
    >
      <img
        :src="`${video.snippet.thumbnails.medium.url}`"
        :alt="`${video.snippet.title}`"
        class="video-item__img"
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
  a {
    display: block;
    width: 157px;
    height: 88px;
    margin-right: 20px;
  }
  &__body {
    text-align: left;
    max-width: 510px;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__subtitle {
    font-size: 16px;
    line-height: 20px;
    color: $primary-gray;
    }
}
</style>
