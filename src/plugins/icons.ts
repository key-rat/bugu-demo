import * as Elicons from '@element-plus/icons-vue'
import type { App } from 'vue'
function setupIcon(app: App<Element>): void {
  Object.keys(Elicons).forEach((key) => {
    app.component(key, Elicons[key as keyof typeof Elicons])
  })
}
export { setupIcon }
