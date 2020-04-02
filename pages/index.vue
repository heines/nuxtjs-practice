<template lang="pug">
  .container
    div.container-wrap
      h1.title
        |storage
      h2.subtitle
        |テキストの掃き溜め
      nuxt-link(
        to="/about"
        ) about
      ul.columns.is-multiline
        li.column.is-one-quarter
          a(
            href="https://nuxtjs.org/"
            target="_blank"
            )
            |Documentation
        li.column.is-one-quarter
          a(
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            )
            |GitHub
</template>

<script>
export default {
  data () {
    return {
      title: 'テストサイト'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &-wrap {
    width: 80%;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $color-key;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
