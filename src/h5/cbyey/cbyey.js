import "../common/common";
//import "./index.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Cbyey from './cbyey.vue';



new Vue({
	el:"#cbyey",
	components:{MyHead,Cbyey}
});

//const outWidth = document.documentElement.clientWidth || document.body.clientWidth;
//const innerWidth = window.innerWidth;
//console.log(outWidth,innerWidth);
// function index(){
// 	console.log("index");
// }

// index();