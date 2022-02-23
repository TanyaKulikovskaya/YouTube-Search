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
                <span
                  v-if="searchString"
                  @click.prevent="handleSaveBtn"
                  class="form__btn form__btn--icon"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <button
                  @click.prevent="handleSearchBtn"
                  class="btn--primary form__btn form__btn--button"
                >
                  Найти
                </button>
            </form>
      </div>
  </div>
</template>
<script>
export default {
  name: 'FinalSearchForm',
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    handleSaveBtn() {
      this.$emit('save');
    },
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
    margin: 40px auto 80px;
    &__title {
        font-size: 28px;
        line-height: 40px;
        color: $dark;
        margin-bottom: 12px;
    }
    .form {
        position: relative;
        &__input {
            height: 52px;
            border-radius: $radius;
            padding: 14px 204px 14px 15px;
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
            z-index: 2;
            height: 24px;
            width: 24px;
            cursor: pointer;
        }
        &__btn--icon {
            display: block;
            top: 14px;
            right: 165px;
            border: none;
            background-color: transparent;
        }
        &__btn--button {
            top: 0;
            right: 0;
            height: 52px;
            padding: 14px 20px;
            min-width: 150px;
            border-top-right-radius: $radius;
            border-bottom-right-radius: $radius;
            background-color: $primary-blue;
        }
    }
}

</style>
