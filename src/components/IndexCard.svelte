<script>
	export let href = '#';
	/** @type {import('$lib/types').ContentItem} */
	export let item = undefined;
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata = null;
	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	class="w-full text-[#1a1a1a] hover:text-[#1a1a1a] dark:text-[#ededed] dark:hover:text-[#ffffff] hover:no-underline"
	{href}
	><div class="w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="flex-auto w-full mb-2 text-lg font-bold md:text-xl">
				{title}
			</h4>
		</div>
		<p class="text-[#737373] mb-2 break-all sm:break-words dark:text-[#999999]">
			<slot />
		</p>
		<div class="flex justify-between items-center gap-1 text-left text-[#a3a3a3] dark:text-[#525252] sm:justify-start sm:flex-row sm:gap-4 md:mb-0 md:text-sm">
			<p>{stringData}</p>
			{#if item?.readingTime}
				<p class="hidden sm:inline-block">{item?.readingTime}</p>
			{/if}
			<span class="px-4 max-h-6 flex items-center capitalize border border-[#e5e5e5] dark:border-[#1f1f1f] rounded text-xs">
				{item?.category || 'note'}
			</span>
			{#if item?.tags?.length}
			<div class="hidden md:block flex-1">
				{#each item.tags as tag}
					<span class="px-1">
						#{tag}
					</span>
				{/each}
			</div>
			{/if}
			{#if ghMetadata && ghMetadata.reactions.total_count}
				<p>{ghMetadata.reactions.total_count} reactions</p>
			{/if}
		</div>
	</div></a
>
