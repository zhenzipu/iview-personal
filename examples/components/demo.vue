<!-- //Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  line-height: 40px;
  border-left: 2px solid #ccc;
  padding-left: 10px;
}
</style>
<template>
  <div>
    <h2>
      <Icon type="logo-buffer"/>DEMO
    </h2>
    <Collapse v-model="defaultName" accordion>
      <Panel name="1">搜索框
        <div slot="content">
          <tco-form
            vertical
            btnName="看看"
            :objData="aSearch"
            :objDefault="objDefault"
            :bhidLable="false"
            :labelWidth="90"
            @handleFormSubmit="handleSearch"
          ></tco-form>
        </div>
      </Panel>
      <Panel name="2">分页table
        <div slot="content">
          <table-paging
            :columns="aTableColumns"
            :data="aTableData"
            :pagination="objPageControl"
            :loading="false"
            :show-header="true"
            :stripe="true"
            :border="true"
            :disHover="false"
            :height="false"
            :width="false"
            @selectChange="selectChange"
            @changePage="changePage"
            @changePageSize="changePageSize"
          ></table-paging>
        </div>
      </Panel>
      <Panel name="3">合并table
        <div slot="content">
          <table-combine
            id="zzp"
            :columns="aTableColumns"
            :data="aTableData"
            :border="true"
            :disHover="true"
            @changePageSize="changePageSize"
          ></table-combine>
        </div>
      </Panel>
      <Panel name="4">编辑table
        <div slot="content">
          <table-edit
            :columns="aTableColumnsEdit"
            :data="aTableDataEdit"
            :border="true"
            :disHover="true"
          ></table-edit>
          <Button @click="handleLook">控制台查看数据</Button>
        </div>
      </Panel>
      <Panel name="5">组织结构树
        <div slot="content">
          <tco-tree :objData="aTreeData" :objDefaultKey="objDefaultKey" @selectNode="selectNode"></tco-tree>
        </div>
      </Panel>
      <Panel name="6">上传组件
        <div slot="content">
          <tco-upload
            name="uploadName"
            action="//jsonplaceholder.typicode.com/posts/"
            :format="[]"
            :data="{a:'sdf'}"
            :on-success="uploadSuccess"
          ></tco-upload>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  data() {
    return {
      defaultName: "5",
      objDefault: {
        inputNumber: 4,
        input: "dddddd",
        radio: "2",
        select: "1"
      },
      aSearch: [
        {
          type: "select",
          label: "下拉框",
          value: "select",
          // disabled:true,
          // required: true,
          clearable: true,
          filterable: true,
          // defaultValue: '1',
          placeholder: "请选择",
          data: [
            {
              name: "option1",
              disabled: true,
              value: "1"
            },
            {
              name: "option2",
              value: "2"
            }
          ]
        },
        {
          type: "radio",
          label: "单选框",
          value: "radio",
          // defaultValue: '1',
          // required: true,
          placeholder: "请选择",
          data: [
            {
              name: "check1",
              disabled: true,
              value: "1"
            },
            {
              name: "check2",
              value: "2"
            }
          ]
        },
        {
          type: "input",
          value: "input",
          disabled: true,
          clearable: true,
          label: "输入框",
          prefix: "ios-contact",
          suffix: "ios-search",
          // required: true,
          placeholder: "请输入"
        },
        {
          type: "inputNumber",
          value: "inputNumber",
          disabled: true,
          label: "数字输入框",
          // required: true,
          placeholder: "请输入"
        },
        {
          type: "date",
          label: "开始时间",
          disabled: true,
          dateType: "month",
          value: "begin",
          format: "yyyy-MM",
          // required: true,
          placeholder: "选择开始时间",
          limit: {
            up: "2018-01-01 00:00:00"
            // down: '2015-01-01 00:00:00'
          }
        },
        {
          type: "date",
          label: "结束时间",
          disabled: true,
          dateType: "month",
          value: "end",
          format: "yyyy-MM",
          // required: true,
          placeholder: "选择结束时间",
          limit: {
            up: "2018-01-01 00:00:00",
            down: "2015-01-01 00:00:00"
          }
        }
      ],
      aTableData: [
        {
          key1: "aaa",
          key2: "bbb",
          key3: "ccc"
        },
        {
          key1: "aaa",
          key2: "bbb",
          key3: "ccc"
        },
        {
          key1: "111",
          key2: "222",
          key3: "333"
        }
      ],
      aTableColumns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          key: "key1",
          combine: true,
          title: "第一个"
        },
        {
          key: "key2",
          title: "第二个"
        },
        {
          key: "key3",
          combine: true,
          title: "第三个"
        }
      ],
      aTableColumnsEdit: [
        {
          key: "key1",
          title: "第一列",
          edit: {
            type: "input",
            key: "key1"
          }
        },
        {
          key: "key2",
          title: "第二列",
          edit: {
            type: "inputNumber",
            key: "key2"
          }
        },
        {
          key: "key3",
          title: "第三列",
          edit: {
            type: "select",
            key: "key3",
            option: []
          }
        }
      ],
      aTableDataEdit: [
        {
          key1: "aaa",
          key2: 11,
          key3: "a"
        },
        {
          key1: "aaa",
          key2: 22,
          key3: "b"
        },
        {
          key1: "111",
          key2: 44,
          key3: "c"
        }
      ],
      objPageControl: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      },
      objDefaultKey: {
        id: "organization_code",
        pId: "parent_organization_code",
        path: "organization_fullpath",
        name: "organization_name",
        fullName: "organization_fullname",
        level: "deep",
        expand: "expand"
      },
      aTreeData: []
    };
  },
  methods: {
    handleSearch(search) {
      console.log("search", search);
    },
    selectChange(value) {
      console.log("selectChange", value);
    },
    changePage(page) {
      console.log("page", page);
    },
    changePageSize(pageSize) {
      console.log("pageSize", pageSize);
    },
    handleLook() {
      console.log(11, this.aTableDataEdit);
    },
    selectNode(node) {
      console.log("node", node);
    },
    // 上传成功
    uploadSuccess(evnet, file) {
      console.log("event", event);
      console.log("file", file);
      this.$Notice.success({
        title: "文件上传成功",
        desc: "文件 " + file.name + " 上传成功。"
      });
    }
  },
  mounted() {
    // 模拟请求下拉框数据
    setTimeout(() => {
      this.aTableColumnsEdit[2].edit.option = [
        {
          value: "a",
          label: "000-00"
        },
        {
          value: "b",
          label: "111-00"
        },
        {
          value: "c",
          label: "222-00"
        },
        {
          value: "d",
          label: "333-00"
        },
        {
          value: "e",
          label: "444-00"
        }
      ];
      this.aTreeData = [
        {
          organization_code: "00000000",
          parent_organization_code: "00000000",
          organization_name: "京东集团",
          organization_fullname: "京东集团",
          organization_fullpath: "/00000000",
          has_child_department: 1,
          expand:true,
          deep: 0,
          open: 1
        },
        {
          organization_code: "C1",
          parent_organization_code: "C2141",
          organization_name: "资源池",
          organization_fullname: "资产管理-资源池",
          organization_fullpath: "/000000000/C2141/C1",
          has_child_department: 0,
          deep: 3,
          open: 0
        },
        {
          organization_code: "00000872",
          parent_organization_code: "00000000",
          organization_name: "内控合规部",
          organization_fullname: "内控合规部",
          organization_fullpath: "/00000000/00000872",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00010459",
          parent_organization_code: "00000000",
          organization_name: "总裁办公室",
          organization_fullname: "总裁办公室",
          organization_fullpath: "/00000000/00010459",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00012544",
          parent_organization_code: "00000000",
          organization_name: "CHO&GC体系",
          organization_fullname: "CHO&GC体系",
          organization_fullpath: "/00000000/00012544",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00012545",
          parent_organization_code: "00000000",
          organization_name: "CFO体系",
          organization_fullname: "CFO体系",
          organization_fullpath: "/00000000/00012545",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00008987",
          parent_organization_code: "00000000",
          organization_name: "京东金融",
          organization_fullname: "京东金融",
          organization_fullpath: "/00000000/00008987",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00013807",
          parent_organization_code: "00000000",
          organization_name: "京东商城",
          organization_fullname: "京东商城",
          organization_fullpath: "/00000000/00013807",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00017156",
          parent_organization_code: "00000000",
          organization_name: "京东到家",
          organization_fullname: "京东到家",
          organization_fullpath: "/00000000/00017156",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00018479",
          parent_organization_code: "00000000",
          organization_name: "综合部",
          organization_fullname: "综合部",
          organization_fullpath: "/00000000/00018479",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00018996",
          parent_organization_code: "00000000",
          organization_name: "保险业务筹备部",
          organization_fullname: "保险业务筹备部",
          organization_fullpath: "/00000000/00018996",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00018997",
          parent_organization_code: "00000000",
          organization_name: "CPO体系",
          organization_fullname: "CPO体系",
          organization_fullpath: "/00000000/00018997",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00020462",
          parent_organization_code: "00000000",
          organization_name: "CTO体系",
          organization_fullname: "CTO体系",
          organization_fullpath: "/00000000/00020462",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "00013505",
          parent_organization_code: "00000872",
          organization_name: "交易风险管理部",
          organization_fullname: "内控合规部-交易风险管理部",
          organization_fullpath: "/00000000/00000872/00013505",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00000893",
          parent_organization_code: "00000872",
          organization_name: "办公室",
          organization_fullname: "内控合规部-办公室",
          organization_fullpath: "/00000000/00000872/00000893",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00003123",
          parent_organization_code: "00000872",
          organization_name: "审计部",
          organization_fullname: "内控合规部-审计部",
          organization_fullpath: "/00000000/00000872/00003123",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00003124",
          parent_organization_code: "00000872",
          organization_name: "监察部",
          organization_fullname: "内控合规部-监察部",
          organization_fullpath: "/00000000/00000872/00003124",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00012113",
          parent_organization_code: "00029430",
          organization_name: "经营保障部",
          organization_fullname: "京东物流-经营保障部",
          organization_fullpath: "/00000000/00029430/00012113",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00016552",
          parent_organization_code: "00000872",
          organization_name: "合规技术研发部",
          organization_fullname: "内控合规部-合规技术研发部",
          organization_fullpath: "/00000000/00000872/00016552",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00010461",
          parent_organization_code: "00010459",
          organization_name: "综合管理部",
          organization_fullname: "总裁办公室-综合管理部",
          organization_fullpath: "/00000000/00010459/00010461",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00016432",
          parent_organization_code: "00010459",
          organization_name: "会务部",
          organization_fullname: "总裁办公室-会务部",
          organization_fullpath: "/00000000/00010459/00016432",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00000867",
          parent_organization_code: "00012544",
          organization_name: "法务部",
          organization_fullname: "CHO&GC体系-法务部",
          organization_fullpath: "/00000000/00012544/00000867",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00005354",
          parent_organization_code: "00012544",
          organization_name: "办公室",
          organization_fullname: "CHO&GC体系-办公室",
          organization_fullpath: "/00000000/00012544/00005354",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00007235",
          parent_organization_code: "00012544",
          organization_name: "京东大学",
          organization_fullname: "CHO&GC体系-京东大学",
          organization_fullpath: "/00000000/00012544/00007235",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00008373",
          parent_organization_code: "00012544",
          organization_name: "集团招采中心",
          organization_fullname: "CHO&GC体系-集团招采中心",
          organization_fullpath: "/00000000/00012544/00008373",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00017089",
          parent_organization_code: "00012544",
          organization_name: "人力资源部",
          organization_fullname: "CHO&GC体系-人力资源部",
          organization_fullpath: "/00000000/00012544/00017089",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00017129",
          parent_organization_code: "00012544",
          organization_name: "行政部",
          organization_fullname: "CHO&GC体系-行政部",
          organization_fullpath: "/00000000/00012544/00017129",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00024856",
          parent_organization_code: "00012544",
          organization_name: "海外HRBP部",
          organization_fullname: "CHO&GC体系-海外HRBP部",
          organization_fullpath: "/00000000/00012544/00024856",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00001099",
          parent_organization_code: "00012545",
          organization_name: "财务部",
          organization_fullname: "CFO体系-财务部",
          organization_fullpath: "/00000000/00012545/00001099",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00007348",
          parent_organization_code: "00012545",
          organization_name: "预算与分析部",
          organization_fullname: "CFO体系-预算与分析部",
          organization_fullpath: "/00000000/00012545/00007348",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00007336",
          parent_organization_code: "00012545",
          organization_name: "办公室",
          organization_fullname: "CFO体系-办公室",
          organization_fullpath: "/00000000/00012545/00007336",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00007349",
          parent_organization_code: "00012545",
          organization_name: "投资者关系部",
          organization_fullname: "CFO体系-投资者关系部",
          organization_fullpath: "/00000000/00012545/00007349",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00007350",
          parent_organization_code: "00012545",
          organization_name: "报告部",
          organization_fullname: "CFO体系-报告部",
          organization_fullpath: "/00000000/00012545/00007350",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00008970",
          parent_organization_code: "00012545",
          organization_name: "企业发展部",
          organization_fullname: "CFO体系-企业发展部",
          organization_fullpath: "/00000000/00012545/00008970",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00011162",
          parent_organization_code: "00012545",
          organization_name: "税务与资金管理部",
          organization_fullname: "CFO体系-税务与资金管理部",
          organization_fullpath: "/00000000/00012545/00011162",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "00010490",
          parent_organization_code: "00008987",
          organization_name: "支付业务部",
          organization_fullname: "京东金融-支付业务部",
          organization_fullpath: "/00000000/00008987/00010490",
          has_child_department: 1,
          deep: 2,
          open: 0
        }
      ];
    }, 500);
  }
};
</script>
