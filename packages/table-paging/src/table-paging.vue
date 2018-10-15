<template>
    <div>
        <Spin size="large" fix v-if="loading"></Spin>
        <Table :size="size?size:'small'" :data="data" :columns="columns" :stripe="stripe?stripe:false" :border="border?border:false" :show-header="showHeader?showHeader:true" :width="width?width:''" :height="height?height:''" :disabled-hover="disHover?disHover:false" :row-class-name="rowClassName" @on-selection-change="selectChange"></Table>
        <Row v-if="pagination" type="flex" justify="end" :style="{marginTop:'10px',width:width?width+'px':'100%'}">
            <Col>
            <Page size="small" :pageSize="pagination.pageSize" :total="pagination.total" :current="pagination.currentPage" show-total show-sizer show-elevator @on-change="changePage" @on-page-size-change="changePageSize" :page-size-opts="[10, 50, 100]"></Page>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'table-paging',
    props: [
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
        'size',
        'pagination'
    ],
    data() {
        return {};
    },
    methods: {
        // 分页切换
        changePage(page) {
            this.$emit('changePage', page);
        },

        // 页码数切换
        changePageSize(pagesize) {
            this.$emit('changePageSize', pagesize);
        },

        // 多选
        selectChange(selection) {
            this.$emit('selectChange', selection);
        }
    },
    mounted() {}
};
</script>