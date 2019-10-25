<template>
    <div>
     <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>会员卡用户管理</p>
    </div>
    <div class="tops">
     <el-tabs type="border-card">
        <el-tab-pane label="账号管理">
         <p>会员管理</p>
          <div class="bottoms">
        <span class="titles">搜索：</span>
        <el-input v-model="input8"  class="inputs"></el-input>
        <span class="titles">会员卡，会员名，电话名，手机</span>
        <el-button type="success" class="btn">查询</el-button>
        </div>
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
                    prop="cards"
                    label="会员卡卡号"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="会员姓名"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="classes"
                    label="会员等级"
                     width="100">
                </el-table-column>
                 <el-table-column
                    prop="score"
                    label="会员积分"
                     width="100"
                    >
                </el-table-column>
                 <el-table-column
                    prop="sales"
                    label="折扣"
                     width="100">
                </el-table-column>
                  <el-table-column
                    prop="tele"
                    label="手机号"
                     width="160">
                </el-table-column>
                <el-table-column
                    prop="nums"
                    label="座机号"
                     width="160">
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
         </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="添加账号">
            <p>添加编辑账号</p>
            <div class="bottoms">
              <p><span class="pwd">*</span>真实姓名:</p>
             <el-input v-model="input"  class="inputs"></el-input>
            </div>
              <div class="bottoms">
              <p><span class="pwd">*</span>会员卡卡号:</p>
             <el-input v-model="input1"  class="inputs"></el-input>
            </div>
            <div class="bottoms"> 
             <span class="pwd">*</span>
             <span>用户组:</span>
               <el-select v-model="value" placeholder="普通会员--99%▼" class="selects">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
             </el-select> 
            </div>
            <div class="bottoms">
             <span class="text002">身份证号:</span>
              <el-input v-model="input2"  class="inputs"></el-input>
            </div>
              <div class="bottoms">
             <span  class="text002">用户状态:</span>
               <el-radio v-model="radio" label="1">启用</el-radio>
               <el-radio v-model="radio" label="2">禁用</el-radio>
            </div>
              <div class="bottoms">
             <span class="text002">手机号码:</span>
              <el-input v-model="input3"  class="inputs"></el-input>
            </div>
              <div class="bottoms">
             <span class="text002">座机号码:</span>
              <el-input v-model="input4"  class="inputs"></el-input>
            </div>
              <div class="bottoms">
             <span class="text002">邮箱地址:</span>
              <el-input v-model="input5"  class="inputs"></el-input>
            </div>
            <div class="bottoms">
            <span class="text002">地区选择:</span>
            <el-select v-model="value1" multiple placeholder="---请选择省份▼---" class="selects">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
           </el-select>

            <el-select
                v-model="value2"
                multiple
                collapse-tags
                style="margin-left: 20px;"
                placeholder="--请选择城市▼---" class="selects">
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            </div>
                <div class="bottoms">
             <span class="text002">详细地址:</span>
              <el-input v-model="input6"  class="inputs"></el-input>
            </div>
              <div class="bottoms">
             <span class="text002">邮政编码:</span>
              <el-input v-model="input7"  class="inputs"></el-input>
            </div>
             <el-button type="success" class="btn">添加</el-button>
        </el-tab-pane> -->

    </el-tabs>
    </div>
    </div>
</template>

<script>
    export default {
         data() {
    return {
    //   options: [
    //     {
    //       value: "选项1",
    //       label: "用户1"
    //     },
    //     {
    //       value: "选项2",
    //       label: "用户2"
    //     },
    //     {
    //       value: "选项3",
    //       label: "用户3"
    //     }
    //   ],
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6:"",
      input7:"",
      input8:"",
      radio: "1",
    //   options: [
    //     {
    //       value: "选项1",
    //       label: "四川省"
    //     },
    //     {
    //       value: "选项2",
    //       label: "黑龙江省"
    //     },
    //     {
    //       value: "选项3",
    //       label: "山东省"
    //     },
    //   ],
    //   options1: [
    //     {
    //       value: "选项1",
    //       label: "成都市"
    //     },
    //     {
    //       value: "选项2",
    //       label: "哈尔滨市"
    //     },
    //     {
    //       value: "选项3",
    //       label: "青岛市"
    //     },
    //   ], 
    //   tableData:[
    //     {
    //       cards: "222",
    //       name: "KKK",
    //       classes: "铜牌会员",
    //       score: "218",
    //       sales: "50%",
    //       tele: "15964787899",
    //       nums: "15964787899",
    //       gover: ""
    //     },
    //        {
    //       cards: "333",
    //       name: "KKK",
    //       classes: "普通会员",
    //       score: "218",
    //       sales: "50%",
    //       tele: "15964787899",
    //       nums: "15964787899",
    //       gover: ""
    //     },
    //   ]
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
  width: 300px;
  margin-top: 20px;
}
.tops .pwd {
  color: red;
}
.bottoms {
  margin-top: 15px;
}
.selects {
  margin-left: 10px;
  width: 160px;
}
.text002 {
  margin-right: 10px;
}

.tops .btn {
  padding: 10px;
}
.titles{
    margin-left: 10px;
    margin-right: 10px;
}
.line {
  margin-top: 20px;
}
.pages {
  margin-top: 20px;
}
</style>