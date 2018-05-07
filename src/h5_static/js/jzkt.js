
new Vue({
	el:"#jzkt",
	data: function(){
		return {
			jzkt:'/img/jzkt/jzkt.jpeg',
			movieogg:'/video/movie.ogg',
			moviemp4:'/video/movie.mp4',
			basic:[{
			  title:"课程体系",
			  left:'/img/jzkt/left.jpeg',
			  desc:"针对家长十分关心的育儿问题，结合0-6岁宝宝的身心发展特点，邀请各位家长和专家导师们一起来学习孩子的成长规律，修炼读懂孩子的心理术，做一位理性、科学、睿智的家长，在育儿之路上，不再焦虑。",
			}],
			listImg:[{
				title:"专家",
				detail1:{
					d1:"《2-3岁宝宝育儿宝典》",
					d2:"父母必备的科学养育策略",
					d3:"首席育儿专家王芳",
					d4:"浙江省幼儿园特级教师/正高级教师",
					d5:"全国先进工作者（劳动模范）",
					d6:"原浙江幼师附属幼儿园总园长",
					d7:"教育部专家指导委员会委员",
					d8:"36年幼儿教育经验 擅长幼儿情绪管理 托幼一体化研究",
				},
				desc:"",
				img:'/img/wf.jpg',
				title2:"课程目录",
				detail2:{
					d1:"1、吃喝拉撒睡：如何培养健康的宝宝",
					d2:"2、儿童情绪与社会性的发展：如何应对宝宝的小脾气",
					d3:"3、儿童的认知与能力发展：让宝宝更聪明能干",
					d4:"4、第一反抗期如何接招：让宝宝自己来",
					d5:"",
					d6:"",
					d7:"",
					d8:"",
				},
				desc2:"",
				img2:'/img/jzkt/jzkt.jpeg'
			},{
				title:"专家",
				detail1:{
					d1:"《4-6岁智慧父母成长营》",
					d2:"家庭教育从读懂孩子开始",
					d3:"首席育儿专家蒋莉",
					d4:"浙江外国语学院副教授",
					d5:"杭州市崇文实验学校校长",
					d6:"曾任杭州市教育局副局长",
					d7:"上城区教育局局长",
					d8:"“中国好老师”公益行动计划 专家委员会副主任",
				},
				desc:"",
				img:'/img/jzkt/jzkt.jpeg',
				title2:"课程目录",
				detail2:{
					d1:"1、读懂孩子，不做焦虑的父母",
					d2:"2、孩子注意力不集中，怎么办？",
					d3:"3、如何让孩子有坚持到底的好习惯？",
					d4:"4、如何培养孩子的“起床”习惯？",
					d5:"5、警惕给孩子的另类伤害：父母情绪失控",
					d6:"6、孩子自信不足？可能源于过于教养",
					d7:"7、家有二胎，几招教你搞定孩子间的爱计较",
					d8:"8、低社交能力是孩子幸福之路的一大障碍",
				},
				desc2:"",
				img2:'/img/jzkt/jzkt.jpeg'
			}],
			
		}
	},
	created:function(){
		localStorage.setItem("title","家长课堂");
	},
	mounted(){
		console.log('mounted',this);
		var swiper = new Swiper('.swiper-container',{
			  direction: 'horizontal',
			  loop: true,
			  
			  // 如果需要分页器
			  pagination: {
			  el: '.swiper-pagination',
			  }
		});
	}
});
