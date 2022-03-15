<template>
  <div>
    <transition name="modal-fade" appear>
      <div
          class="modal-backdrop"
          @click="close"
      >
    </div>
    </transition>
    <transition name="modal-pop" appear>
      <div class="modal">
        <h2 class="modal__title">
          <slot name="header">
            Сохранить запрос
          </slot>
        </h2>
        <form
          class="form"
          @submit.prevent="saveRequest"
        >
          <div class="form__fields">
            <div class="form-field">
              <label
                for="requestValue"
                class="form__label"
              >
                Запрос
              </label>
              <input
                id="requestValue"
                v-model="requestValue"
                class="form__input"
                @blur="$v.requestValue.$touch()"
                :disabled="!isRequestEditable"
              />
              <span
                v-if="$v.requestValue.$error"
                class="error form__error"
              >
                Поле обязательно для заполнения
              </span>
              </div>
            <div class="form-field">
              <label
                for="requestTitle"
                class="form__label"
              >
                <span class="error">*</span> Название
              </label>
              <input
                id="requestTitle"
                v-model="requestTitle"
                class="form__input"
                @blur="$v.requestTitle.$touch()"
              />
              <span
                v-if="$v.requestTitle.$error"
                class="error form__error"
              >
                Название обязательно для заполнения
              </span>
            </div>
          </div>
          <div class="form__actions">
            <button
              class="btn btn--secondary form__btn"
              @click.prevent="close"
            >
              <slot name="cancel">
                Не сохранять
              </slot>
            </button>
            <button
              type="submit"
              class="btn btn--primary form__btn"
              :disabled="$v.$invalid"
            >
              <slot name="action">
                Сохранить
              </slot>
            </button>
          </div>
        </form>
    </div>
    </transition>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Modal',
  props: {
    request: {
      type: Object,
      default: () => ({}),
    },
    isRequestEditable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requestValue: this.request.request,
      requestTitle: this.request.requestTitle || '',
    };
  },
  validations: {
    requestValue: {
      required,
    },
    requestTitle: {
      required,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    saveRequest() {
      const ID = this.request.requestID || Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
      const data = {
        request: this.requestValue,
        requestTitle: this.requestTitle,
        requestID: ID,
      };
      this.$emit('save', data);
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
  max-width: 510px;
  width: 100%;
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
    &__fields {
      margin-bottom: 12px;
    }
    .form-field {
      position: relative;
      padding-bottom: 24px;
    }
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
    }
    &__error {
      position: absolute;
      left: 0;
      font-size: 14px;
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
@media screen and (max-width: 576px) {
  .modal {
    max-width: 90%;
    padding: 22px 10px;
    .form {
      &__btn {
        min-width: 160px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .modal {
    .form {
      &__btn {
        min-width: 139px;
      }
    }
  }
}
.modal-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s linear;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

.modal-pop {
  &-enter-active,
  &-leave-active {
    transition: all .5s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
}
</style>
