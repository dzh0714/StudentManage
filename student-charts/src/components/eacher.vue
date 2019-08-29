<template>
  <div>
    <div ref="eachera" id="main"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    data:Object
  },
  components: {},
  data() {
    return {
      option: {
        title: {
          text:this.data.stu_name+'同学的日周考成绩统计图',
          subtext: "仅供参考"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["技能", "理论"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07",'08-08','08-09','08-10','08-11','08-12','08-13']
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "最高成绩",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10,10,10,50,78,45,16,15,47],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低成绩",
            type: "line",
            data: [11, 41, 24, 55, 58, 56, 10,50,30,57,78,58,85,5,58],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      },
    };
  },
  computed: {
    ...mapState({
      CjLists: state => state.emphasis.CjLists,
      names: state => state.emphasis.names,
    })
  },
  methods: {
    ...mapActions({
      getCjLists: "emphasis/getCjLists",
    }),
  },
  created() {
    this.getCjLists({
      cid:this.data
    })
  },
  mounted() {
    var myChart = echarts.init(this.$refs.eachera);
    myChart.setOption(this.option);
  }
};
</script>
<style scoped lang="scss">
#main {
  height: 534px;
}
</style>