<script lang="ts">
    import Logo from '$lib/components/Logo1.svelte';
    import Logo2 from '$lib/components/Logo2.svelte';
</script>

<div class="scene">
	<div class="cube">
		<div class="cube__face cube__face--front">
            <Logo/>
        </div>
		<!-- <div class="cube__face cube__face--back">back</div> -->
		<div class="cube__face cube__face--right"><Logo2/></div>
		<!-- <div class="cube__face cube__face--left">left</div> -->
		<!-- <div class="cube__face cube__face--top">top</div> -->
		<!-- <div class="cube__face cube__face--bottom">bottom</div> -->
	</div>
</div>

<style lang="scss">
    .cube__face--front :global(svg){
        width: 100%;
        height: 100%;}
    .cube__face--right :global(svg){
        width: 200px;
        height: 100%;}
    div{
        font-size: 3rem;
        text-align: center;
    }
	.scene {
		width: 100px;
		height: 100px;
		perspective: 600px;
        margin-left: 20px;
		margin-bottom: 10px;
	}

	.cube {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
	}

	.cube__face {
		position: absolute;
		width: 100%;
		height: 100%;
		/* opacity: 0.8; */
	}
	.cube__face--front {
		background-color: white;
	}
	.cube__face--right {
        /* width: auto; */
		/* background-color: red; */
	}
	.cube__face--front {
		transform: rotateY(0deg) translateZ(50px);
	}
	.cube__face--right {
		transform: rotateY(90deg) translateZ(50px);
	}
	.cube {
		transition: transform 0.5s;
	}

	.cube:hover {
		transform: rotateY(-45deg);
	}

	@media (prefers-reduced-motion: reduce) {
		.cube {
			transition: none;
		}
	}
	//Media query
	@media (max-width: 768px) {
		.scene {
			width: 75px;
			height: 75px;
			perspective: 600px;
			margin-left: 0px;
			margin-right: 73px;
		}
		.cube__face--front {
			transform: rotateY(0deg) translateZ(17px);
		}
		.cube__face--right {
			transform: rotateY(90deg) translateZ(37px);
		}
	}

</style>