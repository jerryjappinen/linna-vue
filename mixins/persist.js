import usePersist from '../composables/persist'

export default {

  data () {
    return {
      persist: undefined,
      persistKey: undefined,
      persistLoaded: false,
      clearPersistData: undefined
    }
  },

  mounted () {
    const { clearPersistData, persistLoaded } = usePersist(this.persistKey, this.persist, this.loadPersistManually)
  }

}
