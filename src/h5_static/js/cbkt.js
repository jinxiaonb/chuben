
new Vue({
	el:"#cbkt",
	data: function(){
		return {
			cbkt:'/img/cbkt/cbkt.png',
			listname:"精彩瞬间",
			listImg:[{
				url:'/img/cbkt/jcsj.jpeg'
			},{
				url:'/img/cbkt/jcsj.jpeg'
			},{
				url:'/img/cbkt/jcsj.jpeg'
			},{
				url:'/img/cbkt/jcsj.jpeg'
			}],
			ckjs:{
				name:"课程特色",
				desc:"吸收蒙特梭利、华德福教育方式的优势，并融合情感教育和传统教育的精髓，打造具备初本幼园特色的课程体系，从八大维度进行幼儿全方位启蒙。",
				list:[{
					img:'/img/cbkt/klcf.jpeg',
					name:"快乐厨房",
					img1:'/img/cbkt/ydly.jpeg',
					name1:"运动乐园"
				},{
					img:'/img/cbkt/tsgjx.jpeg',
					name:"图书馆教学",
					img1:'/img/cbkt/ylsg.jpeg',
					name1:"韵律时光"
				},{
					img:'/img/cbkt/yscy.jpeg',
					name:"艺术创游",
					img1:'/img/cbkt/lyxg.jpeg',
					name1:"礼仪习惯"
				}],
				zlqm:{
					img:'/img/cbkt/zlqm.jpeg',
					name:"智力启蒙"
				}
			},
			kctj:{
				name:"课程推荐"
			},
			yykc:{
				name:"预约课程",
				img:'/img/cbkt/seyy.jpeg',
				desc:"每班配备两名教师一名保育员，保育员招收亦是经过层层把关与专业培训，可及时响应2-3岁低幼儿童的保育需求，辅助班级教师一起促进每一名孩子的健康成长。"
			}
		}
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
