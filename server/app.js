const express = require('express');

const app = express();

const allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
};
app.use(allowCrossDomain);

app.get('/bar1', (req, res) => {
	res.json({
		xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		seriesData: [10, 52, 200, 334, 390, 330, 220]
	});
});

app.get('/bar2', (req, res) => {
	res.json({
		xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		seriesData: [20, 62, 100, 434, 690, 230, 40]
	});
});

app.get('/lines', (req, res) => {
	res.json({
		xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		seriesData: [820, 932, 901, 934, 1290, 1330, 1320]
	});
});

app.get('/pie', (req, res) => {
	res.json({
		xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		seriesData: [
			{
				value: 335,
				name: '直接访问'
			},
			{
				value: 310,
				name: '邮件营销'
			},
			{
				value: 274,
				name: '联盟广告'
			},
			{
				value: 235,
				name: '视频广告'
			},
			{
				value: 400,
				name: '搜索引擎'
			}
		],
		title: '图表标题'
	});
});

app.get('/circle', (req, res) => {
	res.json({
		legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
		seriesData: [{
			value: 335,
			name: '直接访问'
		},
		{
			value: 310,
			name: '邮件营销'
		},
		{
			value: 234,
			name: '联盟广告'
		},
		{
			value: 135,
			name: '视频广告'
		},
		{
			value: 1548,
			name: '搜索引擎'
		}],
		seriesName: '访问来源'
	});
});

console.log('server is running at localhost:8888');
app.listen(8888);
