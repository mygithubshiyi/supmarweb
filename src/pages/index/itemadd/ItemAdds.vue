<template>
    <div>
    <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>商品入库，带*必填</p>
    </div>
    <div class="tops">
     <el-tabs type="border-card">
        <!-- <el-tab-pane label="库存情况" class="users">
     <p>库存管理</p>
            <div class="bottoms">
            <span class="titles">分类：</span>
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
                    prop="prices"
                    label="进价（元）"
                     width="100">
                </el-table-column>
                 <el-table-column
                    prop="stores"
                    label="入库"
                     width="100"
                    >
                </el-table-column>
                 <el-table-column
                    prop="nums"
                    label="库存"
                     width="100">
                </el-table-column>
                  <el-table-column
                    prop="saled"
                    label="已售"
                     width="100">
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
        <!-- 商品入库 -->
        <el-tab-pane label="添加库存">
            <p> 商品入库</p>
         <div>
              <p><span class="pwd">*</span>商品条形码:</p>
               <el-input v-model="input"  class="inputs"></el-input>
        </div>
        <div class="bottoms">
              <p><span class="pwd">*</span>数量:</p>
               <el-input v-model="input1"  class="inputs"></el-input>
             <p><span class="text23">记重商品单位为千克</span></p>

        </div>
        <div class="bottoms">
              <p><span class="pwd">*</span>进价:</p>
               <el-input v-model="input2"  class="inputs"></el-input>元
        </div>
         <div class="bottoms">
               <el-button type="success" class="btn">入库</el-button>
        </div>
        </el-tab-pane>
    </el-tabs>
     </div>
    </div>
</template>

<script>
    export default {
         data() {
    return {
      input: "",
      input1: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "用户1"
        },
        {
          value: "选项2",
          label: "用户2"
        },
        {
          value: "选项3",
          label: "用户3"
        }
      ],
      value: "",
      tableData: [
        {
          code: "6911989262549",
          name: "我的优乐美",
          prices: "7.00",
          stores: "10",
          nums: "5",
          saled: "5",
          gover: ""
        },
        {
          code: "6911989262550",
          name: "我的优乐美",
          prices: "7.00",
          stores: "10",
          nums: "5",
          saled: "5",
          gover: ""
        },
        {
          code: "6911989262551",
          name: "我的优乐美",
          prices: "7.00",
          stores: "10",
          nums: "5",
          saled: "5",
          gover: ""
        },
        {
          code: "6911989262552",
          name: "我的优乐美",
          prices: "7.00",
          stores: "10",
          nums: "5",
          saled: "5",
          gover: ""
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
.tops {
  margin-left: 10px;
}
.tops .inputs {
  width: 200px;
}
.tops p {
  margin-bottom: 10px;
}
.tops .pwd {
  color: red;
}
.bottoms {
  margin-top: 15px;
}
.bottoms .btn {
  padding: 10px;
}
.bottoms .text23 {
  font-size: 14px;
  color: #555;
}
.bottoms .selects {
  width: 160px;
}
.el-textarea {
  margin-left: 0px;
}
.bottoms .titles {
  margin-left: 10px;
}
.pages {
  margin-top: 20px;
}
</style>