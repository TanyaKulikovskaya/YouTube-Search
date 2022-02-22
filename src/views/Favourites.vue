<template>
    <div>
        <the-header />
        <div class="container">
            <div class="favourites">
                <h1 class="favourites__title">Избранное</h1>
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
        &__title {
            margin-bottom: 40px;
        }
    }

</style>
