<script>
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	const defaultValue = true;
	const initialValue = browser
		? window.localStorage.getItem('isNewsletterOpen') ?? defaultValue
		: defaultValue;

	const isNewsletterOpen = writable(!!initialValue);

	isNewsletterOpen.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('isNewsletterOpen', value ? 'true' : 'false');
		}
	});

	function toggleNewsletter() {
		$isNewsletterOpen = !$isNewsletterOpen;
	}
</script>

<section class="mb-16 w-full" id="newsletter">
	<div
		class="my-4 w-full border border-[#e5e5e5] dark:border-[#1f1f1f] p-6 sm:rounded"
	>
		<div class="flex items-center justify-between space-x-4 text-[#1a1a1a] dark:text-[#ededed]">
			<p class="text-lg font-bold">Subscribe to the newsletter</p>

			<button
				aria-label="Toggle Newsletter CTA"
				class="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] dark:border-[#1f1f1f] transition-all hover:border-[#1a1a1a] dark:hover:border-[#ededed]"
				on:click={toggleNewsletter}
			>
				{#if isNewsletterOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
		{#if isNewsletterOpen}
			<p class="my-1 text-[#737373] dark:text-[#999999]">
				Get emails from me about <span class="font-semibold text-[#1a1a1a] dark:text-[#ededed]"
					>faith, marketing, and building with purpose</span
				>.
			</p>

			<form
				class="relative my-4"
				action="https://buttondown.email/api/emails/embed-subscribe/ryanscott"
				method="post"
				target="popupwindow"
				on:submit={() => toggleNewsletter() && window.open('https://buttondown.email/ryanscott', 'popupwindow')}
			>
				<input
					type="email"
					id="bd-email"
					name="email"
					aria-label="Email for newsletter"
					placeholder="you@example.com"
					autocomplete="email"
					required={true}
					class="mt-1 block w-full rounded-md border border-[#e5e5e5] dark:border-[#1f1f1f] bg-transparent px-4 py-2 pr-32 text-[#1a1a1a] dark:text-[#ededed] focus:border-[#737373] focus:ring-0 focus:outline-none"
				/><button
					class="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded border border-[#e5e5e5] dark:border-[#1f1f1f] px-4 pt-1 font-medium text-[#1a1a1a] dark:text-[#ededed] transition-colors hover:bg-[#1a1a1a] hover:text-[#ededed] dark:hover:bg-[#ededed] dark:hover:text-[#0a0a0a]"
					type="submit">Subscribe</button
				>
			</form>
		{/if}
	</div>
</section>
