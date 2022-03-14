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
  name: 'VideoGridItem',
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
  a {
    display: block;
    width: 100%;
    height: 138px;
    margin-bottom: 8px;
  }
  &__body {
    text-align: left;
  }
  &__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    height: 32px;
  }
  &__subtitle {
    font-size: 14px;
    line-height: 16px;
    color: $primary-gray;
  }
}
</style>
