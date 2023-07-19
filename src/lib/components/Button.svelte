<script lang="ts">
	import { generate, randomNormal } from "$lib/utils/randomGenerators";

	// Generate 100 particles
	let elems = generate(20, [
		[1, 3], //width
		[0.5, 1], //height
		[-30, 100, () => randomNormal(0.5, 0.1)], //left
		[-20, 110, () => randomNormal(0.5, 0.2)], //top
		[0, 255],
		[0, 255],
		[0, 255]
	]);
	//prop to set active class from parent
	export let isActive = false;
</script>

{#if elems.length > 0}
	<div class="container {isActive ? 'active' : ''}">
		<div class="text">
			<slot />
		</div>
		<div class="flow-container">
			{#each elems as p, i}
				<div
					class="pill"
					data-animation-delay="red"
					style="
                            display: inline-block;
                            position: absolute;
                            width: {p[0]}rem;
                            height: {p[1]}rem;
                            left: {p[2]}%;
                            top: {p[3]}%;
                            background: rgb({Math.random() * 255}, {Math.random() *
						255}, {Math.random() * 255});
                            border-radius: 20px;
							animation-delay: {i * 0.01}s;
                            "
				/>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		height: 50px;
		width: 100px;
		// border: 1px solid red;
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		// overflow-x: hidden;
		// overflow-y: hidden;
	}
	.flow-container {
		position: absolute;
		height: 100%;
		width: 100%;
		// border: 1px solid blue;
		container-type: inline-size;
	}
	.text {
		margin: auto;
		padding: 0 5px;
		position: absolute;
		z-index: 1;
		// border: 1px solid green;

		&::before {
			content: '';
			position: absolute;
			background-color: #ccc;
			border-radius: 20px;
			width: 110%;
			height: 96%;
			z-index: -1;
			left: -5%;
			top: 5%;
			transform-origin: left;
			animation:  button-pill-strechOut 0.3s ease-in both,
		}
	}

	.pill {
		animation:  button-pill-strechOut 0.3s both;
		transform-origin: left;
	}

	//Animation of pills when hover on container
	.container:hover {
		.pill {
			animation:  button-pill-strechIn 0.3s both;
		}
		.text::before {
			animation:  button-pill-strechIn 0.3s both;
		}
	}

	//Selected state
	.active {
		.pill {
			animation: button-pill-strechIn 0s both;
			font-weight: 400;
		}
		.text::before {
			animation: button-pill-strechIn 0s both;
			background-color: var(--color-accent);
		}
	}

	@keyframes -global-button-pill-strechIn {
		0% {
			transform: scaleX(0);
			opacity: 0;
		}
		100% {
			transform: scaleX(100%);
			opacity: 1;
		}
	}
	@keyframes -global-button-pill-strechOut {
		0% {
			transform: scaleX(100%);
			transform-origin: right;
			opacity: 1;
		}
		100% {
			transform: scaleX(0);
			transform-origin: right;
			opacity: 0;
		}
	}
</style>
