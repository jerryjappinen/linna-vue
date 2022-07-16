<script>
import GooglePlayBadge from './GooglePlayBadge'
import ExternalLink from './ExternalLink'

export default {

  components: {
    GooglePlayBadge,
    ExternalLink
  },

  props: {

    packageName: {
      type: [Number, String],
      required: true
    },

    light: {}

  },

  computed: {

    href () {
      return this.packageName
        ? 'http://play.google.com/store/apps/details?id=' + this.packageName
        : null
    }

  }

}
</script>

<template>
  <ExternalLink
    class="c-google-play-link"
    :href="href"
  >
    <slot>
      <GooglePlayBadge
        class="c-google-play-link-badge"
        :light="light"
      />
    </slot>
  </ExternalLink>
</template>
