<script lang="ts">
	let generate = () => {
		let elems = [];
		for (let i = 0; i < 100; i++) {
			let p = {
				//between 1 and 3
				width: Math.random() * 2 + 1,
				height: 0.9,
				top: Math.random() * 2.5 - 1,
				left: (Math.random() * 100)-1,
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
	<div class="div-elem">
		{#each elems as p}
			<div
				style="
            display: inline-block;
            position: absolute;
            width: {p.width}rem;
            height: {p.height}rem;
            left: {p.left*21}px;
            top: {p.top}rem;
            background: {p.color};
            border-radius: 20px;
            opacity: 0.9;
            "
			/>
		{/each}
	</div>
{/if}

<style>
	div {
		position: relative;
		width: 100%;
		height: 40px;
		overflow-x: clip;
	}
	.div-elem {
		animation: ease-in-out 1 all;
	}
</style>
