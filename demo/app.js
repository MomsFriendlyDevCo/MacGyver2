import Vue from 'vue';
import VueRouter from 'vue-router';

import componentDemoForm from './form';

import './services/http';

$(()=> {
	window.app = {};

	app.router = new VueRouter({
		routes: [
			{path: '/', component: componentDemoForm},
		],
	});

	app.vue = new Vue({
		el: '#app',
		router: app.router,

	});
});
