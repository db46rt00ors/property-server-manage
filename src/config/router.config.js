// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        meta: { title: '首页' },
        redirect: '/personaloffice/Mynews',
        children: [
            // dashboard
            {
                path: 'personaloffice',
                name: 'personaloffice',
                redirect: '/personaloffice/Mynews',
                component: RouteView,
                meta: { title: '个人办公', keepAlive: true, icon: bxAnaalyse, permission: ['901'] },
                children: [
                    {
                        path: 'Mynews',
                        name: 'Mynews',
                        component: () => import('@/views/personaloffice/Mynews'),
                        meta: { title: '我的消息', keepAlive: true, permission: ['901', '90101'] }
                    },
                    {
                        path: 'Mymail',
                        name: 'Mymail',
                        component: () => import('@/views/personaloffice/Mymail'),
                        meta: { title: '我的邮件', keepAlive: true, permission: ['901', '90102'] }
                    }
                ]
            },
            {
                path: 'property',
                name: 'property',
                component: PageView,
                meta: { title: '楼盘管理', keepAlive: true, icon: 'slack', permission: ['221'] },
                redirect: '/property/add',
                children: [
                    {
                        path: '/property/add',
                        component: RouteView,
                        meta: { title: '住宅小区', keepAlive: true, icon: 'layout', permission: ['221', '22101'] },
                        redirect: '/property/add',
                        children: [
                            {
                                path: '/property/add',
                                name: '新增住宅向导',
                                component: () => import('@/views/property/add'),
                                meta: {
                                    title: '新增住宅向导',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210101']
                                }
                            },
                            {
                                path: '/property/building',
                                name: '批量增加住宅',
                                component: () => import('@/views/property/building'),
                                meta: {
                                    title: '批量增加楼宇',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210102']
                                }
                            },
                            {
                                path: '/property/maintain',
                                name: '住宅维护',
                                component: () => import('@/views/property/maintain'),
                                meta: {
                                    title: '住宅维护',
                                    keepAlive: true,
                                    permission: ['221', '22101', '2210103']
                                }
                            },
                            {
                                path: '/property/search',
                                name: '住宅查询',
                                component: () => import('@/views/property/search'),
                                meta: { title: '住宅查询', keepAlive: true, permission: ['221', '22101', '2210104'] }
                            }
                        ]
                    },
                    {
                        path: '/business/add',
                        component: RouteView,
                        meta: { title: '商业房产', keepAlive: true, icon: 'layout', permission: ['221', '22102'] },
                        redirect: '/business/add',
                        children: [
                            {
                                path: '/business/add',
                                name: '新增房产向导',
                                component: () => import('@/views/business/add'),
                                meta: {
                                    title: '新增房产向导',
                                    keepAlive: true,
                                    permission: ['221', '22102', '2210201']
                                }
                            },
                            {
                                path: '/business/building',
                                name: '批量增加商业房产',
                                component: () => import('@/views/business/building'),
                                meta: {
                                    title: '批量增加楼宇',
                                    keepAlive: true,
                                    permission: ['221', '22102', '2210202']
                                }
                            },
                            {
                                path: '/business/maintain',
                                name: '房产维护',
                                component: () => import('@/views/business/maintain'),
                                meta: { title: '住宅维护', keepAlive: true, permission: ['221', '22102', '2210203'] }
                            },
                            {
                                path: '/business/search',
                                name: '房产查询',
                                component: () => import('@/views/business/search'),
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
                        path: 'information',
                        name: 'information',
                        component: () => import('@/views/owner/information'),
                        meta: { title: '业主信息', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: 'inspection',
                        name: 'inspection',
                        component: () => import('@/views/owner/inspection'),
                        meta: { title: '业主验房', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: '/owner/decoration/enter',
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
                        path: 'checkin',
                        name: 'checkin',
                        component: () => import('@/views/owner/checkin'),
                        meta: { title: '业主入住', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: 'management',
                        name: 'management',
                        component: () => import('@/views/owner/management'),
                        meta: { title: '请修管理', keepAlive: true, permission: ['223'] }
                    },
                    {
                        path: 'addition',
                        name: 'addition',
                        component: () => import('@/views/owner/addition'),
                        meta: { title: '业主加建', keepAlive: true, permission: ['223'] }
                    }
                ]
            },
            {
                path: '/cost/common',
                component: RouteView,
                meta: { title: '费项设置', keepAlive: true, icon: bxAnaalyse, permission: ['223'] },
                redirect: '/cost/common',
                children: [
                    {
                        path: '/cost/common/enactment',
                        component: RouteView,
                        meta: { title: '常规费项', keepAlive: true, permission: ['223'] },
                        redirect: '/cost/common/enactment',
                        children: [
                            {
                                path: '/cost/common/enactment',
                                name: '常规费项设定',
                                component: () => import('@/views/cost/common/enactment'),
                                meta: { title: '费项设定', keepAlive: true, permission: ['223'] }
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
                                //   floorcoefficient
                                path: '/cost/common/floorcoefficient',
                                name: '楼层系数',
                                component: () => import('@/views/cost/common/floorcoefficient'),
                                meta: { title: '楼层系数', keepAlive: true, permission: ['223'] }
                            }
                        ]
                    },
                    {
                        path: '/cost/pool/enactment',
                        component: RouteView,
                        meta: { title: '公摊费项', keepAlive: true, permission: ['226'] },
                        redirect: '/cost/pool/enactment',
                        children: [
                            {
                                path: '/cost/pool/enactment',
                                name: '公摊费项设定',
                                component: () => import('@/views/cost/pool/enactment'),
                                meta: { title: '费项设定', keepAlive: true, permission: ['226'] }
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
                        //  serviceteam  printdocuments
                        path: '/cost/convenient',
                        name: 'convenient',
                        component: () => import('@/views/cost/convenient'),
                        meta: { title: '便捷费项', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/casualguest',
                        name: 'casualguest',
                        component: () => import('@/views/cost/convenient'),
                        meta: { title: '便捷费项', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/serviceteam',
                        name: 'serviceteam',
                        component: () => import('@/views/cost/serviceteam'),
                        meta: { title: '客服组设置', keepAlive: true, permission: ['226'] }
                    },
                    {
                        path: '/cost/printdocuments',
                        name: 'printdocuments',
                        component: () => import('@/views/cost/printdocuments'),
                        meta: { title: '打印单据设定', keepAlive: true, permission: ['226'] }
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
        path: '/test',
        component: BlankLayout,
        redirect: '/test/home',
        children: [
            {
                path: 'home',
                name: 'TestHome',
                component: () => import('@/views/Home')
            }
        ]
    },

    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
    }
]
