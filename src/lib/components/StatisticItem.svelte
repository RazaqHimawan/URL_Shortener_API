<script lang="ts">
import Card from './Card.svelte';
export let image: string;
export let title: string;
export let desc: string;
</script>

<div class="item">
  <div class="icon">
    <img
      src={image}
      alt=""
    />
  </div>

  <div class="contents">
    <Card>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Card>
  </div>

  <div class="contents-dt">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
</div>

<style>
.item {
  position: relative;
  border-radius: 10px;
  background-color: #fff;
}
.icon {
  display: flex;
  background-color: var(--color-primary-dark-violet);
  width: fit-content;
  padding: 1.5rem;
  border-radius: 50%;

  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
}

.icon img {
  width: 48px;
  height: 48px;
}

.contents {
  margin-top: 6rem;
}

.contents-dt {
  display: none;
}

h3 {
  margin-top: 5rem;
  color: var(--color-neutral-very-dark-blue);
}

p {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  color: var(--color-neutral-grayish-violet);
  line-height: 1.8;
}

@media (min-width: 1000px) {
  .item {
    width: 350px;
    height: 400px;
  }

  .icon {
    left: 6rem;
  }

  .contents {
    display: none;
  }

  .contents-dt {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0.5rem 3rem;
  }
}
</style>
