import type { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button

// 导出Button组件的所有类型 提供给使用者
export * from './types'