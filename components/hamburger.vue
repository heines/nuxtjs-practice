<template lang="pug">
  .hamburger(
    :class = "{ 'is-opened': isOpened }"
    )
    .hamburger__icon(
      @click = "toggleHum"
      )
      .hamburger__icon-bar
</template>
<script>
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleHum() {
      this.isOpened = !this.isOpened;
    },
  },
}
</script>
<style lang="scss" scoped>
.hamburger {
  background-color: $color-key;
  &__icon {
    position: relative;
    cursor: pointer;
    pointer-events: painted;
    @include l-more-than-mobile {
      width: 80px;
      height: 80px;
    }
    @include l-mobile {
      width: 25px;
      height: 25px;
    }
    &-bar {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      background-color: $color-base;
      @include l-more-than-mobile {
        width: 52px;
        height: 4px;
      }
      @include l-mobile {
        width: 25px;
        height: 2px;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background-color: $color-base;
      }
      &::before {
        top: -400%;
      }
      &::after {
        top: 400%;
      }
    }
  }
  
  &__icon {
    &-bar {
      transition-duration: 0.2s;
      transition-property: background-color;
      &::before,
      &::after {
        transform-origin: left;
        transition-duration: 0.2s;
        transition-property: transform;
      }
    }
  }
  &.is-opened &{
    &__icon {
      &-bar {
        background-color: rgba($color-base, 0);
        &::before,
        &::after {
          transform-origin: left;
          transition-duration: 0.2s;
          transition-property: transform;
        }
        &::before {
          transform: translateY(3px) rotate(30deg);
        }
        &::after {
          transform: translateY(-3px) rotate(-30deg);
        }
      }
    }
  }
}
</style>
