<template>
    <div class="notification">
        <p class="notification__title">
            Поиск сохранён в разделе «Избранное»
        </p>
        <router-link :to="{ name: 'favourites' }">
            <span class="notification__link">
                Перейти в избранное
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Notification',
};
</script>

<style lang="scss" scoped>
.notification {
    max-width: 220px;
    padding: 15px;
    background-color: $white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: $radius;
    font-family: 'PT Sans', sans-serif;
    &__title {
        line-height: 24px;
        color: $dark;
        opacity: 0.5;
        margin-bottom: 15px;
    }
    &__link {
        line-height: 24px;
        color: $primary-blue;
    }
}

</style>
