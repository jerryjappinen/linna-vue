import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

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

export default defineStore('device', () => {
  const cursor = useCursor()
  const network = useNetwork()
  const platform = usePlatform()
  const time = useTime()
  const viewport = useViewport()

  const modules = {
    cursor,
    network,
    platform,
    time,
    viewport
  }

  const run = (methodName) => {
    keys.forEach((key) => {
      if (modules[key][methodName]) {
        modules[key][methodName]()
      }
    })
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
