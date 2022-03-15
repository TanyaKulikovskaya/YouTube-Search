<template>
  <li class="favourites-item">
    <p class="favourites-item__title">
      {{ favourites_item.requestTitle }}
    </p>
    <div class="favourites-item__actions">
      <button
        class="favourites-item__btn favourites-item__btn--primary"
        @click.prevent="executeItem"
      >
        Выполнить
      </button>
      <button
        class="favourites-item__btn favourites-item__btn--primary"
        @click.prevent="editItem"
      >
        Изменить
      </button>
      <button
        class="favourites-item__btn favourites-item__btn--secondary"
        @click.prevent="removeItem"
      >
        Удалить
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'FavouritesItem',
  props: {
    favourites_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    executeItem() {
      this.$emit('executeItem');
    },
    editItem() {
      this.$emit('editItem');
    },
    removeItem() {
      this.$emit('removeItem');
    },
  },
};
</script>

<style lang="scss" scoped>
.favourites-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #f1f1f1;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  &__btn {
    border: none;
    background-color: transparent;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &__btn--primary {
    color: $primary-blue;
  }
  &__btn--secondary {
    color: $error;
  }
}
@media screen and (max-width: 480px) {
  .favourites-item {
    padding: 12px 16px;
    &__btn {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
