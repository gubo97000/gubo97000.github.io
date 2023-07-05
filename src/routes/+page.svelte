<div>
	<h1>
		Ciao! <span class="highlight-container"> <span class="highlight">I'm Guido</span></span>.
		<br />I'm a frontend developer, a software engineer and tech enthusiast!
	</h1>
	<h2>
		MSc. in Computer Science Engineering, <br />
		Software Developer currently living in Helsinki
	</h2>
	<p>The site will be always work in progress and evolving, just like me!</p>
</div>

<style lang="scss">
	h1 {
		font-size: clamp(1.8rem, 1rem + 3vw, 3.5rem);
		margin: 10px 0;
	}
	h3 {
		margin-left: 1px;
	}
	div {
		margin-top: 100px;
		margin-left: 5%;
		max-width: 1000px;
	}
	.highlight-container,
	.highlight {
		position: relative;
	}
	p {
		font-size: 0.8rem;
	}
	.highlight-container {
		display: inline-block;
		color: black;
	}
	.highlight-container:before {
		content: ' ';
		display: block;
		height: 90%;
		width: 100%;
		margin-left: -3px;
		margin-right: -3px;
		position: absolute;
		background: #ffd500;
		transform: rotate(2deg);
		top: -1px;
		left: -1px;
		border-radius: 20% 25% 20% 24%;
		padding: 10px 3px 3px 10px;
	}
</style>
