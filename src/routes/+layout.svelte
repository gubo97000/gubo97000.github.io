<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/assets/scss/global.scss';
</script>

<Header />
<Divider />

<main>
	<slot />
</main>

<Divider />
<Footer />

<style>
	:global(body) {
		font-family: 'Fira Code', monospace;
		background-color: var(--paper);
		font-weight: 100;
	}
	main {
		min-height: 60vh;
		margin-bottom: 4rem;
	}
</style>