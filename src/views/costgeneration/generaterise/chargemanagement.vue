<template>
  <a-row class="content">
    <a-form :form="form">
      <a-row>
        <a-form-item label="选择费项" :labelCol="{span: 2}" :wrapperCol="{span: 6}">
          <a-cascader
            class="cascader"
            :options="options"
            @change="onChange"
            placeholder="Please select"
          />
        </a-form-item>
      </a-row>
      <a-row type="flex" justify="start" class="title">
        <a-col :offset="1">
          <a-form-item :label="`当前费项:  ${currentfee} 单价`" class="dis-flex">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col v-if="!iswaterorelectricity">
          <a-form-item label="，每隔1个月收取1次  关键词" class="dis-flex">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col v-if="iswaterorelectricity">
          <a-form-item :label="`,每隔1个月收取1次 ,最小使用量:${0.00}`" :colon="false"></a-form-item>
        </a-col>
        <a-col :offset="1" v-if="!iswaterorelectricity">
          <a-form-item :colon="false">
            <a-button>定位房间</a-button>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="楼盘名称" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="楼宇" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-select value="123">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="1">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="单元/楼层" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-select value="123">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="1">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="房间" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-select value="123">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="1">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="6">
          <a-form-item label="费用起期" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用止期" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="缴费限期" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="物业类型" :labelCol="{span: 8}" :wrapperCol="{span: 16}">
            <a-select value="123">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="1">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row type="flex" justify="start" style="line-height: 40px;">
        <a-col :offset="1">
          <a-checkbox @change="onChangeCheckbox">包含未入住</a-checkbox>
        </a-col>
        <a-col>
          <a-button>生成明细帐</a-button>
        </a-col>
        <a-col>在"费用起止期"内生成过台帐的房间将不会再生成</a-col>
      </a-row>
      <a-row type="flex" justify="start" style="line-height: 40px;">
        <a-col :offset="1">
          <a-form-item label="台帐名称" class="dis-flex">
            <a-input></a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="台帐备注" class="dis-flex">
            <a-input></a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item :colon="false">
            <a-button>保存为台帐</a-button>
            <a-button>取消</a-button>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row type="flex" justify="start" style="line-height: 40px;">
        <a-col :offset="1">
          <a-form-item label="(表编号=房间编号+费项编号) "></a-form-item>
        </a-col>
        <a-col>
          <a-form-item label="关键词" class="dis-flex">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item>
            <a-button>定位房间</a-button>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item>
            <a-checkbox style="margin-left:10px;" @change="chooseHome">是否必须选择房间</a-checkbox>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-row class="table">
      <a-table :columns="columns" :dataSource="data" bordered align="center">
        <template
          v-for="col in [
            'estate',
            'owner',
            'table_number',
            'last_reading',
            'this_reading',
            'this_dosage',
            'due',
            'deadline_for_last_fee',
            'the_beginning_of_this_fee',
            'deadline_for_this_fee',
            'this_payment_deadline'
          ]"
          :slot="col"
          slot-scope="text, record"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">保存</a>&nbsp;
              <a-popconfirm title="确认取消吗?" @confirm="() => cancel(record.key)">
                <a>取消</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
            </span>
          </div>
        </template>
      </a-table>
    </a-row>
  </a-row>
</template>

<script>
const columns = [
    {
        align: 'center',
        title: '房产',
        dataIndex: 'estate',
        width: '14%',
        scopedSlots: { customRender: 'estate' }
    },
    {
        align: 'center',
        title: '业主',
        dataIndex: 'owner',
        width: '6%',
        scopedSlots: { customRender: 'owner' }
    },
    {
        align: 'center',
        title: '表编号',
        dataIndex: 'table_number',
        width: '6%',
        scopedSlots: { customRender: 'table_number' }
    },
    {
        align: 'center',
        title: '上次读数',
        dataIndex: 'last_reading',
        width: '7%',
        scopedSlots: { customRender: 'last_reading' }
    },
    {
        align: 'center',
        title: '本次读数',
        dataIndex: 'this_reading',
        width: '7%',
        scopedSlots: { customRender: 'this_reading' }
    },
    {
        align: 'center',
        title: '本次用量',
        dataIndex: 'this_dosage',
        width: '7%',
        scopedSlots: { customRender: 'this_dosage' }
    },
    {
        align: 'center',
        title: '应交费用',
        dataIndex: 'due',
        width: '8%',
        scopedSlots: { customRender: 'due' }
    },
    {
        align: 'center',
        title: '上次费用止期',
        dataIndex: 'deadline_for_last_fee',
        width: '8%',
        scopedSlots: { customRender: 'deadline_for_last_fee' }
    },
    {
        align: 'center',
        title: '本次费用起期',
        dataIndex: 'the_beginning_of_this_fee',
        width: '8%',
        scopedSlots: { customRender: 'the_beginning_of_this_fee' }
    },
    {
        align: 'center',
        title: '本次费用止期',
        dataIndex: 'deadline_for_this_fee',
        width: '8%',
        scopedSlots: { customRender: 'deadline_for_this_fee' }
    },
    {
        align: 'center',
        title: '本次缴费限期',
        dataIndex: 'this_payment_deadline',
        width: '8%',
        scopedSlots: { customRender: 'this_payment_deadline' }
    },
    {
        align: 'center',
        title: '编辑',
        width: '7%',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
    }
]

const data = []
for (let i = 0; i < 10; i++) {
    data.push({
        key: i.toString(),
        estate: '中东首座#1号楼#1单元#101室',
        owner: '赵云',
        table_number: '101_0013',
        last_reading: '206.00',
        this_reading: '226.00',
        this_dosage: '20.00',
        due: '20.00',
        deadline_for_last_fee: '2012-12-10',
        the_beginning_of_this_fee: '2014-12-10',
        deadline_for_this_fee: '2020-04-30',
        this_payment_deadline: '2020-04-30'
    })
}
export default {
    data() {
        this.cacheData = data.map(item => ({ ...item }))
        return {
            data,
            columns,
            editingKey: '',
            form: this.$form.createForm(this),
            labelCol: { lg: { span: 6 } },
            wrapperCol: { lg: { span: 14 } },
            currentfee: '',
            iswaterorelectricity: false,
            options: [
                {
                    value: '常规费项',
                    label: '常规费项',
                    children: [
                        {
                            value: '菜批市场',
                            label: '菜批市场'
                        },
                        {
                            value: '地下车库',
                            label: '地下车库'
                        },
                        {
                            value: '电子大厦',
                            label: '电子大厦'
                        },
                        {
                            value: '东风仓库',
                            label: '东风仓库'
                        },
                        {
                            value: '孔雀英国宫',
                            label: '孔雀英国宫'
                        },
                        {
                            value: '中东首座',
                            label: '中东首座',
                            children: [
                                {
                                    value: '车库管理费',
                                    label: '车库管理费'
                                },
                                {
                                    value: '车位管理费',
                                    label: '车位管理费'
                                },
                                {
                                    value: '储藏室管理费',
                                    label: '储藏室管理费'
                                },
                                {
                                    value: '电费',
                                    label: '电费'
                                },
                                {
                                    value: '阶梯电费',
                                    label: '阶梯电费'
                                },
                                {
                                    value: '阶梯水费',
                                    label: '阶梯水费'
                                },
                                {
                                    value: '水费',
                                    label: '水费'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '公摊费项',
                    label: '公摊费项',
                    children: [
                        {
                            value: '菜批市场',
                            label: '菜批市场'
                        },
                        {
                            value: '地下车库',
                            label: '地下车库'
                        },
                        {
                            value: '电子大厦',
                            label: '电子大厦'
                        },
                        {
                            value: '东风仓库',
                            label: '东风仓库'
                        },
                        {
                            value: '孔雀英国宫',
                            label: '孔雀英国宫'
                        },
                        {
                            value: '中东首座',
                            label: '中东首座',
                            children: [
                                {
                                    value: '电费(公摊)',
                                    label: '电费(公摊)'
                                },
                                {
                                    value: '水费(公摊)',
                                    label: '水费(公摊)'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        onChange(selectedKeys, info) {
            console.log(selectedKeys, info)
            if (selectedKeys.length <= 0) {
                this.currentfee = '无'
                return
            }
            this.currentfee = [...selectedKeys].pop()
            if (this.currentfee.includes('电费') || this.currentfee.includes('水费')) {
                this.iswaterorelectricity = true
            } else {
                this.iswaterorelectricity = false
            }
        },
        onChangeCheckbox(e) {
            console.log(e)
        },
        chooseHome(e) {
            console.log(e)
        },
        //
        handleChange(value, key, column) {
            const newData = [...this.data]
            const target = newData.filter(item => key === item.key)[0]
            if (target) {
                target[column] = value
                this.data = newData
            }
        },
        edit(key) {
            const newData = [...this.data]
            const target = newData.filter(item => key === item.key)[0]
            this.editingKey = key
            if (target) {
                target.editable = true
                this.data = newData
            }
        },
        save(key) {
            console.log(key)
            const newData = [...this.data]
            const newCacheData = [...this.cacheData]
            const target = newData.filter(item => key === item.key)[0]
            const targetCache = newCacheData.filter(item => key === item.key)[0]
            if (target && targetCache) {
                delete target.editable
                this.data = newData
                Object.assign(targetCache, target)
                this.cacheData = newCacheData
                this.editingKey = ''
            }
        },
        cancel(key) {
            const newData = [...this.data]
            const target = newData.filter(item => key === item.key)[0]
            this.editingKey = ''
            if (target) {
                Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
                delete target.editable
                this.data = newData
            }
        }
    }
}
</script>

<style scoped lang="less">
.content {
    background-color: #fff;
    padding: 20px;
    height: 100%;
}
.dis-flex {
    display: flex;
}
.cascader {
    width: 330px;
}
.title {
    line-height: 40px;
    input {
        width: 150px;
        margin-top: 4px;
    }
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
.ant-col {
    line-height: 40px;
    height: 40px;
}
button {
    margin-left: 4px;
    margin-top: 4px;
}
.table {
    margin-top: 10px;
}
</style>
