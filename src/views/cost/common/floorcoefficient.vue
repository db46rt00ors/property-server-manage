<template>
  <div class="content">
    <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择楼盘">
            <a-select
              @change="chooseestate"
              v-decorator="[
                'choose_estate',
                { rules: [{ required: true, message: '楼盘必须必须填写', trigger: 'change' }] },
              ]"
            >
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="楼宇">
            <a-select>
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="单元/楼层">
            <a-select>
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="房间">
            <a-select>
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择费项">
            <a-select
              @change="choosefees"
              v-decorator="[
                'choose_fees',
                { rules: [{ required: true, message: '费项必须填写', trigger: 'change' }] },
              ]"
            >
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="table-content">
        <a-form-item :wrapperCol="{span: 24}">
          <a-row class="setting">
            <a-col>
              <a-button type="primary" icon="search" @click="search">查询</a-button>
              <a-button type="primary" icon="file">生成Excel模版</a-button>
              <a-button type="primary" icon="file">导入Excel</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-table :columns="columns" :dataSource="data" :pagination="pagination">
          <a slot="estate_name" slot-scope="text, recored" @click="edit(recored)">{{ text }}</a>
          <template slot="operation" slot-scope="text, record">
            <a href="javascript:;" @click="seemqintain(text, record)">查看楼宇</a>
          </template>
        </a-table>
      </a-row>
    </a-form>
    <edit :editobj="editobj"></edit>
  </div>
</template>

<script>
import _ from 'lodash'
import edit from './floorcoefficient.edit/edit'
const columns = [
    {
        align: 'center',
        title: '编号',
        dataIndex: 'key',
        width: '5%',
        key: 'key',
        fixed: 'left'
    },
    {
        align: 'center',
        title: '房产名称',
        dataIndex: 'estate_name',
        width: '10%',
        key: 'estate_name',
        scopedSlots: { customRender: 'estate_name' }
    },
    {
        align: 'center',
        title: '楼层',
        width: '8%',
        dataIndex: 'floor',
        key: 'floor'
    },
    {
        align: 'center',
        title: '费项名称',
        width: '8%',
        dataIndex: 'feename',
        key: 'feename'
    },
    {
        align: 'center',
        title: '费项单价',
        width: '8%',
        dataIndex: 'price',
        key: 'price'
    },
    {
        align: 'center',
        title: '收费方式',
        width: '8%',
        dataIndex: 'chargemethod',
        key: 'chargemethod'
    },
    {
        align: 'center',
        title: '楼层系数',
        width: '8%',
        dataIndex: 'floor_coefficient',
        key: 'floor_coefficient'
    },
    {
        align: 'center',
        title: '使用量倍数',
        dataIndex: 'usageamount',
        key: 'usageamount',
        width: '10%'
    }
]
const data = []
for (let i = 0; i < 10; i++) {
    data.push({
        key: i + 1,
        estate_name: '中东首座1号楼1单元103室',
        floor: _.random(1, 32),
        feename: _.sample(
            [
                '阁楼采暖费',
                '卫生费',
                '车位费',
                '停车管理费',
                '水电费',
                '物业费',
                '污水处理费',
                '车库管理费',
                '二次排污费',
                '电梯电费',
                '其他费用',
                '阶梯水费',
                '取暖费'
            ],
            1
        ),
        chargemethod: _.sample(
            [
                '按住户',
                '按房屋面积',
                '自定义',
                '按加建面积',
                '按车位面积',
                '按使用量',
                '按车库面积',
                '按储藏室面积',
                '按阁楼面积',
                '按使用面积'
            ],
            1
        ),
        price: _.random(1, 1000),
        floor_coefficient: 1,
        usageamount: 1
    })
}
export default {
    data() {
        return {
            labelCol: { lg: { span: 8 }, sm: { span: 8 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            form: this.$form.createForm(this),
            columns,
            data,
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            editobj: {
                editvisible: false,
                estate_name: '',
                applicant: ''
            }
        }
    },
    methods: {
        chooseestate(value) {
            console.log(value)
        },
        choosefees(value) {
            console.log(value)
        },
        search(e) {
            e.preventDefault()
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.$emit('nextStep')
                    console.log('Received values of form: ', values)
                }
            })
        },
        edit(recored) {
            this.editobj.estate_name = recored.estate_name
            this.editobj.floor = recored.floor
            this.editobj.feename = recored.feename
            this.editobj.chargemethod = recored.chargemethod
            this.editobj.price = recored.price
            this.editobj.editvisible = true
        }
    },
    components: {
        edit
    }
}
</script>

<style lang='less' scoped>
.content {
    .table-content {
        .setting {
            margin: 10px 0;
        }
        button {
            margin-left: 10px;
        }
    }
}
.ant-form-item {
    margin-bottom: 0px;
}
</style>
