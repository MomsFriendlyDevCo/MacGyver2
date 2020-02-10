<script>
export default {
	data() { return {
		config: {},
		data: {},
		examples: [
			'examples/html.json',
			'examples/mgQuery.json',
			'examples/simple.json',
			'examples/shorthand.json',
			'examples/showcase.json',
			'examples/showIf.json',
		],
		example: 'examples/showcase.json',
		// example: 'examples/mgQuery.json',
	}},
	methods: {
		randomizeData() {
			this.data = {
				demoText: 'Hello World ' + _.random(100, 999),
				demoNumberSimple: _.random(100, 999),
			}
		},
	},
	watch: {
		example: {
			immediate: true,
			handler() {
				this.$http.get(this.example)
					.then(res => {
						this.data = {};
						this.config = res.data;
					});
			},
		},
	},
};
</script>

<template>
	<div class="window-panes">
		<div class="window-pane-left">
			<mg-form
				:config="config"
				:data="data"
				@change="data = $event"
			/>
		</div>

		<div class="window-pane-right">
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-header d-flex justify-content-between p-1">
							<h4 class="card-title">Config</h4>
							<div class="btn-group">
								<a class="btn btn-default dropdown-toggle" data-toggle="dropdown">
									{{example}}
								</a>
								<ul class="dropdown-menu">
									<li v-for="exampleItem in examples" :key="example">
										<a @click="example = exampleItem" class="dropdown-item">
											<i :class="example == exampleItem ? 'fas fa-check-circle' : 'far fa-circle'"/>
											{{exampleItem}}
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="card-body" style="height: 200px; overflow-y: scroll">
							<pre>{{config}}</pre>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-12">
					<div class="card">
						<div class="card-header p-1">
							<div class="btn-group float-right m-1">
								<a @click="randomizeData()" class="btn btn-sm btn-light far fa-random"/>
							</div>
							<h4 class="card-title">Form data</h4>
						</div>
						<div class="card-body" style="height: 200px; overflow-y: scroll">
							<pre>{{data | json}}</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
a {
	cursor: pointer;
}

.card .card-title {
	margin-left: 5px;
	margin-bottom: 0;
}

.window-panes {
	display: block;
	position: fixed;
	top: 60px;
	left: 10px;
	bottom: 10px;
	right: 10px;
}

.window-panes > * {
	overflow: auto;
	height: calc(100% - 60px);
	display: block;
	padding: 20px;
}

.window-panes > .window-pane-left {
	position: fixed;
	left: 10px;
	width: calc(50% - 20px);
}

.window-panes > .window-pane-right {
	position: fixed;
	right: 10px;
	width: calc(50% - 20px);
}
</style>
