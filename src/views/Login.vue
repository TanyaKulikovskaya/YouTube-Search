<template>
  <div class="container">
    <div class="form-wrapper">
        <large-logo class="form-wrapper__logo"/>
        <h1 class="form-wrapper__title">
          Вход
        </h1>
        <form
          class="form"
          @submit.prevent="logIn"
        >
            <label
              for="email"
              class="form__label"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form__input"
            />
            <label
              for="password"
              class="form__label"
            >
              Пароль
            </label>
            <div class="form-field">
              <input
                id="password"
                :type="passwordFieldType"
                v-model="password"
                class="form__input"
              />
              <span
                @click="switchPasswordFieldType"
                class="form-field__btn"
              >
                <template v-if="passwordFieldType === 'password'">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1L23 23" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
                <template v-else>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </span>
            </div>
            <button
              type="submit"
              class="btn btn--primary form__btn"
            >
              Войти
            </button>
        </form>
      </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import LargeLogo from '../components/LargeLogo.vue';

export default {
  name: 'Login',
  components: {
    LargeLogo,
  },
  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
    };
  },
  methods: {
    ...mapActions(['LOGIN']),
    switchPasswordFieldType() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    logIn() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.LOGIN(data)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
.form-wrapper {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 510px;
    background-color: $white;
    border: $border;
    padding: 40px 0 60px;
    &__title {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 20px;
    }
    &__logo {
      margin-bottom: 32px;
    }
    .form {
      max-width: 334px;
      margin: 0 auto;
      &__label {
        font-size: 16px;
        line-height: 22px;
        color: $primary-gray;
      }
      &__input {
        height: 48px;
        border-radius: $radius;
        padding: 12px 15px;
        font-size: 20px;
        line-height: 24px;
        &:focus {
          border: $primary-border;
          background-color: $secondary-blue;
          &~.form-field__btn svg path {
            stroke: $primary-blue;
          }
        }
      }
      &__input:not(:last-of-type) {
        margin-bottom: 20px;
      }
      &__input:last-of-type {
        margin-bottom: 40px;
      }
      .form-field {
        position: relative;
        &__btn {
          position: absolute;
          top: 1px;
          right: 12px;
          z-index: 2;
          border: none;
          height: 46px;
          border-top-right-radius: $radius;
          border-bottom-right-radius: $radius;
          background-color: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
      &__btn {
        min-width: 176px;
        border-radius: $small-radius;
      }
    }
}
</style>
