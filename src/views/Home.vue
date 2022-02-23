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
      <search-results
        :videos="videos"
        :search="searchString"
      />
    </template>
    <modal
        :request="searchString"
        v-show="isModalVisible"
        @close="closeModal"
      />
  </div>
</template>

<script>
import axios from 'axios';
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
      searchString: '',
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
  methods: {
    search(queryString) {
      this.searchString = queryString;
      this.api.q = queryString;
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
  },
};
</script>
