<template>
  <a-row class="content">
    <a-col :offset="1">
      <a-form :form="form">
        <a-row>
          <a-form-item label="选择费项" :labelCol="{span: 1}" :wrapperCol="{span: 6}">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onChange"
              placeholder="Please select"
            />
          </a-form-item>
        </a-row>
        <a-row type="flex" justify="start" class="title">
          <a-col>
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
        <a-row type="flex" justify="space-between">
          <a-col :span="6">
            <a-form-item label="楼盘名称" class="dis-flex">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="楼宇" class="dis-flex">
              <a-select>
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="单元/楼层" class="dis-flex">
              <a-select>
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="房间" class="dis-flex">
              <a-select>
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-between">
          <a-col :span="6">
            <a-form-item label="费用起期" class="dis-flex">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="费用止期" class="dis-flex">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="缴费限期" class="dis-flex">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="物业类型" class="dis-flex">
              <a-select value="123">
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="1">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start" class="account">
          <a-col>
            <a-form-item label="台帐备注" class="dis-flex">
              <a-input></a-input>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item class="mgl-7">
              <a-checkbox @change="onChangeCheckbox">包含未入住</a-checkbox>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start" class="account">
          <a-col>
            <a-form-item label="台帐名称" class="dis-flex">
              <a-input></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center" class="mgt-30">
          <a-button>批量生成台账</a-button>
          <a-button>清空</a-button>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
export default {
    data() {
        return {
            editingKey: '',
            form: this.$form.createForm(this),
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
        }
    }
}
</script>

<style scoped lang="less">
.ant-row-flex-space-between {
    /deep/.ant-form-item-label {
        width: 6em;
        text-align: right;
    }
    /deep/.ant-form-item-control-wrapper {
        display: block;
        width: 70%;
    }
    .ant-col-6 {
        &:first-child {
            /deep/.ant-form-item-label {
                width: 5em;
            }
        }
    }
}
.account{
  /deep/.ant-form-item-control-wrapper{
    width: 400px;
  }
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
