<script>
import Axios from 'axios/dist/axios';

Vue.prototype.$http = (()=> {
	// Make Axios request JSON by default
	Axios.defaults.headers.common.Accept = 'application/json';

	// Make Axios encode using jQueries parameter serializer to keep Monoxide happy
	Axios.defaults.paramsSerializer = $.param;

	// Monkey patch Axios so that any error response gets correctly decoded rather than weird stuff like 'Server returned a 403 code'
	Axios.interceptors.response.use(response => response, error => {
		if (!error.response || !error.response.status) { // Recommended method to catch network errors as per https://github.com/axios/axios/issues/383#issuecomment-234079506
			return Promise.reject('Network error');
		} else if (error.response && error.response.data) {
			return Promise.reject(error.response.data);
		} else {
			return Promise.reject(error.response);
		}
	});

	return Axios;
})();

export default Vue.prototype.$http;
</script>
