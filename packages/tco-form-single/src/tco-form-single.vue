<style lang="less" scoped>
.search-con {
  text-align: left;
  li {
    list-style: none;
    margin: 3px 5px;
    float: left;
    height: 33px;
    overflow: hidden;
    display: inline-block;
    .form-label {
      display: inline-block;
      width: 60px;
      text-align: center;
      font-size: 12px;
      line-height: 32px;
    }
  }
}
</style>

<template>
  <Row>
    <ul class="search-con">
      <li v-for="(item,index) in objData" :key="index">
        <template v-if="item.type=='select'">
          <span class="form-label" :style="{width:labelWidth+'px'}">{{item.label}}</span>
          <Select
            :value="objFormData[item.value]"
            :disabled="item.disabled"
            :clearable="item.clearable||false"
            :filterable="item.filterable||false"
            :placeholder="item.placeholder"
            @on-change="(value)=>{handleChange(value,item.value)}"
            :style="{width:item.width?item.width+'px':'150px'}"
          >
            <Option
              v-for="child_item in item.data"
              :disabled="item.child_item"
              :value="child_item.value"
              :key="child_item.value"
            >{{ child_item.name }}</Option>
          </Select>
        </template>
        <template v-if="item.type=='radio'">
          <span class="form-label" :style="{width:labelWidth+'px'}">{{item.label}}</span>
          <RadioGroup
            :value="objFormData[item.value]"
            @on-change="(value)=>{handleChange(value,item.value)}"
            :style="{width:item.width?item.width+'px':'150px'}"
          >
            <Radio
              v-for="child_item in item.data"
              :disabled="item.child_item"
              :label="child_item.value"
              :key="child_item.value"
            >{{ child_item.name }}</Radio>
          </RadioGroup>
        </template>
        <template v-if="item.type=='input'">
          <span class="form-label" :style="{width:labelWidth+'px'}">{{item.label}}</span>
          <Input
            :value="objFormData[item.value]"
            :disabled="item.disabled"
            :prefix="item.prefix||''"
            :suffix="item.suffix||''"
            :placeholder="item.placeholder"
            :clearable="item.clearable"
            @on-change="(e)=>{handleInputChange(e,item.value)}"
            :style="{width:item.width?item.width+'px':'150px'}"
          ></Input>
        </template>
        <template v-if="item.type=='inputNumber'">
          <span class="form-label" :style="{width:labelWidth+'px'}">{{item.label}}</span>
          <InputNumber
            :min="1"
            :disabled="item.disabled"
            :value="objFormData[item.value]"
            :placeholder="item.placeholder"
            @on-change="(value)=>{handleChange(value,item.value)}"
            :style="{width:item.width?item.width+'px':'150px'}"
          ></InputNumber>
        </template>
        <template v-if="item.type=='date'">
          <span class="form-label" :style="{width:labelWidth+'px'}">{{item.label}}</span>
          <DatePicker
            :type="item.dateType"
            :disabled="item.disabled"
            :options="dateLimit(item.limit)"
            :value="objFormData[item.value]"
            :format="objFormData[item.format]"
            :placeholder="item.placeholder"
            @on-change="(datetime) => { handleDataChange(datetime,item.value)}"
            :style="{width:item.width?item.width+'px':'150px'}"
          ></DatePicker>
        </template>
      </li>
    </ul>
  </Row>
</template>
<script>
export default {
  name: "tco-form-single",
  props: {
    objData: Array,
    bhidLable: Boolean,
    labelWidth: {
      type: Number,
      default: 100
    },
    objDefault: Object
  },
  data() {
    return {
      // 表单数据
      objFormData: {}
    };
  },
  watch: {
    //
  },
  methods: {
    // 参数发生变化
    handleChange(value, key) {
      this.objFormData[key] = value;
      let params = JSON.parse(JSON.stringify(this.objFormData));
      this.$emit("fetchParams", params);
    },
    // 参数发生变化-input
    handleInputChange(e, key) {
      this.objFormData[key] = e.target.value;
      let params = JSON.parse(JSON.stringify(this.objFormData));
      this.$emit("fetchParams", params);
    },

    // 参数发生变化-date
    handleDataChange(date, key) {
      if (typeof key == "object") {
        key.map((item, index) => {
          this.objFormData[item] = date[index];
        });
      } else {
        this.objFormData[key] = date;
      }
      let params = JSON.parse(JSON.stringify(this.objFormData));
      this.$emit("fetchParams", params);
    },

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
    }
  },
  mounted() {
    if (this.objDefault) {
      this.objFormData = this.objDefault;
    }
  }
};
</script>
