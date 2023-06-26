<script>
import Card from './Card.svelte';
</script>

<div class="container">
  <Card>
    <div class="contents">
      <input
        type="text"
        value="https://www.frontendmentor.io"
        readonly
      />
      <a href="/">https://rel.ink/l4KLyc</a>
      <button>Copy</button>
    </div>
  </Card>
</div>

<style>
.container {
  margin-block: 2rem;
}
.contents {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1.5rem;
}

input,
a {
  padding-bottom: 0.5rem;
}

input,
button {
  border: none;
}

input {
  outline: none;
  font-size: 1.2rem;
  color: var(--color-neutral-very-dark-blue);
  border-bottom: 1px solid var(--color-neutral-gray);
}

a {
  color: var(--color-primary-cyan);
  margin-block: 0.5rem;
  width: fit-content;
  font-size: 1.2rem;
  text-decoration: none;
}

button {
  cursor: pointer;
  background-color: var(--color-primary-cyan);
  color: #fff;
  font-weight: 700;
  font-size: var(--font-size-body);
  border-radius: 10px;
  padding-block: 0.5rem;
}
</style>
