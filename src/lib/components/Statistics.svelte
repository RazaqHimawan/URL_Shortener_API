<script>
import LineDivider from './LineDivider.svelte';
import StatisticItem from './StatisticItem.svelte';
</script>

<div>
  <div class="text">
    <h2>Advanced Statistics</h2>
    <p
      >Track how your links are performing across the web with our advanced
      statistics dashboard.</p
    >
  </div>
  <div class="item">
    <StatisticItem
      image="images/icon-brand-recognition.svg"
      title="Brand Recognition"
      desc="Boost your brand recognition with each click. Generic links don't mean
    a thing. Branded links help instil confidence in your content."
    />
    <LineDivider />
    <StatisticItem
      image="images/icon-detailed-records.svg"
      title="Detailed Records"
      desc="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    />
    <LineDivider />
    <StatisticItem
      image="images/icon-fully-customizable.svg"
      title="Fully Customizable"
      desc="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    />
  </div>
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

@media (min-width: 1000px) {
  .text {
    width: 500px;
    margin: auto;
  }

  .item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    margin-inline: 5rem;
    margin-top: 6rem;
  }
}
</style>
