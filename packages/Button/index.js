// 导入组件，组件必须声明 name
import JdButton from './src'
// 为组件提供 install 安装方法，供按需引入
JdButton.install = function (Vue) {
  Vue.component(JdButton.name, JdButton)
}
// 导出组件
export default JdButton
