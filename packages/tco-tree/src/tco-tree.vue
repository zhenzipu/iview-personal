<style scoped>
</style>
<template>
  <Tree
    class="tco-tree"
    :data="aServerTree"
    @on-select-change="treeSelectChange"
    :render="renderContent"
  ></Tree>
</template>
<script>
export default {
  name: "tco-tree",
  props: {
    objData: Array,
    objDefaultKey: {
      type: Object,
      default: () => {
        return {
          id: "id",
          pId: "pId",
          path: "path",
          pPath: "pPath",
          name: "name",
          fullName: "fullName",
          level: "level",
          expand: "expand"
        };
      }
    }
  },
  data() {
    return {
      aServerTree: [],
      strCurrentNodeId: ""
    };
  },
  watch: {
    objData: {
      handler() {
        this.updateTree();
      },
      deep: true
    }
  },
  methods: {
    // 获取选中节点ID
    treeSelectChange(node) {
      this.strCurrentNodeId = node["id"];
      this.$emit("selectNode", node);
    },
    renderContent(h, { root, node, data }) {
      let icon = "";
      let icon_color = "";
      let icon_size = 12;
      if (data.level == 0) {
        icon = "ios-home";
        icon_color = "#2d8cf0";
        icon_size = 18;
      } else if (data.level == 1) {
        icon = "ios-bookmark";
        icon_color = "#19be6b";
        icon_size = 16;
      } else if (data.level == 2) {
        icon = "md-disc";
        icon_color = "#9a66e4";
        icon_size = 14;
      } else if (data.level == 3) {
        icon = "ios-cafe";
        icon_color = "#ff9900";
      }
      var nodeSelectedClassName = "";
      // 当前选中的节点的css-class控制
      if (data.id === this.strCurrentNodeId) {
        nodeSelectedClassName = "ivu-tree-title-selected";
      }
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: icon,
                size: icon_size,
                color: icon_color
              },
              style: {
                marginRight: "1px"
              }
            }),
            h(
              "span",
              {
                attrs: {
                  class: "ivu-tree-title " + nodeSelectedClassName
                },
                on: {
                  click: (root, data) => {
                    let currentnode = arguments[1].node;
                    this.treeSelectChange(currentnode.node);
                  }
                }
              },
              data.title
            )
          ])
        ]
      );
    },
    updateTree() {
      let keys = this.objDefaultKey;
      let objNode = {};
      this.objData.map(item => {
        let node = {};
        node.id = item[keys.id];
        node.pId = item[keys.pId];
        node.path = item[keys.path] || null;
        node.pPath = item[keys.pPath] || null;
        node.name = item[keys.name];
        node.title = item[keys.name];
        node.fullName = item[keys.fullName] || null;
        node.level = item[keys.level];
        node.expand = item[keys.expand] || false;
        node.children = [];
        objNode[node.id] = node;
      });
      for (const key in objNode) {
        let $node = objNode[key];
        let $pNode = objNode[$node.pId];
        if ($pNode && $pNode !== $node) {
          $pNode.children.push($node);
        }
      }
      this.aServerTree.push(objNode[this.objData[0][keys.id]]);
    }
  },
  mounted() {
    // this.updateTree();
  }
};
</script>