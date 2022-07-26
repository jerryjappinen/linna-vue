import { defineStore } from 'pinia'

import useCursor from '../composables/useCursor'
import useNetwork from '../composables/useNetwork'
import usePlatform from '../composables/usePlatform'
import useTime from '../composables/useTime'
import useViewport from '../composables/useViewport'

const keys = [
  'cursor',
  'network',
  'platform',
  'time',
  'viewport'
]

export default defineStore('device', {

  state () {
    return {
      cursor: useCursor(),
      network: useNetwork(),
      platform: usePlatform(),
      time: useTime(),
      viewport: useViewport()
    }
  },

  actions: {

    run (methodName) {
      keys.forEach((key) => {
        if (this[key][methodName]) {
          this[key][methodName]()
        }
      })
    },

    init () {
      this.run('init')
    },

    uninit () {
      this.run('uninit')
    }

  }

})
