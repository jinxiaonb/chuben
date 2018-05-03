

new Vue({
	el:"#index",
	data: function(){
		return {
            key:"",//搜索关键字
            pages:{//分页
                page:1,
                total:5,
                pageSize:20
            },
            list:[//列表
                {"name":"jinxiao","phone":"15158133856","year":"1990","month":"02"},
                {"name":"jinxiao","phone":"15158133856","year":"1990","month":"02"}
            ]
		}
	},
	created:function(){
		
	},
	methods:{
		search:function(){
            var key = this.$refs.searchkey.value;
            this.key = key;
            console.log(key);
        },
        prev:function(){
            console.log(this.key);
            var page = this.pages.page,
            total = this.pages.total,
            pageSize = this.pages.pageSize;

            if(page == 1){
                alert("已经是第一页了");
                return false;
            }
        },
        next:function(){
            console.log(this.key);
            var page = this.pages.page,
            total = this.pages.total,
            pageSize = this.pages.pageSize;
            if(page == total){
                alert("已经是最后一页了");
                return false;
            }
        },
        getAsyncList:function(){

        }
	}
});


$(document).ready(function(){


});