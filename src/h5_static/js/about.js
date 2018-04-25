import "../common/common";
// import "./about.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import About from './about.vue';

new Vue({
	el:"#about",
	components:{MyHead,About}
});