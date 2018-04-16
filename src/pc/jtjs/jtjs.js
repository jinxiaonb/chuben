import "../common/common";
// import "./about.css";

import Vue from 'vue';
import MyHead from '../common/head.vue';
import Jtjs from './jtjs.vue';

new Vue({
	el:"#jtjs",
	components:{MyHead,Jtjs}
});