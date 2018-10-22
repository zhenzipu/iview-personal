<template>
    <div>
        <Spin size="large" fix v-if="loading"></Spin>
        <Table :size="size?size:'small'" :data="data" :columns="columns" :stripe="stripe?stripe:false" :border="border?border:false" :show-header="showHeader?showHeader:true" :width="width?width:''" :height="height?height:''" :disabled-hover="disHover?disHover:false" :row-class-name="rowClassName"></Table>
    </div>
</template>
<script>
const cellInput = (h, params, key, obj) => {
    return h('Input', {
        props: {
            value: params.row[key]
        },
        on: {
            'on-blur'(event) {
                params.row[key] = event.target.value;
                obj[params.index][key] = event.target.value;
            }
        }
    });
};
const cellInputNumber = (h, params, key, obj) => {
    return h('InputNumber', {
        class: 'cell-input-number',
        props: {
            min: 1,
            activeChange: false,
            number: true,
            value: params.row[key]
        },
        on: {
            'on-change'(event) {
                params.row[key] = event;
                obj[params.index][key] = event;
            }
        }
    });
};
const cellSelect = (h, params, key, obj, option) => {
    return h(
        'Select',
        {
            props: {
                value: params.row[key]
            },
            on: {
                'on-change'(event) {
                    params.row[key] = event;
                    obj[params.index][key] = event;
                }
            }
        },
        [
            option.map(item => {
                return h('Option', {
                    props: {
                        value: item.value,
                        label: item.label
                    }
                });
            })
        ]
    );
};
export default {
    name: 'table-edit',
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
        'size'
    ],
    data() {
        return {};
    },
    watch: {
        columns() {
            this.init();
        }
    },
    methods: {
        init() {
            this.columns.map(item => {
                if (item.edit) {
                    switch (item.edit.type) {
                        case 'input':
                            item.render = (h, params) => {
                                return cellInput(
                                    h,
                                    params,
                                    item.edit.key,
                                    this.data
                                );
                            };
                            break;
                        case 'inputNumber':
                            item.render = (h, params) => {
                                return cellInputNumber(
                                    h,
                                    params,
                                    item.edit.key,
                                    this.data
                                );
                            };
                            break;
                        case 'select':
                            item.render = (h, params) => {
                                return cellSelect(
                                    h,
                                    params,
                                    item.edit.key,
                                    this.data,
                                    item.edit.option
                                );
                            };
                            break;

                        default:
                            break;
                    }
                }
            });
        }
    },
    created() {
        this.init();
    },
    mounted() {}
};
</script>
<style>
.cell-input-number {
    text-align: center;
    width: 100% !important;
}
</style>