import "../common/common";
// import "./about.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Fydz from './fydz.vue';

new Vue({
	el:"#fydz",
	components:{MyHead,Fydz}
});