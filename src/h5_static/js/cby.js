

new Vue({
	el:"#cby",
	data: function(){
		return {
			basic:[
			// 	{
			//   title:"探 索",
			//   left:'/img/cby/left.jpeg',
			//   desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
			// },
			{
			  title:"办学理念",
			  left:'/img/cby/left.jpeg',
			  desc:"初本幼园以“给孩子一个温馨美好的家”为设计基础语言，配置有生活区、游戏区、学习区、运动区、盥洗区等，将整个空间打造成可以让孩子感到安全和舒适的家庭氛围。特别是公共区域配置的大型中央厨房，以“典范示教”的教育方式，辅助孩子进行社会交往、自理能力和行为习惯的养成。",
			},],
			cby:'/img//cby/cby.jpeg',
			mrkc1:'/img/cby/1.jpg',
			mrkc2:'/img/cby/2.jpg',
			mrkc3:'/img/cby/3.jpg'
		}
	},
	created:function(){
		localStorage.setItem("title","初本园");
	}
});

