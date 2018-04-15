import "../common/common";
//import "./index.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Cbr from './cbr.vue';



new Vue({
	el:"#cbr",
	components:{MyHead, Cbr}
});

//const outWidth = document.documentElement.clientWidth || document.body.clientWidth;
//const innerWidth = window.innerWidth;
//console.log(outWidth,innerWidth);
// function index(){
// 	console.log("index");
// }

// index();