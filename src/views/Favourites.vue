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
          <FavouritesItem
            v-for="(item, index) in FAVOURITES"
            :key="index"
            :favourites_item="item"
            @executeItem="executeFavouritesItem(index)"
            @editItem="editFavouritesItem(index)"
            @removeItem="removeFavouritesItem(index)"
          />
        </ul>
      </div>
    </div>
      <modal
        v-body-scroll-lock="isModalVisible"
        v-if="isModalVisible"
        :request="request"
        :isRequestEditable=true
        @close="closeModal"
        @save="saveRequest"
      >
        <template v-slot:header>
          Изменить запрос
        </template>
        <template v-slot:cancel>
          Не изменять
        </template>
        <template v-slot:action>
          Изменить
        </template>
      </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheHeader from '../components/TheHeader.vue';
import FavouritesItem from '../components/FavouritesItem.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Favourites',
  components: {
    TheHeader,
    FavouritesItem,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      request: null,
    };
  },
  computed: {
    ...mapGetters(['FAVOURITES']),
  },
  methods: {
    ...mapActions(['ADD_REQUEST_TO_FAVOURITES']),
    ...mapActions(['DELETE_REQUEST_FROM_FAVOURITES']),
    ...mapActions(['SET_SEARCH_STRING']),
    executeFavouritesItem(index) {
      const searchRequest = this.FAVOURITES[index].request;
      this.SET_SEARCH_STRING(searchRequest);
      this.$router.push('/');
    },
    editFavouritesItem(index) {
      this.isModalVisible = true;
      this.request = this.FAVOURITES[index];
    },
    removeFavouritesItem(index) {
      this.DELETE_REQUEST_FROM_FAVOURITES(index);
    },
    closeModal() {
      this.isModalVisible = false;
    },
    saveRequest(data) {
      this.isModalVisible = false;
      this.ADD_REQUEST_TO_FAVOURITES(data);
    },
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
}
</style>
