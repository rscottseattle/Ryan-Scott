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
	<div class="flex w-full max-w-2xl gap-16 px-4 pb-16 sm:px-8">
		<div class="flex flex-col space-y-3">
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="/">Home</a>
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="/about">About</a>
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="/blog">Blog</a>
		</div>
		<div class="flex flex-col space-y-3">
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="/#newsletter">Newsletter</a>
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="/rss.xml" rel="external">RSS</a>
			<a class="link-underline text-sm text-[#737373] dark:text-[#999999] transition-colors hover:text-[#1a1a1a] dark:hover:text-[#ffffff]" href="https://github.com/rscottseattle" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
	</div>
</footer>
