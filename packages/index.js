// 导入颜色选择器组件
import tcoForm from "./tco-form";
import tablePaging from "./table-paging";
import tableCombine from "./table-combine";
import tableEdit from "./table-edit";
import tcoTree from "./tco-tree";
import tcoUpload from "./tco-upload";

// 存储组件列表
const components = [
  tcoForm,
  tablePaging,
  tableCombine,
  tableEdit,
  tcoTree,
  tcoUpload
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  tcoForm,
  tablePaging,
  tableCombine,
  tableEdit,
  tcoTree,
  tcoUpload
};
