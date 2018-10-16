<template>
    <div>
        <h2>搜索框</h2>
        <search-form :objData="aSearch" @handleFormSubmit="handleSearch">
        </search-form>
        <h2>分页table</h2>
        <table-paging :columns="aTableColumns" :data="aTableData" :pagination="objPageControl" :loading="false" :show-header="true" :stripe="true" :border="true" :disHover="false" :height="false" :width="false" @selectChange="selectChange" @changePage="changePage" @changePageSize="changePageSize">
        </table-paging>
        <h2>合并table</h2>
        <table-combine id="zzp" :columns="aTableColumns" :data="aTableData" :border="true" :disHover="true" @changePageSize="changePageSize"></table-combine>
    </div>
</template>

<script>
export default {
    name: 'demo',
    props: {},
    data() {
        return {
            aSearch: [
                {
                    type: 'select',
                    label: '下拉框',
                    value: 'select',
                    required: true,
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
                    required: true,
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
                    required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'inputNumber',
                    value: 'inputNumber',
                    label: '数字输入框',
                    required: true,
                    placeholder: '请输入'
                },
                {
                    type: 'date',
                    label: '开始时间',
                    dateType: 'month',
                    value: 'begin',
                    format: 'yyyy-MM',
                    required: true,
                    placeholder: '选择开始时间',
                    limit: {
                        up: '2018-01-01 00:00:00',
                        // down: '2015-01-01 00:00:00'
                    }
                },
                {
                    type: 'date',
                    label: '结束时间',
                    dateType: 'month',
                    value: 'end',
                    format: 'yyyy-MM',
                    required: true,
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
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
