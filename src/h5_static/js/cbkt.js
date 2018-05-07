
new Vue({
	el:"#cbkt",
	data: function(){
		return {
			pattern:"1",
			cbkt:'/img/cbkt/cbkt.png',
			listname:"精彩瞬间",
			listImg:[{
				url:'/img/cbkt/jcsj/jcsj1.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj2.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj3.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj4.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj5.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj6.jpg'
			},{
				url:'/img/cbkt/jcsj/jcsj7.jpg'
			}],
			ckjs:{
				ktjs:"课程设计均扎根2-3岁幼儿本源，遵循该年龄段的独特本性，指引教养人不忘初心，尊重人之本源、教育之本，帮助孩子在最佳的时期获得最佳的成长",
				name:"课程特色",
				desc:"初本幼园吸收了华德福、蒙台梭利、情感教育课程的精髓，基于“家”“孵化”的环境创设理念，打破以往托幼机构各班自行“闭门造车”的区域界线，实现融合贯通，师资共享、资源共享，为孩子们提供在幼儿园学习和成长的自由空间。",
				list:[{
					img:'/img/cbkt/klcf.png',
					name:"快乐厨房",
					img1:'/img/cbkt/ydly.png',
					name1:"运动乐园"
				},{
					img:'/img/cbkt/tsgjx.png',
					name:"图书馆教学",
					img1:'/img/cbkt/ylsg.png',
					name1:"韵律时光"
				},{
					img:'/img/cbkt/yscy.png',
					name:"艺术创游",
					img1:'/img/cbkt/lyxg.png',
					name1:"礼仪习惯"
				}],
				zlqm:{
					img:'/img/cbkt/zlqm.png',
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
        //console.log('mounted',this);
        var swiper = new Swiper('.swiper-container',{
              direction: 'horizontal',
              loop: true,
              
              // 如果需要分页器
              pagination: {
              el: '.swiper-pagination',
              }
        });
	},
	created:function(){
		localStorage.setItem("title","初本课堂");
	},
	updated:function(){
		//console.log(this.pattern);
	},
	methods:{
		cancelName:function(){
			//var name = this.$refs.babyname.value;
			this.$refs.babyname.value = "";
		},
		cancelPhone:function(){
			this.$refs.phone.value = "";
		},
		yykcPattern1:function(){
			var name = this.$refs.babyname.value,//姓名
				phone = this.$refs.phone.value,//手机号
				year = this.$refs.year.value,//年
				month = this.$refs.month.value,//月
				pattern = this.$refs.pattern.value,//类型，暂时就一种，少儿英语先
				para = {
					name:name,
					phone:phone,
					year:year,
					month:month,
					pattern:pattern
				};
				if(name == "" || phone == ""){
					alert("姓名或者手机号为空了");
					return false;
				}

				$.ajax({
					type:"post",
					url:"",
					data:para,
					dataType:"json",
					success:function(data){
						console.log(data);
					}
				});
				console.log(para);
		}
	}
});
