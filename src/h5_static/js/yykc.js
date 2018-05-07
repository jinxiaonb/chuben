
new Vue({
	el:"#yykc",
	data: function(){
		return {
			seyy:'/img/seyy/seyy.jpeg',
		}
	},
	created:function(){
		localStorage.setItem("title","预约课程");
	},
	methods:{
		cancelName:function(){
			//var name = this.$refs.babyname.value;
			this.$refs.babyname.value = "";
		},
		cancelPhone:function(){
			this.$refs.phone.value = "";
		},
		yykcEvent:function(){
			var name = this.$refs.babyname.value,//姓名
				phone = this.$refs.phone.value,//手机号
				year = this.$refs.year.value,//年
				month = this.$refs.month.value,//月
				para = {
					name:name,
					phone:phone,
					year:year,
					month:month
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