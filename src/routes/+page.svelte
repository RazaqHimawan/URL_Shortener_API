<script>
import Card from '$lib/components/Card.svelte';
import Shorten from '$lib/components/Shorten.svelte';
import StatisticItem from '$lib/components/StatisticItem.svelte';
import Statistics from '$lib/components/Statistics.svelte';
</script>

<div class="shorten">
  <Card>
    <Shorten />
  </Card>
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
  margin: 6.5rem 2rem;
}
</style>
