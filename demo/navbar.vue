<script>
export default {
};
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand">MacGyver</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarAreas">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarAreas">
			<ul class="navbar-nav">
				<li class="navbar-item mr-1">
					<a
						:class="$route.path == '/' && !$route.query.edit ? 'btn btn-primary text-white' : 'btn btn-light'"
						@click="$router.push({path: '/', query: {...$route.query, edit: undefined}})"
					>Form view</a>
				</li>
				<li class="navbar-item mr-1">
					<a
						:class="$route.path == '/' && $route.query.edit  ? 'btn btn-primary text-white' : 'btn btn-light'"
						@click="$router.push({path: '/', query: {...$route.query, edit: 1}})"
					>Editor</a>
				</li>
				<li class="navbar-item">
					<a
						:class="$route.path == '/standalone' ? 'btn btn-primary text-white' : 'btn btn-light'"
						@click="$router.push({path: '/standalone'})"
					>Standalone</a>
				</li>
			</ul>
		</div>
		<ul class="navbar-nav">
			<li class="navbar-item">
				<a href="https://github.com/MomsFriendlyDevCo/MacGyver2" class="btn btn-light">
					<i class="fab fa-github"/>
					GitHub
				</a>
			</li>
		</ul>
	</nav>
</template>

<style>
.navbar .btn.btn-primary > a {
	color: #FFF;
}
</style>
