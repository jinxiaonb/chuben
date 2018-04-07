import "../common/common";
//import "./index.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Index from './index.vue';
import MyFoot from '../common/foot.vue';


new Vue({
	el:"#index",
	components:{MyHead,Index,MyFoot}
});

//const outWidth = document.documentElement.clientWidth || document.body.clientWidth;
//const innerWidth = window.innerWidth;
//console.log(outWidth,innerWidth);
// function index(){
// 	console.log("index");
// }

// index();