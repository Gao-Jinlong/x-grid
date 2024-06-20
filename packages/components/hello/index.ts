import HelloGrid from './HelloGrid.vue'

import type { App } from 'vue'

HelloGrid.install = (app: App) => {
  app.component(HelloGrid.name!, HelloGrid)
}

export { HelloGrid }
