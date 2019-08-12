<script>
export default {
	data() { return {
		config: {},
		data: {},
		examples: [
			'examples/showcase.json',
		],
		example: 'examples/showcase.json',
	}},
	watch: {
		example: {
			immediate: true,
			handler() {
				this.$http.get(this.example)
					.then(res => this.config = res.data);
			},
		},
	},
};
</script>

<template>
	<div>
		<div class="row mt-3">
			<div class="col-md-6">
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
								<pre>{{config | json}}</pre>
							</div>
						</div>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col-12">
						<div class="card">
							<div class="card-header p-1">
								<h4 class="card-title">Form data</h4>
							</div>
							<div class="card-body" style="height: 200px; overflow-y: scroll">
								<pre>{{data | json}}</pre>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<mg-form
					:config="config"
					:data="data"
				/>
			</div>
		</div>
	</div>
</template>

<style>
.card .card-title {
	margin-left: 5px;
	margin-bottom: 0;
}
</style>
