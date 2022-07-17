<script>
import useTime from '../composables/time'

import Duration from './Duration'

const time = useTime()

export default {

  components: {
    Duration
  },

  props: {
    date: {},
    prefix: {},
    suffix: {},
    cutoff: {}
  },

  data () {
    return {
      currentTime: time.current
    }
  }

}
</script>

<template>
  <Duration
    class="c-live-duration"
    :date="date"
    :end-date="currentTime"
    :prefix="prefix"
    :suffix="suffix"
    :cutoff="cutoff"
  />
</template>
