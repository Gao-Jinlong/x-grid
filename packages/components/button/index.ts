import XButton from './src/button.vue'
import type { App } from 'vue'

XButton.install = (app: App) => {
  app.component(XButton.name!, XButton)
}

export { XButton }
