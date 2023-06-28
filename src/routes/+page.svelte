<script>
// @ts-nocheck

import Card from '$lib/components/Card.svelte';
import Shorten from '$lib/components/Shorten.svelte';
import ShortenedLink from '$lib/components/ShortenedLink.svelte';
import Statistics from '$lib/components/Statistics.svelte';

import { links } from '$lib/stores/links';
</script>

<div
  id="shorten"
  class="shorten"
>
  <Card>
    <Shorten />
  </Card>
  {#each $links as link}
    <ShortenedLink
      value={link?.original_link}
      result={link?.short_link}
    />
  {/each}
</div>

<div class="statistics">
  <Statistics />
</div>

<style>
.shorten {
  position: relative;
  width: 100%;
  top: -5.5rem;
}

.statistics {
  margin-inline: 2rem;
  padding-bottom: 6.5rem;
}
</style>
