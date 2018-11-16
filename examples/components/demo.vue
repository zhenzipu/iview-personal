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
            <Icon type="logo-buffer" />DEMO</h2>
        <Collapse v-model="defaultName" accordion>
            <Panel name="1">
                搜索框
                <div slot="content">
                    <tco-form vertical btnName="看看" :objData="aSearch" :objDefault="objDefault" :bhidLable="false" :labelWidth="90" @handleFormSubmit="handleSearch"></tco-form>
                </div>
            </Panel>
            <Panel name="2">
                分页table
                <div slot="content">
                    <table-paging :columns="aTableColumns" :data="aTableData" :pagination="objPageControl" :loading="false" :show-header="true" :stripe="true" :border="true" :disHover="false" :height="false" :width="false" @selectChange="selectChange" @changePage="changePage" @changePageSize="changePageSize"></table-paging>
                </div>
            </Panel>
            <Panel name="3">
                合并table
                <div slot="content">
                    <table-combine id="zzp" :columns="aTableColumns" :data="aTableData" :border="true" :disHover="true" @changePageSize="changePageSize"></table-combine>
                </div>
            </Panel>
            <Panel name="4">
                编辑table
                <div slot="content">
                    <table-edit :columns="aTableColumnsEdit" :data="aTableDataEdit" :border="true" :disHover="true"></table-edit>
                    <Button @click="handleLook">控制台查看数据</Button>
                </div>
            </Panel>
            <Panel name="5">
                组织结构树
                <div slot="content">
                    <tco-tree :objData="aTreeData" :objDefaultKey="objDefaultKey" @selectNode="selectNode"></tco-tree>
                </div>
            </Panel>
            <Panel name="6">
                上传组件
                <div slot="content">
                    <tco-upload name="uploadName" action="//jsonplaceholder.typicode.com/posts/" :format="[]" :on-success="uploadSuccess"></tco-upload>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script>
export default {
    name: 'demo',
    props: {},
    data() {
        return {
            defaultName: '5',
            objDefault: {
                inputNumber: 4,
                input: 'dddddd',
                radio: '2',
                select: '1'
            },
            aSearch: [
                {
                    type: 'select',
                    label: '下拉框',
                    value: 'select',
                    // disabled:true,
                    // required: true,
                    clearable: true,
                    filterable: true,
                    // defaultValue: '1',
                    placeholder: '请选择',
                    data: [
                        {
                            name: 'option1',
                            disabled: true,
                            value: '1'
                        },
                        {
                            name: 'option2',
                            value: '2'
                        }
                    ]
                },
                {
                    type: 'radio',
                    label: '单选框',
                    value: 'radio',
                    // defaultValue: '1',
                    // required: true,
                    placeholder: '请选择',
                    data: [
                        {
                            name: 'check1',
                            disabled: true,
                            value: '1'
                        },
                        {
                            name: 'check2',
                            value: '2'
                        }
                    ]
                },
                {
                    type: 'input',
                    value: 'input',
                    disabled: true,
                    clearable: true,
                    label: '输入框',
                    prefix: 'ios-contact',
                    suffix: 'ios-search',
                    // required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'inputNumber',
                    value: 'inputNumber',
                    disabled: true,
                    label: '数字输入框',
                    // required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'date',
                    label: '开始时间',
                    disabled: true,
                    dateType: 'month',
                    value: 'begin',
                    format: 'yyyy-MM',
                    // required: true,
                    placeholder: '选择开始时间',
                    limit: {
                        up: '2018-01-01 00:00:00'
                        // down: '2015-01-01 00:00:00'
                    }
                },
                {
                    type: 'date',
                    label: '结束时间',
                    disabled: true,
                    dateType: 'month',
                    value: 'end',
                    format: 'yyyy-MM',
                    // required: true,
                    placeholder: '选择结束时间',
                    limit: {
                        up: '2018-01-01 00:00:00',
                        down: '2015-01-01 00:00:00'
                    }
                }
            ],
            aTableData: [
                {
                    key1: 'aaa',
                    key2: 'bbb',
                    key3: 'ccc'
                },
                {
                    key1: 'aaa',
                    key2: 'bbb',
                    key3: 'ccc'
                },
                {
                    key1: '111',
                    key2: '222',
                    key3: '333'
                }
            ],
            aTableColumns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    key: 'key1',
                    combine: true,
                    title: '第一个'
                },
                {
                    key: 'key2',
                    title: '第二个'
                },
                {
                    key: 'key3',
                    combine: true,
                    title: '第三个'
                }
            ],
            aTableColumnsEdit: [
                {
                    key: 'key1',
                    title: '第一列',
                    edit: {
                        type: 'input',
                        key: 'key1'
                    }
                },
                {
                    key: 'key2',
                    title: '第二列',
                    edit: {
                        type: 'inputNumber',
                        key: 'key2'
                    }
                },
                {
                    key: 'key3',
                    title: '第三列',
                    edit: {
                        type: 'select',
                        key: 'key3',
                        option: []
                    }
                }
            ],
            aTableDataEdit: [
                {
                    key1: 'aaa',
                    key2: 11,
                    key3: 'a'
                },
                {
                    key1: 'aaa',
                    key2: 22,
                    key3: 'b'
                },
                {
                    key1: '111',
                    key2: 44,
                    key3: 'c'
                }
            ],
            objPageControl: {
                total: 100,
                pageSize: 10,
                currentPage: 1
            },
            objDefaultKey: {
                id: 'deptCode',
                pId: 'parentCode',
                name: 'deptName',
                fullName: 'deptFullname',
                level: 'deep',
                expend: null
            },
            aTreeData: [
                {
                    deptFullname: '京东集团',
                    deptName: '京东集团',
                    deep: 0,
                    parentCode: '',
                    deptCode: '00000000'
                },
                {
                    deptFullname: '资产管理-资源池',
                    deptName: '资源池',
                    deep: 3,
                    parentCode: 'C2141',
                    deptCode: 'C1'
                },
                {
                    deptFullname: 'CCO体系',
                    deptName: 'CCO体系',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00000872'
                },
                {
                    deptFullname: '总裁办公室',
                    deptName: '总裁办公室',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00010459'
                },
                {
                    deptFullname: 'CHO&GC体系',
                    deptName: 'CHO&GC体系',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00012544'
                },
                {
                    deptFullname: 'CFO体系',
                    deptName: 'CFO体系',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00012545'
                },
                {
                    deptFullname: '京东金融',
                    deptName: '京东金融',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00008987'
                },
                {
                    deptFullname: '京东商城',
                    deptName: '京东商城',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00013807'
                },
                {
                    deptFullname: '京东到家',
                    deptName: '京东到家',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00017156'
                },
                {
                    deptFullname: '综合部',
                    deptName: '综合部',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00018479'
                },
                {
                    deptFullname: '保险业务筹备部',
                    deptName: '保险业务筹备部',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00018996'
                },
                {
                    deptFullname: 'CPO体系',
                    deptName: 'CPO体系',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00018997'
                },
                {
                    deptFullname: 'CTO体系',
                    deptName: 'CTO体系',
                    deep: 1,
                    parentCode: '00000000',
                    deptCode: '00020462'
                },
                {
                    deptFullname: 'CCO体系-交易风险管理部',
                    deptName: '交易风险管理部',
                    deep: 2,
                    parentCode: '00000872',
                    deptCode: '00013505'
                },
                {
                    deptFullname: 'CCO体系-办公室',
                    deptName: '办公室',
                    deep: 2,
                    parentCode: '00000872',
                    deptCode: '00000893'
                },
                {
                    deptFullname: 'CCO体系-审计部',
                    deptName: '审计部',
                    deep: 2,
                    parentCode: '00000872',
                    deptCode: '00003123'
                },
                {
                    deptFullname: 'CCO体系-监察部',
                    deptName: '监察部',
                    deep: 2,
                    parentCode: '00000872',
                    deptCode: '00003124'
                },
                {
                    deptFullname: '京东物流-经营保障部',
                    deptName: '经营保障部',
                    deep: 2,
                    parentCode: '00029430',
                    deptCode: '00012113'
                },
                {
                    deptFullname: 'CCO体系-合规技术研发部',
                    deptName: '合规技术研发部',
                    deep: 2,
                    parentCode: '00000872',
                    deptCode: '00016552'
                },
                {
                    deptFullname: '总裁办公室-综合管理部',
                    deptName: '综合管理部',
                    deep: 2,
                    parentCode: '00010459',
                    deptCode: '00010461'
                },
                {
                    deptFullname: '总裁办公室-会务部',
                    deptName: '会务部',
                    deep: 2,
                    parentCode: '00010459',
                    deptCode: '00016432'
                },
                {
                    deptFullname: 'CHO&GC体系-法务部',
                    deptName: '法务部',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00000867'
                },
                {
                    deptFullname: 'CHO&GC体系-办公室',
                    deptName: '办公室',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00005354'
                },
                {
                    deptFullname: 'CHO&GC体系-京东大学',
                    deptName: '京东大学',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00007235'
                },
                {
                    deptFullname: 'CHO&GC体系-集团招采中心',
                    deptName: '集团招采中心',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00008373'
                },
                {
                    deptFullname: 'CHO&GC体系-集团人力资源部',
                    deptName: '集团人力资源部',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00017089'
                },
                {
                    deptFullname: 'CHO&GC体系-行政部',
                    deptName: '行政部',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00017129'
                },
                {
                    deptFullname: 'CHO&GC体系-海外HRBP部',
                    deptName: '海外HRBP部',
                    deep: 2,
                    parentCode: '00012544',
                    deptCode: '00024856'
                },
                {
                    deptFullname: 'CFO体系-财务部',
                    deptName: '财务部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00001099'
                },
                {
                    deptFullname: 'CFO体系-预算与分析部',
                    deptName: '预算与分析部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00007348'
                },
                {
                    deptFullname: 'CFO体系-办公室',
                    deptName: '办公室',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00007336'
                },
                {
                    deptFullname: 'CFO体系-投资者关系部',
                    deptName: '投资者关系部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00007349'
                },
                {
                    deptFullname: 'CFO体系-报告部',
                    deptName: '报告部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00007350'
                },
                {
                    deptFullname: 'CFO体系-企业发展部',
                    deptName: '企业发展部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00008970'
                },
                {
                    deptFullname: 'CFO体系-税务与资金管理部',
                    deptName: '税务与资金管理部',
                    deep: 2,
                    parentCode: '00012545',
                    deptCode: '00011162'
                },
                {
                    deptFullname: '京东金融-支付业务部',
                    deptName: '支付业务部',
                    deep: 2,
                    parentCode: '00008987',
                    deptCode: '00010490'
                },
                {
                    deptFullname: '京东金融-金融科技业务部',
                    deptName: '金融科技业务部',
                    deep: 2,
                    parentCode: '00008987',
                    deptCode: '00012428'
                },
                {
                    deptFullname: '京东金融-供应链金融部',
                    deptName: '供应链金融部',
                    deep: 2,
                    parentCode: '00008987',
                    deptCode: '00008995'
                },
                {
                    deptFullname: '京东金融-个人服务群组-消费金融部',
                    deptName: '消费金融部',
                    deep: 3,
                    parentCode: '00046966',
                    deptCode: '00008998'
                },
                {
                    deptFullname: '京东金融-个人服务群组-众筹业务部',
                    deptName: '众筹业务部',
                    deep: 3,
                    parentCode: '00046966',
                    deptCode: '00011398'
                },
                {
                    deptFullname: '京东金融-个人服务群组-保险业务部',
                    deptName: '保险业务部',
                    deep: 3,
                    parentCode: '00046966',
                    deptCode: '00012139'
                },
                {
                    deptFullname: '京东金融-个人服务群组-财富管理部',
                    deptName: '财富管理部',
                    deep: 3,
                    parentCode: '00046966',
                    deptCode: '00013360'
                }
            ]
        };
    },
    methods: {
        handleSearch(search) {
            console.log('search', search);
        },
        selectChange(value) {
            console.log('selectChange', value);
        },
        changePage(page) {
            console.log('page', page);
        },
        changePageSize(pageSize) {
            console.log('pageSize', pageSize);
        },
        handleLook() {
            console.log(11, this.aTableDataEdit);
        },
        selectNode(node) {
            console.log('node', node);
        },
        // 上传成功
        uploadSuccess(evnet, file) {
            console.log('event', event);
            console.log('file', file);
            this.$Notice.success({
                title: '文件上传成功',
                desc: '文件 ' + file.name + ' 上传成功。'
            });
        }
    },
    mounted() {
        // 模拟请求下拉框数据
        setTimeout(() => {
            this.aTableColumnsEdit[2].edit.option = [
                {
                    value: 'a',
                    label: '000-00'
                },
                {
                    value: 'b',
                    label: '111-00'
                },
                {
                    value: 'c',
                    label: '222-00'
                },
                {
                    value: 'd',
                    label: '333-00'
                },
                {
                    value: 'e',
                    label: '444-00'
                }
            ];
        }, 500);
    }
};
</script>
