<template>
    <div class="container">
        <div class="form-wrapper">
            <h1 class="form-wrapper__title">Поиск видео</h1>
            <form class="form">
                <input
                  v-model.trim="searchString"
                  placeholder="Что хотите посмотреть?"
                  class="form__input"
                />
                <button
                  @click.prevent="handleSearchBtn"
                  class="btn--primary form__btn"
                >
                  Найти
                </button>
            </form>
      </div>
  </div>
</template>
<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    handleSearchBtn() {
      if (this.searchString !== '') {
        this.$emit('search', this.searchString);
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
