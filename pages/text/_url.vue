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
      title: 'title',
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: 'コンテンツ' }
      ]
    }
  },
}
</script>

<style lang="css">
</style>
