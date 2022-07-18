// https://vuejs.org/guide/reusability/composables.html#mouse-tracker-example
import {
  getCurrentInstance,
  ref,
  // computed,
  watch,
  onMounted,
  // onUnmounted,
  isRef,
  isReactive,
  unref
} from 'vue'

import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import debounce from 'lodash/debounce'
import isDate from 'lodash/isDate'

import windowExists from 'linna-util/windowExists'

const prefix = 'vue-persist-'
const expirationCutoff = 14 // days

const timestampIsFresh = (date) => {
  return Math.abs(differenceInCalendarDays(date, new Date())) < expirationCutoff
}

const getPersistKey = (instance, input) => {
  const componentName = instance.type.__name
  const componentInstanceId = instance.uid

  if (input) {
    const inputVal = unref(input)

    if (inputVal === true) {
      return componentName
    }

    return inputVal

  }

  return componentName + '-' + componentInstanceId
}



// Set a computed property to automatically store in localStorage
export default (persistData, persistKeyInput, loadManually) => {
  const instance = getCurrentInstance()
  const persistKey = getPersistKey(instance, persistKeyInput)

  // console.log('getCurrentInstance', instance)



  // Storage

  const storePersistData = debounce(function () {
    console.log('storePersistData', persistKey)

    // Add item to store
    localStorage.setItem(
      prefix + persistKey.value,

      // Value to store
      JSON.stringify({
        timestamp: new Date(),
        data: persistData.value
      })

    )
  }, 500)

  const clearByKey = (key) => {
    if (windowExists()) {
      localStorage.removeItem(key)
    }
  }

  const clearPersistData = () => {
    console.log('clearPersistData', persistKey)

    return clearByKey(persistKey.value)
  }

  const loadPersistData = () => {
    console.log('loadPersistData', persistKey)

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
                instance.emit('isLoaded', parsed.data)
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
          instance.emit('isLoaded', null)
        }

      }
    }
  }



  // Props
  const isLoaded = ref(0)

  // Watchers
  if (windowExists() && persistKey) {

    if (isRef(persistKey) || isReactive(persistKey)) {
      watch(persistKey, storePersistData)
    }

    watch(persistData, storePersistData)
  }

  // Lifecycle
  if (!loadManually) {
    onMounted(loadPersistData)
  }



  // Expose managed state as return value
  return {
    // init,
    // uninit,
    isLoaded,
    clearPersistData,
    // componentName,
    // componentId,
    // defaultPersistKey,
    // defaultInstancePersistKey,
    persistKey,
    persistData
  }
}
