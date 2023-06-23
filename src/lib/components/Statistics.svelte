<script>
import LineDivider from './LineDivider.svelte';
import StatisticItem from './StatisticItem.svelte';
</script>

<div>
  <h2>Advanced Statistics</h2>
  <p
    >Track how your links are performing across the web with our advanced
    statistics dashboard.</p
  >
  <StatisticItem />
  <LineDivider />
  <StatisticItem />
  <LineDivider />
  <StatisticItem />
</div>

<style>
div {
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: var(--color-neutral-very-dark-blue);
  margin-bottom: 1.5rem;
}

p {
  color: var(--color-neutral-grayish-violet);
  line-height: 2rem;
}
</style>
