<script>
import Card from './Card.svelte';
</script>

<div class="item">
  <div class="icon">
    <img
      src="images/icon-brand-recognition.svg"
      alt=""
    />
  </div>

  <div class="contents">
    <Card>
      <h3>Brand Recognition</h3>
      <p
        >Boost your brand recognition with each click. Generic links don't mean
        a thing. Branded links help instil confidence in your content.</p
      >
    </Card>
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
</style>
