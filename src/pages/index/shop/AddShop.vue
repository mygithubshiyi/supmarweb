<template>
     <div>
        <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>您可以在这里添加新的商品或者编辑已有商品</p>
    </div>
    <div class="tops">
     <el-tabs type="border-card">
        <!-- <el-tab-pane label="商品管理" class="users">
            <p>商品管理</p>
           
            <div class="bottoms">
             <el-select v-model="value" placeholder="---选择分类----▼" class="selects">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
             </el-select> 
             <span class="titles">关键字：</span>
              <el-input v-model="input"  class="inputs"></el-input>
              <span class="titles">(商品名称,条形码)</span>
              <el-button type="success" class="btn">查询</el-button>
            </div>
          <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="code"
                    label="商品条形码"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="商品名称"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="classes"
                    label="所属分类"
                     width="100">
                </el-table-column>
                 <el-table-column
                    prop="price"
                    label="售价（元）"
                     width="100"
                    >
                </el-table-column>
                 <el-table-column
                    prop="sale"
                    label="促销价（元）"
                     width="160">
                </el-table-column>
                  <el-table-column
                    prop="pic"
                    label="市场价（元）"
                     width="160">
                </el-table-column>
                  <el-table-column
                    prop="stores"
                    label="库存"
                     width="100">
                </el-table-column>
                  <el-table-column
                    prop="storemoney"
                    label="库存总额（元）"
                     width="180">
                </el-table-column>
                  <el-table-column
                    prop="prices"
                    label="销售总额（元）"
                     width="180">
                </el-table-column>
                  <el-table-column
                    prop="gover"
                    label="管理"
                     width="100">
                </el-table-column>
        </el-table>
           <div class="pages">
             <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        </el-tab-pane> -->
        <el-tab-pane label="添加商品">
            <p> 添加商品</p>
            <!-- 所属分类 -->
             <div class="bottoms">
              <p><span class="pwd">*</span>所属分类:</p>
               <el-select v-model="value" placeholder="---选择分类----▼" class="selects">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
             </el-select> 
            </div>
            <!-- 商品名称 -->
         <div class="bottoms">
              <p><span class="pwd">*</span>商品名称:</p>
               <el-input v-model="input"  class="inputs"></el-input>
        </div>
       <!-- 商品售价 -->
        <div class="bottoms">
              <p><span class="pwd">*</span>商品售价:</p>
               <el-input v-model="input1" class="inputs"></el-input>元
        </div>
        <!-- 市场价 -->
        <div class="bottoms">
              <p><span class="pwd">*</span>市场价:</p>
             <el-input v-model="input2"  class="inputs"></el-input>元
             <p><span class="text23">默认市场价为售价的1.2倍</span></p>
        </div>
        <!-- 商品进价 -->
        <div class="bottoms">
              <p><span class="pwd">*</span>商品进价:</p>
               <el-input v-model="input3" class="inputs"></el-input>元
        </div>
        <!-- 入库数量 -->
         <div class="bottoms">
              <p><span class="pwd">*</span>入库数量:</p>
               <el-input v-model="input4" class="inputs"></el-input>
               <p><span class="text23">记重商品单位为千克</span></p>
        </div>
        <!-- 商品重量 -->
          <div class="bottoms">
              <p><span class="pwd">*</span>商品重量:</p>
            <el-input v-model="input5" class="inputs"></el-input>
        </div>
        <!-- 商品单位 -->
          <div class="bottoms">
              <p><span class="pwd">*</span>商品单位:</p>
            <el-input v-model="input6" class="inputs"></el-input>
        </div>
         <!-- 会员优惠 -->
          <div class="bottoms">
              <p><span class="pwd">*</span>会员优惠:</p>
            <el-radio v-model="radio" label="1">享受</el-radio>
            <el-radio v-model="radio" label="2">不享受</el-radio>
        </div>
        <!-- 是否促销 -->
          <div class="bottoms">
              <p><span class="pwd">*</span>是否促销:</p>
            <el-radio v-model="radios" label="1">启用</el-radio>
            <el-radio v-model="radios" label="2">禁用</el-radio>
        </div>
        <!-- 商品简介 -->
        <div class="bottoms">
            <p><span class="pwd">*</span>商品简介:</p>
        <el-form ref="form" :model="form" label-width="80px" class="textareas">
          <el-form-item class="textareas" label="商品简介">
            <el-input type="textarea" v-model="form.desc" ></el-input>
        </el-form-item>
        </el-form>
        <p><span class="text23">不超过200个汉字</span></p>
        </div>
        <!-- 按钮 -->
         <div class="bottoms">
               <el-button type="success" class="btn">添加</el-button>
        </div>
        </el-tab-pane>
    </el-tabs>
     </div>
    </div>
</template>

<script>
    export default {
          data(){
        return{
            input:"",
            input1:"",
            input2:"",
            input3:"",
            input4:"",
            input5:"",
            input6:"",
            options: [{
          value: '选项1',
          label: '用户1'
        }, {
          value: '选项2',
          label: '用户2'
        }, {
          value: '选项3',
          label: '用户3'
        }],
        value: '',
        tableData: [{
            code: '6911989262549',
            name:'我的优乐美',
            classes: '优乐美',
            price:"2.00",
            sale:"未促销",
            pic:"2.40",
            stores:"5",
            storemoney:"35.00",
            prices:"40",
            gover:""
          },{
            code: '6911989262550',
            name:'我的优乐美',
            classes: '优乐美',
            price:"2.00",
            sale:"未促销",
            pic:"2.40",
            stores:"5",
            storemoney:"35.00",
            prices:"40",
            gover:""
          },{
            code: '6911989262551',
            name:'我的优乐美',
            classes: '优乐美',
            price:"2.00",
            sale:"未促销",
            pic:"2.40",
            stores:"5",
            storemoney:"35.00",
            prices:"40",
            gover:""
          },{
            code: '6911989262552',
            name:'我的优乐美',
            classes: '优乐美',
            price:"2.00",
            sale:"未促销",
            pic:"2.40",
            stores:"5",
            storemoney:"35.00",
            prices:"40",
            gover:""
          }],
          radio: '1',
          radios:"2",
           form: {
          desc: ''
        }

        }
    }
    }
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.text11{
   color: #555;
   font-size: 14px;
   line-height: 30px;
   margin-top: 10px;
   margin-left: 10px;
 }
.tops{
    margin-left: 10px;
}
.tops .inputs{
    width:200px;
   
}
.tops p{
    margin-bottom: 10px;
}
.tops .pwd{
    color:red;
}
.bottoms{
    margin-top: 15px;
}
.bottoms .btn{
    padding:10px;
}
.bottoms .text23{
    font-size: 14px;
    color: #555;
}
.bottoms .selects{
    width:160px;
}
.el-textarea{
    margin-left: 0px;
}
.bottoms .titles{
    margin-left: 10px;
}
.pages{
   margin-top: 20px;
}
</style>