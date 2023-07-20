<script lang="ts">
	import { expoIn as blurPercent } from 'svelte/easing';
	let generate = () => {
		let elems = [];
		for (let i = 0; i < 110; i++) {
			let p = {
				width: Math.random() * 2 + 1, //between 1 and 3
				height: Math.random() + 0.5, //between 0.5 and 1
				top: Math.random() * 2.5 - 1,
				left: Math.random() * 100, //between 0 and 100
				color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
			};
			elems.push(p);
		}
		return elems;
	};
	// Generate 100 particles
	let elems = generate();
</script>

{#if elems.length > 0}
	<div class="flow-container">
		{#each elems as p, i}
			<div
				class="pills {(i % 2 === 0 ? 'mobile' : 'out')}"
				style="
			animation: flow {p.height ** 1.5 * 500}s linear infinite,
				fadeIn 1s ease-in-out {i / (elems.length)}s both;
			<!-- filter: blur({blurPercent(1 - i / (elems.length + 100)) * 4}px); -->
			"
			>
				<div
					class="pill"
					style="
            display: inline-block;
            position: absolute;
            width: {p.width}rem;
            height: {p.height}rem;
            left: {p.left}%;
            top: {p.top}rem;
            background: {p.color};
            border-radius: 20px;
            "
				/>
				<div
					class="pill second"
					style="
            display: inline-block;
            position: absolute;
            width: {p.width}rem;
            height: {p.height}rem;
            left: {p.left}%;
            top: {p.top}rem;
            background: {p.color};
            border-radius: 20px;
            "
				/>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.flow-container {
		position: relative;
		width: 100%;
		height: 40px;
		overflow-x: clip;
	}
	.second {
		transform: translateX(-100vw);
	}

	@keyframes -global-flow {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100vw);
		}
	}

	@keyframes -global-fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 600px) {
		.out {
			display: none;
		}
		// .even {
		// 	display: none;
		// }
		.pills {
			// animation-play-state: paused !important;
			filter: blur(0px) !important;
		}

	}
</style>
