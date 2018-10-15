# iview-personal
基于iview3封装多功能组件
1. 分页table
    支持iview中table、page原有api

```
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
    @changePageSize="changePageSize">
</table-paging>
```
2.搜索表单
    支持下拉框、输入框、数字输入口、单选框、时间日期选择框搜索功能

```
<search-form 
    :objData="aSearch" 
    @handleFormSubmit="handleSearch"
    >
</search-form>

aSearch: [
    {
        type: 'select',
        label: '下拉框',
        value: 'select',
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
        type: 'date',
        label: '开始时间',
        dateType: 'month',
        value: 'begin',
        format: 'yyyy-MM',
        placeholder: '选择开始时间',
        limit: '2015-01-01 00:00:00'
    },
    {
        type: 'date',
        label: '结束时间',
        dateType: 'month',
        value: 'end',
        format: 'yyyy-MM',
        placeholder: '选择结束时间',
        limit: '2015-01-01 00:00:00'
    }
]

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
```


