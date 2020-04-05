<template lang="pug">
  div test
</template>

<script>
import client from '~/plugins/contentful';

export default {
  data () {
    return {
      posts: {
        fileds: {
          description: ''
        }
      }
    }
  },
  head () {
    return {
      title: this.posts[0].fields.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: this.posts[0].fields.description }
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

<style lang="css">
</style>
