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
					<a :class="$route.path == '/' ? 'btn btn-primary' : 'btn btn-light'" href="/">Form view</a>
				</li>
				<li class="navbar-item">
					<a :class="$route.path == '/editor' ? 'btn btn-primary' : 'btn btn-light'" href="/#/editor">Editor</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style>
.navbar .btn.btn-primary > a {
	color: #FFF;
}
</style>
