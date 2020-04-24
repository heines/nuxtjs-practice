<template lang="pug">
  .container
    .container-wrap
      .bookmark
        .bookmark-wrap
          template(
            v-if="posts.length"
            )
            ul(
              v-for="(post, i) in posts"
              :key="i"
              )
              li
                nuxt-link(
                  :to="{ name: 'text-url', params: {url: post.fields.url} }"
                  )
                  h4 {{ $dateFns.format(post.sys.createdAt, 'yyyy. MMM. d') }}
                  h3 {{ post.fields.title }}
      h1.title
        |storage
      .band
        nuxt-link(
          to="/about"
          ) about
</template>

<script>
import client from '~/plugins/contentful';

export default {
  data () {
    return {
      title: 'テストサイト',
      post: '',
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
  },
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: 'post',
    }).then(res => {
      posts = res.items
    })
    .catch(console.error)
    return { posts }
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
    position: relative;
    width: 90%;
    background: #f0f8ff;
  }
}

.bookmark {
  position: absolute;
  top: -10px;
  right: 10px;
  width: 200px;
  height: 200px;
  background-image: url('~assets/image/bookmark.jpg');
  background-size: cover;
  overflow-y: scroll;
  &-wrap {
    position: relative;
    padding: 1em;
    color: #fff;
    text-align: left;
    ul {
      padding: 0;
    }
    h3, h4 {
      color: #fff;
    }
    h3 {
      font-weight: bold;
    }
    h4 {
      font-size: 0.8em;
    }
  }
}

.band {
  position: relative;
  bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  height: 150px;
  background: #fffaf0;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $color-key;
  letter-spacing: 1px;
  text-align: left;
  margin: 0 0 0 10px;
}

.links {
  padding-top: 15px;
}
</style>
