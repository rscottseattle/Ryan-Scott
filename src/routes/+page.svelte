<script>
	import Newsletter from '../components/Newsletter.svelte';
	import LatestPosts from '../components/LatestPosts.svelte';
	import {
		SITE_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';


	/** @type {import('./$types').PageData} */
	export let data;
	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	{#if DEFAULT_OG_IMAGE}
		<meta property="og:image" content={DEFAULT_OG_IMAGE} />
		<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	{/if}
	{#if MY_TWITTER_HANDLE}
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	{/if}
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<div
	class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8"
>
	<!-- Hero Section -->
	<div class="w-full py-12 sm:py-16">
		<h1 class="mb-3 text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
			Ryan Scott
		</h1>
		<h2 class="mb-6 text-xl text-gray-500 dark:text-gray-400 md:text-2xl">
			Preacher. Author. Consultant.
		</h2>
		<p class="mb-8 text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
			I write about faith, marketing, and the intersection of technology with purpose-driven work.
			Based in Seattle, building things that matter.
		</p>
		<div class="flex items-center space-x-5">
			<a href="https://github.com/rscottseattle" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white no-underline hover:no-underline" aria-label="GitHub">
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
					<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
				</svg>
			</a>
			<a href="/blog" class="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white no-underline hover:no-underline" aria-label="Blog">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
				</svg>
			</a>
			<a href="mailto:hello@ryanscott.dev" class="text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white no-underline hover:no-underline" aria-label="Email">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			</a>
		</div>
	</div>

	<!-- What I'm Working On -->
	<section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
			What I'm Working On
		</h3>
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="rounded-lg border border-gray-200 dark:border-gray-700 p-5">
				<h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">Apostolics at Sea</h4>
				<p class="text-sm text-gray-500 dark:text-gray-400">Chief Marketing Officer</p>
			</div>
			<div class="rounded-lg border border-gray-200 dark:border-gray-700 p-5">
				<h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">KonceptGenesis</h4>
				<p class="text-sm text-gray-500 dark:text-gray-400">Marketing & AI Agency</p>
			</div>
			<div class="rounded-lg border border-gray-200 dark:border-gray-700 p-5">
				<h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">Published Author</h4>
				<p class="text-sm text-gray-500 dark:text-gray-400">Book title coming soon</p>
			</div>
			<div class="rounded-lg border border-gray-200 dark:border-gray-700 p-5">
				<h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">Preaching & Ministry</h4>
				<p class="text-sm text-gray-500 dark:text-gray-400">Faith-driven leadership</p>
			</div>
		</div>
	</section>

	<!-- Expandable Sections -->
	<section class="w-full mb-16 space-y-4">
		<details class="group border-0 border-b border-gray-200 dark:border-gray-700 p-0">
			<summary class="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 list-none">
				<span class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 text-gray-400 dark:text-gray-500 text-xs group-open:rotate-45 transition-transform">+</span>
				Ministry & Speaking
			</summary>
			<div class="pb-6 pl-9 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p class="mb-3">Faith is at the center of everything I do. I preach and teach regularly, investing in the next generation of ministry leaders.</p>
				<p>If you're looking for a speaker for your event, conference, or church — let's connect.</p>
			</div>
		</details>

		<details class="group border-0 border-b border-gray-200 dark:border-gray-700 p-0">
			<summary class="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 list-none">
				<span class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 text-gray-400 dark:text-gray-500 text-xs group-open:rotate-45 transition-transform">+</span>
				Want to Collaborate?
			</summary>
			<div class="pb-6 pl-9 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p class="mb-3">I'm always open to interesting projects at the intersection of faith, marketing, and technology.</p>
				<ul class="list-disc pl-5 space-y-1">
					<li>Consulting on AI and marketing strategy</li>
					<li>Speaking engagements</li>
					<li>Content partnerships</li>
					<li>Ministry projects</li>
				</ul>
			</div>
		</details>

		<details class="group border-0 border-b border-gray-200 dark:border-gray-700 p-0">
			<summary class="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 list-none">
				<span class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 text-gray-400 dark:text-gray-500 text-xs group-open:rotate-45 transition-transform">+</span>
				Favorite Books & Resources
			</summary>
			<div class="pb-6 pl-9 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p class="mb-3">A few books and resources that have shaped my thinking:</p>
				<ul class="list-disc pl-5 space-y-1">
					<li>Add your favorite books here</li>
					<li>Add podcasts, newsletters, or tools you recommend</li>
				</ul>
			</div>
		</details>

		<details class="group border-0 border-b border-gray-200 dark:border-gray-700 p-0">
			<summary class="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 list-none">
				<span class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 text-gray-400 dark:text-gray-500 text-xs group-open:rotate-45 transition-transform">+</span>
				What I'm Writing
			</summary>
			<div class="pb-6 pl-9 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p class="mb-3">I write about faith, marketing, AI, and building with purpose. Check out the latest on the <a href="/blog">blog</a>.</p>
				<p>I'm also working on a book — more details coming soon.</p>
			</div>
		</details>

		<details class="group border-0 border-b border-gray-200 dark:border-gray-700 p-0">
			<summary class="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 list-none">
				<span class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 text-gray-400 dark:text-gray-500 text-xs group-open:rotate-45 transition-transform">+</span>
				More About Me
			</summary>
			<div class="pb-6 pl-9 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p class="mb-3">Based in Seattle. I'm a preacher, author, and consultant who believes technology should serve people, not the other way around.</p>
				<p>When I'm not working, you'll find me spending time with family, reading, or exploring the Pacific Northwest.</p>
			</div>
		</details>
	</section>

	<!-- Latest Posts -->
	<LatestPosts {items} />

	<Newsletter />
</div>
