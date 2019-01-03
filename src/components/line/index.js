import echarts from 'echarts';
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$echarts = echarts;

export default {
	name: 'Lines',
	props: {
		width: Number,
		height: Number,
		left: Number,
		top: Number,
		api: String
	},

	mounted() {
		const chart = this.$refs.chart;
		const myChart = this.$echarts.init(chart);
		const option = {
			textStyle: {
				color: '#fff'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: [] //需要获取
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [] //需要获取
		};


		axios.get(this.api).then((res) => {
			option.xAxis[0].data = res.data.xAxisData;
			option.series = res.data.seriesData;

			myChart.setOption(option);
		});


	},

	methods: {

	}
}
