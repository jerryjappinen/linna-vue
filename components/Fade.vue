<script>
import CustomTransition from './CustomTransition'

export default {
  name: 'Fade',

  components: {
    CustomTransition
  },

  props: [
    'mode',
    'appear'
  ]

}
</script>

<template>
  <CustomTransition
    :mode="mode"
    :appear="appear"
    name="fade"
  ><slot /></CustomTransition>
</template>

<style lang="scss">
.transition-fade-enter-active,
.transition-fade-leave-active {
  // opacity: 1;
  @include transition-fast;
  @include transition-properties-common;
}

// Start state for enter
.transition-fade-enter,

// End state for exit
.transition-fade-leave-to {
  opacity: 0;
}

</style>
