<script>
import AppStoreBadge from './AppStoreBadge'
import ExternalLink from './ExternalLink'

export default {

  components: {
    AppStoreBadge,
    ExternalLink
  },

  props: {

    appId: {
      type: [Number, String],
      required: true
    },

    refer: {},
    here: {},
    light: {}

  },

  computed: {

    href () {
      return this.appId
        ? `https://itunes.apple.com/us/app/ab-classic/${this.appId}?mt=8`
        : null
    }

  }

}
</script>

<template>
  <ExternalLink
    class="c-app-store-link"
    :href="href"
    :here="here"
    :refer="refer"
  >
    <slot>
      <AppStoreBadge
        class="c-app-store-link-badge"
        :light="light"
      />
    </slot>
  </ExternalLink>
</template>
