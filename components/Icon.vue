<script>
import kebabCase from 'lodash/kebabCase'
import pascalCase from 'lodash/pascalCase'

export default {

  props: {

    src: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: false
    },

    // Should match your icon auto import settings
    prefix: {
      type: String,
      default: 'Icon'
    }

  },

  computed: {

    className () {
      return kebabCase(this.src)
    },

    component () {
      return pascalCase((this.prefix ? (this.prefix + '-') : '') + this.src)
    }

  }

}
</script>

<template>
  <component
    :is="component"
    :title="title"
    :class="'c-icon-' + className"
    class="c-icon"
  />
</template>

<style lang="scss">

.c-icon {
  width: 1em;
  height: 1em;
}

</style>
