<template>
    <div>
        <the-header />
        <div class="container">
            <div class="favourites">
                <h1 class="favourites__title">Избранное</h1>
                <ul
                    v-if="FAVOURITES.length > 0"
                    class="favourites-list"
                >
                    <li
                        v-for="(item, index) in FAVOURITES"
                        :key="index"
                        class="favourites-list__item"
                    >
                        {{ item.requestTitle }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'Favourites',
  components: {
    TheHeader,
  },
  computed: {
    ...mapGetters(['FAVOURITES']),
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
    }
    .favourites-list {
        background-color: $white;
        border-radius: $radius;
        &__item {
            padding: 14px 20px;
            border-bottom: 1px solid #f1f1f1;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
        }
    }
</style>
