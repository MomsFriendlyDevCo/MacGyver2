import Vue from 'vue';
import VueRouter from 'vue-router';

import componentDemoForm from './form';
import componentDemoEditor from './editor';
import navbar from './navbar';

import './services/http';

$(()=> {
	window.app = {};

	app.router = new VueRouter({
		routes: [
			{path: '/', component: componentDemoForm},
			{path: '/editor', component: componentDemoEditor},
		],
	});

	app.vue = new Vue({
		el: '#app',
		router: app.router,
		components: {
			navbar,
		},
	});
});
