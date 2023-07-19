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
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		margin: 10px 20px;
		/* border-bottom: 1px solid #000; */
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav ul li {
		list-style: none;
		margin: 0 1rem;
	}

	nav ul li a {
		text-decoration: none;
		color: var(--ink);
	}

	nav ul li a:hover {
		color: var(--color-link);
	}
</style>
