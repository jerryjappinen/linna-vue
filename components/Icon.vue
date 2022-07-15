<script>
import Vector from './Vector'

export default {

  components: {
    Vector
  },

  props: {
    src: {},
    title: {}
  }

}
</script>

<template>
  <Vector
    class="c-icon"
    :src="src"
    :title="title"
  />
</template>

<style lang="scss">

.c-icon {
  width: 1em;
  height: 1em;
}

</style>
