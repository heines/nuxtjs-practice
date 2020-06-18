<template lang="pug">
  .menu(
    :class = "{ 'is-opened': isOpened }"
    )
    hamburger
</template>
<script>
import hamburger from '@/components/hamburger';

export default {
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    hamburger
  },
  methods: {
    toggleHum() {
      this.isOpened = !this.isOpened;
    },
  },
}
</script>
<style lang="scss" scoped>
.menu {
  min-height: 100vh;
  background-color: $color-key;
}
</style>
