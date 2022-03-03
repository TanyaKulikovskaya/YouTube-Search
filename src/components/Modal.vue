<template>
  <div>
    <div
        class="modal-backdrop"
        @click="close"
    >
    </div>
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
                for="request"
                class="form__label"
              >
                Запрос
              </label>
              <input
                id="request"
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
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Modal',
  props: {
    request: {
      type: String,
      default: '',
    },
    isRequestEditable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requestValue: this.request,
      requestTitle: '',
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
      const data = {
        request: this.request,
        requestTitle: this.requestTitle,
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
</style>
