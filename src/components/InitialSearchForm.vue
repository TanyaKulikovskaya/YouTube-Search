<template>
  <div class="container">
    <div class="form-wrapper">
      <h1 class="form-wrapper__title">
        Поиск видео
      </h1>
      <form class="form">
        <input
          v-model.trim="searchString"
          placeholder="Что хотите посмотреть?"
          class="form__input"
        />
        <button
          class="btn--primary form__btn"
          @click.prevent="handleSearchBtn"
        >
          Найти
        </button>
      </form>
    </div>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchForm',
  computed: {
    ...mapGetters(['SEARCH_STRING']),
    searchString: {
      get() {
        return this.SEARCH_STRING;
      },
      set(value) {
        return this.SET_SEARCH_STRING(value);
      },
    },
  },
  methods: {
    ...mapActions(['SET_SEARCH_STRING']),
    handleSearchBtn() {
      if (this.searchString !== '') {
        this.$emit('search');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  max-width: 686px;
  margin: 220px auto 0;
  text-align: center;
  &__title {
    font-size: 36px;
    line-height: 52px;
    color: $black;
    margin-bottom: 40px;
  }
  .form {
    position: relative;
    &__input {
      height: 52px;
      border-radius: $radius;
      padding: 14px 165px 14px 15px;
      font-size: 20px;
      line-height: 24px;
      &::placeholder {
          opacity: 0.3;
      }
      &:focus {
        border: $primary-border;
        background-color: $secondary-blue;
      }
    }
    &__btn {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      height: 52px;
      padding: 14px 20px;
      min-width: 150px;
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
      background-color: $primary-blue;
      cursor: pointer;
    }
  }
}

</style>
