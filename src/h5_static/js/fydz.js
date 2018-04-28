

new Vue({
	el:"#fydz",
	data: function(){
		return {
			fydzmap:"/img/fydz/fydzmap.png",
		}
	},
	created:function(){
		localStorage.setItem("title","分园地址");
	},
});