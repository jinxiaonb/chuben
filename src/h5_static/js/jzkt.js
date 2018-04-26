
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
			  desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
			}],
			listImg:[{
				title:"专家",
				desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img:'/img/jzkt/jzkt.jpeg',
				title2:"顾问",
				desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img2:'/img/jzkt/jzkt.jpeg'
			},{
				title:"专家",
				desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img:'/img/jzkt/jzkt.jpeg',
				title2:"顾问",
				desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img2:'/img/jzkt/jzkt.jpeg'
			},{
				title:"专家",
				desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img:'/img/jzkt/jzkt.jpeg',
				title2:"顾问",
				desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img2:'/img/jzkt/jzkt.jpeg'
			},{
				title:"专家",
				desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img:'/img/jzkt/jzkt.jpeg',
				title2:"顾问",
				desc2:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
				img2:'/img/jzkt/jzkt.jpeg'
			}],
			
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
