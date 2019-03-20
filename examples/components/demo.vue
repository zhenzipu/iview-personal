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
        <!-- vertical -->
        <div slot="content">
          <tco-form
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
            :on-success="uploadSuccess"
          ></tco-upload>
        </div>
      </Panel>
      <Panel name="7">搜索组件-单个触发
        <div slot="content">
          <tco-form-single
            :labelWidth="65"
            :objDefault="objDefaultSingle"
            :objData="objSearchSingle"
            @fetchParams="handleFetchData"
          />
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

      // 默认数据
      objDefaultSingle: {
        start: "2019-05-01",
        end: "2019-09-01",
        radio: "2",
        inputNumber: 4,
        input: "sdfsdfs",
        select: "2"
      },
      // 搜索数据
      objSearchSingle: [
        {
          type: "date",
          label: "开始时间",
          dateType: "daterange", //date、daterange、datetime、datetimerange、year、month
          value: ["date1", "date2"], //当type为datarange是value为数组[value1,value2]
          format: "yyyy-MM", //date | daterange：yyyy-MM-dd、datetime | datetimerange：yyyy-MM-dd
          placeholder: "选择结束时间",
          limit: {
            //时间范围
            // up: "2018-01-01 00:00:00",
            down: "2019-01-01 00:00:00"
          },
          width: 200
        },
        {
          type: "date",
          label: "结束时间",
          dateType: "month", //date、daterange、datetime、datetimerange、year、month
          value: "end", //当type为datarange是value为数组[value1,value2]
          format: "yyyy-MM", //date | daterange：yyyy-MM-dd、datetime | datetimerange：yyyy-MM-dd
          placeholder: "选择结束时间",
          limit: {
            //时间范围
            // up: "2018-01-01 00:00:00",
            down: "2019-01-01 00:00:00"
          }
        },
        {
          type: "radio",
          label: "单选框",
          value: "radio",
          //defaultValue: '1',//默认value
          placeholder: "请选择",
          data: [
            {
              name: "check1",
              value: "1"
            },
            {
              name: "check2",
              value: "2"
            }
          ]
        },
        {
          type: "inputNumber",
          value: "inputNumber",
          label: "数字输入框",
          placeholder: "请输入"
        },
        {
          type: "select",
          label: "下拉框",
          value: "select",
          clearable: true, //是否可清除
          filterable: true, //是否可搜索
          //defaultValue: '1',//默认value
          placeholder: "请选择",
          data: [
            {
              name: "option1",
              value: "1"
            },
            {
              name: "option2",
              value: "2"
            }
          ]
        },
        {
          type: "input",
          value: "input",
          label: "输入框",
          suffix: "ios-search", //	输入框尾部图标
          placeholder: "请输入"
        }
      ],

      defaultName: "1",
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
          //   disabled: true,
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
          //   disabled: true,
          label: "数字输入框",
          // required: true,
          placeholder: "请输入"
        },
        {
          type: "date",
          label: "开始时间",
          //   disabled: true,
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
          //   disabled: true,
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
    },
    // 单个表单搜索
    handleFetchData(params){
        console.log('单个表单搜索',params)
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
          organization_code: "10001",
          parent_organization_code: "10001",
          organization_name: "集团",
          organization_fullname: "集团",
          organization_fullpath: "/10001",
          has_child_department: 1,
          expand: true,
          deep: 0,
          open: 1
        },
        {
          organization_code: "1000a",
          parent_organization_code: "1000b",
          organization_name: "资源池",
          organization_fullname: "资产管理-资源池",
          organization_fullpath: "/000000000/1000b/1000a",
          has_child_department: 0,
          deep: 3,
          open: 0
        },
        {
          organization_code: "1000c",
          parent_organization_code: "10001",
          organization_name: "内控合规部",
          organization_fullname: "内控合规部",
          organization_fullpath: "/10001/1000c",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000d",
          parent_organization_code: "10001",
          organization_name: "总裁办公室",
          organization_fullname: "总裁办公室",
          organization_fullpath: "/10001/1000d",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000e",
          parent_organization_code: "10001",
          organization_name: "低调点",
          organization_fullname: "低调点",
          organization_fullpath: "/10001/1000e",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000f",
          parent_organization_code: "10001",
          organization_name: "安安安",
          organization_fullname: "安安安",
          organization_fullpath: "/10001/1000f",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000g",
          parent_organization_code: "10001",
          organization_name: "aa",
          organization_fullname: "aa",
          organization_fullpath: "/10001/1000g",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000h",
          parent_organization_code: "10001",
          organization_name: "bb",
          organization_fullname: "bb",
          organization_fullpath: "/10001/1000h",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000i",
          parent_organization_code: "10001",
          organization_name: "cc",
          organization_fullname: "cc",
          organization_fullpath: "/10001/1000i",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000j",
          parent_organization_code: "10001",
          organization_name: "dd",
          organization_fullname: "dd",
          organization_fullpath: "/10001/1000j",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000k",
          parent_organization_code: "10001",
          organization_name: "ee",
          organization_fullname: "ee",
          organization_fullpath: "/10001/1000k",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000l",
          parent_organization_code: "10001",
          organization_name: "ff",
          organization_fullname: "ff",
          organization_fullpath: "/10001/1000l",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000m",
          parent_organization_code: "10001",
          organization_name: "gg",
          organization_fullname: "gg",
          organization_fullpath: "/10001/1000m",
          has_child_department: 1,
          deep: 1,
          open: 0
        },
        {
          organization_code: "1000n",
          parent_organization_code: "1000c",
          organization_name: "hh",
          organization_fullname: "内控合规部-hh",
          organization_fullpath: "/10001/1000c/1000n",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000o",
          parent_organization_code: "1000c",
          organization_name: "办公室",
          organization_fullname: "内控合规部-办公室",
          organization_fullpath: "/10001/1000c/1000o",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000p",
          parent_organization_code: "1000c",
          organization_name: "审计部",
          organization_fullname: "内控合规部-审计部",
          organization_fullpath: "/10001/1000c/1000p",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000q",
          parent_organization_code: "1000c",
          organization_name: "监察部",
          organization_fullname: "内控合规部-监察部",
          organization_fullpath: "/10001/1000c/1000q",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000r",
          parent_organization_code: "1000s",
          organization_name: "经营保障部",
          organization_fullname: "京东物流-经营保障部",
          organization_fullpath: "/10001/1000s/1000r",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000t",
          parent_organization_code: "1000c",
          organization_name: "合规技术研发部",
          organization_fullname: "内控合规部-合规技术研发部",
          organization_fullpath: "/10001/1000c/1000t",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000u",
          parent_organization_code: "1000d",
          organization_name: "综合管理部",
          organization_fullname: "总裁办公室-综合管理部",
          organization_fullpath: "/10001/1000d/1000u",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000v",
          parent_organization_code: "1000d",
          organization_name: "会务部",
          organization_fullname: "总裁办公室-会务部",
          organization_fullpath: "/10001/1000d/1000v",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000w",
          parent_organization_code: "1000e",
          organization_name: "法务部",
          organization_fullname: "CHO&GC体系-法务部",
          organization_fullpath: "/10001/1000e/1000w",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000x",
          parent_organization_code: "1000e",
          organization_name: "办公室",
          organization_fullname: "CHO&GC体系-办公室",
          organization_fullpath: "/10001/1000e/1000x",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000y",
          parent_organization_code: "1000e",
          organization_name: "sdf",
          organization_fullname: "CHO&sdf-sdf",
          organization_fullpath: "/10001/1000e/1000y",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "1000z",
          parent_organization_code: "1000e",
          organization_name: "22",
          organization_fullname: "CHO&sdf-342",
          organization_fullpath: "/10001/1000e/1000z",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001a",
          parent_organization_code: "1000e",
          organization_name: "人力资源部",
          organization_fullname: "CHO&GC体系-人力资源部",
          organization_fullpath: "/10001/1000e/10001a",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001b",
          parent_organization_code: "1000e",
          organization_name: "行政部",
          organization_fullname: "CHO&GC体系-行政部",
          organization_fullpath: "/10001/1000e/10001b",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001c",
          parent_organization_code: "1000e",
          organization_name: "sss",
          organization_fullname: "CHO&ff-sss",
          organization_fullpath: "/10001/1000e/10001c",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001d",
          parent_organization_code: "1000f",
          organization_name: "财务部",
          organization_fullname: "CFO体系-财务部",
          organization_fullpath: "/10001/1000f/10001d",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001e",
          parent_organization_code: "1000f",
          organization_name: "ss",
          organization_fullname: "aa-dd",
          organization_fullpath: "/10001/1000f/10001e",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001f",
          parent_organization_code: "1000f",
          organization_name: "办公室",
          organization_fullname: "CFO体系-办公室",
          organization_fullpath: "/10001/1000f/10001f",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001g",
          parent_organization_code: "1000f",
          organization_name: "投资者关系部",
          organization_fullname: "CFO体系-投资者关系部",
          organization_fullpath: "/10001/1000f/10001g",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001h",
          parent_organization_code: "1000f",
          organization_name: "报告部",
          organization_fullname: "CFO体系-报告部",
          organization_fullpath: "/10001/1000f/10001h",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001i",
          parent_organization_code: "1000f",
          organization_name: "企业发展部",
          organization_fullname: "CFO体系-企业发展部",
          organization_fullpath: "/10001/1000f/10001i",
          has_child_department: 0,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001j",
          parent_organization_code: "1000f",
          organization_name: "税务与资金管理部",
          organization_fullname: "CFO体系-税务与资金管理部",
          organization_fullpath: "/10001/1000f/10001j",
          has_child_department: 1,
          deep: 2,
          open: 0
        },
        {
          organization_code: "10001k",
          parent_organization_code: "1000g",
          organization_name: "ss",
          organization_fullname: "ss-支付业务部",
          organization_fullpath: "/10001/1000g/10001k",
          has_child_department: 1,
          deep: 2,
          open: 0
        }
      ];
    }, 500);
  }
};
</script>
