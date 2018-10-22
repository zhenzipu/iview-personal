<style scoped>
.ivu-form-item {
    margin-bottom: 20px;
}
.ivu-input-number {
    width: 100%;
}
</style>
<template>
    <Form ref="submitForm" autocomplete="on" :model="objFormData" :label-width="100">
        <Row v-if="objData.length>4" :gutter="20">
            <Col span="22">
            <Row type="flex" justify="start">
                <Col span='6' v-for="(item,index) in objData" :key="index">
                <div v-if="item.type=='select'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                        <Select v-model="objFormData[item.value]" clearable :placeholder="item.placeholder" filterable>
                            <Option v-for="child_item in item.data" :value="child_item.value" :key="child_item.value">{{ child_item.name }}</Option>
                        </Select>
                    </FormItem>
                </div>
                <div v-else-if="item.type=='radio'">
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
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'blur',type:'number'}:null">
                        <InputNumber :min="0" v-model="objFormData[item.value]" :placeholder="item.placeholder"></InputNumber>
                    </FormItem>
                </div>
                <div v-else-if="item.type=='date'">
                    <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                        <DatePicker :type="item.dateType" :options="dateLimit(item.limit)" :value="objFormData[item.value]" :format="objFormData[item.format]" :placeholder="item.placeholder" @on-change="(datetime) => { dataChange(datetime,item.value)}"></DatePicker>
                    </FormItem>
                </div>
                </Col>
            </Row>
            </Col>
            <Col span="2">
            <Button type="primary" @click="handleSubmit('submitForm')">搜索</Button>
            </Col>
        </Row>
        <Row v-else :gutter="20" type="flex" justify="start">
            <Col span='5' v-for="(item,index) in objData" :key="index">
            <div v-if="item.type=='select'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                    <Select v-model="objFormData[item.value]" clearable :placeholder="item.placeholder" filterable>
                        <Option v-for="child_item in item.data" :value="child_item.value" :key="child_item.value">{{ child_item.name }}</Option>
                    </Select>
                </FormItem>
            </div>
            <div v-else-if="item.type=='radio'">
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
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'blur',type:'number'}:null">
                    <InputNumber :min="0" v-model="objFormData[item.value]" :placeholder="item.placeholder"></InputNumber>
                </FormItem>
            </div>
            <div v-else-if="item.type=='date'">
                <FormItem :label="item.label" :prop="item.required?item.value:null" :rules="item.required?{required: true, message: item.label +'不能为空！', trigger: 'change'}:null">
                    <DatePicker :type="item.dateType" :options="dateLimit(item.limit)" :value="objFormData[item.value]" :format="objFormData[item.format]" :placeholder="item.placeholder" @on-change="(datetime) => { dataChange(datetime,item.value)}"></DatePicker>
                </FormItem>
            </div>
            </Col>
            <Col span="4">
            <Button type="primary" @click="handleSubmit('submitForm')">搜索</Button>
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
                // 下拉框
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
                // 单选框
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
                // 输入框
                {
                    type: 'input',
                    value: 'input',
                    lable: '输入框',
                    required: true,
                    placeholder: '请输入'
                },
                // 数字输入框
                {
                    type: 'inputNumber',
                    value: 'inputNumber',
                    lable: '数字输入框',
                    required: true,
                    placeholder: '请输入'
                },
                // 时间/日期选择框
                {
                    type: 'date',
                    label: '时间/日期',
                    dateType: 'month',
                    value: 'begin',
                    format: 'yyyy-MM',
                    placeholder: '选择开始时间',
                    limit: {
                        up: '2018-01-01 00:00:00',
                        down: '2015-01-01 00:00:00'
                    }
                }
            ]
        };
    },
    methods: {
        // 时间范围限制
        dateLimit(limit) {
            return {
                disabledDate(date) {
                    return (
                        (date && date.valueOf() > new Date(limit.up)) ||
                        (date && date.valueOf() < new Date(limit.down))
                    );
                }
            };
        },

        // 提交搜索框数据
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$emit('handleFormSubmit', this.objFormData);
                } else {
                    this.$Message.error('搜索参数不符合规则!');
                }
            });
        },

        // 时间选择框变化触发
        dataChange(date, key) {
            this.objFormData[key] = date;
        }
    },
    mounted() {}
};
</script>
