<template>
    <div>
        <the-header />
        <div class="container">
            <div class="favourites">
                <h1 class="favourites__title">Избранное</h1>
                <ul class="favourites__list">
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'Favourites',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
    .favourites {
        margin-top: 40px;
        color: $black;
        &__title {
            margin-bottom: 40px;
            font-weight: normal;
            font-size: 28px;
            line-height: 40px;
        }
        &__list {
            background-color: $white;
            border-radius: $radius;
        }
        &__item {
            padding: 14px 20px;
            border-bottom: 1px solid #f1f1f1;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
        }
    }
</style>
