<script>
export default {
	data() { return {
		formData: {
			text: 'Hello world',
			number: 10,
		},
	}},
};
</script>

<template>
	<div>
		<div class="card mb-2">
			<div class="card-header">mgText</div>
			<div class="card-body row">
				<div class="col-md-6">
					<mg-text
						:value="formData.text"
						@change="formData.text = $event"
					/>
					<div>Value: <code>{{formData.text}}</code></div>
				</div>
				<div class="col-md-6">
<pre>&lt;mg-text
	:value="formData.text"
	@change="formData.text = $event"
/&gt;</pre>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-header">mgNumber</div>
			<div class="card-body row">
				<div class="col-md-6">
					<mg-number
						:value="formData.number"
						@change="formData.number = $event"
						:min="0"
						:max="100"
					/>
					<div>Value: <code>{{formData.number}}</code></div>
				</div>
				<div class="col-md-6">
<pre>&lt;mg-number
	:value="formData.number"
	@change="formData.number = $event"
	:min="0"
	:max="100"
/&gt;</pre>
				</div>
			</div>
		</div>
	</div>
</template>
