import Vue from 'vue';
import Router from 'vue-router';
import VueCookies from 'vue-cookies';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);
Vue.use(VueCookies);

VueCookies.config('7d');
VueCookies.set('theme', 'default');
VueCookies.set('unique', Date.now());
VueCookies.set('rwapi-uuid', `v3-${Date.now()}-x9k0`);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'INDEX', component: Home },
		{
			path: '/about/',
			name: 'ABOUT',
			component() {
				return import('./views/About.vue');
			}
		},
		{
			path: '/portfolio',
			name: 'PORTFOLIO',
			component() {
				return import('./views/Port.vue');
			}
		},
		{
			path: '/contact',
			name: 'CONTACT',
			component() {
				return import('./views/Contact.vue');
			}
		},
		{
			path: '/login',
			name: 'LOGIN',
			component() {
				return import('./views/Login.vue');
			}
		},
		{
			path: '/school',
			name: 'SCHOOL',
			component() {
				return import('./views/School.vue');
			}
		},
		{ path: '/404', component: NotFound },
		{ path: '*', redirect: '/404' }
	]
});
