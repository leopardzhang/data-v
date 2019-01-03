import echarts from 'echarts';
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$echarts = echarts;

export default {
	name: 'Circles',
	props: {
		width: Number,
		height: Number,
		api: String,
		left: Number,
		top: Number
	},

	mounted() {
		const chart = this.$refs.chart;
		const myChart = this.$echarts.init(chart);
		const option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data: []    //需要获取
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '30',
							fontWeight: 'bold'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: []    //需要获取
			}]
		};

		axios.get(this.api).then((res) => {
			option.legend.data = res.data.legendData;
			option.series[0].data = res.data.seriesData;

			myChart.setOption(option);
		});
	}
}
