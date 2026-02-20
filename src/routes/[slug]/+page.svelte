<script>
	import { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';

	import 'prism-themes/themes/prism-shades-of-purple.min.css';
	import Newsletter from '../../components/Newsletter.svelte';
	import Reactions from '../../components/Reactions.svelte';
	import LatestPosts from '../../components/LatestPosts.svelte';
	import { page } from '$app/stores';

	import { toc, createTocStore } from '@svelte-put/toc';
	import TableOfContents from './TableOfContents.svelte';
	import utterances, {injectScript}  from './loadUtterances'

	const tocStore = createTocStore();

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem} */
	$: json = data.json;

	export let commentsEl;
	$: issueNumber = json?.ghMetadata?.issueUrl?.split('/')?.pop()

	$: canonical =  json?.canonical ? json.canonical : SITE_URL + $page.url.pathname;

	$: image = json?.image || `https://og.tailgraph.com/og
															?fontFamily=Roboto
															&title=${encodeURIComponent(json?.title)}
															&titleTailwind=font-bold%20bg-transparent%20text-7xl
															&titleFontFamily=Poppins
															${json?.subtitle ? '&text='+ encodeURIComponent(json?.subtitle) : ''}
															&textTailwind=text-2xl%20mt-4
															&logoTailwind=h-8
															&bgUrl=https%3A%2F%2Fwallpaper.dog%2Flarge%2F20455104.jpg
															&footer=${encodeURIComponent(SITE_URL)}
															&footerTailwind=text-gray-400
															&containerTailwind=border-2%20border-gray-400%20bg-transparent%20p-4
															`.replace(/\s/g,'')

</script>

<svelte:head>
	<title>{json.title}</title>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	{#if json.subtitle}
		<meta property="subtitle" content={json.subtitle} />
	{/if}
	<meta name="Description" content={json.description || 'Ryan Scott blog'} />
	<meta property="og:description" content={json.description || 'Ryan Scott blog'} />
	{#if MY_TWITTER_HANDLE}
		<meta name="twitter:card" content={'summary'} />
		<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	{/if}
	<meta name="twitter:title" content={json.title} />
	<meta name="twitter:description" content={json.description} />
	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<TableOfContents {tocStore} />

<article use:toc={{ store: tocStore, anchor: false, observe: true, selector: ':where(h1, h2, h3)' }} class="items-start justify-center w-full mx-auto mt-16 mb-32 prose swyxcontent dark:prose-invert max-w-none">
	<h1 class="md:text-center mb-8 text-3xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#ededed] md:text-5xl ">
		{json.title}
	</h1>
	<div
		class="flex justify-between w-full mt-2 sm:items-start md:flex-row md:items-center"
	>
		<span class="flex items-center text-sm text-[#737373] dark:text-[#999999] gap-2">
			{#if json.authorAvatarUrl}
				<img src={json.authorAvatarUrl} class="w-6 m-0" alt="Author avatar" />
			{/if}
			{json.author}</span>
		<span class="flex items-center text-sm text-[#a3a3a3] dark:text-[#525252]">
			<a href={json.ghMetadata.issueUrl} rel="external noreferrer" class="no-underline" target="_blank">
				{new Date(json.date).toISOString().slice(0, 10)}
			</a>
		</span>
	</div>
	<div
		class="-mx-4 my-2 flex h-px w-[100vw] bg-[#e5e5e5] dark:bg-[#1f1f1f] sm:mx-0 sm:w-full"
	/>
	{@html json.content}
</article>

<div class="max-w-2xl mx-auto">
	{#if json?.tags?.length}
		<p class="text-[#a3a3a3] dark:text-[#525252] flex-auto mb-4 italic text-sm">
			Tagged in:
			{#each json.tags as tag}
				<span class="px-1">
					<a href={`/blog?filter=hashtag-${tag}`} class="link-underline">#{tag}</a>
				</span>
			{/each}
		</p>
	{/if}
	<div class="max-w-full p-4 mb-12 prose border-t border-b border-[#e5e5e5] dark:border-[#1f1f1f] dark:prose-invert">
		{#if json.ghMetadata.reactions.total_count > 0}
			Reactions: <Reactions
				issueUrl={json.ghMetadata.issueUrl}
				reactions={json.ghMetadata.reactions}
			/>
		{:else}
			<a href={json.ghMetadata.issueUrl} class="link-underline">Leave a reaction </a>
			if you liked this post!
		{/if}
	</div>
	<div class="mb-8 text-[#1a1a1a] dark:text-[#ededed]" bind:this={commentsEl} use:utterances={{number: issueNumber}}>
		Loading comments...
		<button class="my-4 border border-[#e5e5e5] dark:border-[#1f1f1f] px-4 py-2 text-sm text-[#1a1a1a] dark:text-[#ededed] rounded transition-colors hover:bg-[#1a1a1a] hover:text-[#ededed] dark:hover:bg-[#ededed] dark:hover:text-[#0a0a0a]"
			on:click={() => injectScript(commentsEl, issueNumber)}
			on:mouseover={() => injectScript(commentsEl, issueNumber)}
		>Load comments</button>
	</div>

	<Newsletter />
	<LatestPosts items={data.list} />
</div>

<style>
		.swyxcontent {
			--gap: clamp(1rem, 6vw, 3rem);
			--full: minmax(var(--gap), 1fr);
			--content: 65ch;
			--popout: minmax(0, 2rem);
			--feature: minmax(0, 5rem);

			display: grid;
			grid-template-columns:
				[full-start] var(--full)
				[feature-start] 0rem
				[popout-start] 0rem
				[content-start] var(--content) [content-end]
				[popout-end] 0rem
				[feature-end] 0rem
				var(--full) [full-end]
		}

		@media (min-width: 768px) {
			.swyxcontent {
				grid-template-columns:
					[full-start] var(--full)
					[feature-start] var(--feature)
					[popout-start] var(--popout)
					[content-start] var(--content) [content-end]
					var(--popout) [popout-end]
					var(--feature) [feature-end]
					var(--full) [full-end];
			}
		}

	:global(.swyxcontent > *) {
		grid-column: content;
	}

	article :global(pre) {
		grid-column: feature;
		margin-left: -1rem;
		margin-right: -1rem;
	}

	article :global(summary > pre) {
		max-width: 90vw;
	}

	article :global(.popout) {
		grid-column: popout;
	}
	article :global(.feature) {
		grid-column: feature;
	}
	article :global(.full) {
		grid-column: full;
		width: 100%;
	}

	article :global(.admonition) {
		@apply p-8 border border-[#e5e5e5] dark:border-[#1f1f1f];
	}

	article :global(.token.inserted) {
		background: #00ff0044;
	}

	article :global(.token.deleted) {
		background: #ff000d44;
	}
</style>
