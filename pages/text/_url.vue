<template lang="pug">
  div.content
    |{{post}}
</template>

<script>
import client from '~/plugins/contentful';

export default {
  data () {
    return {
      post: {
        fields: {
        }
      }
    }
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: this.post.fields.description }
      ]
    }
  },
  async asyncData({ env, params }) {
    let post = []
    await client.getEntries({
      content_type: 'post',
      'fields.url': params.url,
    }).then(res => {
      post = res.items[0]
    })
    .catch(console.error)
    return { post }
  }
}
</script>

<style lang="css">
</style>
