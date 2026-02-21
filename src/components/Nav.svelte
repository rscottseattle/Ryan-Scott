<script>
	import MobileMenu from './MobileMenu.svelte';
	import NavLink from './NavLink.svelte';
	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<nav
	class="relative mx-auto flex w-full max-w-2xl items-center justify-between
	bg-[#f5f5f0] bg-opacity-60 py-8 text-[#1a1a1a] dark:bg-[#0a0a0a]
	dark:text-[#ededed] sm:pb-16"
>
	<a href="#skip" class="skip-nav">Skip to content</a>
	<div></div>
	<div class="flex items-center">
		<button
			aria-label="Toggle Dark Mode"
			class="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] dark:border-[#1f1f1f]
			transition-all hover:border-[#1a1a1a] dark:hover:border-[#ededed]"
			on:click={toggleDarkMode}
		>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="h-4 w-4 text-[#999999]"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="h-4 w-4 text-[#737373]"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style>
	.skip-nav {
		position: absolute;
		left: -25%;
		top: -2rem;
		--tw-translate-y: -3rem;
		padding: 0.75rem 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
	}
</style>
