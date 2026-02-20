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

<div class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto sm:px-8">

	<!-- Hero -->
	<div class="w-full pt-16 pb-20 sm:pt-24 sm:pb-28">
		<h1 class="mb-4 text-5xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#ededed] md:text-7xl">
			Ryan Scott
		</h1>
		<p class="mb-8 text-lg text-[#737373] dark:text-[#999999] md:text-xl">
			Preacher. Author. Consultant.
		</p>
		<p class="text-[#737373] dark:text-[#999999] max-w-md leading-relaxed">
			I write about faith, marketing, and the intersection of technology with purpose-driven work.
			Based in Seattle, building things that matter.
		</p>
	</div>

	<!-- What I'm Working On -->
	<section class="w-full mb-20">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#ededed] md:text-3xl">
			What I'm Working On
		</h3>
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="rounded-lg border border-[#e5e5e5] dark:border-[#1f1f1f] p-5">
				<h4 class="font-semibold text-[#1a1a1a] dark:text-[#ededed] mb-1">Apostolics at Sea</h4>
				<p class="text-sm text-[#737373] dark:text-[#999999]">Chief Marketing Officer</p>
			</div>
			<div class="rounded-lg border border-[#e5e5e5] dark:border-[#1f1f1f] p-5">
				<h4 class="font-semibold text-[#1a1a1a] dark:text-[#ededed] mb-1">KonceptGenesis</h4>
				<p class="text-sm text-[#737373] dark:text-[#999999]">Marketing & AI Agency</p>
			</div>
			<div class="rounded-lg border border-[#e5e5e5] dark:border-[#1f1f1f] p-5">
				<h4 class="font-semibold text-[#1a1a1a] dark:text-[#ededed] mb-1">Published Author</h4>
				<p class="text-sm text-[#737373] dark:text-[#999999]">Book title coming soon</p>
			</div>
			<div class="rounded-lg border border-[#e5e5e5] dark:border-[#1f1f1f] p-5">
				<h4 class="font-semibold text-[#1a1a1a] dark:text-[#ededed] mb-1">Preaching & Ministry</h4>
				<p class="text-sm text-[#737373] dark:text-[#999999]">Faith-driven leadership</p>
			</div>
		</div>
	</section>

	<!-- Expandable Sections -->
	<section class="w-full mb-20">
		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				Ministry & Speaking
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				<p class="mb-3">Faith is at the center of everything I do. I preach and teach regularly, investing in the next generation of ministry leaders.</p>
				<p>If you're looking for a speaker for your event, conference, or church — let's connect.</p>
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				Want to Collaborate?
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				<p class="mb-3">I'm always open to interesting projects at the intersection of faith, marketing, and technology.</p>
				<p>Consulting on AI and marketing strategy, speaking engagements, content partnerships, and ministry projects.</p>
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				Favorite Books & Resources
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				<p>A few books and resources that have shaped my thinking — coming soon.</p>
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				What I'm Writing
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				<p class="mb-3">I write about faith, marketing, AI, and building with purpose. Check out the latest on the <a href="/blog" class="link-underline">blog</a>.</p>
				<p>I'm also working on a book — more details coming soon.</p>
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				More About Me
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				<p class="mb-3">Based in Seattle. I'm a preacher, author, and consultant who believes technology should serve people, not the other way around.</p>
				<p>When I'm not working, you'll find me spending time with family, reading, or exploring the Pacific Northwest.</p>
			</div>
		</details>
	</section>

	<!-- Latest Posts -->
	<LatestPosts {items} />

	<Newsletter />
</div>
