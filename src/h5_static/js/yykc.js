import "../common/common";
// import "./about.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Yykc from './yykc.vue';

new Vue({
	el:"#yykc",
	components:{MyHead,Yykc}
});