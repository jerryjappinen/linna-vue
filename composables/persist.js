// https://vuejs.org/guide/reusability/composables.html#mouse-tracker-example
import {
  ref,
  computed,
  // watch,
  // onMounted,
  // onUnmounted,
  isRef
} from 'vue'

// import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
// import debounce from 'lodash/debounce'
// import isDate from 'lodash/isDate'
import isFunction from 'lodash/isFunction'

// import windowExists from 'linna-util/windowExists'

// const prefix = 'vue-persist-'
// const expirationCutoff = 14 // days

// Set a computed property to automatically store in localStorage
// https://vuejs.org/v2/guide/mixins.html
export default (persistDataRefOrComputed, persistKeyInput) => {

  if (!isRef(persistDataRefOrComputed)) {
    throw new Error('Error in persist composable: pass a reactive property or computes to use persist.')
  }

  // Props
  const persistLoaded = ref(0)
  const loadPersistOnCreate = ref(0)

  const componentName = computed(() => {
    return this.$options.name
  })

  const componentId = computed(() => {
    return this.id
  })

  const defaultPersistKey = computed(() => {
    return componentName.value
  })

  const defaultInstancePersistKey = computed(() => {
    return componentName.value + '/' + componentId.value
  })

  const persistKey = computed(() => {
    if (persistKeyInput) {

      // Custom storage key
      if (isReactive(persistKeyInput)) {
        return persistKeyInput.value
      }

      if (isFunction(persistKeyInput)) {
        return persistKeyInput()
      }

      // If true is passed, share persist state across instances
      if (persistKeyInput === true) {
        return this.defaultPersistKey
      }

      // Strings are used as keys themselves
      return persistKeyInput
    }

    // Default to persist by component instance
    return this.defaultInstancePersistKey
  })



  // Internal methods
  // const loadPersistedData = () => {
  //   if (windowExists()) {
  //     if (this.persistKey && this.persist) {
  //       const key = prefix + this.persistKey

  //       // Load serialized data from localStorage
  //       // NOTE: this is a synchronous operation, theoretically it might slow things down
  //       const stored = localStorage.getItem(key)

  //       if (stored) {
  //         try {
  //           const parsed = JSON.parse(stored)

  //           // We found data in local storage, let's load it up
  //           if (parsed && parsed.timestamp && parsed.data) {

  //             // Needs a valid timestamp
  //             const storedDate = new Date(parsed.timestamp)
  //             if (isDate(storedDate)) {

  //               // Only consider items that aren't too old
  //               if (
  //                 Math.abs(
  //                   differenceInCalendarDays(storedDate, new Date())
  //                 ) < expirationCutoff
  //               ) {

  //                 // Pass on the data that was found and fire an event
  //                 this.persist = parsed.data
  //                 this.persistLoaded = true
  //                 this.$emit('persistLoaded', parsed.data)

  //               }

  //             }

  //           }

  //           // Remove items if parsing leads to errors
  //         } catch (error) {

  //           // FIXME: keeping this here until gated content is testes
  //           // eslint-disable-next-line no-console
  //           console.warn(error)

  //           localStorage.removeItem(key)
  //         }

  //       }

  //       // Emit loaded event with null value
  //       if (!this.persistLoaded) {
  //         this.persistLoaded = true
  //         this.$emit('persistLoaded', null)
  //       }

  //     }
  //   }
  // }



  // Expose managed state as return value
  return {
    // init,
    // uninit,
    persistLoaded,
    loadPersistOnCreate,
    componentName,
    componentId,
    defaultPersistKey,
    defaultInstancePersistKey,
    persistKey
  }
}
