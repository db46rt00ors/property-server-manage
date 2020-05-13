<template>
  <div class="content">
    <a-row>
      <a-col :span="6">
        <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="请选择住宅:">
            <a-select
              placeholder="please select your zone"
              v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]"
              @change="chooseestateChange"
            >
              <a-select-option value="1">121小区</a-select-option>
              <a-select-option value="2">122小区</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="房屋查询">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onChange"
              placeholder="Please select"
            />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="18">
        <a-row>
          <div class="title">初始化 xxxx 的表读数</div>
        </a-row>
        <a-row type="flex" justify="start" class="lastcost">
          <div>仪表读数：</div>
          <a-input></a-input>
          <a-button>确认初始化</a-button>
        </a-row>
        <a-row>
          <a-table
            :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :dataSource="tableData"
            size="small"
            :scroll="{ y: 300 }"
          ></a-table>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import _ from 'lodash'
const columns = [
    {
        align: 'center',
        title: '费项编号',
        dataIndex: 'feenumber'
    },
    {
        align: 'center',
        title: '费项名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '费项读表数',
        dataIndex: 'feename_amount'
    },
    {
        align: 'center',
        title: '收费方式',
        dataIndex: 'chargemethod',
        scopedSlots: { customRender: 'chargemethod' }
    },
    {
        align: 'center',
        title: '单位价格',
        dataIndex: 'unitprice'
    },
    {
        align: 'center',
        title: '收费周期(月)',
        dataIndex: 'chargecycle'
    }
]
export default {
    data() {
        return {
            columns,
            selectedRowKeys: [],
            loading: false,
            form: this.$form.createForm(this),
            labelCol: { lg: { span: 6 } },
            wrapperCol: { lg: { span: 14 } },
            options: [
                {
                    value: '第一栋',
                    label: '第一栋',
                    children: [
                        {
                            value: '一单元',
                            label: '一单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        },
                        {
                            value: '二单元',
                            label: '二单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '第二栋',
                    label: '第二栋',
                    children: [
                        {
                            value: '一单元',
                            label: '一单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        },
                        {
                            value: '二单元',
                            label: '二单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        tableData() {
            const data = []
            for (let i = 0; i < 46; i++) {
                data.push({
                    key: i + 1,
                    feenumber: _.random(1000, 5000),
                    feename: '费项名称' + _.random(1000, 5000),
                    feename_amount: _.random(1000, 5000),
                    chargemethod: _.sample([
                        '自定义',
                        '按使用量',
                        '按房屋面积',
                        '按加建面积',
                        '按住户',
                        '按车位面积',
                        '按车库面积',
                        '按阁楼面积',
                        '按储藏室面积'
                    ]),
                    unitprice: _.random(1, 240),
                    chargecycle: 1
                })
            }
            // 给tag上颜色
            data.forEach(function(item, index) {
                switch (item.chargemethod) {
                    case '自定义':
                        item.color = 'chocolate'
                        break
                    case '按使用量':
                        item.color = 'red'
                        break
                    case '按房屋面积':
                        item.color = 'gray'
                        break
                    case '按加建面积':
                        item.color = 'gray'
                        break
                    case '按车库面积':
                        item.color = 'purple'
                        break
                    case '按车位面积':
                        item.color = 'purple'
                        break
                    case '按储藏室面积':
                        item.color = 'cyan'
                        break
                    case '按阁楼面积':
                        item.color = 'cyan'
                        break
                    default:
                        item.color = 'blue'
                        break
                }
            })
            return data
        }
    },
    methods: {
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys)
            this.selectedRowKeys = selectedRowKeys
        },
        sendAjax() {
            console.log(666)
        },
        onChange(selectedKeys, info) {
            console.log(selectedKeys, info)
        },
        chooseestateChange(val) {
            console.log(val)
        }
    }
}
</script>

<style lang='less' scoped>
.content {
    .title {
        text-indent: 5px;
        color: #333;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    .lastcost {
        line-height: 40px;
        input{
            width: 150px;
            margin-top: 4px;
        }
        button {
            margin-left: 4px;
            margin-top: 4px;
        }
    }
}
</style>
