<template>
    <div>
        <Spin size="large" fix v-if="loading"></Spin>
        <Table :id="'tableCombine'+id" :size="size?size:'small'" :data="data" :columns="columns" :stripe="stripe?stripe:false" :border="border?border:false" :show-header="showHeader?showHeader:true" :width="width?width:''" :height="height?height:''" :disabled-hover="disHover?disHover:false" :row-class-name="rowClassName" @on-selection-change="selectChange"></Table>
    </div>
</template>
<script>
export default {
    name: 'table-combine',
    props: [
        'id',
        'data',
        'columns',
        'stripe',
        'border',
        'showHeader',
        'width',
        'height',
        'disHover',
        'loading',
        'rowClassName',
        'size'
    ],
    data() {
        return {
            //
        };
    },
    methods: {
        // 多选
        selectChange(selection) {
            this.$emit('selectChange', selection);
        },

        // 合并表格
        combineCell() {
            let tabs = document.getElementById('tableCombine' + this.id);

            // 拿到所有行
            let tBody = tabs
                .querySelector('.ivu-table')
                .querySelector('.ivu-table-body')
                .querySelector('.ivu-table-tbody')
                .querySelectorAll('tr');

            // 拿到数据
            let aSourceData = this.data;

            // 需要合并key遍历
            let aColumns = [];
            this.columns.map(item => {
                if (item.children) {
                    aColumns = aColumns.concat(item.children);
                } else {
                    aColumns = aColumns.concat(item);
                }
            });

            // 处理表头合并数据
            aColumns.map(item => {
                if (item.combine) {
                    let field = item.key;
                    var k = 0;
                    while (k < aSourceData.length) {
                        aSourceData[k][field + '_num'] = 1;
                        aSourceData[k][field + '_isNone'] = false;
                        for (var i = k + 1; i <= aSourceData.length - 1; i++) {
                            if (
                                aSourceData[k][field] ==
                                    aSourceData[i][field] &&
                                aSourceData[k][field] != ''
                            ) {
                                aSourceData[k][field + '_num']++;
                                aSourceData[k][field + '_isNone'] = false;
                                aSourceData[i][field + '_num'] = 1;
                                aSourceData[i][field + '_isNone'] = true;
                            } else {
                                break;
                            }
                        }
                        k = i;
                    }
                }
            });
            
            // 根据新增合并字段处理td
            aColumns.map((item, index) => {
                // 根据columns判断是否需要合并
                if (item.combine) {
                    // 遍历处理后的数据拿到rowspan、display属性
                    aSourceData.map((item_child, index_child) => {
                        tBody[index_child].querySelectorAll('td')[
                            index
                        ].rowSpan = item_child[item.key + '_num'];
                        // 判断是否隐藏
                        if (item_child[item.key + '_isNone']) {
                            tBody[index_child].querySelectorAll('td')[
                                index
                            ].style.display = 'none';
                        }
                    });
                }
            });
        }
    },
    mounted() {
        // 合并表格
        this.combineCell();
    }
};
</script>