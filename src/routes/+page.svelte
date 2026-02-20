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
				<p class="mb-4">A few books that have shaped my thinking:</p>
				<ul class="space-y-3">
					<li>
						<a href="https://www.amazon.com/Power-Habit-What-Life-Business/dp/B0FD49GYHN/" target="_blank" rel="noopener noreferrer" class="link-underline text-[#1a1a1a] dark:text-[#ededed]">The Power of Habit</a>
						<span class="text-sm"> — Charles Duhigg</span>
					</li>
					<li>
						<a href="https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH/" target="_blank" rel="noopener noreferrer" class="link-underline text-[#1a1a1a] dark:text-[#ededed]">Atomic Habits</a>
						<span class="text-sm"> — James Clear</span>
					</li>
					<li>
						<a href="https://www.amazon.com/Fourth-Preacher-Doug-Ellingsworth-ebook/dp/B0D82D4JB7" target="_blank" rel="noopener noreferrer" class="link-underline text-[#1a1a1a] dark:text-[#ededed]">The Fourth Preacher</a>
						<span class="text-sm"> — Doug Ellingsworth</span>
					</li>
					<li>
						<a href="https://www.amazon.com/Shechem-covenant-story-Abraham-Isaac-ebook/dp/B0CQTDLQPB" target="_blank" rel="noopener noreferrer" class="link-underline text-[#1a1a1a] dark:text-[#ededed]">Shechem: A Covenant Story of Abraham and Isaac</a>
						<span class="text-sm"> — Doug Ellingsworth</span>
					</li>
					<li>
						<a href="https://www.amazon.com/History-Development-Doctrine-Trinity/dp/0578359464" target="_blank" rel="noopener noreferrer" class="link-underline text-[#1a1a1a] dark:text-[#ededed]">The History and Development of the Doctrine of the Trinity</a>
						<span class="text-sm"> — Doug Ellingsworth</span>
					</li>
				</ul>
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				What I'm Thinking About
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed">
				{#if items?.length}
					<ul class="space-y-3">
						{#each items.slice(0, 5) as item}
							<li class="flex justify-between items-baseline gap-4">
								<a href={item.slug} class="link-underline text-[#1a1a1a] dark:text-[#ededed]">{item.title}</a>
								<span class="text-xs text-[#a3a3a3] dark:text-[#525252] whitespace-nowrap">{new Date(item.date).toISOString().slice(0, 10)}</span>
							</li>
						{/each}
					</ul>
					<a href="/blog" class="inline-block mt-4 text-sm link-underline">See all posts</a>
				{:else}
					<p>New writing coming soon. Stay tuned.</p>
				{/if}
			</div>
		</details>

		<details class="group border-b border-[#e5e5e5] dark:border-[#1f1f1f]">
			<summary class="flex cursor-pointer items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] list-none select-none">
				More About Me
				<span class="text-[#a3a3a3] dark:text-[#525252] text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
			</summary>
			<div class="accordion-content pb-8 text-[#737373] dark:text-[#999999] leading-relaxed space-y-6">
				<p>I was born and raised in Holdenville, Oklahoma — a small town that teaches you big things about people. From there, I went to Jackson College of Ministries in Jackson, Mississippi, where I studied the Word and figured out what I wanted to do with my life. After graduating, I taught at Texas Bible College, then my wife and I did the thing everyone tells you is crazy: we planted a church in Seattle, Washington.</p>
				<p>Thirteen years later, I can confirm — it was crazy. And worth every minute.</p>

				<h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] pt-2">I'm Famous</h4>
				<p>I'm known as <a href="https://www.brittaniscott.com/" target="_blank" rel="noopener noreferrer" class="link-underline">Brittani Scott</a>'s husband.</p>

				<h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] pt-2">My Family</h4>
				<p>I'm a husband to <a href="https://www.brittaniscott.com/" target="_blank" rel="noopener noreferrer" class="link-underline">Brittani Scott</a> — singer, songwriter, recording artist, and worship leader. She's the talented one. I just married well.</p>
				<p>We have two little girls: Asha and Yerrin. They are my pride and joy and the reason I drink coffee.</p>

				<h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] pt-2">Motivation</h4>
				<p>I believe every minister on the planet is called to reach the world. Not just their corner of it — the whole thing.</p>
				<p>Church planting should be at the heart of that mission. Going to unchurched areas. Bringing the gospel to places that don't have it yet. That's the work.</p>
				<p>I'm obsessed with the <em>methods</em> — the strategies, the systems, the creative ways we plant the seed of the gospel. Technology. One-on-one conversations. Home Bible studies. Whatever it takes to get the message where it needs to go.</p>
				<p>The tools change. The mission doesn't.</p>

				<h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] pt-2">Goals</h4>
				<p>Life has us in South Dakota right now, helping with ministry here as we transition away from Seattle. We're not entirely sure where the road takes us next — and honestly, that's kind of exciting.</p>
				<p>What I do know: we want to pastor a church again. And wherever we land, we'll be planting works in unreached communities within reach. That's non-negotiable.</p>

				<h4 class="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#ededed] pt-2">What I Do for Fun</h4>
				<p>I'm a technology nerd. Gadgets, entrepreneurship, the cutting edge of AI and its impact on our work — that's my version of relaxation. I love learning about marketing strategy the way some people love fantasy football.</p>
				<p>I also scuba dive. I'm a Kansas City Chiefs fan. I collect journals (yes, physical ones — there's something about a blank page).</p>
				<p>Teaching is genuinely a hobby for me. I love the creative work of publishing — writing, video, audio. I love the whole process of making something and putting it into the world.</p>
				<p>I love music of all kinds. And as much as time allows, I like to golf. I didn't say I was <em>good</em> at it.</p>
			</div>
		</details>
	</section>

	<!-- Latest Posts -->
	<LatestPosts {items} />

	<Newsletter />
</div>
