<script>
	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="ml-[-0.60rem] md:hidden">
	<button
		class="burger visible"
		aria-label="Toggle menu"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		{#if !isOpen}
			<svg
				class="absolute h-5 w-5 text-[#1a1a1a] dark:text-[#ededed]"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				><path
					d="M2.5 7.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M2.5 12.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		{:else}
			<svg
				class="absolute h-5 w-5 text-[#1a1a1a] dark:text-[#ededed]"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
				shape-rendering="geometricPrecision"
				data-hide="true"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg
			>
		{/if}
	</button>
	{#if isOpen}
		<ul
			class="menu absolute flex flex-col bg-[#f5f5f0] text-2xl uppercase dark:bg-[#0a0a0a]"
			class:menuRendered={isMenuRendered}
		>
			<li
				class="border-b border-[#e5e5e5] font-semibold text-[#1a1a1a] dark:border-[#1f1f1f] dark:text-[#ededed]"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/">Home</a
				>
			</li>
			<li
				class="border-b border-[#e5e5e5] font-semibold text-[#1a1a1a] dark:border-[#1f1f1f] dark:text-[#ededed]"
				style="transition-delay: 250ms;"
			>
				<a
					class="flex w-auto pb-4"
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/blog">Blog</a
				>
			</li>
			<li
				class="border-b border-[#e5e5e5] font-semibold text-[#1a1a1a] dark:border-[#1f1f1f] dark:text-[#ededed]"
				style="transition-delay: 350ms;"
			>
				<a
					class="flex w-auto pb-4"
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/about">About</a
				>
			</li>
		</ul>
	{/if}
</div>

<style lang="postcss">
	.burger {
		transition: opacity 300ms ease;
		border: 0;
		background: transparent;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu {
		padding: 0 28px 0 4px;
		margin: 0;
		padding-top: 24px;
		width: 100%;
		height: 100vh;
		z-index: 1000;
		opacity: 0;
		left: 0;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu li {
		transform: translateX(-16px);
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
		width: 0px;
		white-space: nowrap;
	}

	.menuRendered {
		opacity: 1;
	}

	.menuRendered li {
		@apply w-full;
		transform: translateX(0);
		opacity: 1;
	}

	.menu > * + * {
		margin-top: 24px;
	}
</style>
