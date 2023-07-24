<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/Button.svelte';
	import { page } from '$app/stores';
</script>

<header>
	<a href="/">
		<Logo />
		<!-- <span>.dev
	</span>	 -->
	</a>

	<nav>
		<ul>
			<a href="/about"><Button isActive={$page.url.pathname === '/about'}>About</Button></a>
			<a href="/projects">
				<Button isActive={$page.url.pathname === '/projects'}>Projects</Button>
			</a>
			<a href="/GuidoBordonaro_cv.pdf"
				><Button isActive={$page.url.pathname === '/GuidoBordonaro_cv.pdf'}
					><Icon icon="basil:file-download-solid" inline={true} />CV</Button
				>
			</a>
		</ul>
	</nav>
	<!-- <MobileMenu /> -->
</header>

<style lang="scss">
	header {
		// max-width: 1500px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		// margin-left: calc(4% - 1rem);
		// margin-top: 1rem;
		// margin-bottom: 1rem;
		// margin: 1rem calc(4% - 1rem);
		margin-top: 1rem;
		margin-right: calc(4% - 1rem);
		margin-bottom: 1rem;
		margin-left: calc(4% - 1rem);
		overflow: hidden;
	}

	nav {
		// display: flex;
		// justify-content: space-between;
		// align-items: center;
		max-width: 330px;
		flex-grow: 1;
	}

	nav ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-width: 25%;
		padding: 0px;
	}

	// nav ul li {
	// 	list-style: none;
	// 	margin: 0 1rem;
	// }

	// nav ul li a {
	// 	text-decoration: none;
	// 	color: var(--ink);
	// }

	// nav ul li a:hover {
	// 	color: var(--color-link);
	// }

	a {
		text-decoration: none;
		color: var(--ink);
	}
	@media (max-width: 600px) {
		nav {
			max-width: none;
		}
		header {
			margin-top: 0rem;
			margin-bottom: 0rem;
		}
	}
</style>
