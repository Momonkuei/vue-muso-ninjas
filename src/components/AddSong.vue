<template>
	<div class="add-song">
		<form>
			<h4>Add a New Song</h4>
			<input
				type="text"
				placeholder="Song title"
				required
				v-model="title"
			/>
			<input type="text" placeholder="Artist" required v-model="artist" />
			<button>Add</button>
		</form>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const title = ref('');
		const artist = ref('');

		return {
			title,
			artist,
		};
	},
};
</script>

<style scoped>
.add-song {
	text-align: center;
	margin-top: 40px;
}
form {
	max-width: 100%;
	text-align: left;
}
</style>
