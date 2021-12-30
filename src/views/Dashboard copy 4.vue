<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="Total traffic" type="gradient-red" sub-title="350,897" icon="ni ni-active-40" class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total traffic" type="gradient-orange" sub-title="2,356" icon="ni ni-chart-pie-35"
            class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Sales" type="gradient-green" sub-title="924" icon="ni ni-money-coins" class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Performance" type="gradient-info" sub-title="49,65%" icon="ni ni-chart-bar-32"
            class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row >
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item class="mr-2 mr-md-0" :active="bigLineChart.activeIndex === 0" link-classes="py-2 px-3"
                    @click.prevent="initBigChart(0)">
                    <span class="d-none d-md-block">Month</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item link-classes="py-2 px-3" :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)">
                    <span class="d-none d-md-block">Week</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <div id="pricechart-container">
            </div>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>

            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <b-row></b-row>
      <b-row class="mt-4">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Result</h6>
                <h5 class="h3 mb-0">Bubble Index</h5>
              </b-col>
            </b-row>
            <div id="bubblechart-container">
            </div>
          </card>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>
            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Relationship 1</h6>
                <h5 class="h3 mb-0">60 days Cumulative Increase (%)</h5>
              </b-col>
            </b-row>
            <div id="cumulativechart-container">
            </div>
          </card>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>
            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Relationship 2</h6>
                <h5 class="h3 mb-0">Hot Keywords (google + twitter)</h5>
              </b-col>
            </b-row>
            <div id="keywordschart-container">
            </div>
          </card>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>
            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Datas
  import myjsondata from '@/components/data.txt';
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        allChart: {
          allData,
          priceContainer,
          bubbleContainer,
          cumulativeContainer,
          keywordsChart
        },
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [{
              label: 'Performance',
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            }],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        // Get data from json file
        var mydata = JSON.parse(data);
        var timeData = mydata.date;
        var priceData = mydata.price;
        var growData = mydata.growth_60_day;
        var hotData = mydata.hot;
        var bubbleData = mydata.bubble;
        // Init echarts
        var priceContainer = document.getElementById('pricechart-container');
        var bubbleContainer = document.getElementById('bubblechart-container');
        // var cumulativeContainer = document.getElementById('cumulativechart-container');
        // var keywordsContainer = document.getElementById('keywordschart-container');
        var priceChart = echarts.init(priceContainer);
        var bubbleChart = echarts.init(bubbleContainer);
        // var cumulativeChart = echarts.init(cumulativeContainer);
        // var keywordsChart = echarts.init(keywordsContainer);
        var option_template = {
          axisPointer: {
            link: {
              xAxisIndex: 'all'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false
            }
          },
          legend: {
            right: 100,
            top: 280,
            data: ['linear scale'],
          },
          dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 100
          }],
          grid: [{
              left: '10%',
              top: '5%',
              width: '78%',
              height: '68%'
            }
          ],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
              onZero: true
            },
            data: timeData
          }],
          yAxis: [{
              name: 'BTC Price (USD)',
              type: 'value'
            },
            {
              type: 'log'
            }
          ],
          series: [
            {
              name: 'linear scale',
              type: 'line',
              smooth: true,
              hoverAnimation: false,
              data: bubbleData
            }
          ]
        };
        var option = {
          // title: {
          //   text: 'Bitcoin Bubble Index',
          //   x: 'center'
          // },
          axisPointer: {
            link: {
              xAxisIndex: 'all'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false
            }
          },
          legend: {
            right: 100,
            top: 280,
            data: ['linear scale', 'log scale'],
          },
          dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 100
          }],
          grid: [{
              left: '10%',
              top: '5%',
              width: '78%',
              height: '68%'
            }
          ],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
              onZero: true
            },
            data: timeData
          }],
          yAxis: [{
              name: 'BTC Price (USD)',
              type: 'value'
            },
            {
              type: 'log'
            }
          ],
          series: [{
              yAxisIndex: 1,
              name: 'log scale',
              type: 'line',
              hoverAnimation: false,
              data: priceData,
              markLine: {
                data: [{
                  name: 'first halfing',
                  xAxis: '2012/11/28'
                }, {
                  name: 'second halfing',
                  xAxis: '2016/07/10'
                }]
              }
            },
            {
              name: 'linear scale',
              type: 'line',
              smooth: true,
              hoverAnimation: false,
              data: priceData
            }
          ]
        };
        priceChart.resize({
          height : 350,
          width : "auto"
        });
        bubbleChart.resize({
          height : 350,
          width : "auto"
        });
        priceChart.setOption(option);
        bubbleChart.setOption(option_template);
        window.onresize = priceChart.resize;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };

</script>
<style>
  .el-table .cell {
    padding-left: 0px;
    padding-right: 0px;
  }

</style>
