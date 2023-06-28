<script lang="ts">
import { links } from '$lib/stores/links';

let link: string;
let errorMessage: string;

async function handleSubmit() {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const data = await res.json();
  links.set([...$links, data.result]);
}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    bind:value={link}
    placeholder="Shorten a link here..."
    required
  />
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
  <button>Shorten It!</button>
</form>

<style>
form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  background: url(images/bg-shorten-mobile.svg) var(--color-primary-dark-violet)
    no-repeat top right;
  background-size: 290px 150px;
}

input,
button {
  padding: 1rem;
  border-radius: 10px;
  border: none;
}

input {
  font-size: var(--font-size-body);
  font-weight: 700;
  color: var(--color-neutral-grayish-violet);
}

button {
  cursor: pointer;
  background-color: var(--color-primary-cyan);
  color: #fff;
  font-weight: 700;
  font-size: var(--font-size-body);
  margin-top: 1.2rem;
}

button:hover,
button:focus {
  color: var(--color-neutral-gray);
}

@media (min-width: 1000px) {
  form {
    background-image: url(images/bg-shorten-desktop.svg);
    background-size: 100% 100%;
  }
}
</style>
