<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="hidden rounded-lg p-1 text-sm text-[#737373] transition-colors hover:text-[#1a1a1a] dark:text-[#999999] dark:hover:text-[#ffffff] sm:px-3 sm:py-2 md:inline-block"
	class:active={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>

<style>
	.active {
		color: #1a1a1a;
	}
	:global(.dark) .active {
		color: #ededed;
	}
</style>
