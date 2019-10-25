<template>
    <div>
    <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>添加管理员账号</p>
    </div>
    <div class="tops">
     <el-tabs type="border-card">
        <!-- <el-tab-pane label="账号管理" class="users">账号管理
          <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="用户名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="group"
                    label="用户组"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="gover"
                    label="管理">
                </el-table-column>
        </el-table>

        </el-tab-pane> -->
        <el-tab-pane label="添加账号">
            <p> 添加管理员账号</p>
         <div>
              <p><span class="pwd">*</span>用户名:</p>
               <el-input v-model="input" placeholder="请输入内容" class="inputs"></el-input>
        </div>
        <div class="bottoms">
              <p><span class="pwd">*</span>密码:</p>
               <el-input v-model="input1" placeholder="请输入内容" class="inputs"></el-input>
        </div>
        <div class="bottoms">
              <p><span class="pwd">*</span>确认密码:</p>
               <el-input v-model="input2" placeholder="请输入内容" class="inputs"></el-input>
        </div>
        <div class="bottoms">
              <p><span class="pwd">*</span>选择用户组:</p>
              <el-select v-model="value" placeholder="选择用户组">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
             </el-select> 
        </div>
         <div class="bottoms">
               <el-button type="success" class="btn">添加</el-button>
        </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="密码修改">
             <p>修改账号密码</p>
            <div>
              <p><span class="pwd">*</span>原密码:</p>
               <el-input v-model="input3" placeholder="请输入内容" class="inputs"></el-input>
            </div>
              <div class="bottoms">
              <p><span class="pwd">*</span>新密码:</p>
               <el-input v-model="input4" placeholder="请输入内容" class="inputs"></el-input>
            </div>
              <div class="bottoms">
               <el-button type="success" class="btn">修改</el-button>
            </div>
        </el-tab-pane> -->
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
            name: '王小虎',
            group:'超级管理员',
            gover: ''
          }]
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
</style>