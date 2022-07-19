<script>
import { isNumber, isString } from 'lodash'

export default {

  props: {
    data: {
      default: null
    }
  },

  computed: {
    content () {
      if (isNumber(this.data) || isString(this.data)) {
        return this.data
      }
      return JSON.stringify(this.data, null, 2)
    }
  }

}
</script>

<template>
  <pre class="c-dump"><code>{{ content }}</code></pre>
</template>
