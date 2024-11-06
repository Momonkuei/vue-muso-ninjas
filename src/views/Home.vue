<template>
	<div class="home">
		<div v-if="error" class="error">Could not fetch the data</div>
		<div v-if="documents">
			<list-view :playlists="documents"></list-view>
		</div>
	</div>
</template>

<script>
import getCollection from '../composables/getCollection';
import ListView from '../components/ListView.vue';
export default {
	name: 'Home',
	components: {
		ListView,
	},

	setup() {
		const { documents, error } = getCollection('playlists');

		return {
			documents,
			error,
		};
	},
};
</script>
