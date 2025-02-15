// 导入组件，组件必须声明 name
import SimpleDrawing from './SimpleDrawing.vue'

// 为组件提供 install 安装方法，供按需引入
SimpleDrawing.install = function(Vue) {
  Vue.component(SimpleDrawing.name, SimpleDrawing)
}

// 默认导出组件
export default SimpleDrawing
