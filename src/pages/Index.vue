<template>
        <el-container>
            <!-- 头部 -->
        <el-header></el-header>
        <el-container>
            <el-aside>
                 <el-menu
      default-active="/index/shop"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
      >
      <el-submenu v-for="(item,i) in list" :index="item.index" :key="i">
        <template slot="title">
          <i :class="item.class"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(items,i) in item.childrens" :key="i" :index="items.singindex" >{{items.name}}</el-menu-item>
          <!-- <el-menu-item index="/index/shopadd">添加商品</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
       <!-- <el-submenu index="/index/itemadd">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/itemadd">进货管理</el-menu-item>
          <el-menu-item index="/index/itemgovs">库存管理</el-menu-item>
           <el-menu-item index="/index/itemadds">添加库存</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
       <!-- <el-submenu index="/index/itemout">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>出货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/saillist">销售列表</el-menu-item>
          <el-menu-item index="/index/shopsale">商品出库</el-menu-item>
           <el-menu-item index="/index/shopout">商品退货</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
       <!-- <el-submenu index="/index/gov">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/govout">销售统计</el-menu-item>
          <el-menu-item index="/index/govlist">进货统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
       <!-- <el-submenu index="/index/acc">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/accg">账号管理</el-menu-item>
          <el-menu-item index="/index/accd">添加账号</el-menu-item>
           <el-menu-item index="/index/accp">密码修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
       <!-- <el-submenu index="/index/vip">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/vipacc">账号管理</el-menu-item>
          <el-menu-item index="/index/vipadd">添加账号</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
</template>

<script>
    export default {
        data(){
          return{
            list:[
              {index:"/index/shop",name:"商品管理",class:"el-icon-shopping-cart-1",childrens:[
                {singindex:"/index/shop",name:"商品管理"},
                {singindex:"/index/shopadd",name:"添加商品"}
              ]},
              {index:"/index/itemadd",name:"进货管理",class:"el-icon-box",childrens:[
                //  {singindex:"/index/itemadd",name:"进货管理"},
                  {singindex:"/index/itemgovs",name:"库存管理"},
                   {singindex:"/index/itemadds",name:"添加库存"},
              ]},
              {index:"/index/itemout",name:"出货管理",class:"el-icon-sell",childrens:[
                 {singindex:"/index/saillist",name:"销售列表"},
                  {singindex:"/index/shopsale",name:"商品出库"},
                   {singindex:"/index/shopout",name:"商品退货"},
              ]},
              {index:"/index/gov",name:"统计管理",class:"el-icon-coin",childrens:[
                 {singindex:"/index/govout",name:"销售统计"},
                  {singindex:"/index/govlist",name:"进货统计"},
              ]},
              {index:"/index/acc",name:"账号管理",class:"el-icon-coordinate",childrens:[
                 {singindex:"/index/accg",name:"账号管理"},
                  {singindex:"/index/accd",name:"添加账号"},
                   {singindex:"/index/accp",name:"密码修改"},
              ]},
              {index:"/index/vip",name:"会员管理",class:"el-icon-chat-dot-square",childrens:[
                 {singindex:"/index/vipacc",name:"账号管理"},
                  {singindex:"/index/vipadd",name:"添加账号"},
              ]},
            ]
          }
        }
    }
</script>

<style  scoped>
.el-container{
    width: 100%;
    height:100%;
}
 .el-header{
    width:100%;
    height:40px;
    background-color:#535353; 
 }
.el-aside{
    width: 260px;
    height: 100%;
    background-color:#545c64 ;
}
 .el-main{
     flex: 1;
     background-color: #fff;
 }
 .el-menu{
    border:none;
 }
</style>