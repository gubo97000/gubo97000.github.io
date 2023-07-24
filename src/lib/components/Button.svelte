<script lang="ts">
	import { generate, randomNormal } from '$lib/utils/randomGenerators';

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
							transition-delay: {i * 0.015}s;
                            "
				/>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		height: 50px;
		// min-width: 75px;
		// max-width: 100px;
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
		position: inherit;
		z-index: 1;
		text-decoration: none;
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
			transform: scaleX(0%);
			// opacity: 0;
			transform-origin: right;
			// animation:  button-pill-strechOut 0.3s ease-in both;
			transition: transform 0.2s ease-in, 
			// opacity 0.5s ease-out
			;
			transition-delay: 0.3s;
		}
	}

	.pill {
		transform: scaleX(0%);
		// opacity:0;
		// animation: button-pill-strechOut 0.3s ease-out forwards;
		transition: transform 0.1s ease-in, opacity 0.2s ease-in;
		transform-origin: right;
	}

	//Animation of pills when hover on container
	.container:hover {
		.pill {
			transition-timing-function: ease-in;
			transform-origin: left;
			transform: scaleX(100%);
			opacity: 1;
			// animation:  button-pill-strechIn 0.3s both;
		}
		.text::before {
			// animation: button-pill-strechIn 0.3s both;
			transition-duration: 0.2s;
			transition-timing-function: ease-in;
			transition-delay: 0s;
			transform-origin: left;
			transform: scaleX(100%);
			opacity: 1;
		}
	}

	//Selected state
	.active {
		.pill {
			transform: scaleX(100%);
			opacity: 1;
		}
		.text::before {
			transform: scaleX(100%);
			opacity: 1;
			background-color: var(--color-accent);
		}
	}

	// @keyframes -global-button-pill-strechIn {
	// 	0% {
	// 		transform: scaleX(0);
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		transform: scaleX(100%);
	// 		opacity: 1;
	// 	}
	// }
	// @keyframes -global-button-pill-strechOut {
	// 	0% {
	// 		transform: scaleX(100%);
	// 		transform-origin: right;
	// 		opacity: 1;
	// 	}
	// 	100% {
	// 		transform: scaleX(0);
	// 		transform-origin: right;
	// 		opacity: 0;
	// 	}
	// }
</style>
