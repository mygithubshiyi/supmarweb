import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("../pages/Index"),
    children:[
      // 商品管理
      {path:'/index/shop',component:()=>import("../pages/index/shop/ShopGov.vue")},
      // 添加商品
      {path:'/index/shopadd',component:()=>import("../pages/index/shop/AddShop.vue")},
      // 进货管理
      // {path:'/index/itemadd',component:()=>import("../pages/index/itemadd/ItemAddGov.vue")},
      // 库存管理
      {path:'/index/itemgovs',component:()=>import("../pages/index/itemadd/ItemGov.vue")},
       // 添加库存
       {path:'/index/itemadds',component:()=>import("../pages/index/itemadd/ItemAdds.vue")},
      // 商品退货
      {path:'/index/shopout',component:()=>import("../pages/index/itemout/ShopOut.vue")},
      // 销售列表
      {path:'/index/saillist',component:()=>import("../pages/index/itemout/SailList.vue")},
       // 商品出库
       {path:'/index/shopsale',component:()=>import("../pages/index/itemout/ShopSale.vue")},
      // 销售统计
      {path:'/index/govout',component:()=>import("../pages/index/gov/SailList.vue")},
        // 进货统计
        {path:'/index/govlist',component:()=>import("../pages/index/gov/OutSal.vue")},
      // 账号管理 账号管理
      {path:'/index/accg',component:()=>import("../pages/index/acc/AccGovs.vue")},
       // 账号管理 添加账号
       {path:'/index/accd',component:()=>import("../pages/index/acc/AddAccs.vue")},
        // 账号管理 密码修改
      {path:'/index/accp',component:()=>import("../pages/index/acc/Pwd.vue")},
      // 会员管理 账号管理
      {path:'/index/vipacc',component:()=>import("../pages/index/vip/AccGov.vue")},
      // 会员管理 添加账号
      {path:'/index/vipadd',component:()=>import("../pages/index/vip/AddAcc.vue")},
  ]
  }
]

const router = new VueRouter({
  routes
})

export default router
