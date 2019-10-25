<template>
   <div>
    <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>商品销售，带*必填</p>
    </div>
    <div class="top">
        <el-tabs type="border-card">
        <!-- <el-tab-pane label="销售明细">
            <p>销售明细</p>
            <div class="times">
                 <div class="block">
                <span class="demonstration">开始时间:</span>
                <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
               </div>
                 <div class="block">
                <span class="demonstration">结束时间:</span>
                <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
               </div>
               <span class="dates">(格式:2012-01-01)</span>
            </div>
             <span class="titles">关键字：</span>
             <el-input v-model="input"  class="inputs"></el-input>
             <span class="titles">商品名称，订单号，客户名字，会员卡号</span>
             <el-button type="success" class="btn">查询</el-button>
             <div class="line">
                <span class="text12"></span>
                <el-divider></el-divider>
                <span class="text13"></span>
             </div>
             <div class="bottoms">
            <el-table 
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="lists"
                        label="订单号"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="名称"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="nums"
                        label="数量"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="实际售价"
                        width="100"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="simple"
                        label="优惠（促销会员）"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="eit"
                        label="退款"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="saletime"
                        label="销售时间"
                        width="160">
                    </el-table-column>
            </el-table>
                <div class="pages">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
        </div>
        </el-tab-pane> -->
        <el-tab-pane label="商品出库">
            <p>商品销售</p>
        <div class="bottoms">
              <p><span class="pwd">*</span>商品条形码:</p>
               <el-input v-model="input"  class="inputs"></el-input>
        </div>
          <div class="bottoms">
              <p><span class="pwd">*</span>数量:</p>
               <el-input v-model="inputs"  class="inputs1"></el-input>
               <span class="text33">计算商品单位为千克</span>
        </div>
        <div class="bottoms">
         <el-button type="success" class="btn">加入订单</el-button>
         <span class="ships">重新出库</span>
        </div>
         <div class="line">
                <span class="text12"></span>
                <el-divider></el-divider>
                <span class="text13"></span>
         </div>
         <div class="bottoms">
            <el-table 
                    :data="tableDatas"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="名称"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="nums"
                        label="数量"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="singleprice"
                        label="单价（元）"
                        width="100"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="totalprice"
                        label="总价（元）"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="totals"
                        label="优惠总价（元）"
                        width="160">
                    </el-table-column>
                   
            </el-table>
         </div>
         <div class="bottoms">
            <span class="text01">总价:0元</span> 
            <span class="text01">优惠:0元</span> 
            <span class="computs">小计:0元</span> 
         </div>
         <div class="line">
                <span class="text12"></span>
                <el-divider></el-divider>
                <span class="text13"></span>
         </div>
           <div class="bottoms">
              <p><span class="pwd">*</span>会员卡号:</p>
             <el-input v-model="input1"  class="inputs"></el-input>
             <p><span class="text33">填写会员卡卡号</span></p>
        </div>
         <div class="bottoms">
          <el-button type="success" class="btn">确认提交</el-button>
         </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="商品退货">
            <p>商品退货</p>
            <div class="bottoms">
            <span class="text001">订单号:</span>
            <el-input v-model="input2"  class="inputs"></el-input>
            <el-button type="success" class="btn">查询</el-button>
            </div>
        </el-tab-pane> -->
           
        </el-tabs>
    </div>
 </div>
</template>

<script>
    export default {
        data() {
    return {
      value1: "",
      input: "",
      inputs:1,
      input1: "",
      input2: "",
      tableData: [
        {
          lists: "6911989262549",
          name: "海飞丝去屑洗发水",
          nums: "3",
          price: "24",
          simple: "2.00元/无",
          eit: "无退款",
          saletime: "2012-02-17",
          storemoney: "35.00"
        },
        {
          lists: "6911989262550",
          name: "海飞丝去屑洗发水",
          nums: "3",
          price: "24",
          simple: "2.00元/无",
          eit: "无退款",
          saletime: "2012-02-17",
          storemoney: "35.00"
        },
        {
          lists: "6911989262551",
          name: "海飞丝去屑洗发水",
          nums: "3",
          price: "24",
          simple: "2.00元/无",
          eit: "无退款",
          saletime: "2012-02-17",
          storemoney: "35.00"
        },
        {
          lists: "6911989262552",
          name: "海飞丝去屑洗发水",
          nums: "3",
          price: "24",
          simple: "2.00元/无",
          eit: "无退款",
          saletime: "2012-02-17",
          storemoney: "35.00"
        }
      ],
       tableDatas: [
        {
          name: "海飞丝去屑洗发水",
          nums: "3",
          singleprice: "24",
          totalprice: "30.00",
          totals:"24.00"
        }
      ]
    };
  }
    }
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.text11 {
  color: #555;
  font-size: 14px;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 10px;
}
.top {
  margin-left: 10px;
}
.demonstration {
  margin-right: 10px;
  margin-left: 10px;
}
.times {
  display: flex;
}
.dates {
  margin-top: 10px;
  margin-left: 10px;
}
.top .inputs {
  width: 300px;
  margin-top: 20px;
}
.top .inputs1{
width: 200px;
  margin-top: 20px; 
}
.top .pwd{
    color:red;
}
.titles {
  margin-left: 10px;
}
.top .btn {
  padding: 10px;
}
.bottoms {
  margin-top: 15px;
}
.pages {
  margin-top: 20px;
}
.line {
  margin-top: 20px;
}
.bottoms .text33{
    font-size: 14px;
    color: #555;
    margin-left: 10px;
}
.ships{
    color:green;
    font-size: 14px;
    margin-left: 10px;
}
.computs{
    color:red;
    margin-left: 10px;
}
.bottoms .text01{
    margin-left: 10px;
}
.bottoms .text001{
    margin-right: 10px;
}
</style>