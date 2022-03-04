<template>
  <div>
    <the-header />
    <initial-search-form
      v-if="!VIDEOS.length > 0"
      @search="search"
    />
    <template v-else>
      <final-search-form
        @search="search"
        @save="showModal"
      />
      <search-results :videos="VIDEOS" />
    </template>
    <modal
        v-if="isModalVisible"
        :request="request"
        @close="closeModal"
        @save="saveRequestToFavourites"
      />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheHeader from '../components/TheHeader.vue';
import InitialSearchForm from '../components/InitialSearchForm.vue';
import FinalSearchForm from '../components/FinalSearchForm.vue';
import SearchResults from '../components/SearchResults.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    InitialSearchForm,
    FinalSearchForm,
    SearchResults,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters(['SEARCH_STRING']),
    ...mapGetters(['VIDEOS']),
    request() {
      return { request: this.SEARCH_STRING };
    },
  },
  methods: {
    ...mapActions(['GET_VIDEOS_FROM_API']),
    ...mapActions(['ADD_REQUEST_TO_FAVOURITES']),
    search() {
      this.GET_VIDEOS_FROM_API();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    saveRequestToFavourites(data) {
      this.isModalVisible = false;
      this.ADD_REQUEST_TO_FAVOURITES(data);
    },
  },
};
</script>
