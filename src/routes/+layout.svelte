<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import { SITE_TITLE } from '$lib/siteConfig';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex flex-col justify-center bg-[#f5f5f0] px-4 dark:bg-[#0a0a0a] sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center bg-[#f5f5f0] px-4 dark:bg-[#0a0a0a] sm:px-8">
	<slot />
</main>

<footer class="bg-[#f5f5f0] dark:bg-[#0a0a0a] mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
	<div class="mb-8 w-full border-t border-[#e5e5e5] dark:border-[#1f1f1f]" />
	<div class="px-4 pb-16 sm:px-8">
		<a href="/" class="hover:no-underline"><img src="/rs-logo.png" alt="RS" class="h-10 w-10 opacity-40 hover:opacity-70 transition-opacity" /></a>
	</div>
</footer>
