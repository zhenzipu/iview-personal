<style scoped>
.ivu-form-item {
    margin-bottom: 10px;
}
</style>
<template>
    <Form :model="objFormData" :label-width="80">
        <Row v-if="objData.length>4" :gutter="20">
            <Col span="22">
            <Row>
                <Col span='6' v-for="(item,index) in objData" :key="index">
                <div v-if="item.type=='select'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                        <Select v-model="objFormData[item.value]" clearable :placeholder="item.placeholder" filterable>
                            <Option v-for="child_item in item.data" :value="child_item.value" :key="child_item.value">{{ child_item.name }}</Option>
                        </Select>
                    </FormItem>
                </div>
                <div v-if="item.type=='radio'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                        <RadioGroup v-model="objFormData[item.value]">
                            <Radio v-for="child_item in item.data" :label="child_item.value" :key="child_item.value">{{ child_item.name }}</Radio>
                        </RadioGroup>
                    </FormItem>
                </div>
                <div v-else-if="item.type=='input'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'input'}:null">
                        <Input v-model="objFormData[item.value]" :placeholder="item.placeholder"></Input>
                    </FormItem>
                </div>
                <div v-else-if="item.type=='inputNumber'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'input'}:null">
                        <InputNumber :min="0" v-model="objFormData[item.value]" :placeholder="item.placeholder"></InputNumber>
                    </FormItem>
                </div>
                <div v-else-if="item.type=='date'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                        <DatePicker :type="item.dateType" :value="objFormData[item.value]" :format="objFormData[item.format]" :placeholder="item.placeholder" @on-change="(datetime) => { dataChange(datetime,item.value)}"></DatePicker>
                    </FormItem>
                </div>
                </Col>
            </Row>
            </Col>
            <Col span="2">
            <Button type="primary" @click="handleSubmit()">搜索</Button>
            </Col>
        </Row>
        <Row v-else :gutter="20">
            <Col span='5' v-for="(item,index) in objData" :key="index">
            <div v-if="item.type=='select'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                    <Select v-model="objFormData[item.value]" clearable :placeholder="item.placeholder" filterable>
                        <Option v-for="child_item in item.data" :value="child_item.value" :key="child_item.value">{{ child_item.name }}</Option>
                    </Select>
                </FormItem>
            </div>
            <div v-if="item.type=='radio'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                    <RadioGroup v-model="objFormData[item.value]">
                        <Radio v-for="child_item in item.data" :label="child_item.value" :key="child_item.value">{{ child_item.name }}</Radio>
                    </RadioGroup>
                </FormItem>
            </div>
            <div v-else-if="item.type=='input'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'input'}:null">
                    <Input v-model="objFormData[item.value]" :placeholder="item.placeholder"></Input>
                </FormItem>
            </div>
            <div v-else-if="item.type=='inputNumber'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'input'}:null">
                    <InputNumber :min="0" v-model="objFormData[item.value]" :placeholder="item.placeholder"></InputNumber>
                </FormItem>
            </div>
            <div v-else-if="item.type=='date'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                    <DatePicker :type="item.dateType" :value="objFormData[item.value]" :format="objFormData[item.format]" :placeholder="item.placeholder" @on-change="(datetime) => { dataChange(datetime,item.value)}"></DatePicker>
                </FormItem>
            </div>
            </Col>
            <Col span="4">
            <Button type="primary" @click="handleSubmit()">搜索</Button>
            </Col>
        </Row>
    </Form>
</template>
<script>
export default {
    name: 'search-form',
    props: {
        objData: Array
    },
    data() {
        return {
            // 表单数据
            objFormData: {},
            // objData数据示例
            objExample: [
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
        };
    },
    methods: {
        // 时间范围限制
        dateLimit(limit) {
            return {
                disabledDate(date) {
                    return date && date.valueOf() < new Date(limit);
                }
            };
        },
        // 提交搜索框数据
        handleSubmit() {
            // 判断时间录入规则
            let aDateValue = [];
            this.objData.map(item => {
                if (item.type == 'date') {
                    aDateValue.push(item.value);
                }
            });
            switch (aDateValue.length) {
                case 1:
                    if (!this.objFormData[aDateValue[0]]) {
                        this.$Message.warning('请选择查询时间！');
                    } else {
                        this.$emit('handleFormSubmit', this.objFormData);
                    }
                    break;

                case 2:
                    if (
                        (!this.objFormData[aDateValue[0]] &&
                            !this.objFormData[aDateValue[1]]) ||
                        (this.objFormData[aDateValue[0]] &&
                            this.objFormData[aDateValue[1]])
                    ) {
                        this.$emit('handleFormSubmit', this.objFormData);
                    } else {
                        this.$Message.warning('请选择起止时间！');
                    }
                    break;

                default:
                    this.$emit('handleFormSubmit', this.objFormData);
                    break;
            }
        },
        dataChange(date, key) {
            this.objFormData[key] = date;
        }
    },
    mounted() {}
};
</script>
