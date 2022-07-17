<script>
import isAbsoluteUrl from 'linna-util/isAbsoluteUrl'

export default {

  props: {

    file: {
      type: String,
      required: true
    },

    node: {
      type: [Number, String],
      required: false
    }

  },

  computed: {

    src () {
      let url = ''

      if (isAbsoluteUrl(this.file)) {
        url = this.file
      } else {
        url = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F' + this.file
      }

      if (this.node) {
        url += '%2F%3Fnode-id%3D' + this.node
      }

      return url
    }

  }
}
</script>

<template>
  <iframe :src="src" class="c-figma-canvas" allowfullscreen />
</template>
