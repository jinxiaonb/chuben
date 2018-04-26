
new Vue({
	el:"#about",
	data: function(){
		return {
			fydz:'/img/about/fydz.png',
			jtjs:'/img/about/jtjs.png',
		}
	},
	created:function(){
		localStorage.setItem("cb_title","关于我们");
	},
	methods:{
		
	}
});