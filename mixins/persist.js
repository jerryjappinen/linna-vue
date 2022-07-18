import usePersist from '../composables/persist'

export default {

  data () {
    return {
      persist: null
    }
  },

  computed: {

    // Override to provide another name
    persistKey () {
      return this.$options.name + '-' + this.id
    }

  },

  mounted () {
    this.persist = usePersist(this.persisKey, this.persistData)
  }

}
