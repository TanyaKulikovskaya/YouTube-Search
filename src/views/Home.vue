<template>
  <div>
    <the-header />
    <initial-search-form
      v-if="!videos.length > 0"
      @search="search"
    />
    <template v-else>
      <final-search-form
        @search="search"
        @save="showModal"
      />
      <search-results :videos="videos" />
    </template>
    <modal
        v-if="isModalVisible"
        :request="SEARCH_STRING"
        @close="closeModal"
        @save="saveRequestToFavourites"
      />
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import TheHeader from '../components/TheHeader.vue';
import InitialSearchForm from '../components/InitialSearchForm.vue';
import FinalSearchForm from '../components/FinalSearchForm.vue';
import SearchResults from '../components/SearchResults.vue';
import Modal from '../components/Modal.vue';

import apiKey from '../../config';

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
      videos: [],
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        maxResults: 12,
        q: '',
        key: apiKey.YOUTUBE_API_KEY,
      },
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters(['SEARCH_STRING']),
  },
  methods: {
    search() {
      this.api.q = this.SEARCH_STRING;
      const {
        baseUrl, part, maxResults, q, key,
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&maxResults=${maxResults}&q=${q}&key=${key}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios.get(apiUrl)
        .then((response) => {
          this.videos = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    saveRequestToFavourites(data) {
      this.isModalVisible = false;
      console.log(data);
    },
  },
};
</script>
