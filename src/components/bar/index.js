import echarts from 'echarts';
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$echarts = echarts;

export default {
	name: 'Bar',
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
			textStyle: {
				color: '#fff'
			},
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
				data: null,
				axisTick: {
					alignWithLabel: true
				},
				nameTextStyle: {
					color: '#fff'
				}
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
				name: '直接访问',
				type: 'bar',
				barWidth: '60%',
				data: null
			}]
		};

		axios.get(this.api).then((res) => {
			option.xAxis[0].data = res.data.xAxisData;
			option.series[0].data = res.data.seriesData;

			myChart.setOption(option);
		});
	}
}
