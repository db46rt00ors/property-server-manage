// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        meta: { title: '首页' },
        redirect: '/personaloffice/mynews',
        children: [
            // dashboard
            {
                path: 'personaloffice',
                name: 'personaloffice',
                redirect: '/personaloffice/mynews',
                component: RouteView,
                meta: { title: '个人办公', keepAlive: true, icon: bxAnaalyse, permission: ['901'] },
                children: [
                    {
                        path: 'mynews',
                        name: '我的消息',
                        component: () => import('@/views/personaloffice/mynews'),
                        meta: { title: '我的消息', keepAlive: true, permission: ['901', '90101'] }
                    },
                    {
                        path: 'mymail',
                        name: '我的邮件',
                        component: () => import('@/views/personaloffice/mymail'),
                        meta: { title: '我的邮件', keepAlive: true, permission: ['901', '90102'] }
                    }
                ]
            },
            {
                path: '/propertymanage',
                name: '住宅小区',
                component: PageView,
                meta: { title: '楼盘管理', keepAlive: true, icon: 'slack', permission: ['221'] },
                redirect: '/propertymanage/property/add',
                children: [
                    {
                        path: '/propertymanage/property/add',
                        component: RouteView,
                        meta: { title: '住宅小区', keepAlive: true, icon: 'layout', permission: ['221', '22101'] },
                        redirect: '/propertymanage/property/add',
                        children: [
                            {
                                path: '/propertymanage/property/add',
                                name: '新增住宅向导',
                                component: () => import('@/views/propertymanage/property/add'),
                                meta: {
                                    title: '新增住宅向导',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210101']
                                }
                            },
                            {
                                path: '/propertymanage/property/building',
                                name: '批量增加住宅',
                                component: () => import('@/views/propertymanage/property/building'),
                                meta: {
                                    title: '批量增加楼宇',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210102']
                                }
                            },
                            {
                                path: '/propertymanage/property/maintain',
                                name: '住宅维护',
                                component: () => import('@/views/propertymanage/property/maintain'),
                                meta: {
                                    title: '住宅维护',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210103']
                                }
                            },
                            {
                                path: '/propertymanage/property/search',
                                name: '住宅查询',
                                component: () => import('@/views/propertymanage/property/search'),
                                meta: { title: '住宅查询', keepAlive: true, permission: ['221', '22101', '2210104'] }
                            }
                        ]
                    },
                    {
                        path: '/propertymanage/business/add',
                        component: RouteView,
                        meta: { title: '商业房产', keepAlive: true, icon: 'layout', permission: ['221', '22102'] },
                        redirect: '/propertymanage/business/add',
                        children: [
                            {
                                path: '/propertymanage/business/add',
                                name: '新增房产向导',
                                component: () => import('@/views/propertymanage/business/add'),
                                meta: {
                                    title: '新增房产向导',
                                    keepAlive: true,
                                    permission: ['221', '22102', '2210201']
                                }
                            },
                            {
                                path: '/propertymanage/business/building',
                                name: '批量增加商业房产',
                                component: () => import('@/views/propertymanage/business/building'),
                                meta: {
                                    title: '批量增加楼宇',
                                    keepAlive: true,
                                    permission: ['221', '22102', '2210202']
                                }
                            },
                            {
                                path: '/propertymanage/business/maintain',
                                name: '房产维护',
                                component: () => import('@/views/propertymanage/business/maintain'),
                                meta: { title: '住宅维护', keepAlive: true, permission: ['221', '22102', '2210203'] }
                            },
                            {
                                path: '/propertymanage/business/search',
                                name: '房产查询',
                                component: () => import('@/views/propertymanage/business/search'),
                                meta: { title: '住宅查询', keepAlive: true, permission: ['221', '22102', '2210204'] }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'owner',
                component: RouteView,
                meta: { title: '业主信息', keepAlive: true, icon: bxAnaalyse, permission: ['223'] },
                redirect: '/owner/information',
                children: [
                    {
                        path: '/owner/information',
                        name: '业主信息',
                        component: () => import('@/views/owner/information'),
                        meta: { title: '业主信息', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: '/owner/inspection',
                        name: '业主验房',
                        component: () => import('@/views/owner/inspection'),
                        meta: { title: '业主验房', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: '/owner/decorationr',
                        component: RouteView,
                        meta: { title: '业主装修', keepAlive: true, permission: ['223'] },
                        redirect: '/owner/decoration/enter',
                        children: [
                            {
                                path: '/owner/decoration/enter',
                                name: '装修录入',
                                component: () => import('@/views/owner/decoration/enter'),
                                meta: { title: '装修录入', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/owner/decoration/approval',
                                name: '装修审批',
                                component: () => import('@/views/owner/decoration/approval'),
                                meta: { title: '装修审批', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/owner/decoration/invalid',
                                name: '装修作废',
                                component: () => import('@/views/owner/decoration/invalid'),
                                meta: { title: '装修作废', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/owner/decoration/acceptance',
                                name: '装修验收',
                                component: () => import('@/views/owner/decoration/acceptance'),
                                meta: { title: '装修验收', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/owner/decoration/search',
                                name: '装修查询',
                                component: () => import('@/views/owner/decoration/search'),
                                meta: { title: '装修查询', keepAlive: true, permission: ['223'] }
                            }
                        ]
                    },
                    {
                        path: '/owner/checkin',
                        name: '业主入住',
                        component: () => import('@/views/owner/checkin'),
                        meta: { title: '业主入住', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: '/owner/management',
                        name: '请修管理',
                        component: () => import('@/views/owner/management'),
                        meta: { title: '请修管理', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: '/owner/addition',
                        name: '业主加建',
                        component: () => import('@/views/owner/addition'),
                        meta: { title: '业主加建', keepAlive: true, permission: ['223'] }
                    }
                ]
            },
            {
                path: 'cost',
                component: RouteView,
                meta: { title: '费项设置', keepAlive: true, icon: bxAnaalyse, permission: ['223'] },
                redirect: '/cost/common/common',
                children: [
                    {
                        path: '/cost/common/common',
                        component: RouteView,
                        meta: { title: '常规费项', keepAlive: true, permission: ['223'] },
                        redirect: '/cost/common/common',
                        children: [
                            {
                                path: '/cost/common/common',
                                name: '常规费项设定',
                                component: () => import('@/views/cost/common/common'),
                                meta: { title: '常规费项设定', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/cost/common/distributed',
                                name: '费项分布',
                                component: () => import('@/views/cost/common/distributed'),
                                meta: { title: '费项分布', keepAlive: true }
                            },
                            {
                                path: '/cost/common/initialization',
                                name: '初始化仪表',
                                component: () => import('@/views/cost/common/initialization'),
                                meta: { title: '初始化仪表', keepAlive: true, permission: ['223'] }
                            },
                            {
                                path: '/cost/common/floorcoefficient',
                                name: '楼层系数',
                                component: () => import('@/views/cost/common/floorcoefficient'),
                                meta: { title: '楼层系数', keepAlive: true, permission: ['223'] }
                            }
                        ]
                    },
                    {
                        path: '/cost/pool/public',
                        component: RouteView,
                        meta: { title: '公摊费项', keepAlive: true, permission: ['226'] },
                        redirect: '/cost/pool/public',
                        children: [
                            {
                                path: '/cost/pool/public',
                                name: '公摊费项设定',
                                component: () => import('@/views/cost/pool/public'),
                                meta: { title: '公摊费项设定', keepAlive: true, permission: ['226'] }
                            },
                            {
                                path: '/cost/pool/publicassessment',
                                name: '公摊费分布',
                                component: () => import('@/views/cost/pool/publicassessment'),
                                meta: { title: '公摊费分布', keepAlive: true, permission: ['226'] }
                            }
                        ]
                    },
                    {
                        path: '/cost/convenient',
                        name: '便捷费项',
                        component: () => import('@/views/cost/convenient'),
                        meta: { title: '便捷费项', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/casualguest',
                        name: '临客费项',
                        component: () => import('@/views/cost/casualguest'),
                        meta: { title: '临客费项', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/serviceteam',
                        name: '客服组设置',
                        component: () => import('@/views/cost/serviceteam'),
                        meta: { title: '客服组设置', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/printdocuments',
                        name: '打印单据设定',
                        component: () => import('@/views/cost/printdocuments'),
                        meta: { title: '打印单据设定', keepAlive: true, permission: ['226'] }
                    }
                ]
            },
            {
                path: '/costgeneration',
                component: RouteView,
                meta: { title: '收费管理', keepAlive: true, icon: bxAnaalyse, permission: ['228'] },
                redirect: '/costgeneration/generaterise/chargemanagement',
                children: [
                    {
                        path: '/costgeneration/generaterise/chargemanagement',
                        component: RouteView,
                        meta: { title: '费用生成', keepAlive: true, permission: ['228'] },
                        redirect: '/costgeneration/generaterise/chargemanagement',
                        children: [
                            {
                                path: '/costgeneration/generaterise/chargemanagement',
                                name: '生成台帐',
                                component: () => import('@/views/costgeneration/generaterise/chargemanagement'),
                                meta: { title: '生成台帐', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/generaterise/batchgeneration',
                                name: '批量生成台帐',
                                component: () => import('@/views/costgeneration/generaterise/batchgeneration'),
                                meta: { title: '批量生成台帐', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/generaterise/tabledataimport',
                                name: '抄表数据导入',
                                component: () => import('@/views/costgeneration/generaterise/tabledataimport'),
                                meta: { title: '抄表数据导入', keepAlive: true, permission: ['228'] }
                            }
                        ]
                    },
                    {
                        path: '/costgeneration/ledgermanagement/conventionalmodify',
                        component: RouteView,
                        meta: { title: '台帐管理', keepAlive: true, permission: ['228'] },
                        redirect: '/costgeneration/ledgermanagement/conventionalmodify',
                        children: [
                            {
                                path: '/costgeneration/ledgermanagement/conventionalmodify',
                                name: '常规台帐修改',
                                component: () => import('@/views/costgeneration/ledgermanagement/conventionalmodify'),
                                meta: { title: '常规台帐修改', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/ledgermanagement/publicpoolmodify',
                                name: '公摊台帐修改',
                                component: () => import('@/views/costgeneration/ledgermanagement/publicpoolmodify'),
                                meta: { title: '公摊台帐修改', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/ledgermanagement/conventionalcopy',
                                name: '常规台帐复制',
                                component: () => import('@/views/costgeneration/ledgermanagement/conventionalcopy'),
                                meta: { title: '常规台帐复制', keepAlive: true, permission: ['228'] }
                            }
                        ]
                    },
                    {
                        path: '/costgeneration/feecollection/feecollection',
                        component: RouteView,
                        meta: { title: '费用收取', keepAlive: true, permission: ['228'] },
                        redirect: '/costgeneration/feecollection/feecollection',
                        children: [
                            {
                                path: '/costgeneration/feecollection/conventionalcharge',
                                name: '常规收款',
                                component: () => import('@/views/costgeneration/feecollection/conventionalcharge'),
                                meta: { title: '常规收款', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/feecollection/convenientcharge',
                                name: '便捷收款',
                                component: () => import('@/views/costgeneration/feecollection/convenientcharge'),
                                meta: { title: '便捷收款', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/feecollection/linkecharge',
                                name: '临客收款',
                                component: () => import('@/views/costgeneration/feecollection/linkecharge'),
                                meta: { title: '临客收款', keepAlive: true, permission: ['228'] }
                            }
                        ]
                    },
                    {
                        path: '/costgeneration/paymentchanges/paymentchangesconventional',
                        component: RouteView,
                        meta: { title: '收款变更', keepAlive: true, permission: ['228'] },
                        redirect: '/costgeneration/paymentchanges/paymentchangesconventional',
                        children: [
                            {
                                path: '/costgeneration/paymentchanges/paymentchangesconventional',
                                name: '常规收款变更',
                                component: () =>
                                    import('@/views/costgeneration/paymentchanges/paymentchangesconventional'),
                                meta: { title: '常规收款变更', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/paymentchanges/paymentchangeslinke',
                                name: '临客收款变更',
                                component: () => import('@/views/costgeneration/paymentchanges/paymentchangeslinke'),
                                meta: { title: '临客收款变更', keepAlive: true, permission: ['228'] }
                            }
                        ]
                    },
                    {
                        path: '/costgeneration/refundinvalid/invoicerefund',
                        component: RouteView,
                        meta: { title: '退款作废', keepAlive: true, permission: ['228'] },
                        redirect: '/costgeneration/refundinvalid/invoicerefund',
                        children: [
                            {
                                path: '/costgeneration/refundinvalid/invoicerefund',
                                name: '收款单退款',
                                component: () => import('@/views/costgeneration/refundinvalid/invoicerefund'),
                                meta: { title: '收款单退款', keepAlive: true, permission: ['228'] }
                            },
                            {
                                path: '/costgeneration/refundinvalid/invoiceinvalid',
                                name: '收款单作废',
                                component: () => import('@/views/costgeneration/refundinvalid/invoiceinvalid'),
                                meta: { title: '收款单作废', keepAlive: true, permission: ['228'] }
                            }
                        ]
                    },
                    {
                        path: '/costgeneration/advancereceiptmanagement',
                        name: '预收款管理',
                        component: () => import('@/views/costgeneration/advancereceiptmanagement'),
                        meta: { title: '预收款管理', keepAlive: true, permission: ['226'] }
                    }
                ]
            },
            {
                path: 'parkingmanagement',
                component: RouteView,
                meta: { title: '车位管理', keepAlive: true, icon: bxAnaalyse, permission: ['233'] },
                children: [
                    {
                        path: '/parkingmanagement/penalty',
                        name: '滞纳金设置',
                        component: () => import('@/views/parkingmanagement/penalty'),
                        meta: { title: '滞纳金设置', keepAlive: true, permission: ['233'] }
                    },
                    {
                        path: '/parkingmanagement/parkinginformation',
                        name: '车位信息',
                        component: () => import('@/views/parkingmanagement/parkinginformation'),
                        meta: { title: '车位信息', keepAlive: true, permission: ['233'] }
                    },
                    {
                        path: '/parkingmanagement/parkingsale',
                        name: '车位销售',
                        component: () => import('@/views/parkingmanagement/parkingsale'),
                        meta: { title: '车位销售', keepAlive: true, permission: ['233'] }
                    },
                    {
                        path: '/parkingmanagement/parkingrent/contractmanagement',
                        component: RouteView,
                        meta: { title: '车位出租', keepAlive: true, permission: ['233'] },
                        redirect: '/parkingmanagement/parkingrent/contractmanagement',
                        children: [
                            {
                                path: '/parkingmanagement/parkingrent/contractmanagement',
                                name: '合同管理',
                                component: () => import('@/views/parkingmanagement/parkingrent/contractmanagement'),
                                meta: { title: '合同管理', keepAlive: true, permission: ['233'] }
                            },
                            {
                                path: '/parkingmanagement/parkingrent/contractpayment',
                                name: '合同缴费',
                                component: () => import('@/views/parkingmanagement/parkingrent/contractpayment'),
                                meta: { title: '合同缴费', keepAlive: true, permission: ['233'] }
                            },
                            {
                                path: '/parkingmanagement/parkingrent/paymentinvalid',
                                name: '缴费作废',
                                component: () => import('@/views/parkingmanagement/parkingrent/paymentinvalid'),
                                meta: { title: '缴费作废', keepAlive: true, permission: ['233'] }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
            },
            {
                path: 'register-result',
                name: 'registerResult',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
            },
            {
                path: 'recover',
                name: 'recover',
                component: undefined
            }
        ]
    },
    {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
            {
                path: '/account/center',
                name: 'center',
                component: () => import('@/views/account/center/Index'),
                meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
            },
            {
                path: '/account/settings',
                name: 'settings',
                component: () => import('@/views/account/settings/Index'),
                meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
                redirect: '/account/settings/base',
                hideChildrenInMenu: true,
                children: [
                    {
                        path: '/account/settings/base',
                        name: 'BaseSettings',
                        component: () => import('@/views/account/settings/BaseSetting'),
                        meta: { title: '基本设置', hidden: true, permission: ['user'] }
                    },
                    {
                        path: '/account/settings/security',
                        name: 'SecuritySettings',
                        component: () => import('@/views/account/settings/Security'),
                        meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
                    },
                    {
                        path: '/account/settings/custom',
                        name: 'CustomSettings',
                        component: () => import('@/views/account/settings/Custom'),
                        meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
                    },
                    {
                        path: '/account/settings/binding',
                        name: 'BindingSettings',
                        component: () => import('@/views/account/settings/Binding'),
                        meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
                    },
                    {
                        path: '/account/settings/notification',
                        name: 'NotificationSettings',
                        component: () => import('@/views/account/settings/Notification'),
                        meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
    }
]
