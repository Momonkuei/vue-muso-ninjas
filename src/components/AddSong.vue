<template>
	<div class="add-song">
		<button v-if="!showForm" @click="handleShowForm">Add Songs</button>
		<form v-else @submit.prevent="handleSubmit">
			<h4>Add a New Song</h4>
			<input
				type="text"
				placeholder="Song title"
				required
				v-model="title"
			/>
			<input type="text" placeholder="Artist" required v-model="artist" />
			<button>Add</button>
			<button @click="handleShowForm">Cancle</button>
		</form>
	</div>
</template>

<script>
import { ref } from 'vue';
import useDocument from '../composables/useDocument';
export default {
	props: ['playlist'],
	setup(props) {
		const title = ref('');
		const artist = ref('');
		const showForm = ref(false);

		const { updateDoc } = useDocument('playlists', props.playlist.id);

		const handleShowForm = () => {
			showForm.value = !showForm.value;
		};

		const handleSubmit = async () => {
			const newSong = {
				title: title.value,
				artist: artist.value,
				id: Math.floor(Math.random() * 1000),
			};
			console.log(newSong);

			await updateDoc({
				songs: [...props.playlist.songs, newSong],
			});
			title.value = '';
			artist.value = '';
		};

		return {
			title,
			artist,
			showForm,
			handleShowForm,
			handleSubmit,
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

form button {
	margin-left: 5px;
}
</style>
