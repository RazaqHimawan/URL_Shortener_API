<script lang="ts">
import { afterUpdate } from 'svelte';
import Card from './Card.svelte';

export let value: string;
export let result: string;

let resultEl: HTMLInputElement;
let copied = false;

async function copyToClipboard(link: string) {
  await navigator.clipboard.writeText(link);
  copied = true;
  afterUpdate(() => {
    setTimeout(() => {
      copied = false;
    }, 2000);
  });
}
</script>

<div class="container">
  <Card>
    <div class="contents">
      <input
        type="text"
        {value}
        readonly
      />
      <input
        bind:this={resultEl}
        class="result"
        type="text"
        value={result}
        readonly
      />
      {#if copied}
        <button
          class="disabled"
          disabled>Copied!</button
        >
      {:else}
        <button on:click={() => copyToClipboard(result)}>Copy</button>
      {/if}
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
.result {
  padding-bottom: 0.5rem;
  outline: none;
}

input,
button {
  border: none;
}

input:not(.result) {
  font-size: 1rem;
  color: var(--color-neutral-very-dark-blue);
  border-bottom: 1px solid var(--color-neutral-gray);
}

.result {
  color: var(--color-primary-cyan);
  margin-block: 0.5rem;
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

button:hover,
button:focus {
  color: var(--color-neutral-gray);
}

.disabled {
  background-color: var(--color-primary-dark-violet);
}
</style>
