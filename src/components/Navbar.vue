<template>
	<div class="navbar">
		<nav>
			<h1>
				<router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
			</h1>
			<div class="links">
				<button>Logout</button>
				<router-link></router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
