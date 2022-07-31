import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

import useCursor from '../composables/useCursor'
import useNetwork from '../composables/useNetwork'
import usePlatform from '../composables/usePlatform'
import useTime from '../composables/useTime'
import useViewport from '../composables/useViewport'

export default defineStore('device', () => {
  const modules = {
    cursor: useCursor(),
    network: useNetwork(),
    platform: usePlatform(),
    time: useTime(),
    viewport: useViewport()
  }

  // Call a function from each module if it exists
  const run = (methodName) => {
    for (const key in modules) {
      if (modules[key][methodName]) {
        modules[key][methodName]()
      }
    }
  }

  const init = () => {
    run('init')
  }

  const uninit = () => {
    run('uninit')
  }

  return {
    ...modules,
    init,
    uninit
  }
})
