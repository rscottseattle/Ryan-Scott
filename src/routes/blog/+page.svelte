<script>
	import { queryParam, ssp } from 'sveltekit-search-params';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';

	import IndexCard from '../../components/IndexCard.svelte';
	import MostPopular from './MostPopular.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;

	/** @type import('svelte/store').Writable<String[] | null> */
	let selectedCategories = queryParam(
		'show',
		{
			encode: (arr) => arr?.toString(),
			decode: (str) => str?.split(',')?.filter((e) => e) ?? []
		},
		{ debounceHistory: 500 }
	);
	let search = queryParam('filter', ssp.string(), {
		debounceHistory: 500
	});

	let inputEl;

	function focusSearch(e) {
		if (e.key === '/' && inputEl) inputEl.select();
	}

	let isTruncated = items?.length > 20;

	let loaded = false;
	const filterCategories = async (_items, _, s) => {
		if (!$selectedCategories?.length) return _items;
		return _items
			.filter((item) => {
				return $selectedCategories
					.map((element) => {
						return element.toLowerCase();
					})
					.includes(item.category.toLowerCase());
			})
			.filter((item) => item.toString().toLowerCase().includes(s));
	};
	$: searchFn = filterCategories;
	function loadsearchFn() {
		if (loaded) return;
		import('./fuzzySearch').then((fuzzy) => {
			searchFn = fuzzy.fuzzySearch;
			loaded = true;
		});
	}
	if ($search) loadsearchFn()
	/** @type import('$lib/types').ContentItem[]  */
	let list;
	$: searchFn(items, $selectedCategories, $search).then(_items => list = _items);
</script>

<svelte:head>
	<title>{SITE_TITLE} Blog Index</title>
	<meta name="description" content={`Latest ${SITE_TITLE} posts`} />
</svelte:head>

<svelte:window on:keyup={focusSearch} />

<section class="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-4 sm:px-8">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#ededed] md:text-5xl">
		Blog
	</h1>
	<p class="mb-4 text-[#737373] dark:text-[#999999]">
		Thoughts on faith, marketing, AI, and building with purpose. {items.length} articles and counting.
	</p>
	<div class="relative mb-4 w-full">
		<input
			aria-label="Search articles"
			type="text"
			bind:value={$search}
			bind:this={inputEl}
			on:focus={loadsearchFn}
			placeholder="Hit / to search"
			class="block w-full rounded-md border border-[#e5e5e5] dark:border-[#1f1f1f] bg-transparent px-4 py-2 text-[#1a1a1a] dark:text-[#ededed] focus:border-[#737373] focus:ring-0 focus:outline-none"
		/><svg
			class="absolute right-3 top-3 h-5 w-5 text-[#a3a3a3] dark:text-[#525252]"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</div>

	{#if POST_CATEGORIES.length > 1}
		<div class="mt-2 mb-8 flex items-center">
			<div class="mr-2 text-[#737373] dark:text-[#999999] text-sm">Filter:</div>
			<div class="grid grid-cols-2 rounded-md sm:grid-cols-2">
				{#each POST_CATEGORIES as availableCategory}
					<div>
						<input
							id="category-{availableCategory}"
							class="peer sr-only"
							type="checkbox"
							bind:group={$selectedCategories}
							value={availableCategory}
						/>
						<label
							for="category-{availableCategory}"
							class="inline-flex w-full cursor-pointer items-center justify-between border border-[#e5e5e5] dark:border-[#1f1f1f] px-4 py-2 text-sm text-[#737373] dark:text-[#999999] hover:text-[#1a1a1a] dark:hover:text-[#ededed] peer-checked:border-[#1a1a1a] peer-checked:text-[#1a1a1a] dark:peer-checked:border-[#ededed] dark:peer-checked:text-[#ededed] transition-colors"
						>
							{availableCategory}
						</label>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if !$search && !$selectedCategories?.length}
		<MostPopular />
		<h3 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#ededed] md:text-4xl">
			All Posts
		</h3>
	{/if}

	{#if list?.length}
		<ul class="">
			{#each list as item}
				<li class="mb-8 text-lg">
					<IndexCard
						href={item.slug}
						title={item.title}
						stringData={new Date(item.date).toISOString().slice(0, 10)}
						ghMetadata={item.ghMetadata}
						{item}
					>
						{#if item.highlightedResults}
							<span class="italic">
								{@html item.highlightedResults}
							</span>
						{:else}
							{item.description}
						{/if}
					</IndexCard>
				</li>
			{/each}
		</ul>
		{#if isTruncated}
			<div class="flex justify-center">
				<button
					on:click={() => (isTruncated = false)}
					class="inline-block border border-[#e5e5e5] dark:border-[#1f1f1f] rounded px-6 py-3 text-sm text-[#1a1a1a] dark:text-[#ededed] transition-colors hover:bg-[#1a1a1a] hover:text-[#ededed] dark:hover:bg-[#ededed] dark:hover:text-[#0a0a0a]"
				>
					Load More Posts
				</button>
			</div>
		{/if}
	{:else if $search}
		<div class="text-[#737373] dark:text-[#999999]">
			No posts found for
			<code class="text-[#1a1a1a] dark:text-[#ededed]">{$search}</code>.
		</div>
		<button class="mt-2 border border-[#e5e5e5] dark:border-[#1f1f1f] px-4 py-2 text-sm transition-colors hover:bg-[#1a1a1a] hover:text-[#ededed]" on:click={() => ($search = '')}>Clear search</button>
	{:else}
		<div class="text-[#737373] dark:text-[#999999]">No blogposts found.</div>
	{/if}
</section>
