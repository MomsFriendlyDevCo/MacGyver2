import Vue from 'vue';
import VueRouter from 'vue-router';

import componentDemoForm from './form';
import componentDemoStandalone from './standalone';
import navbar from './navbar';

import './services/http';

$(()=> {
	window.app = {};

	app.router = new VueRouter({
		routes: [
			{path: '/', component: componentDemoForm},
			{path: '/standalone', component: componentDemoStandalone},
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
