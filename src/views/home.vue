<template>
  <div class="about">
    <the-header />
    <search-form />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import searchForm from '../components/searchForm.vue';

export default {
  name: 'home',
  components: {
    TheHeader,
    searchForm,
  },
};
</script>
