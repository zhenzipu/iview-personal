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
                    <search-form :objData="aSearch" :bhidLable="true" @handleFormSubmit="handleSearch"></search-form>
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
                合并table
                <div slot="content">
                    <table-edit :columns="aTableColumnsEdit" :data="aTableDataEdit" :border="true" :disHover="true"></table-edit>
                    <Button @click="handleLook">控制台查看数据</Button>
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
            defaultName: '1',
            aSearch: [
                {
                    type: 'select',
                    label: '下拉框',
                    value: 'select',
                    // required: true,
                    clearable: true,
                    filterable: true,
                    defaultValue: '1',
                    placeholder: '请选择',
                    data: [
                        {
                            name: 'option1',
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
                    defaultValue: '1',
                    // required: true,
                    placeholder: '请选择',
                    data: [
                        {
                            name: 'check1',
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
                    label: '输入框',
                    prefix: 'ios-contact',
                    suffix: 'ios-search',
                    // required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'inputNumber',
                    value: 'inputNumber',
                    label: '数字输入框',
                    // required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'date',
                    label: '开始时间',
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
            }
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
