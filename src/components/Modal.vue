<template>
  <div>
    <div
        class="modal-backdrop"
        @click="close"
    >
    <div class="modal">
        <h2 class="modal__title">Сохранить запрос</h2>
        <form class="form">
            <label
              for="request"
              class="form__label"
            >
              Запрос
            </label>
            <input
              id="request"
              v-model="request"
              class="form__input"
              disabled
            />
            <div class="form__actions">
                <button
                    class="btn btn--secondary form__btn"
                    @click="close"
                >
                    Не сохранять
                </button>
                <button
                    class="btn btn--primary form__btn"
                    @click="close"
                >
                    Сохранить
                </button>
            </div>
        </form>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    request: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #75c7ff;
    opacity: 0.9;
    width: 100%;
    height: 100%;
}
.modal {
    position: fixed;
    z-index: 9;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 510px;
    padding: 36px 40px;
    background-color: $white;
    box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
    border-radius: $radius;
    &__title {
        text-align: center;
        color: $black;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 36px;
    }
    .form {
        &__label {
            font-size: 16px;
            line-height: 22px;
            color: $dark;
        }
        &__input {
            height: 48px;
            border-radius: $radius;
            padding: 12px 15px;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 24px;
        }
        &__actions {
            display: flex;
            justify-content: space-between;
        }
        &__btn {
            min-width: 210px;
            border-radius: $radius;
        }
    }
}

// .modal-fade {
//     &-enter-active,
//     &-leave-active {
//       transition: all .5s ease;
//     }
//     &-enter-from,
//     &-leave-to {
//       opacity: 0;
//       transform: scale(0.9);
//     }
// }
</style>
