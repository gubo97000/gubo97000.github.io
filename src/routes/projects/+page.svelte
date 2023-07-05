<script>
	import Icon from '@iconify/svelte';
</script>

<div>
	<a href="https://gubo97000.github.io/aniCheck/" target="_blank"
		><h1>AniCheck<Icon icon="pepicons-print:open" inline={true} /></h1></a
	>
	<h3>Completion rate of all the anime manga series on AniList</h3>
	Sprouted from a personal need, AniCheck uses the public AniList API to check the completion rate of
	all the series of anime that have been watched in the selected public account.
	<h4>Skill:</h4>
	<ul>
		<li>Typescript</li>
		<li>React</li>
		<li>Material UI</li>
	</ul>

	<h1>Explora!</h1>
	<h3>University project for the course of Advanced User Interfaces.</h3>
	The goal of the project was to create an interactive experience for atypical children utilizing the <a
		href="https://i3lab.polimi.it/research/projects/#SS"
		target="_blank">MagikRoom</a
	>
	environment designed the game balancing the generative and the puzzle content, developed with
	Unity and user tested. The project was presented at the
	<a href="https://www.learntechlib.org/p/221360/" target="_blank">EdMedia+</a>
	conference.
	<h4>Skill:</h4>
	<ul>
		<li>Unity</li>
		<li>C#</li>
	</ul>

	<h1>More Projects</h1>
	<ul>
		<li>
			<a href="https://github.com/gubo97000/HYP-Project" target="_blank"> 
				<b>Towny</b>
			</a> 
			- Website built for the course of Hypermedia Applications.
		</li>
		<li>
			<a href="https://github.com/gubo97000/potplayer-user-test-syncer" target="_blank"> 
				<b>PotPlayer User Test Syncer</b>
			</a>
			- Tool for controlling and synching multiple instances of PotPlayer during user tests.
	</ul>
</div>

<style lang="scss">
	div {
		margin: 0 auto;
		max-width: 700px;
		padding: 0 1em;
	}
	h1::before {
		content: '👨‍💻';
		margin-right: 10px;
	}
	a:has(> h1) {
		text-decoration: none;
	}
</style>
