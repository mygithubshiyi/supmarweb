<template>
    <div>
      <div class="text11">
          <h3>欢迎您 admin</h3>
          <p>数据统计</p>
    </div>
    <div class="top">
    <el-tabs type="border-card">
         <el-tab-pane label="销售统计">
         <p>销售数据统计</p>
         <div class="date">
             <span class="times">时间:</span>
            <div class="block">
                <el-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']" class="selets">
                </el-date-picker>
             </div>
             <el-select v-model="value" placeholder="销售情况统计"  class="selected">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
            <el-button type="success" class="btn">提交</el-button>
         </div>
         <div class="bottoms"> 
             <!-- 准备容器 -->
           <div id="main" style="width: 600px;height:400px;"></div>
         </div>
        </el-tab-pane> -->
        <el-tab-pane label="进货统计">
         <p>进货数据统计</p>
         <div class="date">
             <span class="times">时间:</span>
            <div class="block">
                <el-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']" class="selets">
                </el-date-picker>
             </div>
            <el-button type="success" class="btn">查询</el-button>
         </div>
         <div class="bottoms">
             <!-- 准备容器 -->
           <div id="mains" style="width: 600px;height:400px;"></div>
         </div>
        </el-tab-pane>
    </el-tabs>
    
    </div>
    
    </div>
</template>

<script>
import echarts from 'echarts'
    export default {
           data() {
      return {
        value1: '',
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
      };
    },
    mounted(){
        this.chartLine=echarts.init(document.getElementById('main'));
        this.chartLines=echarts.init(document.getElementById('mains'));
        var option = {
            xAxis: {
                type: 'category',
                data: ['12.02.7', '12.02.8', '12.02.9', '12.02.10', '12.02.11', '12.02.12', '12.02.13']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
       };
        this.chartLine.setOption(option);
        this.chartLines.setOption(option);
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
.top{
  margin-left: 10px;
}
.date{
    display: flex;
    margin-top: 15px;
}
.selets{
    width:200px;
}
.times{
    margin-top: 10px;
    margin-right: 10px;
}
.selected{
    margin-left: 10px;
    width: 200px;
}
.btn{
    padding: 10px;
    margin-left: 10px;
}
.bottoms{
    margin-top: 10px;
}
</style>