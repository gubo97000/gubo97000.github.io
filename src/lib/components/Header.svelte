<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Icon from '@iconify/svelte';
</script>
<header>
	<a href="/">
	<Logo/>
	<!-- <span>.dev
	</span>	 -->
</a>

	<nav>
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/GuidoBordonaro_cv.pdf"><Icon icon="basil:file-download-solid" inline={true} />CV</a>				
			</li>
			<!-- <li>
				<a href="/blog">Blog</a>
			</li> -->
		</ul>
	</nav>
</header>

<style>
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
		color: var(--ink)
	}

	nav ul li a:hover {
		color: var(--color-link)
	}
</style>
