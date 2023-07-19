<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<div class="container">
		<div class="row">
			<div class="col">
				<div>
					<h3>Links</h3>
					<a href="https://www.linkedin.com/in/guido-bordonaro/" target="_blank"
						><Icon icon="mdi:linkedin" style="font-size: 1.2em" />
						<p>Linkedin</p></a
					>
					<a href="https://github.com/gubo97000" target="_blank">
						<Icon icon="mdi:github" style="font-size: 1.2em" />
						<p>GitHub</p></a
					>
				</div>
			</div>
			<!-- <div class="col">
				<div>
					<h3>SiteMap</h3>
					<p>Footer content</p>
				</div>
			</div> -->
			<div class="col">
				<div>
					<h3>Credits</h3>
					<p>Made with Svelte</p>
					<p>Inspired by <a href="https://joshcollinsworth.com/" target="_blank">Josh Collinsworth</a> beautiful website.
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 30px 0;
		margin-top: 30px;
	}
	.row {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.col {
		display: flex;
		flex-direction: row;
		// align-items: center;
		flex-grow: 1;

		&:not(:last-child) {
			border-right: 1px solid #eee;
		}

		div {
			margin: 0 auto;
		}
	}
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		p {
			margin: 0.5em 0.5em;
		}
	}
</style>
