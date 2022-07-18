// https://vuejs.org/guide/reusability/composables.html#mouse-tracker-example
import {
  getCurrentInstance,
  ref,
  // computed,
  watch,
  onMounted,
  // onUnmounted,
  isRef
} from 'vue'

import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
// import debounce from 'lodash/debounce'
// import isDate from 'lodash/isDate'
// import isFunction from 'lodash/isFunction'

import windowExists from 'linna-util/windowExists'

const prefix = 'vue-persist-'
const expirationCutoff = 14 // days

const timestampIsFresh = (date) => {
  return Math.abs(differenceInCalendarDays(date, new Date())) < expirationCutoff
}



// Set a computed property to automatically store in localStorage
export default (persistKey, persistData) => {

  // FIXME: can I get the component name and ID from here to use a default key?
  // FIXME: can I get the persist prop from here?
  const inst = getCurrentInstance()
  console.log('getCurrentInstance', inst)



  // Props
  const isLoaded = ref(0)

  // Callbacks
  if (windowExists() && peristKey && peristKey.value && persistData) {

    const callback = debounce(function () {
      localStorage.setItem(

        // Key to store value with
        prefix + persistKey.value,

        // Value to store
        JSON.stringify({
          timestamp: new Date(),
          data: persistData.value
        })

      )
    }, 500)

    // Watchers
    watch(persistKey, callback)
    watch(persistData, callback)

  }



  // Storage

  const clearByKey = (key) => {
    if (windowExists()) {
      localStorage.removeItem(key)
    }
  }

  const clear = () => {
    return clearByKey(persistKey.value)
  }

  const loadPersistedData = () => {
    if (windowExists()) {
      if (persistKey && persistData) {
        const key = prefix + persistKey.value

        // Load serialized data from localStorage
        // NOTE: this is a synchronous operation, theoretically it might slow things down
        const stored = localStorage.getItem(key)

        if (stored) {
          try {
            const parsed = JSON.parse(stored)

            // We found data in local storage, let's load it up
            if (parsed && parsed.timestamp && parsed.data) {

              // Needs a valid timestamp
              const storedDate = new Date(parsed.timestamp)
              if (isDate(storedDate) && timestampIsFresh(storedDate)) {

                // Pass on the data that was found and fire an event
                persistData.value = parsed.data
                isLoaded.value = true
                this.$emit('isLoaded', parsed.data)

              }

            }

            // Remove items if parsing leads to errors
          } catch (error) {

            // FIXME: keeping this here until gated content is testes
            // eslint-disable-next-line no-console
            console.warn(error)

            localStorage.removeItem(key)
          }

        }

        // Emit loaded event with null value
        if (!isLoaded.value) {
          isLoaded.value = true
          this.$emit('isLoaded', null)
        }

      }
    }
  }

  onMounted(loadPersistedData)



  // Expose managed state as return value
  return {
    // init,
    // uninit,
    isLoaded,
    clear,
    // componentName,
    // componentId,
    // defaultPersistKey,
    // defaultInstancePersistKey,
    key: persistKey,
    data: persistData
  }
}
